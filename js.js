const anterior = document.getElementById('anterior');
const actual = document.getElementById('actual');
const botones = document.querySelectorAll('.numero');
const signos = document.querySelectorAll('.signo');

const operaciones = new Operaciones();

const mostrar = new Mostrar(anterior, actual);

botones.forEach(boton => {
    boton.addEventListener('click', () => mostrar.add(boton.innerHTML));
});


signos.forEach(boton => {
    boton.addEventListener('click', () => mostrar.definicion(boton.value));
});
