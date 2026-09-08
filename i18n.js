// Motor de idiomas: no traduce nada por sí mismo, solo lee
// translations.js y pinta el texto que corresponda según el
// idioma activo. Todo el contenido real vive en translations.js.

(function () {
  const STORAGE_KEY = "site-lang";
  const DEFAULT_LANG = "es";

  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Si el navegador bloquea localStorage, simplemente no se recuerda
      // la preferencia entre visitas; el resto sigue funcionando igual.
    }
  }

  function applyLang(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const initialLang = getSavedLang() || DEFAULT_LANG;
    applyLang(initialLang);

    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        applyLang(lang);
        saveLang(lang);
      });
    });
  });
})();
