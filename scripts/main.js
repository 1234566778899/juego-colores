let colores = [
    {
        texto: 'ROJO',
        color: 'red'
    },
    {
        texto: 'VERDE',
        color: 'green'
    },
    {
        texto: 'AZUL',
        color: 'blue'
    },
    {
        texto: 'NEGRO',
        color: 'black'
    },
    {
        texto: 'AMARILLO',
        color: 'yellow'
    },
    {
        texto: 'ROSADO',
        color: 'rgb(239,79,144)'
    },
    {
        texto: 'GRIS',
        color: 'gray'
    },
    {
        texto: 'MORADO',
        color: 'violet'
    },
]

let tam = colores.length;
let c1, c2;
let color1, color2;
let puntos = 0;
let enJuego = true;
let time = 300;

function inicio() {
    do {
        color1 = colores[Math.floor(Math.random() * tam)];
        color2 = colores[Math.floor(Math.random() * tam)];
    } while (color1.color == color2.color);
    $('.num').html(`${color1.texto}`);
    $('.num').css('color', `${color2.color}`);
    let aleatorio = Math.floor(Math.random() * 2);
    if (aleatorio == 1) {
        $('.btn-1').css('background-color', `${color1.color}`);
        $('.btn-2').css('background-color', `${color2.color}`);
        c1 = color1.color;
        c2 = color2.color;
    } else {
        $('.btn-1').css('background-color', `${color2.color}`);
        $('.btn-2').css('background-color', `${color1.color}`);
        c1 = color2.color;
        c2 = color1.color;
    }
}
function VerCoincidencia(numero) {
    if (enJuego) {
        if (numero == '1') {
            if (c1 == color1.color) puntos++;
            else puntos--;
        } else if (numero == '2') {
            if (c2 == color1.color) puntos++;
            else
                puntos--;
        }
        if (puntos < 0) puntos = 0;
        $('.puntos').html(`Puntos: ${puntos}`);

        inicio();
    }
}

inicio();

let interval = setInterval(() => {
    $('.tiempo').html(`Tiempo: ${Math.floor(time / 10)}`);
    time--;
    if (time <= 0) {
        clearInterval(interval);
        enJuego = false;
    }
}, 100);

window.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowLeft') {
        VerCoincidencia('1');
    } else if (e.key == 'ArrowRight') {
        VerCoincidencia('2');
    }
});