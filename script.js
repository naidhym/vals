let currentPage = 1;
const totalPages = 4;

const music = document.getElementById("bgMusic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const nextBtns = document.querySelectorAll(".nextBtn");

function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.add("active");
  }
}

// 🔥 PLAY MUSIK LANGSUNG PAS KLIK YES
yesBtn.addEventListener("click", () => {
  music.play().catch(() => {}); // biar Chrome ga rewel
  nextPage();
});

nextBtns.forEach(btn => btn.addEventListener("click", nextPage));

// NO button kabur
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
