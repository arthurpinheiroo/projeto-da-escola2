const quizData = [
    {
        question: "O que é compostagem e como ela ajuda o meio ambiente?",
        a: "Um método de reciclagem de resíduos eletrônicos",
        b: "Um processo de decomposição de resíduos orgânicos que se transforma em adubo natural",
        c: "Uma técnica de cultivo de plantas geneticamente modificadas",
        d: "Um tipo de plástico biodegradável",
        correct: "B"
    },
    {
        question: "Qual das seguintes ações é a mais eficiente para reduzir o desperdício de água em casa?",
        a: "Lavar o carro todos os dias",
        b: "Usar a máquina de lavar roupas com carga completa e apenas 1 vez na semana",
        c: "Manter a torneira aberta enquanto escova os dentes",
        d: "Deixar o chuveiro ligado enquanto se ensaboa",
        correct: "B"
    },
    {
        question: "Qual é a melhor forma de reduzir a poluição plástica nos oceanos?",
        a: "Jogar plásticos biodegradáveis no mar",
        b: "Reduzir o uso de plásticos descartáveis e reciclar mais",
        c: "Comprar mais produtos de plástico reciclável",
        d: "Jogar plásticos em aterros sanitários",
        correct: "B"
    },
    {
        question: "Qual é a importância de plantar árvores para o meio ambiente?",
        a: "Elas bloqueiam o vento, tornando as áreas mais calmas",
        b: "Árvores ajudam a absorver dióxido de carbono e produzem oxigênio",
        c: "Elas servem apenas como fonte de madeira e papel",
        d: "Elas ajudam na decoração urbana",
        correct: "B"
    },
    {
        question: "Qual das seguintes práticas é considerada uma agricultura sustentável?",
        a: "Uso de pesticidas químicos em larga escala",
        b: "Agricultura de monocultura",
        c: "Agricultura orgânica e rotatividade de culturas",
        d: "Agricultura de desmatamento",
        correct: "C"
    },
    {
        question: "Como o uso de transporte público pode ajudar o meio ambiente?",
        a: "Reduzindo a quantidade de carros nas ruas e diminuindo a poluição do ar",
        b: "Aumentando o tráfego e o tempo de viagem",
        c: "Aumentando a demanda por combustíveis fósseis",
        d: "Reduzindo a quantidade de bicicletas nas ruas",
        correct: "A"
    },
    {
        question: "O que significa “reduzir, reutilizar e reciclar”?",
        a: "Usar mais recursos naturais",
        b: "Reduzir o uso de recursos, reutilizar materiais e reciclar resíduos",
        c: "Comprar mais produtos plásticos",
        d: "Jogar todos os resíduos no lixo comum",
        correct: "B"
    },
    {
        question: "Por que as queimadas florestais são prejudiciais ao meio ambiente?",
        a: "Porque limpam o solo para a construção",
        b: "Porque destroem habitats, liberam gases poluentes e afetam a qualidade do ar",
        c: "Porque deixam o solo mais fértil",
        d: "Porque ajudam na geração de energia elétrica",
        correct: "B"
    },
    {
        question: "Qual é a melhor maneira de apoiar a biodiversidade local em áreas urbanas?",
        a: "Plantar apenas plantas exóticas",
        b: "Cultivar plantas nativas e criar habitats para polinizadores",
        c: "Usar pesticidas para controlar todos os insetos",
        d: "Remover todas as árvores da área urbana",
        correct: "B"
    },
    {
        question: "Como as energias renováveis podem ajudar a combater a mudança climática?",
        a: "Usando combustíveis fósseis para gerar energia",
        b: "Substituindo combustíveis fósseis por fontes limpas como solar e eólica",
        c: "Construindo mais usinas nucleares",
        d: "Aumentando o consumo de eletricidade em horários de pico",
        correct: "B"
    }
];

let currentQuiz = 0;
let score = 0;

