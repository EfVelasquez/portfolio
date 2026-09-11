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
    "contact.oremail" : "...O a través de mi correo electrónico:",
    "contact.message.label": "Mensaje",
    "contact.message.placeholder": "Cuéntame en qué estás pensando",
    "contact.submit": "Enviar mensaje",
    "contact.sending": "Enviando…",
    "contact.success": "¡Mensaje enviado! Te responderé pronto.",
    "contact.error.name": "Escribe tu nombre.",
    "contact.error.email": "Introduce un correo válido.",
    "contact.error.message": "Cuéntame algo antes de enviar.",

    "contact.copy": "Copiar",
    "contact.copied": "¡Copiado!",

    "footer.text": "Ennio Fernando Velásquez Berlingeri — Gameplay & Systems Programmer — " + new Date().getFullYear(),

    "project.template.back": "Volver al portfolio",
    "project.template.title": "[Nombre del juego]",
    "project.template.tagline": "[Una frase corta que resuma el juego: género, plataforma y qué lo hace especial.]",
    "project.template.link.itch": "Jugar en itch.io",
    "project.template.link.steam": "Ver en Steam",
    "project.template.link.github": "Código en GitHub",
    "project.template.about.heading": "Sobre el proyecto",
    "project.template.about.body": "[Párrafo de introducción: qué es el juego, en qué contexto lo hiciste (jam, proyecto personal, equipo), y cuánto duró el desarrollo.]",
    "project.template.role.heading": "Mi rol",
    "project.template.role.body": "[Qué hiciste tú concretamente: sistemas de combate, IA, herramientas de editor, gestión del equipo, etc. Esta sección es la más importante para quien revisa el portfolio.]",
    "project.template.challenges.heading": "Retos técnicos",
    "project.template.challenges.item1": "[Reto 1 — el problema y cómo lo resolviste.]",
    "project.template.challenges.item2": "[Reto 2 — idem.]",
    "project.template.challenges.item3": "[Reto 3 — idem.]",
    "project.template.learned.heading": "Qué aprendí",
    "project.template.learned.body": "[Reflexión breve: qué harías distinto, qué te llevaste para el siguiente proyecto.]",
    "project.template.facts.heading": "Ficha técnica",
    "project.template.facts.engine.label": "Motor",
    "project.template.facts.engine.value": "[Unity / Unreal Engine 5 / propio]",
    "project.template.facts.duration.label": "Duración",
    "project.template.facts.duration.value": "[X semanas / meses]",
    "project.template.facts.team.label": "Equipo",
    "project.template.facts.team.value": "[Solo / X personas]",
    "project.template.facts.platform.label": "Plataforma",
    "project.template.facts.platform.value": "[PC / Web / Móvil]",
    "project.template.gallery.heading": "Galería",
    "project.template.gallery.alt1": "Captura del proyecto 1",
    "project.template.gallery.alt2": "Captura del proyecto 2",
    "project.template.gallery.alt3": "Captura del proyecto 3",
    "project.template.gallery.alt4": "Captura del proyecto 4"
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
    "contact.email.placeholder": "your@email.com",
    "contact.oremail" : "...Or through my email:",
    "contact.message.label": "Message",
    "contact.message.placeholder": "Tell me what you're thinking about",
    "contact.submit": "Send message",
    "contact.sending": "Sending…",
    "contact.success": "Message sent! I'll get back to you soon.",
    "contact.error.name": "Please enter your name.",
    "contact.error.email": "Enter a valid email address.",
    "contact.error.message": "Tell me something before sending.",

    "contact.copy": "Copy",
    "contact.copied": "Copied!",

    "footer.text": "Ennio Fernando Velásquez Berlingeri — Gameplay & Systems Programmer — " + new Date().getFullYear(),

    "project.template.back": "Back to portfolio",
    "project.template.title": "[Game name]",
    "project.template.tagline": "[A short line summing up the game: genre, platform, and what makes it stand out.]",
    "project.template.link.itch": "Play on itch.io",
    "project.template.link.steam": "View on Steam",
    "project.template.link.github": "Code on GitHub",
    "project.template.about.heading": "About the project",
    "project.template.about.body": "[Intro paragraph: what the game is, the context you made it in (jam, personal project, team), and how long development took.]",
    "project.template.role.heading": "My role",
    "project.template.role.body": "[What you specifically did: combat systems, AI, editor tooling, team management, etc. This is the most important section for anyone reviewing the portfolio.]",
    "project.template.challenges.heading": "Technical challenges",
    "project.template.challenges.item1": "[Challenge 1 — the problem and how you solved it.]",
    "project.template.challenges.item2": "[Challenge 2 — same.]",
    "project.template.challenges.item3": "[Challenge 3 — same.]",
    "project.template.learned.heading": "What I learned",
    "project.template.learned.body": "[Short reflection: what you'd do differently, what you carried into the next project.]",
    "project.template.facts.heading": "Fact sheet",
    "project.template.facts.engine.label": "Engine",
    "project.template.facts.engine.value": "[Unity / Unreal Engine 5 / custom]",
    "project.template.facts.duration.label": "Duration",
    "project.template.facts.duration.value": "[X weeks / months]",
    "project.template.facts.team.label": "Team",
    "project.template.facts.team.value": "[Solo / X people]",
    "project.template.facts.platform.label": "Platform",
    "project.template.facts.platform.value": "[PC / Web / Mobile]",
    "project.template.gallery.heading": "Gallery",
    "project.template.gallery.alt1": "Project screenshot 1",
    "project.template.gallery.alt2": "Project screenshot 2",
    "project.template.gallery.alt3": "Project screenshot 3",
    "project.template.gallery.alt4": "Project screenshot 4"
  }
};

window.translations = translations;