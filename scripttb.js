function tabuada() {
    let num = parseInt(document.getElementById('inum').value);
    let Numax = parseInt(document.getElementById('imax').value);
    let mostrar = document.getElementById('imostrar').checked;

    let resultado = "";

    for (let i = 1; i <= Numax; i++) {
        resultado += `<h2>Tabuada do ${i}</h2>`;
        for (let j = 0; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}<br>`;
        }
        resultado += "<br>";
    }

    document.getElementById('dresultado').innerHTML = resultado;
}
