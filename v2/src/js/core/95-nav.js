/* ===== Navigation : bouton « Retour » + bouton retour du téléphone ===== */
(function(){
  var SUB = ['renderCoursPage','renderEvalPage','renderBadgesPage','renderClassePage','renderCustomQPage','renderHistoryPage','renderLeaderboardPage','renderProgressPage','renderRecap'];
  var CLS = ['renderClasseQuestion','nextClasseQuestion'];
  var inSub = false, snap = null, saved = null, pausedLeft = null, pushed = false, confirmed = false;

  function appEl(){ return document.getElementById('app'); }

  function addBar(){
    var a = appEl();
    if(!a || document.getElementById('backbar')) return;
    a.insertAdjacentHTML('afterbegin',
      '<div id="backbar" style="position:sticky;top:0;z-index:50;background:var(--bg);padding:6px 0 10px;margin:0 0 4px;">' +
      '<button type="button" onclick="goBack()" style="padding:9px 16px;border:1px solid var(--border-strong);background:var(--surface);' +
      'color:var(--accent);border-radius:99px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;">\u2190 Retour</button></div>');
  }

  function enterSub(){
    if(inSub) return;
    var a = appEl();
    // le chrono s'arrête pendant la consultation d'une page (question en cours uniquement)
    if(timer && !answered && document.getElementById('cbar')){
      pausedLeft = timeLeft; clearInterval(timer); timer = null;
    }
    snap = a ? a.innerHTML : null;
    saved = { missed: missedQuestions, details: sessionDetails, start: startTime };
    inSub = true;
    try { history.pushState({mc:1}, ''); pushed = true; } catch(e){ pushed = false; }
  }

  function restore(){
    if(window.__mqPrinting){ return; }
    var a = appEl();
    inSub = false; pushed = false; confirmed = false;
    classeMode = false;
    // une page de paiement mémorisée est périmée (les droits ont pu changer) : on relance le quiz
    var stalePay = (snap !== null && snap.indexOf('id="mqCode"') >= 0);
    if(saved){ missedQuestions = saved.missed; sessionDetails = saved.details; startTime = saved.start; }
    var s = snap; snap = null; saved = null;
    if(stalePay){ pausedLeft = null; try{ startQuiz(); }catch(e){} try{ window.scrollTo(0, 0); }catch(e){} return; }
    if(a && s !== null) a.innerHTML = s;
    if(pausedLeft !== null){ var t = pausedLeft; pausedLeft = null; startTimer(t); }
    try { window.scrollTo(0, 0); } catch(e){}
  }

  // quitter une sous-page sans retour (ex. changement de classe ou nouveau quiz)
  function dropSub(){
    if(!inSub) return;
    inSub = false; snap = null; saved = null; pausedLeft = null; classeMode = false;
    if(pushed){ pushed = false; try { history.back(); } catch(e){} }
  }

  SUB.forEach(function(n){
    var f = window[n]; if(typeof f !== 'function') return;
    window[n] = function(){ enterSub(); var r = f.apply(this, arguments); addBar(); return r; };
  });
  CLS.forEach(function(n){
    var f = window[n]; if(typeof f !== 'function') return;
    window[n] = function(){ var r = f.apply(this, arguments); if(inSub) addBar(); return r; };
  });
  var sq = window.startQuiz;
  window.startQuiz = function(){ dropSub(); return sq.apply(this, arguments); };

  window.__navFix = function(){ if(inSub) addBar(); };   // utilisé après un chargement différé de données

  window.goBack = function(){
    if(!inSub) return;
    if(classeMode && !confirm('Quitter le mode classe ?')) return;
    if(pushed){
      confirmed = true;
      try { history.back(); } catch(e){ restore(); return; }
      setTimeout(function(){ if(inSub) restore(); }, 400);
    } else { restore(); }
  };

  window.addEventListener('popstate', function(){
    if(!inSub || window.__mqPrinting) return;
    if(classeMode && !confirmed && !confirm('Quitter le mode classe ?')){
      try { history.pushState({mc:1}, ''); pushed = true; } catch(e){}
      return;
    }
    restore();
  });
})();
