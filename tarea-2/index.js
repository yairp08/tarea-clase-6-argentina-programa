/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
 menor salario anual, salario anual promedio y salario mensual promedio.
Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregarIntegrante = document.querySelector('#agregar-integrante');
const $botonQuitarIntegrante = document.querySelector('#quitar-integrante');
const $botonCalcular = document.querySelector('#calcular-salario');

const $integrantes = document.querySelector('#integrantes');
const $resultado = document.querySelector('#resultado');

let integrante = 0;



$botonAgregarIntegrante.onclick = function() {
    cambiarDisplayBotonCalcular();
    ocultarResultado();
    agregarIntegrante();
    
    return false;
}

$botonQuitarIntegrante.onclick = function() {
    quitarIntegrante();
    ocultarResultado();
    cambiarDisplayBotonCalcular();
    
    return false;
}

$botonCalcular.onclick = function() {
    calcularResultado();
    mostrarResultado();

    return false;
}

