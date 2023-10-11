function calcularIMC() {

    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);


    var imc = peso / (altura * altura);


    var classificacao = "";
    if (imc < 18.5) 
    
    {classificacao = "Abaixo do peso";} 
    
    else 
    
    if (imc >= 18.5 && imc <= 24.9) 
    
    {classificacao = "Peso normal";} 
    
    else 
    
    if (imc >= 25.0 && imc <= 29.9) 
    
    {classificacao = "Pré-obesidade";} 
    
    else 

    if (imc >= 30.0 && imc <= 34.9) 
    
    {classificacao = "Obesidade Grau 1";} 
    
    else 
    
    if (imc >= 35.0 && imc <= 39.9) 
    
    
    {classificacao = "Obesidade Grau 2";} 
    
    else 
    
    {classificacao = "Obesidade Grau 3";}


    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Seu IMC é ${imc.toFixed(3)} e você está classificado como: ${classificacao}`;
}