// Referências aos elementos do DOM
const questionEl = document.getElementById('question');
const answerOptions = document.querySelectorAll('.answer-option');
const answerBtn = document.getElementById('answerBtn');
const questionsRemainingEl = document.getElementById('questionsRemaining');
const finalScoreEl = document.getElementById('finalScore');
const totalQuestionsEl = document.getElementById('totalQuestions');
const quizContainer = document.querySelector('.quiz-container');
const quizActions = document.querySelector('.quiz-actions');

// Inicializa o quiz após o DOM estar carregado
document.addEventListener("DOMContentLoaded", () => {
    loadQuiz();
});

function loadQuiz() {
    resetState();

    if (currentQuiz < quizData.length) {
        const currentQuizData = quizData[currentQuiz];
        questionEl.textContent = currentQuizData.question;
        answerOptions[0].textContent = currentQuizData.a;
        answerOptions[1].textContent = currentQuizData.b;
        answerOptions[2].textContent = currentQuizData.c;
        answerOptions[3].textContent = currentQuizData.d;

        // Reativa o botão "Responder" após carregar a nova pergunta
        answerBtn.disabled = false;
    }
}

// Limpa os estados anteriores e reseta as opções de resposta
function resetState() {
    answerOptions.forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
        option.style.display = 'block'; // Garante que as opções sejam exibidas
    });
    answerBtn.classList.add('hide');
    questionEl.style.display = 'block'; // Garante que a pergunta seja exibida
}

// Seleciona a resposta clicada
answerOptions.forEach(option => {
    option.addEventListener('click', () => {
        resetState();
        option.classList.add('selected');
        answerBtn.classList.remove('hide'); // Mostra o botão de resposta quando uma opção é selecionada
    });
});

// Verifica a resposta selecionada ao clicar no botão
answerBtn.addEventListener('click', () => {
    const selectedOption = document.querySelector('.answer-option.selected');
    
    if (selectedOption) {
        answerBtn.disabled = true; // Desativa o botão "Responder" logo após o clique
        checkAnswer(selectedOption);
    } else {
        // Exibe um alerta se nenhuma opção for selecionada
        alert("Por favor, selecione uma resposta antes de clicar em 'Responder'.");
    }
});

// Verifica a resposta correta e avança no quiz
function checkAnswer(selectedOption) {
    const selectedAnswer = selectedOption.getAttribute('data-option'); // Obter a resposta selecionada
    const correctAnswer = quizData[currentQuiz].correct.toLowerCase(); // Verificar resposta correta

    if (selectedAnswer === correctAnswer) {
        selectedOption.classList.add('correct');
        score++;
    } else {
        selectedOption.classList.add('incorrect');
    }

    // Carrega a próxima pergunta após 1 segundo
    setTimeout(() => {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            showResults();
        }
    }, 1000);
}

function showResults() {
    // Esconde a pergunta e opções de resposta
    questionEl.style.display = 'none';
    answerOptions.forEach(option => option.style.display = 'none');
    answerBtn.style.display = 'none';

    // Mostra os botões de ação e o texto de resultados
    quizActions.classList.remove('hide'); 
    finalScoreEl.textContent = score;
    totalQuestionsEl.textContent = quizData.length;
}

// Reinicia o quiz
document.getElementById('restartBtn').addEventListener('click', () => {
    score = 0;
    currentQuiz = 0;

    // Mostra novamente a pergunta e opções de resposta
    questionEl.style.display = 'block';
    answerOptions.forEach(option => option.style.display = 'block');
    answerBtn.style.display = 'block';

    quizContainer.classList.remove('hide'); // Mostra o quiz novamente
    quizActions.classList.add('hide'); // Esconde os botões de ação
    loadQuiz();
});

// Evento para sair do quiz
document.getElementById('exitBtn').addEventListener('click', () => {
    alert("Obrigado por jogar! Saindo do quiz.");
    window.location.href = "index.html"; // Apenas para simplificar, recarrega a página
});
