const countdown = document.getElementById("countdown");
const weddingDate = new Date("2025-12-28T15:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.textContent = "È il grande giorno!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdown.textContent = `${days} giorni, ${hours} ore, ${minutes} minuti`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const apriRSVP = document.getElementById("apriRSVP");
const chiudiRSVP = document.getElementById("chiudiRSVP");
const rsvpOverlay = document.getElementById("rsvpOverlay");

apriRSVP.addEventListener("click", () => {
  rsvpOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

chiudiRSVP.addEventListener("click", () => {
  rsvpOverlay.classList.add("hidden");
  document.body.style.overflow = "";
});
