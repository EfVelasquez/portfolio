
// Validación del formulario de contacto + envío simulado (PROTOTIPO).
//
// Una web estática (HTML/CSS/JS puro) no puede enviar un email por sí
// sola: JavaScript en el navegador no tiene forma de hablar con un
// servidor de correo directamente. Para que esto envíe un email de
// verdad cuando lo publiques, tienes básicamente tres caminos:
//
//   1. Formspree (https://formspree.io) — gratis para empezar. Creas un
//      formulario en su web, te dan una URL, y haces un fetch POST a esa
//      URL con los datos. Ellos te reenvían el mensaje a tu correo.
//
//   2. EmailJS (https://www.emailjs.com) — parecido, pero con su propio
//      SDK de JS que conectas a tu cuenta de Gmail/Outlook/etc.
//
//   3. Tu propia función serverless (Netlify Functions, Vercel, Cloudflare
//      Workers...) que reciba este mismo payload y llame a un servicio de
      // email como Resend o SendGrid con tu API key (nunca metas una API
//      key de email directamente en este archivo, se vería en el código
//      fuente de la página).
//
// Por ahora, este script solo valida el formulario y simula el envío
// (lo imprime en la consola del navegador y muestra un mensaje de éxito).
// Busca el bloque "AQUÍ IRÍA EL ENVÍO REAL" más abajo cuando quieras
// conectarlo a una de esas opciones.

(function () {
  function t(key) {
    var lang = document.documentElement.lang || "es";
    var dict = (window.translations && window.translations[lang]) || {};
    return dict[key] || key;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function showFieldError(field, key) {
    var wrapper = field.closest(".field");
    var error = wrapper.querySelector(".field-error");
    if (!error) {
      error = document.createElement("span");
      error.className = "field-error";
      wrapper.appendChild(error);
    }
    error.setAttribute("data-i18n", key);
    error.textContent = t(key);
    field.classList.add("field-invalid");
  }

  function clearFieldError(field) {
    var wrapper = field.closest(".field");
    var error = wrapper.querySelector(".field-error");
    if (error) error.remove();
    field.classList.remove("field-invalid");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".contact-form");
    if (!form) return;

    var nameField = form.querySelector("#name");
    var emailField = form.querySelector("#email");
    var messageField = form.querySelector("#message");
    var submitBtn = form.querySelector('button[type="submit"]');

    var statusEl = form.querySelector(".form-status");
    if (!statusEl) {
      statusEl = document.createElement("p");
      statusEl.className = "form-status";
      form.appendChild(statusEl);
    }

    [nameField, emailField, messageField].forEach(function (field) {
      field.addEventListener("input", function () {
        clearFieldError(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;

      if (!nameField.value.trim()) {
        showFieldError(nameField, "contact.error.name");
        valid = false;
      } else {
        clearFieldError(nameField);
      }

      if (!isValidEmail(emailField.value.trim())) {
        showFieldError(emailField, "contact.error.email");
        valid = false;
      } else {
        clearFieldError(emailField);
      }

      if (!messageField.value.trim()) {
        showFieldError(messageField, "contact.error.message");
        valid = false;
      } else {
        clearFieldError(messageField);
      }

      if (!valid) return;

      var payload = {
        name: nameField.value.trim(),
        email: emailField.value.trim(),
        message: messageField.value.trim()
      };

      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = t("contact.sending");
      statusEl.textContent = "";
      statusEl.classList.remove("form-status--success");

      // --- AQUÍ IRÍA EL ENVÍO REAL ---
      // Ejemplo con Formspree, una vez tengas tu propia URL de formulario:
      //
      // fetch("https://formspree.io/f/TU_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json", Accept: "application/json" },
      //   body: JSON.stringify(payload)
      // })
      //   .then(function (res) { ... manejar éxito/error real ... });
      //
      // Por ahora simulamos la espera de red con un timeout:
      setTimeout(function () {
        console.log("Formulario listo para enviar:", payload);

        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
        statusEl.textContent = t("contact.success");
        statusEl.classList.add("form-status--success");
        form.reset();
      }, 900);
    });
  });
})();