// =========================
// 🌐 Translations Dictionary
// =========================
const translations = {
  ES: {
    langBtn: "ES",
    heroDesc: "Desarrollador especializado en Java (Spring Boot) y Python (Django). Apasionado por construir soluciones eficientes y creativas.",
    aboutTitle: "Sobre Mí",
    aboutDesc: "Soy un programador que combina experiencia en backend con pasión por el aprendizaje continuo. He trabajado en sistemas de gestión, aplicaciones en tiempo real y proyectos de e-commerce. Mi objetivo es construir software robusto y accesible que aporte valor real.",
    skillsTitle: "Habilidades",
    projectsTitle: "Proyectos",
    testimonialsTitle: "Logros y Contribuciones",
    contactTitle: "Contacto",
    footerText: "Miguel Antonio — Portafolio",
    viewOnGithub: "Ver en GitHub",
    downloadCV: "Descargar CV",
    spanish: "Español",
    english: "Inglés",
    navAbout: "Sobre",
    navSkills: "Habilidades",
    navProjects: "Proyectos",
    navAchievements: "Logros",
    navContact: "Contacto",

    // Proyectos
    proj1Title: "Gestión PDF y Excel",
    proj1Desc: "Aplicación de gestión que permite exportar datos en formatos PDF y Excel.",
    proj2Title: "Juego Space Invaders",
    proj2Desc: "Juego clásico en Java centrado en lógica gráfica y jugabilidad.",
    proj3Title: "Chat Spring + Angular",
    proj3Desc: "Chat en tiempo real con WebSocket (backend Spring Boot y frontend Angular).",
    proj4Title: "App BookStore",
    proj4Desc: "Aplicación de librería construida con Spring Boot y frontend básico.",
    proj5Title: "I Love Mom",
    proj5Desc: "Proyecto HTML/CSS/JS dedicado a su madre con diseño personalizado.",
    proj6Title: "Gestión de Compras y Ventas",
    proj6Desc: "Sistema en Java con JDBC para gestionar procesos empresariales.",

    // Testimonios
    testimonial1: "💻 Contribuí a proyectos de código abierto en GitHub, mejorando funcionalidades y corrigiendo errores.",
    testimonial1Author: "- Colaborador de Código Abierto",
    testimonial2: "📝 Realicé colaboraciones freelance para sistemas de gestión de pequeñas empresas.",
    testimonial2Author: "- Desarrollador Freelance",
    testimonial3: "🎯 Participé en proyectos universitarios y competencias internas para mejorar mis habilidades de programación.",
    testimonial3Author: "- Proyectos Universitarios"
  },
  EN: {
    langBtn: "EN",
    heroDesc: "Developer specialized in Java (Spring Boot) and Python (Django). Passionate about building efficient and creative solutions.",
    aboutTitle: "About Me",
    aboutDesc: "I am a programmer who combines backend experience with a passion for continuous learning. I have worked on management systems, real-time applications, and e-commerce projects. My goal is to build robust and accessible software that provides real value.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    testimonialsTitle: "Achievements & Contributions",
    contactTitle: "Contact",
    footerText: "Miguel Antonio — Portfolio",
    viewOnGithub: "View on GitHub",
    downloadCV: "Download CV",
    spanish: "Spanish",
    english: "English",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navAchievements: "Achievements",
    navContact: "Contact",

    // Projects
    proj1Title: "PDF & Excel Management",
    proj1Desc: "Management app that allows exporting data in PDF and Excel formats.",
    proj2Title: "Space Invaders Game",
    proj2Desc: "Classic Java game focusing on graphics logic and gameplay.",
    proj3Title: "Chat Spring + Angular",
    proj3Desc: "Real-time chat with WebSocket (Spring Boot backend and Angular frontend).",
    proj4Title: "BookStore App",
    proj4Desc: "Bookstore app built with Spring Boot and a basic frontend.",
    proj5Title: "I Love Mom",
    proj5Desc: "HTML/CSS/JS project dedicated to his mother with a custom design.",
    proj6Title: "Purchase & Sales Management",
    proj6Desc: "Java system with JDBC to manage business processes.",

    // Testimonials
    testimonial1: "💻 Contributed to open-source projects on GitHub, improving features and fixing bugs.",
    testimonial1Author: "- Open Source Contributor",
    testimonial2: "📝 Completed freelance collaborations for small business management systems.",
    testimonial2Author: "- Freelance Developer",
    testimonial3: "🎯 Participated in university projects and internal competitions enhancing coding skills.",
    testimonial3Author: "- University Projects"
  }
};

