const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Silvio Santos está planejando um novo programa de televisão. Como ele deve abordar o formato do programa?",
        alternativas: [
            {
                texto: "Criar um formato inovador e interativo com participação do público",
                afirmacao: "Silvio decidiu por um programa interativo, que envolvia o público em tempo real e foi um grande sucesso."
            },
            {
                texto: "Seguir um formato tradicional com entrevistas e convidados",
                afirmacao: "O formato tradicional foi mantido, mas o programa teve uma recepção morna por não oferecer novidades."
            }   
        ]
    },
    {
        enunciado: "Qual deve ser o foco principal do novo programa?",
        alternativas: [
            {
                texto: "Entretenimento e diversão para todas as idades",
                afirmacao: "O foco no entretenimento trouxe um público diversificado e o programa se tornou um sucesso."
            },
            {
                texto: "Discussões sérias e debates sobre temas atuais",
                afirmacao: "O foco em debates não atraiu a audiência esperada e o programa teve uma recepção modesta."
            }
        ]
    },
    {
        enunciado: "Como Silvio deve promover o novo programa para atrair mais audiência?",
        alternativas: [
            {
                texto: "Usar campanhas publicitárias em redes sociais e TV",
                afirmacao: "A estratégia de marketing nas redes sociais e na TV trouxe um grande aumento na audiência."
            },
            {
                texto: "Apostar em promoções e sorteios com grandes prêmios",
                afirmacao: "Os sorteios foram um sucesso inicial, mas a audiência diminuiu após a promoção."
            }
        ]
    },
    {
        enunciado: "Qual deve ser a abordagem para os convidados do programa?",
        alternativas: [
            {
                texto: "Convidar personalidades famosas e influentes",
                afirmacao: "Convidar personalidades famosas atraiu grandes audiências e aumentou a popularidade do programa."
            },
            {
                texto: "Convidar pessoas comuns com histórias inspiradoras",
                afirmacao: "As histórias inspiradoras foram bem recebidas, mas não atraíram tantas pessoas quanto esperado."
            }
        ]
    },
    {
        enunciado: "Como Silvio pode garantir que o programa continue relevante ao longo do tempo?",
        alternativas: [
            {
                texto: "Fazer constantes atualizações e ajustes baseados no feedback do público",
                afirmacao: "A adaptação contínua com base no feedback garantiu que o programa permanecesse relevante e popular."
            },
            {
                texto: "Manter o mesmo formato e estilo sem mudanças",
                afirmacao: "A falta de inovação levou a uma queda gradual na audiência ao longo do tempo."
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "O novo programa de Silvio Santos foi um sucesso devido às escolhas acertadas feitas durante o planejamento e promoção. Aqui está o resumo das decisões que levaram ao sucesso:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();
