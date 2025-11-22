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

window.addEventListener("scroll", () => {
  const s = window.scrollY;

  document.querySelectorAll(".parallax-layer").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    const y = s * (speed / 200);
    layer.style.transform = `translate3d(0, ${y}px, 0)`;
  });
});

// Ativar destaque no menu
document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".menu-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelector('.hero-background').style.transform = `translateY(${scrolled * 0.3}px)`;
});