// =========================
// 🌍 Global State
// =========================
let currentLang = localStorage.getItem('language') || 'EN';

// 🔒 Control de typing para evitar bugs con clicks rápidos
let greetingTypingTimer = null;
let isTypingGreeting = false;

// =========================
// ⌨️ Typing Helper
// =========================
function startGreetingTyping(text, elId = "typing", speed = 110) {
  const el = document.getElementById(elId);
  if (!el) return;

  // Cancelar typing anterior
  if (greetingTypingTimer) {
    clearTimeout(greetingTypingTimer);
    greetingTypingTimer = null;
  }

  el.textContent = "";
  let i = 0;

  function step() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      greetingTypingTimer = setTimeout(step, speed);
    } else {
      greetingTypingTimer = null;
    }
  }

  step();
}

// =========================
// 🌐 Change Language
// =========================
function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);

  // Botón de idioma
  document.querySelector('[data-key="langBtn"]').textContent = lang;

  // Textos traducibles
  document.querySelectorAll('.lang').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang][key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Reiniciar typing con el saludo correcto
  const greeting = lang === 'ES' ? "Hola, soy Miguel Antonio" : "Hi, I'm Miguel Antonio";
  startGreetingTyping(greeting, "typing", 110);
}

// =========================
// 📌 DOM Ready
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // Botón idioma
  document.getElementById("langToggle").addEventListener("click", () => {
    if (isTypingGreeting) return; // protección extra
    const newLang = currentLang === 'EN' ? 'ES' : 'EN';
    changeLanguage(newLang);
  });

  // Idioma inicial
  changeLanguage(currentLang);

  console.log("Portfolio cargado correctamente 🚀");

  // Botón "Back to Top"
  const btnTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btnTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Toggle modo oscuro/claro
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    toggleBtn.innerHTML = body.classList.contains("light")
      ? '<i class="fas fa-moon"></i>'
      : '<i class="fas fa-sun"></i>';
  });

  // Scroll reveal
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;
      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    }
  }
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // Secciones animadas
  const sections = document.querySelectorAll("section");
  const options = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
        observer.unobserve(entry.target);
      }
    });
  }, options);
  sections.forEach(section => {
    section.classList.add("hidden-section");
    observer.observe(section);
  });

  // Testimonials
  const testimonials = document.querySelectorAll('.testimonial');
  const revealTestimonials = () => {
    testimonials.forEach(testimonial => {
      const windowHeight = window.innerHeight;
      const elementTop = testimonial.getBoundingClientRect().top;
      const revealPoint = 150;
      if (elementTop < windowHeight - revealPoint) {
        testimonial.classList.add('active');
      } else {
        testimonial.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', revealTestimonials);
  revealTestimonials();

  // Loader typing effect
  const loaderText = document.getElementById("loader-text");
  const loaderMessage = "WELCOME TO MY PORTFOLIO";
  let loaderIndex = 0;

  function typeLoader() {
    if (loaderIndex < loaderMessage.length) {
      loaderText.textContent += loaderMessage.charAt(loaderIndex);
      loaderIndex++;
      setTimeout(typeLoader, 90); // ⏩ más rápido para móviles
    } else {
      setTimeout(() => {
        document.getElementById("loader").classList.add("fade-out");
      }, 300);
    }
  }
  typeLoader();
});
