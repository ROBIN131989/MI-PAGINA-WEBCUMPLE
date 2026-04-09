// ============================================
// GLOBOS Y CONFETI (VERSIÓN MEJORADA)
// ============================================
const container = document.getElementById('globos-container');

function crearGlobo() {
    if (!container) return;
    const globo = document.createElement('div');
    globo.classList.add('globo');

    const posX = Math.random() * window.innerWidth;
    globo.style.left = posX + 'px';

    const duracion = 6 + Math.random() * 4;
    globo.style.animationDuration = duracion + 's';

    const retraso = Math.random() * 6;
    globo.style.animationDelay = retraso + 's';

    // Colores variados para globos
    const colores = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#db7093', '#ff85b3'];
    globo.style.background = `linear-gradient(135deg, ${colores[Math.floor(Math.random() * colores.length)]}, #d60043)`;

    container.appendChild(globo);

    setTimeout(() => {
        if (globo.parentNode === container) {
            container.removeChild(globo);
        }
    }, (duracion + retraso) * 1000);
}

function crearConfeti() {
    if (!container) return;
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');

    confeti.style.left = Math.random() * window.innerWidth + 'px';
    confeti.style.top = '-10px';

    // Colores variados para confeti
    const colores = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#db7093', '#ff6347', '#ffd700'];
    confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];

    const duracion = 4 + Math.random() * 4;
    confeti.style.animationDuration = duracion + 's';

    const retraso = Math.random() * 6;
    confeti.style.animationDelay = retraso + 's';

    container.appendChild(confeti);

    setTimeout(() => {
        if (confeti.parentNode === container) {
            container.removeChild(confeti);
        }
    }, (duracion + retraso) * 1000);
}

function crearMuchosGlobosYConfeti(cantidadGlobos = 25, cantidadConfeti = 50) {
    for (let i = 0; i < cantidadGlobos; i++) {
        setTimeout(() => crearGlobo(), i * 50);
    }
    for (let j = 0; j < cantidadConfeti; j++) {
        setTimeout(() => crearConfeti(), j * 30);
    }
}

// ============================================
// BOTÓN SUBIR Y RECARGAR
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

    if (horaElem) horaElem.style.transform = `rotate(${horaDeg}deg)`;
    if (minutoElem) minutoElem.style.transform = `rotate(${minutoDeg}deg)`;
    if (segundoElem) segundoElem.style.transform = `rotate(${segundoDeg}deg)`;
}

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
    if (ahora > proximoCumple) {
        proximoCumple = new Date(año + 1, 5, 18, 0, 0, 0);
    }

    const diff = proximoCumple - ahora;
    const segundosTotales = Math.floor(diff / 1000);
    const diasRestantes = Math.floor(segundosTotales / (3600 * 24));
    const horasRestantes = Math.floor((segundosTotales % (3600 * 24)) / 3600);
    const minutosRestantes = Math.floor((segundosTotales % 3600) / 60);
    const segundosRestantes = segundosTotales % 60;

    contador.innerHTML = `Hola Andy, hoy es <strong>${diaSemana} ${dia} de ${mes} de ${año}</strong>, faltan <strong>${diasRestantes} días</strong>, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para tu próximo cumpleaños 🎂🎈, mientras todo este bien.`;
}

// ============================================
// VIDEOS AL HACER SCROLL (EFECTO VISIBLE)
// ============================================
function iniciarObservadorVideos() {
    const videos = document.querySelectorAll('.videos-vertical video');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    videos.forEach(video => observer.observe(video));
}

// ============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================
window.addEventListener('load', () => {
    // Lanzar globos y confeti
    crearMuchosGlobosYConfeti(25, 50);

    // Limpiar después de 8 segundos
    setTimeout(() => {
        if (container) {
            container.style.display = 'none';
            container.innerHTML = '';
            container.style.display = '';
        }
    }, 8000);

    // Iniciar observador de videos
    iniciarObservadorVideos();

    // Iniciar reloj
    actualizarReloj();

    // Iniciar contador
    actualizarContador();
});

// Actualizar reloj cada segundo
setInterval(actualizarReloj, 1000);

// Actualizar contador cada segundo
setInterval(actualizarContador, 1000);
