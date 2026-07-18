/* =========================================================
   KRIZELL — app.js
   Entry point: wires everything up once the DOM is ready.
   ========================================================= */
"use strict";

(function (K) {
  function init() {
    K.initNav();
    K.initScrollButtons();
    K.initReveal();
    K.initWaitlistForm();
    K.initFooterYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(window.Krizell);
