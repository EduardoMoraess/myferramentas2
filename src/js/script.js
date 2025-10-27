//CALCULADORA DE PORCENTAGEM;
function calculadoraPorcentagem() {
    const Porcetagem = document.getElementById("porcentagem");
    const ValorReal = document.getElementById("valorReal");
    const Resultado = document.getElementById("resultado");
    const Calculo = document.getElementById("converter");
    const Limpar = document.getElementById("limpar");

    Calculo.addEventListener('click', () => {
        let porcentagem = parseFloat(Porcetagem.value);
        let valorReal = parseFloat(ValorReal.value);

        if (isNaN(valorReal) || isNaN(porcentagem)) {
            alert('Digite apenas numeros!');
            return;
        }

        let calculoPorcentagem = (porcentagem * valorReal) / 100

        Resultado.textContent = `${porcentagem}% de ${valorReal} é ${calculoPorcentagem}`;
    })

    Limpar.addEventListener('click', () => {
        Porcetagem.value = '';
        ValorReal.value = '';
        Resultado.textContent = '';
    })
}
calculadoraPorcentagem();
//FINALIZADA COM SUCESSO;

//CONVERSOR DE MOEDAS INTERNACIONAIS
async function converter() {
    const valorUSD = parseFloat(document.getElementById("valorUSD").value);
    const resultados = document.getElementById("resultados");

    if (isNaN(valorUSD) || valorUSD <= 0) {
        resultados.textContent = "Digite um valor válido.";
        return;
    }

    try {
        const resposta = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
        const dados = await resposta.json();

        const cotacaoBRL = dados.rates.BRL;
        const cotacaoEUR = dados.rates.EUR;

        const emReais = valorUSD * cotacaoBRL;
        const emEuros = valorUSD * cotacaoEUR;

        resultados.innerHTML = `
          💵 ${valorUSD.toFixed(2)} USD equivale a:<br>
          💶 ${emEuros.toFixed(2)} EUR<br>
          🇧🇷 R$ ${emReais.toFixed(2)} BRL
        `;
    } catch (erro) {
        resultados.textContent = "Erro ao obter as cotações. Tente novamente.";
    }
}

//Calculadora de IMC
function CalculadoraIMC() {
    const Resultado = document.getElementById('resultado');
    const Calcular = document.getElementById('calcular');
    const Altura = document.getElementById('altura');
    const Peso = document.getElementById('peso');
    const Esvaziar = document.getElementById('esvaziar');

    const classificacoes = [
        { min: 0, max: 18.5, texto: "Abaixo do peso" },
        { min: 18.5, max: 25, texto: "Peso normal" },
        { min: 25, max: 30, texto: "Sobrepeso" },
        { min: 30, max: 35, texto: "Obesidade grau I" },
        { min: 35, max: 40, texto: "Obesidade grau II" },
        { min: 40, max: Infinity, texto: "Obesidade grau III" }
    ];

    Calcular.addEventListener('click', () => {
        let altura = parseFloat(Altura.value.replace(',', '.'));
        let peso = parseFloat(Peso.value.replace(',', '.'));

        if (!altura || !peso || altura <= 0) {
            Resultado.textContent = "Por favor, insira valores válidos.";
            Resultado.style.color = "orange";
            return;
        }

        let imc = peso / (altura ** 2);
        let faixa = classificacoes.find(f => imc >= f.min && imc < f.max);

        Resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${faixa.texto}`;
        Resultado.style.color = "#f8fafc";
    });

    //? Agora fora do cálculo — só executa uma vez
    Esvaziar.addEventListener('click', () => {
        Altura.value = "";
        Peso.value = "";
        Resultado.textContent = "";
        alert('Tudo esvaziardo com sucesso!')
    });
}
CalculadoraIMC();
