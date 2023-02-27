/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados 
(investigar cómo en MDN).
*/

const $botonCalcularIntegrantes = document.querySelector('#calcular-integrantes')
const $botonReiniciarCalculosEdad = document.querySelector('#reiniciar-calculos-edad');
const $botonCalcularEdad = document.querySelector('#calcular-edad');
const $resultado = document.querySelector('#resultado');

$botonCalcularIntegrantes.onclick = function() {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    borrarIntegrantes();
    agregarIntegrantes(cantidadIntegrantes);

    return false;
}

$botonReiniciarCalculosEdad.onclick = function() {
    borrarIntegrantes();
    ocultarBotones();
    ocultarResultado();
    return false;
}

$botonCalcularEdad.onclick = function() {
    const $arrayEdades = document.querySelectorAll('#integrantes input');
    const $mayorEdad = document.querySelector('#mayor-edad');
    const $menorEdad = document.querySelector('#menor-edad');
    const $promedioEdad = document.querySelector('#promedio-edad');
    
    let arrayEdades = [];
    for (let i=0; i<$arrayEdades.length;i++) {
        arrayEdades.push(Number($arrayEdades[i].value));
    }
    
    mostrarResultado();
    $mayorEdad.innerText = `La edad mas alta es: ${calcularMayorEdad(arrayEdades)}`;
    $menorEdad.innerText = `La edad mas baja es: ${calcularMenorEdad(arrayEdades)}`;
    $promedioEdad.innerText = `El promedio de edad es:  ${calcularpromedioEdad(arrayEdades)}`;

    return false;
}

