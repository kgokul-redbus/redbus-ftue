(function () {
  "use strict";

  /*
   * Local-file browsers can block cross-file SVG fragment references. This
   * adapter keeps ions-icons.svg as the readable catalogue while mounting the
   * same paths inside each prototype document so every <use> renders reliably.
   */
  const symbols = `
    <symbol id="ion-arrow-back" viewBox="0 0 24 24"><path d="M19 12H5m6-6-6 6 6 6"/></symbol>
    <symbol id="ion-arrow-forward" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></symbol>
    <symbol id="ion-chevron-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>
    <symbol id="ion-chevron-up" viewBox="0 0 24 24"><path d="m6 15 6-6 6 6"/></symbol>
    <symbol id="ion-close" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></symbol>
    <symbol id="ion-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
    <symbol id="ion-more" viewBox="0 0 24 24"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></symbol>
    <symbol id="ion-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></symbol>
    <symbol id="ion-calendar" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M8 3v4M16 3v4M3.5 9.5h17"/></symbol>
    <symbol id="ion-location" viewBox="0 0 24 24"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.25"/></symbol>
    <symbol id="ion-swap" viewBox="0 0 24 24"><path d="M7 5v14m0-14L4 8m3-3 3 3M17 19V5m0 14 3-3m-3 3-3-3"/></symbol>
    <symbol id="ion-bus" viewBox="0 0 24 24"><rect x="5" y="3.5" width="14" height="16" rx="3"/><path d="M7 7h10v6H7zM8 19.5V21m8-1.5V21M7.5 16h.01m8.99 0h.01"/></symbol>
    <symbol id="ion-filter" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10m-7 6h4"/></symbol>
    <symbol id="ion-sort" viewBox="0 0 24 24"><path d="M8 4v16m0-16L4.5 7.5M8 4l3.5 3.5M16 20V4m0 16-3.5-3.5M16 20l3.5-3.5"/></symbol>
    <symbol id="ion-star" viewBox="0 0 24 24"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/></symbol>
    <symbol id="ion-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 10.5V17M12 7h.01"/></symbol>
    <symbol id="ion-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
    <symbol id="ion-check-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m7.5 12 3 3 6-6"/></symbol>
    <symbol id="ion-error" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 17h.01"/></symbol>
    <symbol id="ion-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
    <symbol id="ion-minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>
    <symbol id="ion-edit" viewBox="0 0 24 24"><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z"/><path d="m14.5 7 3 3"/></symbol>
    <symbol id="ion-delete" viewBox="0 0 24 24"><path d="M5 7h14M9 7V4h6v3m2 0-1 14H8L7 7m3 4v6m4-6v6"/></symbol>
    <symbol id="ion-home" viewBox="0 0 24 24"><path d="m3 11 9-8 9 8M5.5 9.5V21h13V9.5M9.5 21v-7h5v7"/></symbol>
    <symbol id="ion-home-filled" viewBox="0 0 24 24"><path d="M3 11.2 12 3l9 8.2-1.5 1.7-1-.9v9H14v-6h-4v6H5.5v-9l-1 .9L3 11.2Z" fill="currentColor" stroke="none"/></symbol>
    <symbol id="ion-ticket" viewBox="0 0 24 24"><path d="M4 7a2 2 0 0 0 0 4v6h16v-6a2 2 0 0 0 0-4V5H4v2Z"/><path d="M12 5v2m0 4v2m0 2v2"/></symbol>
    <symbol id="ion-bookings" viewBox="0 0 24 24"><rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="m7 8 1.5 1.5L11 7M13 8.5h4M7 14l1.5 1.5L11 13m2 1.5h4"/></symbol>
    <symbol id="ion-offer" viewBox="0 0 24 24"><path d="M4 5h10l6 6-9 9-7-7V5Z"/><circle cx="8" cy="9" r="1.25"/><path d="m11 15 4-4M11.5 11.5h.01M14.5 14.5h.01"/></symbol>
    <symbol id="ion-help" viewBox="0 0 24 24"><path d="M4 5.5h16v11H9l-5 3v-14Z"/><path d="M9.7 9a2.4 2.4 0 0 1 4.6 1c0 1.7-2.3 1.8-2.3 3.2M12 15.3h.01"/></symbol>
    <symbol id="ion-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></symbol>
    <symbol id="ion-account-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="2.75"/><path d="M7.5 18a5 5 0 0 1 9 0"/></symbol>
    <symbol id="ion-eye" viewBox="0 0 24 24"><path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.5"/></symbol>
    <symbol id="ion-eye-off" viewBox="0 0 24 24"><path d="m4 4 16 16M9.8 7A7.8 7.8 0 0 1 12 6.5c6 0 9.5 5.5 9.5 5.5a17 17 0 0 1-2.4 2.8M6.3 8.2A17 17 0 0 0 2.5 12S6 17.5 12 17.5a8 8 0 0 0 2.5-.4"/></symbol>
    <symbol id="ion-copy" viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></symbol>`;

  const bank = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  bank.setAttribute("aria-hidden", "true");
  bank.setAttribute("focusable", "false");
  bank.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
  bank.innerHTML = symbols;
  document.body.prepend(bank);

  document.querySelectorAll("use[href*='ions-icons.svg#']").forEach(function (use) {
    const href = use.getAttribute("href");
    use.setAttribute("href", "#" + href.split("#").pop());
  });
})();
