
function openLetter() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("timeline").classList.remove("hidden");
  revealCards();
}

function goToFinal() {
  document.getElementById("timeline").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
}

function heartExplosion() {
  alert("I love you more than you love me ❤️");
}

/* 카드 순차 fade */
function revealCards() {
  const cards = document.querySelectorAll(".fade");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 800);
  });
}
