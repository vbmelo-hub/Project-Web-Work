document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        events.forEach((event, index) => {
            const eventTop = event.getBoundingClientRect().top;

            if (eventTop < triggerBottom) {
                event.style.opacity = "1";
                event.style.transform = "translateX(0)";
            }
        });

     // Ativar os últimos itens mesmo sem scroll extra
     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        events.forEach(event => {
            event.style.opacity = "1";
            event.style.transform = "translateX(0)";
        });
    }
}

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Executa no carregamento da página
});
