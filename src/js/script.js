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

//RELOGIO MUNDE;
