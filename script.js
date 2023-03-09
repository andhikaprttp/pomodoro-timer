// X TKJ 1 
// SMK RADEN PAKU | andhika pratama putra

// Mengatur waktu standar
let time = 25 * 60;

// Mengambil elemet timer
const timer = document.getElementById("timer");

// Update timer setiap detik
function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    timer.innerHTML = minutes + ":" + seconds;

    
    if (time === 0) {
        clearInterval(timerInterval);
        timer.innerHTML = "Time's up!";
    }

    time--;
}

// Interval waktu
let timerInterval = null;

// Tombol mulai saat diklik
document.getElementById("mulai").addEventListener("click", function() {
    timerInterval = setInterval(updateTimer, 1000);
});

// Tombol reset saat diklik
document.getElementById("reset").addEventListener("click", function() {
    clearInterval(timerInterval);
    time = 25 * 60;
    timer.innerHTML = "25:00";
});
