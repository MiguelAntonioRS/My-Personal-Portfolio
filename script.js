// Puedes añadir animaciones extra si lo deseas
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio cargado correctamente 🚀");
});

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

  // Cambiar ícono
  if (body.classList.contains("light")) {
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
  // Typing effect
  const text = "Hi, I'm Miguel Antonio";
  const typingElement = document.getElementById("typing");
  let i = 0;

  function type() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, 130); // velocidad (ms)
    }
  }
  type();

  // Scroll reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // margen antes de mostrar
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // ejecutar en carga inicial

const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show-section");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden-section");
  observer.observe(section);
});
const testimonials = document.querySelectorAll('.testimonial');

const revealTestimonials = () => {
  testimonials.forEach(testimonial => {
    const windowHeight = window.innerHeight;
    const elementTop = testimonial.getBoundingClientRect().top;
    const revealPoint = 150;

    if(elementTop < windowHeight - revealPoint){
      testimonial.classList.add('active');
    } else {
      testimonial.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealTestimonials);
revealTestimonials(); // Para que cargue en la primera vista

// Loader typing effect
const loaderText = document.getElementById("loader-text");
const loaderMessage = "WELCOME TO MY PORTFOLIO";
let loaderIndex = 0;

function typeLoader() {
  if(loaderIndex < loaderMessage.length) {
    loaderText.textContent += loaderMessage.charAt(loaderIndex);
    loaderIndex++;
    setTimeout(typeLoader, 150);
  } else {
    // Fade out after typing
    setTimeout(() => {
      document.getElementById("loader").classList.add("fade-out");
    }, 500); // 0.5s after finished typing
  }
}

// Start loader typing on DOMContentLoaded
document.addEventListener("DOMContentLoaded", typeLoader);
