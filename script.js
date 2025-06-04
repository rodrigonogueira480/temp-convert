 function converterCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32;
    console.log(`Temp. em Farenheit = ${tempF} F`);
    /* o return retorna o que é desejado, neste caso a temp convertida que está na variável tempF */
    return tempF;
}
function converterCtoK(tempC) {
    const tempK = tempC + 273.15;
    console.log(`Temp. em Kelvin = ${tempK} K`);
    /* o return retorna o que é desejado, neste caso a temp convertida que está na variável tempK */
    return tempK;
}

function converter(temp) {
    console.log('Ei Clicou!');
    if (temp === 'F') {
        console.log('Converter de F para C');
    /*Parsefloat converte para decimal porque estava vindo como string */ 
    let tempC = parseFloat (document.getElementById('tempC').value);
    console.log(`Temp °C: ${tempC}`);   

    /* Chamando a função que converte de C para F */
    const resultado = converterCtoF(tempC);
    /* Exibe o reultado na tag que possui um id chamado resultado no HTML */
    document.getElementById('resultado').innerHTML = `${resultado} F`;
    /* Limpa o campo de entrada de temperatura */
    document.getElementsByClassName('resultado')[0].style.display = 'flex'

    } else if (temp === 'K') {
    const resultadoK = converterCtoK(tempC);    
    /* Exibe o reultado na tag que possui um id chamado resultadoK no HTML */   
    document.getElementById('resultadoK').innerHTML = `${resultadoK} K`;
    
}

function limpar() {
    console.log('Limpar');
    /* Limpa o campo de entrada de temperatura */
   document.getElementsByClassName('resultado')[0].style.display = 'none'
}






















/* converterCtoF(18)
converterCtoF(30) */


/* function convertCtoK(tempC) {
    
} */