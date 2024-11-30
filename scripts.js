//TEAM MEMBERS
document.addEventListener("DOMContentLoaded", () => {
    const contactUsButton = document.getElementById("contact-us-button");

    contactUsButton.addEventListener("click", () => {
        const contactSection = document.getElementById("contact-us");

        contactSection.scrollIntoView({
            behavior: "smooth", 
            block: "start" 
                });

        contactSection.style.transition = "background-color 0.5s ease";
        contactSection.style.backgroundColor = "#d3f9d8"; 
        setTimeout(() => {
            contactSection.style.backgroundColor = "";
        }, 1500);
    });
});

//CODE ART
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("art-canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 500;

    let isDrawing = false; 
    let lastX = 0; 
    let lastY = 0; 
    let currentColor = "#000000"; 
    let lineWidth = 5; 
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));

    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;

        ctx.strokeStyle = currentColor;
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    const colorPicker = document.getElementById("color-choice");
    colorPicker.addEventListener("input", (e) => {
        currentColor = e.target.value;
    });

    const brushSize = document.getElementById("brushsize");
    brushSize.addEventListener("input", (e) => {
        lineWidth = e.target.value;
    });

    const clearButton = document.getElementById("clear-canvas");
    clearButton.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});

//HOUR OF CODE

var video = document.getElementById("hourofcodevideo");
var button = document.getElementById("player");

function myFunction() {
  if (video.paused) {
    video.play();
    button.innerHTML = "Pause";
  } else {
    video.pause();
    button.innerHTML = "Play";
  }
}
