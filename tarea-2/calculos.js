function agregarIntegrante() {
    integrante++;
    
    const $div = document.createElement('div');
    const $label = document.createElement('label');
    const $input = document.createElement('input');
    
    $div.id = 'integrante';
    $label.innerText = 'Ingresa el salario anual del integrante Nº ' + (integrante);
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    $integrantes.append($div);
}

function quitarIntegrante() {
    if (integrante > 0) {
        $integrantes.removeChild($integrantes.lastChild);
        integrante--;
    }
    return false;
}

function cambiarDisplayBotonCalcular() {
    if (integrante > 0) {
        $botonCalcular.style.display = 'block';
    }
    else {
        $botonCalcular.style.display = 'none';
    }
}

function mostrarResultado () {
    $resultado.style.display = 'block';
}

function ocultarResultado() {
    $resultado.style.display = 'none';
}

function calcularResultado () {
    const $mayorSalarioAnual = document.querySelector('#mayor-salario-anual');
    const $menorSalarioAnual = document.querySelector('#menor-salario-anual');
    const $salarioAnualPromedio = document.querySelector('#salario-anual-promedio');
    const $salarioMensualPromedio = document.querySelector('#salario-mensual-promedio');

    const $cantidadIntegrantes = document.querySelectorAll('#integrantes input');
    const cantidadIntegrantes = [];

    for (let i=0;i<$cantidadIntegrantes.length;i++) {
        cantidadIntegrantes.push(Number($cantidadIntegrantes[i].value));
    }

    $mayorSalarioAnual.innerText = `El mayor salario anual es: ${calcularMayor(cantidadIntegrantes)}`;
    $menorSalarioAnual.innerText = `El menor salario anual es: ${calcularMenor(cantidadIntegrantes)}`;
    $salarioAnualPromedio.innerText = `El salario anual promedio es: ${calcularPromedio(cantidadIntegrantes)}`;
    $salarioMensualPromedio.innerText = `El salario mensual promedio es: ${calcularPromedio(cantidadIntegrantes)/12}`;
}


function calcularMayor(array) {
    let numeroMayor = array[0];
    for (let i=0;i<array.length;i++) {
        if (array[i] > 0 && numeroMayor < array[i]) {
            numeroMayor = array[i];
        }
    }
    return numeroMayor;
}

function calcularMenor(array) {
    let numeroMenor = array[0];
    for (let i=0;i<array.length;i++) {
        if (array[i] > 0 && numeroMenor > array[i]) {
            numeroMenor = array[i];
        }
    }
    return numeroMenor;
}

function calcularPromedio(array) {
    let sumaTotal = 0;
    let promedio = 0;
    for (let i=0; i<array.length; i++) {
        if (array[i] > 0) {
            sumaTotal += array[i];
            promedio++;
        }
    }

    return sumaTotal/promedio;
}

