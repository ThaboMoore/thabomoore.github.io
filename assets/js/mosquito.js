function createMosquito() {
    const mosquito = document.createElement("img");
    mosquito.src = "/assets/img/mosquito.png"; // Adjust the path if needed
    mosquito.classList.add("mosquito");

    // Set random starting position
    mosquito.style.position = "absolute";
    mosquito.style.left = Math.random() * window.innerWidth + "px";
    mosquito.style.top = Math.random() * window.innerHeight + "px";
    mosquito.style.width = "40px"; // Adjust mosquito size if needed
    mosquito.style.pointerEvents = "none"; // So they don’t block clicks

    document.body.appendChild(mosquito);

    // Function to move the mosquito in a chaotic flight pattern
    function moveMosquito() {
        let randomX = (Math.random() - 0.5) * 500; // Move further left/right
        let randomY = (Math.random() - 0.5) * 500; // Move further up/down
        let rotation = Math.random() * 360; // Random rotation for a realistic effect
        let speed = Math.random() * 4 + 2; // Random speed variation

        mosquito.style.transition = `transform ${speed}s linear`;
        mosquito.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${rotation}deg)`;
    }

    // Move every 1.5 to 3 seconds in a chaotic path
    let moveInterval = setInterval(moveMosquito, Math.random() * 1500 + 1500);

    // Remove the mosquito after 10-15 seconds (flies away naturally)
    setTimeout(() => {
        clearInterval(moveInterval); // Stop movement
        mosquito.style.transition = "opacity 2s ease-out, transform 3s linear";
        mosquito.style.opacity = "0";
        mosquito.style.transform = `translate(${Math.random() * 2000 - 1000}px, -200px) rotate(${Math.random() * 360}deg)`; // Fly off screen

        setTimeout(() => mosquito.remove(), 3000); // Fully remove from DOM
    }, Math.random() * 5000 + 10000); // Random duration for variety
}

// Generate mosquitoes at random intervals (every 1.5 to 3 seconds)
setInterval(createMosquito, Math.random() * 1500 + 1500);

