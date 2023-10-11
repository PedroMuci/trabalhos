function calcularViagem() {
   
    var nomeViagem = document.getElementById('nomeViagem').value;
    var kmPercorridos = parseFloat(document.getElementById('kmPercorridos').value);
    var litrosGastos = parseFloat(document.getElementById('litrosGastos').value);
    var valorLitro = parseFloat(document.getElementById('valorLitro').value);

  
    var autonomia = kmPercorridos / litrosGastos;

   
    var valorViagem = litrosGastos * valorLitro;

   
    var valorPorKm = valorViagem / kmPercorridos;

   
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        ${nomeViagem}, sua viagem teve uma autonomia de ${autonomia.toFixed(2)} km/l.<br>
        O valor total da viagem foi de R$${valorViagem.toFixed(2)},<br>
        resultando em um custo de R$${valorPorKm.toFixed(2)} por quilômetro percorrido.
    `;
}