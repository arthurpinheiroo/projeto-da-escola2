

document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="about"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "sobre-nos.html"; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const quizLink = document.querySelector('[data-target="home"]'); // Agora, "quiz" está em minúsculas

    quizLink.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        
        // Redireciona para outra página HTML com o quiz
        window.location.href = "index.html"; 
    });
});

// Adiciona um evento de clique ao botão "Começar Quiz"
document.getElementById('quiz-btn').addEventListener('click', function() {
    const infoBox = document.getElementById('info-box');
    if (infoBox) {
        infoBox.classList.add('show'); // Adiciona a classe show para exibir com animação
    }
});

// Adiciona um evento de clique ao botão "Sair" para ocultar o info-box
document.querySelector('.sair').addEventListener('click', function() {
    const infoBox = document.getElementById('info-box');
    if (infoBox) {
        infoBox.classList.remove('show'); // Remove a classe show para ocultar com animação
    }
});

// Adiciona um evento de clique ao botão "Continuar" para ocultar o info-box
document.querySelector('.continuar').addEventListener('click', function() {
    const infoBox = document.getElementById('info-box');
    if (infoBox) {
        infoBox.classList.remove('show'); // Remove a classe show para ocultar com animação
    }
});

// Adiciona um evento de clique ao botão "Continuar" para ocultar o info-box e redirecionar
document.querySelector('.continuar').addEventListener('click', function() {
    const infoBox = document.getElementById('info-box');
    if (infoBox) {
        infoBox.classList.remove('show'); // Remove a classe show para ocultar com animação
        // Redireciona para outra página
        window.location.href = 'quiz.html'; // Substitua 'outra-pagina.html' pelo URL da página para a qual deseja redirecionar
    }
});