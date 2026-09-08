// Todas las cadenas de texto de la web, por idioma.
// Para añadir un idioma nuevo, duplica uno de los bloques (ej. "en")
// y traduce sus valores. La clave (la parte antes de los dos puntos)
// no se toca: es lo que usa el HTML para encontrar cada texto.

const translations = {
  es: {
    "nav.inicio": "Inicio",
    "nav.portfolio": "Portfolio",
    "nav.contacto": "Contacto",

    "hero.title": "Construyo mundos jugables, un sistema a la vez.",
    "hero.subtitle": "Desarrollador de videojuegos independiente. Diseño mecánicas, escribo el código que las sostiene y cuido cada detalle hasta que se sienten bien al jugarlas.",
    "hero.cta.linkedin": "LinkedIn",
    "hero.cta.itch": "Itch.io",
    "hero.video.title": "¡Mírame!",

    "portfolio.heading": "Portfolio",
    "card.aria": "Ver proyecto (próximamente)",

    "project.crypt.title": "Cripta Isométrica",
    "project.crypt.desc": "Hack and slash en Unity con combate por combos y generación de mazmorras.",
    "project.crypt.badge": "Gamejam Winner",

    "project.loop.title": "Bucle de Medianoche",
    "project.loop.desc": "Terror narrativo en Unreal Engine 5 con un ciclo de tres días y mutación del protagonista.",
    "project.loop.badge": "CPCRetroDev Winner",

    "project.arcade.title": "Recreativa de Bolsillo",
    "project.arcade.desc": "Colección de mini-juegos arcade pensados para partidas de menos de un minuto.",

    "project.hina.title": "Hina",
    "project.hina.desc": "Bot narrativo que gestiona el guion vivo de un videojuego a través de Telegram.",

    "project.orbit.title": "Órbita Rota",
    "project.orbit.desc": "Prototipo de puzles espaciales con gravedad manipulable y físicas propias.",

    "project.foundry.title": "La Fundición",
    "project.foundry.desc": "Sistema de crafteo e interacción por fases construido con event dispatchers en Blueprints.",

    "project.echo.title": "Eco",
    "project.echo.desc": "Experimento de sonido y sigilo donde cada paso deja una huella audible para los enemigos.",

    "project.relic.title": "Reliquia",
    "project.relic.desc": "Aventura de exploración con inventario físico y combinación de objetos en tiempo real.",

    "contact.heading": "Hablemos",
    "contact.subtitle": "¿Tienes un proyecto en mente o quieres charlar sobre desarrollo? Escríbeme.",
    "contact.name.label": "Nombre",
    "contact.name.placeholder": "Tu nombre",
    "contact.email.label": "Correo",
    "contact.email.placeholder": "tu@correo.com",
    "contact.message.label": "Mensaje",
    "contact.message.placeholder": "Cuéntame en qué estás pensando",
    "contact.submit": "Enviar mensaje",

    "footer.text": "Eño — Game Developer"
  },

  en: {
    "nav.inicio": "Home",
    "nav.portfolio": "Portfolio",
    "nav.contacto": "Contact",

    "hero.title": "I build playable worlds, one system at a time.",
    "hero.subtitle": "Independent game developer. I design mechanics, write the code that holds them together, and polish every detail until they feel right to play.",
    "hero.cta.linkedin": "LinkedIn",
    "hero.cta.itch": "Itch.io",
    "hero.video.title": "Watch me!",

    "portfolio.heading": "Portfolio",
    "card.aria": "View project (coming soon)",

    "project.crypt.title": "Isometric Crypt",
    "project.crypt.desc": "Unity hack-and-slash with combo-based combat and procedural dungeon generation.",
    "project.crypt.badge": "Gamejam Winner",

    "project.loop.title": "Midnight Loop",
    "project.loop.desc": "Narrative horror in Unreal Engine 5 with a three-day cycle and a mutating protagonist.",
    "project.loop.badge": "CPCRetroDev Winner",

    "project.arcade.title": "Pocket Arcade",
    "project.arcade.desc": "A collection of arcade mini-games designed for under-a-minute sessions.",

    "project.hina.title": "Hina",
    "project.hina.desc": "A narrative bot that manages a game's living script through Telegram.",

    "project.orbit.title": "Broken Orbit",
    "project.orbit.desc": "Space puzzle prototype with manipulable gravity and custom physics.",

    "project.foundry.title": "The Foundry",
    "project.foundry.desc": "Phase-based crafting and interaction system built with event dispatchers in Blueprints.",

    "project.echo.title": "Echo",
    "project.echo.desc": "A sound-and-stealth experiment where every footstep leaves an audible trace for enemies.",

    "project.relic.title": "Relic",
    "project.relic.desc": "Exploration adventure with a physical inventory and real-time item combination.",

    "contact.heading": "Let's talk",
    "contact.subtitle": "Got a project in mind, or just want to talk shop? Reach out.",
    "contact.name.label": "Name",
    "contact.name.placeholder": "Your name",
    "contact.email.label": "Email",
    "contact.email.placeholder": "you@email.com",
    "contact.message.label": "Message",
    "contact.message.placeholder": "Tell me what you're thinking about",
    "contact.submit": "Send message",

    "footer.text": "Ennio Fernando Velásquez Berlingeri — Gameplay & Systems Programmer — " + new Date().getFullYear()
  }
};
