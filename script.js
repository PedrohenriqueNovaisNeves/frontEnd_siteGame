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