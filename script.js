document.addEventListener("DOMContentLoaded", function () {
    // Animação da linha do tempo
    const events = document.querySelectorAll(".event");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

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
    checkScroll();
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

    toggleButton();
});

// Forms
document.addEventListener("DOMContentLoaded", function() {
    // Verifique se o botão de dropdown existe na página
    const dropdownBtn = document.querySelector('.dropdown-btn');

    // Só adicionar o event listener se o botão existir
    if (dropdownBtn) {
        const dropdownContent = document.querySelector('.dropdown-content');

        dropdownBtn.addEventListener('click', () => {
            // Alterna a visibilidade do conteúdo do dropdown
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }
});

// Menu burguer
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("ativo");
}

// Aguarde o DOM carregar antes de executar o script
document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Verifica se os elementos existem antes de adicionar o evento
    if (dropdownBtn && dropdownContent) {
        dropdownBtn.addEventListener('click', () => {
            dropdownContent.classList.toggle('show');
        });
    }
});