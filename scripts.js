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

    // Set canvas size
    canvas.width = 800;
    canvas.height = 500;

    let isDrawing = false; // Tracks if the user is drawing
    let lastX = 0; // Previous X coordinate
    let lastY = 0; // Previous Y coordinate
    let currentColor = "#000000"; // Default color
    let lineWidth = 5; // Default brush size

    // Start drawing
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    // Stop drawing
    canvas.addEventListener("mouseup", () => (isDrawing = false));
    canvas.addEventListener("mouseout", () => (isDrawing = false));

    // Drawing on the canvas
    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;

        // Set stroke styles
        ctx.strokeStyle = currentColor;
        ctx.lineWidth = lineWidth;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";

        // Draw the line
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

        // Update the last positions
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    // Handle color changes
    const colorPicker = document.getElementById("color-choice");
    colorPicker.addEventListener("input", (e) => {
        currentColor = e.target.value;
    });

    // Handle brush size changes
    const brushSize = document.getElementById("brushsize");
    brushSize.addEventListener("input", (e) => {
        lineWidth = e.target.value;
    });

    // Clear the canvas
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
