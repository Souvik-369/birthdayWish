const endDate = new Date("28 SEP 2024 12:00:00 AM").getTime();
const inputs = document.querySelectorAll("input");
const messageElement = document.getElementById('message');
const overlayElement = document.querySelector('.overlay');

function updateClock() {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) {
        clearInterval(countdownInterval);
        displaySurpriseMessage();
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        inputs[0].value = days;
        inputs[1].value = hours;
        inputs[2].value = minutes;
        inputs[3].value = seconds;
    }
}

function displaySurpriseMessage() {
    messageElement.classList.remove('hidden');

    // Optionally, you can add a delay and then remove the overlay
    setTimeout(() => {
        overlayElement.style.display = 'none';
    }, 5000); // 2000 milliseconds (2 seconds) delay, adjust as needed
}

updateClock();

const countdownInterval = setInterval(() => {
    updateClock();
}, 1000);
