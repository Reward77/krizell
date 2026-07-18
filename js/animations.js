/* =========================================================
   KRIZELL — animations.js
   Scroll-reveal animations via IntersectionObserver.
   ========================================================= */
"use strict";

(function (K) {
  K.initReveal = function initReveal() {
    const els = K.qsa("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      // Fallback: show everything immediately.
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
  };
})(window.Krizell);
