/* =====================================
   HAPPY BIRTHDAY CHARAN ❤️
   Premium Interactive Script
===================================== */

/* ==========================
   TYPEWRITER EFFECT
========================== */

const typewriterText =
"A journey written by fate, filled with memories and still being written... ❤️";

const typewriterElement = document.getElementById("typewriter");

let charIndex = 0;

function typeWriter() {

    if (!typewriterElement) return;

    if (charIndex < typewriterText.length) {

        typewriterElement.innerHTML += typewriterText.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 60);
    }
}

window.addEventListener("load", () => {

    if (typewriterElement) {

        typewriterElement.innerHTML = "";

        typeWriter();
    }
});


/* ==========================
   MUSIC BUTTON
========================== */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let musicPlaying = false;

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (!musicPlaying) {

            bgMusic.play();

            musicBtn.innerHTML = "⏸ Pause Music";

            musicPlaying = true;

        } else {

            bgMusic.pause();

            musicBtn.innerHTML = "🎵 Play Music";

            musicPlaying = false;
        }
    });
}


/* ==========================
   THINGS I LOVE ABOUT YOU
========================== */

const reasonButtons = document.querySelectorAll(".reason-btn");
const reasonMessage = document.getElementById("reasonMessage");

reasonButtons.forEach(button => {

    button.addEventListener("click", () => {

        const message = button.getAttribute("data-message");

        reasonMessage.innerHTML = `
            ❤️ ${message}
        `;

        reasonMessage.style.opacity = "0";

        setTimeout(() => {

            reasonMessage.style.opacity = "1";

        }, 100);
    });
});


/* ==========================
   FINAL SURPRISE BUTTON
========================== */

const surpriseBtn = document.getElementById("surpriseBtn");
const finalMessage = document.getElementById("finalMessage");

if (surpriseBtn && finalMessage) {

    surpriseBtn.addEventListener("click", () => {

        finalMessage.style.display = "block";

        finalMessage.scrollIntoView({
            behavior: "smooth"
        });

        createHeartBurst();

    });
}


/* ==========================
   FLOATING HEARTS
========================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize =
        Math.random() * 25 + 15 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.opacity = "0.8";

    document.body.appendChild(heart);

    let position = 0;

    const animation = setInterval(() => {

        position++;

        heart.style.transform =
            `translateY(-${position * 5}px)`;

        heart.style.opacity =
            1 - position / 120;

        if (position > 120) {

            clearInterval(animation);

            heart.remove();
        }

    }, 30);
}

setInterval(createHeart, 700);


/* ==========================
   HEART BURST EFFECT
========================== */

function createHeartBurst() {

    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML = "❤️";

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.top =
                Math.random() * 100 + "vh";

            heart.style.fontSize =
                Math.random() * 30 + 20 + "px";

            heart.style.zIndex = "9999";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 3000);

        }, i * 50);
    }
}


/* ==========================
   DAYS TOGETHER COUNTER
========================== */

/*
   CHANGE THIS DATE
   TO YOUR ACTUAL LOVE DATE
*/

const loveDate =
new Date("2026-03-26");

const counter =
document.getElementById("counter");

function updateLoveCounter() {

    if (!counter) return;

    const today = new Date();

    const difference =
        today - loveDate;

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    counter.innerHTML =
        `❤️ ${days} Days Together ❤️`;
}

updateLoveCounter();

setInterval(
    updateLoveCounter,
    1000
);


/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements =
document.querySelectorAll(
    ".story-card, .photo-card, .nav-card, .letter-card, .dream-list div"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop <
            windowHeight - 100) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";
        }
    });
}

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(50px)";

    element.style.transition =
        "all 0.8s ease";
});

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ==========================
   HERO BUTTON SPARKLE
========================== */

const startBtn =
document.querySelector(".start-btn");

if (startBtn) {

    startBtn.addEventListener(
        "mouseenter",
        () => {

            startBtn.style.transform =
                "scale(1.08)";
        }
    );

    startBtn.addEventListener(
        "mouseleave",
        () => {

            startBtn.style.transform =
                "scale(1)";
        }
    );
}


/* ==========================
   CONSOLE SECRET ❤️
========================== */

console.log(
`
❤️ Happy Birthday Charan ❤️

If you're reading this,
you found the hidden message.

You are loved more than
words can ever explain.

— Lakshmi ❤️
`
);
