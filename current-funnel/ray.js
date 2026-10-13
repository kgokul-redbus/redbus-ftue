/* Ray on SRP unified: a separate project hosted in the same deck (not FTUE, not Persuasion tags).
   The prototype is its own Vite + React app in ../ray-srp (source in ray-srp/src). After editing it, rebuild the
   static copy the deck loads with `npm run build` inside ray-srp; that writes ray-srp/app, which is committed. */
(function () {
  window.RAY = {
    sections: [
      ['prototype', 'Prototype', { src: '../ray-srp/app/index.html', css: ['../../current-funnel/ray-theme.css'] }],
    ],
  };
})();
