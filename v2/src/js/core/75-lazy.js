/* ===== Chargement à la demande des données par classe =====
   Les questions + résumés de chaque classe sont dans data/c-<classe>.js ; les problèmes sommatifs, par blocs (data/s-NN.js).
   Ils ne sont téléchargés que lorsqu'on utilise la classe. Mode « mono » (fichier unique) : tout est déjà présent. */
(function(){
  'use strict';
  var IDX = window.MQ_INDEX || {mono:true};
  var done = {}, pend = {}, lt = null, lastRetry = null;

  function url(p){ return p + (IDX.v ? '?v=' + IDX.v : ''); }
  function loadScript(p){
    if(done[p]) return Promise.resolve();
    if(pend[p]) return pend[p];
    pend[p] = new Promise(function(res, rej){
      var s = document.createElement('script'); s.src = url(p); s.async = false;
      s.onload = function(){ done[p] = true; delete pend[p]; res(); };
      s.onerror = function(){ delete pend[p]; try{ s.parentNode.removeChild(s); }catch(e){} rej(new Error('Chargement impossible : ' + p)); };
      document.head.appendChild(s);
    });
    return pend[p];
  }
  function somFiles(cls){ var b = (window.MQ_SOM && window.MQ_SOM.baseCls) ? window.MQ_SOM.baseCls(cls) : cls; return (IDX.som && IDX.som[b]) || []; }   // 2nde C partage les modules de 2nde D
  function classFile(cls){ return IDX.cls && IDX.cls[cls]; }

  function isLoaded(kind, cls){
    if(IDX.mono) return true;
    if(kind === 'c'){ var f = classFile(cls); return !f || !!done[f]; }
    return somFiles(cls).every(function(f){ return !!done[f]; });
  }
  function ensureClass(cls){
    var f = classFile(cls);
    if(IDX.mono || !f || done[f]) return Promise.resolve();
    return loadScript(f).then(function(){ try{ rebuildAllQ(); }catch(e){} });
  }
  function ensureSom(cls){
    var p = Promise.resolve();
    if(IDX.mono) return p;
    somFiles(cls).forEach(function(f){ p = p.then(function(){ return loadScript(f); }); });   // ordre d'origine conservé
    return p;
  }

  function showLoading(){
    clearTimeout(lt);
    lt = setTimeout(function(){
      var a = document.getElementById('app');
      if(a) a.innerHTML = '<div id="mqLoading" style="text-align:center;padding:3rem 1rem;color:var(--text-muted);font-size:14px;">⏳ Chargement…</div>';
    }, 120);
  }
  function showError(retry){
    clearTimeout(lt); lastRetry = retry;
    var a = document.getElementById('app');
    if(a) a.innerHTML = '<div style="text-align:center;padding:2.5rem 1rem;"><div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;">Impossible de charger les données</div>' +
      '<div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;line-height:1.5;">Vérifie ta connexion internet, puis réessaie. Une fois chargée, une classe reste disponible hors ligne.</div>' +
      '<button onclick="mqRetryLoad()" style="padding:11px 22px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">Réessayer</button></div>';
  }
  window.mqRetryLoad = function(){ var r = lastRetry; lastRetry = null; if(r) r(); };

  // exécute fn tout de suite si les données sont là, sinon après chargement
  function whenReady(kind, cls, fn, self, args){
    if(isLoaded(kind, cls)) return fn.apply(self, args);
    showLoading();
    var go = function(){
      (kind === 'c' ? ensureClass(cls) : ensureSom(cls)).then(function(){
        clearTimeout(lt);
        fn.apply(self, args);
        if(window.__navFix) window.__navFix();     // le bouton Retour est réaffiché après le rendu différé
      }, function(){ showError(go); });
    };
    go();
  }
  function wrap(name, clsOf, kind){
    var f = window[name]; if(typeof f !== 'function') return;
    window[name] = function(){
      var cls = clsOf.apply(this, arguments);
      return cls ? whenReady(kind, cls, f, this, arguments) : f.apply(this, arguments);
    };
  }
  wrap('startQuiz',       function(){ return currentClass; }, 'c');
  wrap('startClasseMode', function(){ return currentClass; }, 'c');
  wrap('renderEvalPage',  function(){ var E = window.__EV && window.__EV.state; return E && E.cls; }, 'c');
  wrap('renderSomPage',   function(){ var S = window.__SOM && window.__SOM.state; return S && S.cls; }, 'som');
  wrap('somCls',          function(c){ return c; }, 'som');
  wrap('somLoad',         function(p){ return p && p.cls; }, 'som');

  window.MQ_DATA = {
    ensureClass: ensureClass, ensureSom: ensureSom, isLoaded: isLoaded,
    // tout charger (tests, ou futur bouton « Télécharger pour le hors ligne »)
    all: function(){
      var ps = [];
      Object.keys(IDX.cls || {}).forEach(function(c){ ps.push(ensureClass(c)); });
      Object.keys(IDX.som || {}).forEach(function(c){ ps.push(ensureSom(c)); });   // clés = classes de base
      return Promise.all(ps);
    }
  };
})();
