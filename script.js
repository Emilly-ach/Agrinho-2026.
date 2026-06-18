/**
 * ARQUIVO JAVASCRIPT UNIFICADO - CONCURSO AGRINHO
 * Todas as interações do site concentradas de forma organizada.
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Inicializa as funções globais (que funcionam em todas as páginas)
    inicializarMenu();

    // 2. Inicializa funções específicas de cada página
    inicializarFormularioFeedback();
    inicializarSimuladorSustentavel();
    inicializarQuizEcolgico();
});

/* ==========================================================================
   FUNÇÕES GLOBAIS (Funcionam em todo o site)
   ========================================================================== */

function inicializarMenu() {
    // Se quiser colocar alguma animação ou fechar o menu mobile automaticamente
    console.log("Menu global inicializado com sucesso.");
}


/* ==========================================================================
   PÁGINA INICIAL (index.html) - FORMULÁRIO DE FEEDBACK
   ========================================================================== */

function inicializarFormularioFeedback() {
    const formFeedback = document.getElementById("formFeedback");
    const containerMensagem = document.getElementById("mensagemSucesso");

    // O "if" garante que o código SÓ roda se o formulário existir na página atual
    if (formFeedback) {
        formFeedback.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nomeOpiniao").value.trim();
            const tipo = document.getElementById("tipoOpiniao").value;
            const comentario = document.getElementById("comentarioOpiniao").value.trim();
            const radioSelecionado = document.querySelector('input[name="gostouSite"]:checked');

            if (nome === "" || tipo === "" || comentario === "" || !radioSelecionado) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            if (containerMensagem) {
                containerMensagem.innerHTML = `<strong>Obrigado, ${nome}!</strong> Sua sugestão sobre o Agro Sustentável foi registrada. 🌱`;
                containerMensagem.classList.remove("d-none");
            }

            formFeedback.reset();
        });
    }
}


/* ==========================================================================
   OUTRA PÁGINA (Ex: producao_alimentos.html) - COLOQUE SEUS NOVOS CÓDIGOS AQUI
   ========================================================================== */

function inicializarSimuladorSustentavel() {
    // Exemplo de um novo código: Um botão que calcula economia de água na irrigação
    const btnCalcular = document.getElementById("btnCalcularAgua");

    // Novamente, o "if" protege seu código contra erros de página diferente
    if (btnCalcular) {
        btnCalcular.addEventListener("click", function () {
            // ... sua lógica do novo código aqui ...
            alert("Simulação calculada com sucesso para o novo tema!");
        });
    }
}


/* ==========================================================================
   OUTRA PÁGINA (Ex: sustentabilidade.html) - OUTRA INTERAÇÃO
   ========================================================================== */

function inicializarQuizEcolgico() {
    const btnQuiz = document.getElementById("btnResponderQuiz");

    if (btnQuiz) {
        btnQuiz.addEventListener("click", function () {
            // ... lógica de um quiz sobre o meio ambiente ...
        });
    }
}