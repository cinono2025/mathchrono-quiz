/* ===== Résumés de cours : liste, lecture, impression ===== */
(function(){
  var MQ = window.MQ_COURS || {};
  function data(cls, theme){ var c = MQ[cls]; return (c && c[theme]) || null; }
  function bankOf(){ return currentCycle === 2 ? THEMES_C2 : THEMES_C1; }
  function themesOf(cls){ return (CLASSES[cls] || []).filter(function(t){ return !!data(cls, t); }); }
  function label(t){ return String(t).replace(/^[\w]+ — /, '').replace(/^[36]e — /, ''); }
  function okT(cls, t){ return !window.MQ_ACCES || window.MQ_ACCES.canTheme(cls, t); }
  function isMemo(cls, t){ var d = data(cls, t); return !!(d && d.memo); }
  function attr(s){ return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }

  /* {a¦b} -> fraction à deux étages */
  function fr(h){
    return String(h).replace(/\{([^{}¦]*)¦([^{}¦]*)\}/g, function(_, a, b){
      return '<span class="mc-fr"><span class="mc-n">' + a + '</span><span class="mc-d">' + b + '</span></span>';
    });
  }
  function V(h){ try { return typeof vecHTML === 'function' ? vecHTML(h) : h; } catch(e){ return h; } }
  function T(h){ return V(fr(String(h).replace(/\s{4,}/g, '<br>'))); }

  /* Fiche « à connaître par cœur » fabriquée à partir des questions Définition / Propriété de la banque */
  function memoItems(theme){
    var out = [], qs = bankOf()[theme] || [];
    qs.forEach(function(q){
      var s = String(q.q || '').trim();
      if(!/^(Définition|Propriété|Théorème)/.test(s)) return;
      var ans = String(q.c[q.a] || '').trim();
      s = s.replace(/\s*(\?|…|\.\.\.)\s*$/, '');
      var sep = /[=:]$/.test(s) ? ' ' : ' ';
      out.push(s + sep + ans + (/[.!?]$/.test(ans) ? '' : '.'));
    });
    return out;
  }

  function sec(cls, ico, title, body){ return '<div class="mc-sec ' + cls + '"><div class="mc-h">' + ico + ' ' + title + '</div>' + body + '</div>'; }
  function ul(a){ return '<ul class="mc-ul">' + a.map(function(x){ return '<li>' + T(x) + '</li>'; }).join('') + '</ul>'; }

  function bodyHTML(cls, theme, pr){
    var d = data(cls, theme);
    if(!d) return '';
    if(d.memo){
      var it = memoItems(theme);
      return sec('mc-ess', '📌', 'À connaître par cœur', it.length ? ul(it) : '<p>Aucune fiche pour ce thème.</p>') +
        '<p class="mc-note">Ces définitions et propriétés sont celles sur lesquelles portent les questions du quiz « Prop. &amp; Déf. ».</p>';
    }
    var steps = '<ol class="mc-ol">' + d.ex.st.map(function(x){ return '<li>' + T(x) + '</li>'; }).join('') + '</ol>';
    var mini = d.mini.map(function(m, i){
      return '<details class="mc-det"' + (pr ? ' open' : '') + '><summary><b>' + (i + 1) + '.</b> ' + T(m.q) + '</summary><div class="mc-ans">' + T(m.r) + '</div></details>';
    }).join('');
    return sec('mc-ess', '🎯', 'L\'essentiel', ul(d.ess)) +
      sec('mc-form', '📌', 'À retenir', ul(d.form)) +
      sec('mc-ex', '✏️', 'Exemple résolu', '<p class="mc-q">' + T(d.ex.q) + '</p>' + steps + '<p class="mc-r">' + T(d.ex.r) + '</p>') +
      sec('mc-pie', '⚠️', 'Pièges à éviter', ul(d.pieges)) +
      sec('mc-mini', '🧪', 'Teste-toi <span class="mc-hint">(touche la question pour voir la réponse)</span>', mini);
  }

  window.mqCoursHas = function(cls, theme){ return !!data(cls, theme); };
  window.mqCoursClassHas = function(cls){ return themesOf(cls).length > 0; };

  /* bouton affiché dans la barre des thèmes */
  window.mqCoursBtn = function(){
    var st = 'width:100%;margin-bottom:8px;padding:8px;border-radius:8px;border:1px solid var(--accent);background:transparent;color:var(--accent-text);font-family:inherit;font-size:12.5px;font-weight:700;cursor:pointer;';
    if(currentTheme !== 'Tous' && !okT(currentClass, currentTheme)) return '';
    if(currentTheme !== 'Tous' && data(currentClass, currentTheme)){
      var i = (CLASSES[currentClass] || []).indexOf(currentTheme);
      return '<button onclick="renderCoursPage(' + i + ')" style="' + st + '">📘 ' + (isMemo(currentClass, currentTheme) ? 'Voir la fiche : définitions et propriétés' : 'Revoir le cours de ce thème') + '</button>';
    }
    if(window.mqCoursClassHas(currentClass)){
      return '<button onclick="renderCoursPage()" style="' + st + '">📘 Résumés de cours de la ' + currentClass + '</button>';
    }
    return '';
  };

  window.coursQuiz = function(i){ var t = (CLASSES[currentClass] || [])[i]; if(t) setTheme(t); };

  function printCours(i){
    var cls = currentClass, t = (CLASSES[cls] || [])[i]; if(!t || !data(cls, t) || !okT(cls, t)) return;
    var html = '<div class="ev-doc mc-print"><div class="ev-top"><span>MathChrono-Quiz · Résumé de cours</span><span>' + attr(cls) + '</span></div>' +
      '<div class="ev-title">' + (isMemo(cls, t) ? 'DÉFINITIONS ET PROPRIÉTÉS' : 'RÉSUMÉ DE COURS') + '</div>' +
      '<div class="ev-sub">Classe de ' + attr(cls) + ' · ' + attr(label(t)) + '</div>' + bodyHTML(cls, t, true) +
      '<div class="ev-foot">MathChrono-Quiz · révisions de la 6e à la Terminale</div></div>';
    if(window.__EV && window.__EV.printDoc) window.__EV.printDoc(html, 'Cours ' + cls + ' - ' + label(t));
  }
  window.coursPrint = printCours;

  window.renderCoursPage = function(i){
    var cls = currentClass, app = document.getElementById('app'), list = themesOf(cls);
    var btn = 'width:100%;padding:12px;border:none;border-radius:10px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;margin-top:8px;';
    if(typeof i === 'number' && i >= 0 && data(cls, (CLASSES[cls] || [])[i])){
      var t = CLASSES[cls][i];
      if(!okT(cls, t)){ currentTheme = t; if(window.mqPay) window.mqPay(); return; }
      app.innerHTML = '<div class="card mc-page" style="padding:1rem;">' +
        '<div class="mc-top">' + (isMemo(cls, t) ? 'Fiche mémo' : 'Résumé de cours') + ' · ' + attr(cls) + '</div>' +
        '<div class="mc-title">' + attr(label(t)) + '</div>' + bodyHTML(cls, t) +
        '<button onclick="coursQuiz(' + i + ')" style="' + btn + 'background:var(--accent);color:#fff;">▶ Faire le quiz de ce thème</button>' +
        '<button onclick="coursPrint(' + i + ')" style="' + btn + 'background:transparent;border:1px solid var(--accent);color:var(--accent-text);">🖨 Imprimer / enregistrer en PDF</button>' +
        '<button onclick="renderCoursPage()" style="' + btn + 'background:transparent;border:1px solid var(--border-strong);color:var(--text-sec);">← Tous les résumés</button>' +
        '</div>';
      try { window.scrollTo(0, 0); } catch(e){}
      return;
    }
    var rows = list.map(function(t){
      var k = (CLASSES[cls] || []).indexOf(t);
      return '<button class="mc-row" onclick="renderCoursPage(' + k + ')"><span>' + (!okT(cls, t) ? '🔒 ' : isMemo(cls, t) ? '📌 ' : '📘 ') + attr(label(t)) + '</span><span class="mc-go">›</span></button>';
    }).join('');
    app.innerHTML = '<div class="card mc-page" style="padding:1rem;">' +
      '<div class="mc-title">📘 Résumés de cours · ' + attr(cls) + '</div>' +
      (rows ? '<p class="mc-note" style="margin-top:2px">Touche un thème : l\'essentiel, les formules, un exemple résolu, les pièges et deux questions pour te tester.</p>' + rows
            : '<p class="mc-note">Les résumés de cours de cette classe arrivent bientôt.</p>') + '</div>';
    try { window.scrollTo(0, 0); } catch(e){}
  };
})();

