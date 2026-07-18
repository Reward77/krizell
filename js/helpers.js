/* =========================================================
   KRIZELL — helpers.js
   Small shared utilities. Loaded first; exposes window.Krizell.
   ========================================================= */
"use strict";

window.Krizell = window.Krizell || {};

(function (K) {
  /** Query a single element. */
  K.qs = (selector, scope) => (scope || document).querySelector(selector);

  /** Query all elements as an array. */
  K.qsa = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

  /** Smooth-scroll to an element by id. */
  K.scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
})(window.Krizell);


