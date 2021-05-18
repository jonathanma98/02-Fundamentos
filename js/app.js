const label = document.querySelector('#contador');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar');

// variable acumulador
let valor = 0;

// acumular
const contador = (numero) => {
    valor += numero;
    label.textContent = valor;
}

// Eventos de botón
sumar.addEventListener('click', () => {
    contador(1);
});

restar.addEventListener('click', () => {
    contador(-1);
});