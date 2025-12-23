const secretCode = "kara"; // ✨ CHANGE THIS ✨

// PAGE SWITCHER
function goToPage(pageNumber) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + pageNumber)?.classList.add("active");
}

// CHECK SECRET CODE
function checkCode() {
    const input = document.getElementById("codeInput").value;
    if (input === secretCode) {
        const letter = document.getElementById("letterIcon");
letter.classList.remove("hidden");

setTimeout(() => {
    letter.classList.add("show");
}, 100);

        document.getElementById("letterIcon").onclick = () => {
            document.getElementById("page1").classList.remove("active");
            document.getElementById("letterPage").classList.add("active");
        };
    } else {
        alert("Wrong code baby ♥ hint: we will have it matching once we are married (.... bridge)");
    }
}

// RELATIONSHIP COUNTER
const startDate = new Date("2025-06-23"); // ✨ YOUR ANNIVERSARY ✨

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;

    document.getElementById("counter").innerText =
        `${years} years, ${months} months, ${remainingDays} days 💕`;
}

setInterval(updateCounter, 1000); // updates every second


// PAGE 3 FEATURES
function openMusic() {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("musicPage").classList.add("active");
}


function openScreenshots() {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("screenshotsPage").classList.add("active");
}


function openGame() {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("gamePage").classList.add("active");
}


function openChristmasLetter() {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("christmasLetter").classList.add("active");
}
function openLink(url) {
    window.open(url, "_blank");
}
document.getElementById("codeInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkCode();
    }
});
function checkAnswer(num, correctAnswer) {
    const input = document.getElementById(`answer${num}`);
    const result = document.getElementById(`result${num}`);

    const userAnswer = input.value.trim().toLowerCase();
    const correct = correctAnswer.toLowerCase();

    input.disabled = true;

    if (userAnswer === correct) {
        result.textContent = "Correct ruhum 💖";
        result.style.color = "green";
    } else {
        result.textContent = `Ağlıyorum aaaaaaşkımmmmmmmm, the correct answer is "${correctAnswer}" 💖`;
        result.style.color = "red";
    }
}

