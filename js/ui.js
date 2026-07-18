/* =========================================================
   KRIZELL — ui.js
   Sticky nav, smooth-scroll buttons, waitlist form, footer year.
   ========================================================= */
"use strict";

(function (K) {
  /* Sticky ("stuck") navigation pill after 20px of scroll. */
  K.initNav = function initNav() {
    const nav = K.qs("#nav");
    if (!nav) return;

    const onScroll = () => {
      nav.classList.toggle("is-stuck", window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  };

  /* Buttons with [data-scroll-to] smooth-scroll to the target section. */
  K.initScrollButtons = function initScrollButtons() {
    K.qsa("[data-scroll-to]").forEach((btn) => {
      btn.addEventListener("click", () => K.scrollToId(btn.dataset.scrollTo));
    });
  };

  /* Waitlist form: simulated submit (idle -> submitting -> done). */
  K.initWaitlistForm = function initWaitlistForm() {
    const form = K.qs("#waitlist-form");
    const button = K.qs("#waitlist-submit");
    const label = K.qs("#waitlist-submit-label");
    if (!form || !button || !label) return;

    let status = "idle";

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (status === "submitting") return;

      status = "submitting";
      button.disabled = true;
      label.textContent = "Saving your spot…";

      // Preserve the original functionality: capture form values locally.
      const payload = Object.fromEntries(new FormData(form).entries());

      // Simulated submit — plug in your endpoint here.
      setTimeout(() => {
        console.log("waitlist:submit", payload);
        status = "done";
        button.disabled = false;
        label.textContent = "🎉 You're on the list — check your inbox";
        form.reset();
      }, 900);
    });
  };

  /* Keep the footer year current. */
  K.initFooterYear = function initFooterYear() {
    const el = K.qs("#footer-year");
    if (el) el.textContent = String(new Date().getFullYear());
  };
})(window.Krizell);

const form = document.getElementById("waitlist-form");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mnjedvzr", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        alert("🎉 Thank you for joining the Krizell waitlist!");
        form.reset();
    } else {
        alert("Something went wrong. Please try again.");
    }
});