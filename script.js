const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as implicações da IA na privacidade dos dados pessoais de seus usuarios, corremos riscos usando tais?",
        alternativas: [
            {
                texto: "A IA, embora possa desempenhar um papel fundamental na detecção e prevenção de ameaças à segurança ela pode fazer o contrario?",
                afirmacao: "sim, hoje existem virus introduzidos de diversas formas por exemplo em links. Colocado de forma casual no meio de respostas ou perguntas podem pegar desavisados."
            },
            {
            texto: "Também pode ser usada como uma ferramenta para a invasão de privacidade?",
                afirmacao: "pode sim, afinal em maos erradas tudo se torna uma arma em potencial"
            }
        ]
    },
    {
        enunciado: "Como podemos preservar a tradição e a cultura no atual contexto regido pelas inteligências artificiais",
        alternativas: [
            {
                texto: "Realizando pesquisas para saber sobre suas tradições e culturas?",
                afirmacao: "podemos usar a inteligencia artificial ao favor do conhecimento, usando de forma criativa e produtiva"
            },
            {
                texto: "é possivel trabalhar a influência das tradições e culturas em nosso cotidiano?",
                afirmacao: "com o uso da IA podemos usar a mesma para duvidas de culturas e habitos de um pais ou ate mesmo da nossa rotina. "
            }
        ]
    },
    {
        enunciado: "Essas formas sao um consumo inteligente das famosas IAs?",
        alternativas: [
            {
                texto: "Buscando informação na legislação da saúde?",
                afirmacao: "sim, um otimo exemplo."
            },
            {
                texto: "Buscando respostas para uma duvida em comum?",
                afirmacao: "sim, mas vale a pena conferir afinal as IAs tambem estao sujeitas a erros. "
            }
        ]
    }
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();