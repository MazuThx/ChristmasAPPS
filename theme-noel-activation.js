// theme-toggle.js
(function(){
  try{
    var d = new Date();
    var m = d.getUTCMonth() + 1; // 1-12
    var day = d.getUTCDate();
    // Auto-activation window: Dec 1 → Jan 6 (inclusive)
    var enable = (m === 12 && day >= 1) || (m === 1 && day <= 6);

    // Non-blocking apply after idle/next tick
    var apply = function(){
      var root = document.documentElement;
      if(!root) return;
      // Respect manual setting if already present
      if(root.hasAttribute('data-theme')) return;
      if(enable){ root.setAttribute('data-theme','noel'); }
    };

    if('requestIdleCallback' in window){
      requestIdleCallback(apply, {timeout: 500});
    } else {
      setTimeout(apply, 0);
    }
  }catch(e){ /* fail safe: do nothing */ }
})();
