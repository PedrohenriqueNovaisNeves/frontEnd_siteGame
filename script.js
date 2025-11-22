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

  document.querySelectorAll(".layer").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    const translateY = scrollY * (speed / 100);
    layer.style.transform = `translateY(${translateY}px)`;
  });

});

// Ativar destaque no menu
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});
