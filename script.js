document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        events.forEach(event => {
            const eventTop = event.getBoundingClientRect().top;
            if (eventTop < triggerBottom) {
                event.style.opacity = "1";
                event.style.transform = "translateX(0)";
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Executa no carregamento da página
});
