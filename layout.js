// Mide la altura real de la cabecera (cambia entre desktop y móvil)
// y la guarda en --header-h, para que el salto a cada sección
// (#inicio, #portfolio, #contacto) no quede tapado por la cabecera
// fija ni deje un hueco de más.

(function () {
  function syncHeaderHeight() {
    const header = document.querySelector(".topbar");
    if (!header) return;
    document.documentElement.style.setProperty("--header-h", header.offsetHeight + "px");
  }

  syncHeaderHeight();
  window.addEventListener("load", syncHeaderHeight);
  window.addEventListener("resize", syncHeaderHeight);
})();
