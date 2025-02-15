// Menu burguer
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("ativo");
}

//Linha do tempo
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

document.addEventListener("DOMContentLoaded", function () {
    // Captura o formulário
    const formulario = document.getElementById("formulario-contato");

    // Verifica se o formulário existe na página antes de executar o restante do código
    if (!formulario) {
        return; // Se o formulário não existir, interrompe a execução do script
    }

    // Cria a mensagem de confirmação
    const mensagemEnviada = document.createElement("p");
    mensagemEnviada.textContent = "Sua mensagem foi enviada com sucesso!";
    mensagemEnviada.style.color = "green";
    mensagemEnviada.style.fontWeight = "bold";
    mensagemEnviada.style.display = "none";
    mensagemEnviada.style.padding = "10px"

    // Insere a mensagem no formulário, logo após o botão
    formulario.appendChild(mensagemEnviada);

    // Adiciona o evento de submissão ao formulário
    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Exibe a mensagem
        mensagemEnviada.style.display = "block";

        // Limpa os campos do formulário após o envio
        formulario.reset();

        // Oculta a mensagem após alguns segundos
        setTimeout(() => {
            mensagemEnviada.style.display = "none";
        }, 5000); // Esconde após 5 segundos
    });
});