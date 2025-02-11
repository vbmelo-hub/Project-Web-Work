document.addEventListener("DOMContentLoaded", function () {
    // Animação da linha do tempo
    const events = document.querySelectorAll(".event");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        events.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            if (eventTop < triggerBottom && event.style.opacity !== "1") {
                event.style.opacity = "1";
                event.style.transform = "translateX(0)";
            }
        });

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            events.forEach(event => {
                event.style.opacity = "1";
                event.style.transform = "translateX(0)";
            });
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Executa no carregamento
});

// Botão de voltar ao topo
document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("voltarTopo");

    function toggleButton() {
        botao.style.display = window.scrollY > 200 ? "block" : "none";
    }

    window.addEventListener("scroll", toggleButton);

    botao.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    toggleButton(); // Garante que o botão não apareça incorretamente no carregamento
});

// Carrossel de imagens
document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelector(".carousel-images");
    const totalSlides = document.querySelectorAll(".carousel-images img").length;
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    let interval;

    function showSlide() {
        images.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide();
    }

    nextButton.addEventListener("click", () => {
        clearInterval(interval);
        nextSlide();
        startAutoSlide();
    });

    prevButton.addEventListener("click", () => {
        clearInterval(interval);
        prevSlide();
        startAutoSlide();
    });

    function startAutoSlide() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    }

    startAutoSlide();
});
