// Countdown
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

// RSVP Form
document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = this.nome.value;
  const presenza = this.presenza.value;
  const note = this.note.value.trim();

  const msg = presenza === "sì"
    ? `Grazie ${nome}! Non vediamo l'ora di vederti!`
    : `Peccato, ${nome}. Ci mancherai!`;
    
  if (note) {
    msg += `\nNota ricevuta: "${note}"`;
  }

  document.getElementById("rsvpMessaggio").textContent = msg;
  this.reset();
});
