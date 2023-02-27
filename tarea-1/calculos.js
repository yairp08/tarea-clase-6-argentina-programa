function agregarIntegrante (indice) {
    const $div = document.createElement('div');
    const $label = document.createElement('label');
    const $input = document.createElement('input');
    
    $div.id = 'integrante';
    
    $label.innerText = 'Edad de familiar n ' + (indice+1);
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);

    mostrarBotones();
}

function agregarIntegrantes (cantidadIntegrantes) {
    for (let i=0; i<cantidadIntegrantes; i++) {
        agregarIntegrante(i);
    }
}

function borrarIntegrantes () {
    const $integrante = document.querySelectorAll('#integrante');
    for (let i=0; i<$integrante.length; i++) {
        $integrante[i].remove();
    }
}

function mostrarBotones () {
    $botonCalcularEdad.style.display='block';
    $botonReiniciarCalculosEdad.style.display='block';
    
}

function ocultarBotones () {
    $botonCalcularEdad.style.display =  'none';
    $botonReiniciarCalculosEdad.style.display = 'none';
}

function mostrarResultado () {
    $resultado.style.display = 'block'; 
}

function ocultarResultado () {
    $resultado.style.display= 'none';
}

function calcularMayorEdad (array) {
    let edadMayor = array[0];
    for (let i=1; i<array.length;i++) {
        if (edadMayor < array[i]) {
            edadMayor = array[i];
        }
    }
    return edadMayor;
}

function calcularMenorEdad (array) {
    let edadMenor = array[0];
    for (let i=0; i<array.length;i++) {
        if (edadMenor > array[i]) {
            edadMenor = array[i];
        }
    }
    return edadMenor;
}

function calcularpromedioEdad (array) {
    let sumaTotal = 0
    for (let i=0; i<array.length; i++) {
        sumaTotal += array[i];
    }
    return sumaTotal/array.length;
}

