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