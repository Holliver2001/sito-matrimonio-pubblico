// Countdown al matrimonio
const countdown = document.getElementById("countdown");
const weddingDate = new Date("Dec 27, 2025 14:30:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  if (distance > 0) {
    countdown.innerHTML = `${days} gg ${hours} h ${minutes} m`;
  } else {
    countdown.innerHTML = "Oggi è il grande giorno! 🎉";
  }
}, 1000);

// Menu toggle per mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
