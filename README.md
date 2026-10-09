# MathChrono-Quiz

Application éducative de mathématiques pour les élèves du Bénin (6e à Terminale).
Quiz chronométrés, résumés de cours, évaluations formatives et sommatives.

## Contenu du dépôt

- `src/` : le code source et les données de l'application
  - `src/js/` : le code JavaScript, séparé en modules
  - `src/content/questions/` : les questions, un fichier par classe
  - `src/content/cours/` : les résumés de cours, un fichier par classe
  - `src/content/sommatif/` : les modules de problèmes (format examen)
- `static/` : les fichiers statiques (icônes, polices, etc.)
- `dist/` : la version prête à déployer (générée par `build.mjs`)
- `dist-mono/` : l'ancienne version en un seul fichier (archive)
- `tests/` : les tests automatiques
- `build.mjs` : script d'assemblage du projet
- `NOTE-IMPORTANTE.txt` : consignes internes

## Développement local

Prérequis : Node.js 18 ou plus récent.

```bash
# Construire la version finale
node build.mjs

# Tester en local
npx serve dist
# puis ouvrir http://localhost:3000
