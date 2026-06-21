// Welcome Button
const button = document.querySelector("nav button");

button.addEventListener("click", () => {
    alert("Welcome to CodeSync!");
});

// Counter Animation
const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {
    let target = parseInt(counter.innerText);
    let count = 0;

    let updateCounter = () => {
        count += Math.ceil(target / 100);

        if(count < target){
            counter.innerText = count + "+";
            requestAnimationFrame(updateCounter);
        }
        else{
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});


const codeText = `const socket = io();

socket.on("code-change", (data) => {
    updateEditor(data);
});

socket.emit("join-room", "room123");`;

const typingElement = document.getElementById("typing-code");

typingElement.textContent = "";

let i = 0;

function typeCode() {
    if (i < codeText.length) {
        typingElement.textContent += codeText.charAt(i);
        i++;
        setTimeout(typeCode, 40);
    }
}

typeCode();
const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach(el => {

        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            el.classList.add("show");
        }

    });

});

const startBtn = document.querySelector(".hero-btn");

startBtn.addEventListener("click", () => {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
});

function showMessage() {
    alert("🚀 Welcome to CodeSync!\n\nFeatures:\n• Live Collaboration\n• Room System\n• Code Execution");
}