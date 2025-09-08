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
