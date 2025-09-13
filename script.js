// Dapatkan semua elemen yang dibutuhkan dari HTML
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');

// Inisialisasi skor
let playerScore = 0;
let computerScore = 0;

// Logika inti game
function playRound(playerChoice) {
    // 1. Pilihan Komputer secara acak
    const choices = ['Batu', 'Kertas', 'Gunting'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Tampilkan pilihan pemain dan komputer
    playerChoiceEl.textContent = `Kamu: ${playerChoice}`;
    computerChoiceEl.textContent = `Komputer: ${computerChoice}`;

    // 2. Tentukan pemenang
    if (playerChoice === computerChoice) {
        resultEl.textContent = 'Seri!';
    } else if (
        (playerChoice === 'Batu' && computerChoice === 'Gunting') ||
        (playerChoice === 'Kertas' && computerChoice === 'Batu') ||
        (playerChoice === 'Gunting' && computerChoice === 'Kertas')
    ) {
        resultEl.textContent = 'Kamu Menang!';
        playerScore++;
    } else {
        resultEl.textContent = 'Kamu Kalah!';
        computerScore++;
    }

    // 3. Perbarui tampilan skor
    playerScoreEl.textContent = `Pemain: ${playerScore}`;
    computerScoreEl.textContent = `Komputer: ${computerScore}`;
}

// Tambahkan event listener ke setiap tombol
rockBtn.addEventListener('click', () => playRound('Batu'));
paperBtn.addEventListener('click', () => playRound('Kertas'));
scissorsBtn.addEventListener('click', () => playRound('Gunting'));