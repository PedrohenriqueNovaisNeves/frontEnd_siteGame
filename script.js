// Mostrar seções
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  // Fecha menu mobile ao clicar
  document.querySelector(".nav-links").classList.remove("active");
}

// Abrir/fechar menu mobile
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// PARALLAX DO BANNER

window.addEventListener("scroll", function() {
  const s = window.scrollY;

  document.querySelector(".bg").style.transform =
    `translateY(${s * 0.15}px)`;

  document.querySelector(".mid").style.transform =
    `translateY(${s * 0.10}px)`;

  document.querySelector(".front").style.transform =
    `translateY(${s * 0.05}px)`;
});
