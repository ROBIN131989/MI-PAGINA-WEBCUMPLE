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
    setTimeout(() => corazon.remove(), 14000);
}

// Crear corazones continuamente
setInterval(() => {
    if (corazonesContainer.children.length < 40) {
        crearCorazon();
    }
}, 800);

// ============================================
// GLOBOS 3D REALISTAS
// ============================================
const container = document.getElementById('globos-container');

function crearGlobo() {
    if (!container) return;
    const globo = document.createElement('div');
    globo.classList.add('globo');
    const colores = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8'];
    globo.classList.add(colores[Math.floor(Math.random() * colores.length)]);
    globo.style.left = Math.random() * (window.innerWidth - 80) + 'px';
    const duracion = 6 + Math.random() * 5;
    globo.style.animationDuration = duracion + 's';
    globo.style.animationDelay = Math.random() * 4 + 's';
    const escala = 0.7 + Math.random() * 0.6;
    globo.style.transform = `scale(${escala})`;
    container.appendChild(globo);
    setTimeout(() => globo.remove(), (duracion + 4) * 1000);
}

function lanzarGlobos() {
    for (let i = 0; i < 25; i++) {
        setTimeout(() => crearGlobo(), i * 200);
    }
}

// ============================================
// CONFETI
// ============================================
function crearConfeti() {
    if (!container) return;
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');
    confeti.style.left = Math.random() * window.innerWidth + 'px';
    confeti.style.top = '-10px';
    const coloresConfeti = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#db7093', '#ff6347', '#ffd700'];
    confeti.style.backgroundColor = coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)];
    const duracion = 4 + Math.random() * 4;
    confeti.style.animationDuration = duracion + 's';
    confeti.style.animationDelay = Math.random() * 6 + 's';
    container.appendChild(confeti);
    setTimeout(() => confeti.remove(), (duracion + 6) * 1000);
}

function lanzarConfeti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => crearConfeti(), i * 60);
    }
}

// ============================================
// BOTÓN SUBIR (Flecha centrada)
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
    contador.innerHTML = `🎂 Hola Andy, hoy es <strong>${diaSemana} ${dia} de ${mes} de ${año}</strong>, faltan <strong>${diasRestantes} días</strong>, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para tu próximo cumpleaños 🎈✨`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ============================================
// MODAL ZOOM IMÁGENES
// ============================================
function abrirModal(imgSrc) {
    const modal = document.getElementById('modalImagen');
    const modal
