// ============================================
// EFECTO MÁQUINA DE ESCRIBIR
// ============================================
const tituloOriginal = "¡Feliz cumpleaños, amiga!";
let i = 0;

function escribirTitulo() {
    const tituloElemento = document.getElementById('titulo-escritura');
    if (i < tituloOriginal.length) {
        tituloElemento.innerHTML += tituloOriginal.charAt(i);
        i++;
        setTimeout(escribirTitulo, 80);
    }
}

window.addEventListener('load', () => {
    escribirTitulo();
});

// ============================================
// CORAZONES FLOTANTES (FONDO)
// ============================================
const corazonesContainer = document.getElementById('corazones-container');
const corazones = ['❤️', '💖', '💗', '💓', '💕', '💝', '🌸', '🌺'];

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
    corazon.style.left = Math.random() * 100 + '%';
    corazon.style.fontSize = (15 + Math.random() * 25) + 'px';
    corazon.style.animationDuration = (8 + Math.random() * 8) + 's';
    corazon.style.animationDelay = Math.random() * 5 + 's';
    corazonesContainer.appendChild(corazon);
    
    setTimeout(() => {
        if (corazon.parentNode === corazonesContainer) {
            corazon.remove();
        }
    }, 14000);
}

// Crear corazones continuamente
setInterval(() => {
    if (corazonesContainer.children.length < 40) {
        crearCorazon();
    }
}, 800);

// ============================================
// GLOBOS Y CONFETI
// ============================================
const container = document.getElementById('globos-container');

function crearGlobo() {
    if (!container) return;
    const globo = document.createElement('div');
    globo.classList.add('globo');
    globo.style.left = Math.random() * window.innerWidth + 'px';
    const duracion = 6 + Math.random() * 4;
    globo.style.animationDuration = duracion + 's';
    globo.style.animationDelay = Math.random() * 6 + 's';
    const colores = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#db7093'];
    globo.style.background = `linear-gradient(135deg, ${colores[Math.floor(Math.random() * colores.length)]}, #d60043)`;
    container.appendChild(globo);
    setTimeout(() => globo.remove(), (duracion + 6) * 1000);
}

function crearConfeti() {
    if (!container) return;
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');
    confeti.style.left = Math.random() * window.innerWidth + 'px';
    confeti.style.top = '-10px';
    const colores = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#db7093', '#ff6347'];
    confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    const duracion = 4 + Math.random() * 4;
    confeti.style.animationDuration = duracion + 's';
    confeti.style.animationDelay = Math.random() * 6 + 's';
    container.appendChild(confeti);
    setTimeout(() => confeti.remove(), (duracion + 6) * 1000);
}

function lanzarGlobosYConfeti() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => crearGlobo(), i * 100);
        setTimeout(() => crearConfeti(), i * 60);
    }
}

// ============================================
// BOTÓN SUBIR
// ============================================
function scrollAndReload() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => location.reload(), 500);
}

// ============================================
// RELOJ ANALÓGICO
// ============================================
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours() % 12;
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const horaDeg = (horas * 30) + (minutos * 0.5);
    const minutoDeg = (minutos * 6);
    const segundoDeg = (segundos * 6);
    const horaElem = document.querySelector('.manecilla.hora');
    const minutoElem = document.querySelector('.manecilla.minuto');
    const segundoElem = document.querySelector('.manecilla.segundo');
    if (horaElem) horaElem.style.transform = `translateX(-50%) rotate(${horaDeg}deg)`;
    if (minutoElem) minutoElem.style.transform = `translateX(-50%) rotate(${minutoDeg}deg)`;
    if (segundoElem) segundoElem.style.transform = `translateX(-50%) rotate(${segundoDeg}deg)`;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

// ============================================
// CONTADOR DE CUMPLEAÑOS
// ============================================
function actualizarContador() {
    const contador = document.getElementById('contador-cumple');
    if (!contador) return;
    const ahora = new Date();
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const diaSemana = diasSemana[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();
    let proximoCumple = new Date(año, 5, 18, 0, 0, 0);
    if (ahora > proximoCumple) proximoCumple = new Date(año + 1, 5, 18, 0, 0, 0);
    const diff = proximoCumple - ahora;
    const segundosTotales = Math.floor(diff / 1000);
    const diasRestantes = Math.floor(segundosTotales / (3600 * 24));
    const horasRestantes = Math.floor((segundosTotales % (3600 * 24)) / 3600);
    const minutosRestantes = Math.floor((segundosTotales % 3600) / 60);
    const segundosRestantes = segundosTotales % 60;
    contador.innerHTML = `Hola Andy, hoy es <strong>${diaSemana} ${dia} de ${mes} de ${año}</strong>, faltan <strong>${diasRestantes} días</strong>, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para tu próximo cumpleaños 🎂🎈`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ============================================
// EFECTO TÁCTIL (Vibración y ripple)
// ============================================
function vibrarSiSePuede() {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

document.querySelectorAll('.card-img, .btn-latido, .video-premium').forEach(el => {
    el.addEventListener('touchstart', () => {
        vibrarSiSePuede();
        el.style.transform = 'scale(0.97)';
        setTimeout(() => {
            el.style.transform = '';
        }, 150);
    });
});

// ============================================
// VIDEOS CON EFECTO EXPANDIR
// ============================================
document.querySelectorAll('.video-premium').forEach(video => {
    video.addEventListener('touchstart', () => {
        video.style.transform = 'scale(1.02)';
    });
    video.addEventListener('touchend', () => {
        video.style.transform = '';
    });
});

// ============================================
// INICIALIZACIÓN
// ============================================
window.addEventListener('load', () => {
    lanzarGlobosYConfeti();
    setTimeout(() => {
        if (container) {
            container.style.display = 'none';
            container.innerHTML = '';
            container.style.display = '';
        }
    }, 8000);
});
