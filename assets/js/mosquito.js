alert("Mosquito script loaded!");

function createMosquito() {
    const mosquito = document.createElement("img");
    mosquito.src = "assets/img/mosquito.png"; // Make sure you have a mosquito image
    mosquito.classList.add("mosquito");

    // Set a random position
    mosquito.style.position = "absolute";
    mosquito.style.left = Math.random() * window.innerWidth + "px";
    mosquito.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(mosquito);

    // Make mosquitoes fly around randomly
    function moveMosquito() {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;

        mosquito.style.transform = `translate(${randomX}px, ${randomY}px)`;
        mosquito.style.animation = "mosquitoFlight 1s infinite linear";
    }

    setInterval(moveMosquito, 1000); // Move every second

    // Remove mosquito after 10 seconds
    setTimeout(() => {
        mosquito.remove();
    }, 10000);
}

// Generate mosquitoes at random intervals
setInterval(createMosquito, 2000);
