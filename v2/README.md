# MathChrono-Quiz — projet fragmenté (v38)

Quiz chronométrés de mathématiques, de la 6e à la Terminale (programme du Bénin).
L'ancien fichier unique de 2 Mo est découpé en **sources lisibles** ; un script les assemble en un site léger dont les données (questions, résumés de cours, problèmes sommatifs) sont **téléchargées à la demande, classe par classe**, et gardées pour le **hors ligne**.

## Résultat
| | Avant | Maintenant |
|---|---|---|
| Premier chargement | 1 969 Ko (552 Ko compressés) | ≈ 390 Ko (≈ 110 Ko compressés) |
| Données d'une classe | tout, pour toutes les classes | 50 à 160 Ko, seulement la classe utilisée |
| Hors ligne | non | oui (classes déjà consultées) |
| Modifier une question | éditer un fichier de 2 Mo | éditer le fichier de la classe |

## Arborescence
```
src/
  index.html                 gabarit de la page
  css/app.css                styles
  js/core/                   code de l'application (chargé en entier, ≈ 300 Ko)
    10-data-index.js           liste des classes, thèmes et séries
    20-engine.js               quiz, chrono, historique, badges, classement, mode classe, RÉGLAGES (MQ_CFG)
    30-docx.js                 génération Word / PNG
    40-som-core.js             outils et modules sommatifs de base (3e, 4e)
    50-som-engine.js           composition des épreuves sommatives
    60-eval.js                 évaluations formatives à imprimer
    70-som-ui.js               interface sommative + vérification du code Parent / Enseignant
    75-lazy.js                 chargement à la demande des données
    80-access.js               codes élèves, appareil, page de paiement, verrou « Évaluation à imprimer »
    90-cours-ui.js             résumés de cours (affichage)
    95-nav.js                  bouton Retour
  content/                   LES CONTENUS (c'est ici qu'on travaille au quotidien)
    questions/<classe>.js      les thèmes et questions d'une classe
    cours/<classe>-N.js        les résumés de cours d'une classe
    sommatif/NN-….js           les problèmes sommatifs (blocs par classe)
static/                      service worker, manifeste, icône, en-têtes Cloudflare
build.mjs                    assemble src/ → dist/   (Node 18+, aucune dépendance)
tests/                       contrôles automatiques
dist/                        site prêt à déployer (reconstruit à chaque build)
dist-mono/index.html         ancienne forme « un seul fichier » (secours)
```

## Commandes
```
node build.mjs            # construit dist/ et affiche un rapport (classes, thèmes, questions, poids)
node build.mjs --mono     # construit dist-mono/index.html (fichier unique)
node --test tests/data.test.mjs   # contrôle les contenus (sans rien installer)
npm i -D playwright && npx playwright install chromium && node tests/e2e.mjs   # test en vrai navigateur
```
Le build **échoue avec un message clair** si une classe n'a pas de questions, si un thème est listé deux fois, si un fichier de cours mélange deux classes, etc.

## Déploiement (GitHub → Cloudflare Pages)
1. Déposer ce dossier dans le dépôt GitHub.
2. Cloudflare Pages → projet → *Build settings* :
   - **Build command** : `node build.mjs`
   - **Build output directory** : `dist`
   - Variable d'environnement (si besoin) : `NODE_VERSION = 20`
3. Chaque `git push` reconstruit et publie. Le numéro de version est calculé automatiquement : les téléphones reçoivent la nouvelle version, et un bandeau « Nouvelle version disponible » propose de recharger.

Sans build Cloudflare : envoyer simplement le contenu de `dist/` (ou, en secours, `dist-mono/index.html` renommé `index.html`).

## Travailler sur les contenus
- **Corriger / ajouter une question** : ouvrir `src/content/questions/<classe>.js`, trouver le thème, ajouter une ligne `{q:"…",c:["A","B","C","D"],a:1,exp:"…"}` (`a` = position de la bonne réponse, de 0 à 3). Puis `node --test tests/data.test.mjs`.
- **Ajouter un thème** : l'ajouter dans le fichier de la classe **et** dans la liste de la classe dans `src/js/core/10-data-index.js`.
- **Ajouter une classe** : créer son fichier de questions, la déclarer dans `10-data-index.js` (CLASSES et SERIES), ajouter son résumé dans `content/cours/`.
- **Réglages** (prix du code Parent / Enseignant, essai gratuit, blocage des appareils…) : bloc `window.MQ_CFG` dans `src/js/core/20-engine.js`.

## Sécurité : ce qui est protégé, et ce qui reste à faire
- Codes signés (ECDSA), liés à l'appareil, date de fin vérifiée : **inchangé**.
- La clé privée et le générateur de codes **ne sont pas dans ce dépôt** (ne jamais les y mettre ; `.gitignore` les exclut).
- **Limite actuelle** : les fichiers de données sont publics (quiconque connaît leur adresse peut les lire). La protection par code agit sur l'interface, comme avant.
- **Étape suivante (prévue)** : servir les données payantes via une fonction Cloudflare (`functions/api/…`) qui vérifie le code avant d'envoyer le fichier de la classe. Le découpage actuel est fait pour cela : un fichier = une classe, déjà isolé.
