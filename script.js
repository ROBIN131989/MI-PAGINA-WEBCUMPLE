// ============================================
// SISTEMA DE VERSIONES ANUALES
// Cada 18 de junio cambia a la versión nueva
// y la anterior queda como ventanita recuerdo
// ============================================

const VERSIONES = {
  2025: {
    año: 2025,
    edad: 21,
    anosAmistad: 8,
    tituloEscritura: '¡Feliz cumpleaños, amiga!',
    subtitulo: 'Celebrando 8 años de amistad 💖',
    h2: '🎈 ¿21 años ya? WOOW 🎈',
    sorpresaTitulo: '💖 ¡Sorpresa! 💖',
    sorpresaTexto1: 'Eres una persona increíble y valoro mucho nuestra amistad.',
    sorpresaTexto2: 'Que este nuevo año de vida te traiga todo lo que mereces.',
    sorpresaTexto3: '¡Te quiero mucho! 🎂🎈',
    colorClass: '',
    corazones: ['❤️','💖','💗','💓','💕','💝','🌸','🌺'],
    coloresGlobo: ['color1','color2','color3','color4','color5','color6','color7','color8'],
    coloresConfeti: ['#ff69b4','#ffb6c1','#ff1493','#ffc0cb','#db7093','#ff6347','#ffd700'],
    ventanitaEmoji: '💖',
    ventanitaFrase: '¡Feliz cumple, 21 años! 🎂',
    mensaje: `
      <p>Eres alguien muy especial para mí… y uff, cómo han pasado los años...</p>
      <br>Hoy cumples 21; de verdad que si tú no puedes creerlo, pues yo tampoco.
      La verdad es que sí es sorprendente, y aunque hace tiempo que no hablamos tanto como antes,
      no podía dejar pasar esta fecha sin escribirte algo. Porque la verdad es que no todos los días
      cumple años una persona con la que compartiste tanto y que sigue teniendo un lugar especial
      en tu vida, aunque el tiempo y la distancia se hayan hecho presentes interfiriendo :(.</br>
      <br>Han pasado ya 8 años desde que nos conocimos. Ocho. Se dice fácil, pero dentro de esos años
      hay tantas memorias, tantas pláticas, tanto de secu-nenes, pero más han sido en pandemia,
      incluso cuando te puse a leer cosas para mi tarea de catecismo, jaja, unos pasajes bíblicos.
      Han estado risas, momentos buenos y también silencios que, aunque incómodos a veces,
      también formaron parte de nuestra historia, sobre todo en estas últimas fechas, meses.</br>
      <br>Hemos cambiado, y eso es natural. Cada quien ha tomado su camino,
      hemos vivido cosas que nos han transformado, y quizás por eso hoy somos personas distintas
      a las que empezaron esta amistad. Pero eso no borra lo que fuimos ni el aprecio que te tengo.</br>
      <br>Hoy quiero desearte un cumpleaños lleno de cosas reales: tranquilidad, alegría,
      compañía sincera y claridad para lo que venga. Que los 21 te traigan nuevas versiones de
      ti misma, esperando que todas estas sean positivas.</br>
      <p><strong><em>"Lo valioso no se reemplaza, simplemente se guarda en un rincón especial del corazón."</em></strong></p>
      <br>Te mando un abrazo fuerte, de esos que no necesitan palabras, de aquellos que no son de los comunes,
      te mando ese abrazo que se siente en el alma.</br>
    `
  },

  2026: {
    año: 2026,
    edad: 22,
    anosAmistad: 9,
    tituloEscritura: '¡Feliz cumpleaños, amiga! 💜',
    subtitulo: 'Celebrando 9 años de amistad 💜',
    h2: '🎈 ¿22 años ya? ¡No puede ser! 🎈',
    sorpresaTitulo: '💜 ¡Sorpresa! 💜',
    sorpresaTexto1: '22 años y sigues siendo igual de especial para mí.',
    sorpresaTexto2: 'Que este año te traiga todo lo que tu corazón merece.',
    sorpresaTexto3: '¡Con todo el cariño! 🎂💜',
    colorClass: 'version-2026',
    corazones: ['💜','✨','💫','🌸','💎','🔮','💗','🌟'],
    coloresGlobo: ['color-v2026-1','color-v2026-2','color-v2026-3','color-v2026-4','color1','color2'],
    coloresConfeti: ['#9b59b6','#8e44ad','#d7bde2','#a569bd','#c39bd3','#7d3c98','#e8daef'],
    ventanitaEmoji: '💖',
    ventanitaFrase: '¡Feliz cumple, 21 años! 🎂',
    mensaje: `
      <p>Andy, 22 años. Ya hasta suena diferente, ¿no?</p>
      <br>No sé si te das cuenta, pero cada año que pasa me sorprende más la persona en la que
      te has convertido. No es solo que hayas crecido, es que se nota — en cómo hablas,
      en cómo ves las cosas, en cómo navegas la vida aunque a veces no sea tan sencilla.</br>
      <br>Ya son 9 años desde que nos conocimos. Nueve. A veces pienso en aquellos días
      y me da risa todo lo que éramos y todo lo que no sabíamos aún.
      Hemos cambiado tanto los dos, y aun así aquí seguimos, aunque sea desde la distancia.</br>
      <br>Hay algo curioso en la amistad de verdad: no necesita que estés presente todos los días
      para mantenerse. Vive en los recuerdos, en los momentos que compartimos,
      en ese rincón del corazón que nadie más puede ocupar. Y eso, Andy, no lo borra el tiempo ni la distancia.</br>
      <br>Que los 22 te traigan claridad, tranquilidad y muchas razones para sentirte
      orgullosa de lo que eres. Porque tienes más de qué estarlo de lo que crees.
      Este año que empieza hoy es tuyo — aprovéchalo, disfrútalo, vívelo.</br>
      <p><strong><em>"El tiempo cambia muchas cosas, pero no el lugar que tienen las personas que de verdad importan."</em></strong></p>
      <br>Con todo el cariño del mundo, feliz cumpleaños. Un abrazo de esos que se sienten en el alma.</br>
    `
  }

  // PARA AGREGAR 2027: copia el bloque de 2026, cambia año/edad/anosAmistad/mensajes/colorClass
};

// ============================================
// DETECTAR QUÉ VERSIÓN MOSTRAR
// ============================================
function obtenerVersionActual() {
  const ahora = new Date();
  const añosDisponibles = Object.keys(VERSIONES).map(Number).sort((a, b) => b - a);
  for (const año of añosDisponibles) {
    const fechaInicio = new Date(año, 5, 18, 0, 0, 0);
    if (ahora >= fechaInicio) return VERSIONES[año];
  }
  return VERSIONES[añosDisponibles[añosDisponibles.length - 1]];
}

function obtenerVersionAnterior(versionActual) {
  const añosDisponibles = Object.keys(VERSIONES).map(Number).sort((a, b) => a - b);
  const idx = añosDisponibles.indexOf(versionActual.año);
  if (idx > 0) return VERSIONES[añosDisponibles[idx - 1]];
  return null;
}

const VERSION_ACTUAL = obtenerVersionActual();
const VERSION_ANTERIOR = obtenerVersionAnterior(VERSION_ACTUAL);

// ============================================
// APLICAR VERSIÓN A LA PÁGINA
// ============================================
function aplicarVersion() {
  if (VERSION_ACTUAL.colorClass) {
    document.body.classList.add(VERSION_ACTUAL.colorClass);
  }

  const subtitulo = document.getElementById('subtitulo');
  if (subtitulo) subtitulo.textContent = VERSION_ACTUAL.subtitulo;

  const h2 = document.getElementById('mensaje-h2');
  if (h2) h2.textContent = VERSION_ACTUAL.h2;

  const mensajeTexto = document.getElementById('mensaje-texto');
  if (mensajeTexto) mensajeTexto.innerHTML = VERSION_ACTUAL.mensaje;

  const st = document.getElementById('sorpresa-titulo');
  const s1 = document.getElementById('sorpresa-texto1');
  const s2 = document.getElementById('sorpresa-texto2');
  const s3 = document.getElementById('sorpresa-texto3');
  if (st) st.textContent = VERSION_ACTUAL.sorpresaTitulo;
  if (s1) s1.textContent = VERSION_ACTUAL.sorpresaTexto1;
  if (s2) s2.textContent = VERSION_ACTUAL.sorpresaTexto2;
  if (s3) s3.textContent = VERSION_ACTUAL.sorpresaTexto3;

  // Animación suave de entrada en versiones nuevas
  if (VERSION_ACTUAL.año > 2025) {
    document.body.style.opacity = '0';
    setTimeout(() => {
      document.body.style.transition = 'opacity 1.2s ease';
      document.body.style.opacity = '1';
    }, 100);
  }

  if (VERSION_ANTERIOR) crearVentanita(VERSION_ANTERIOR);
}

// ============================================
// VENTANITA DEL AÑO ANTERIOR
// ============================================
function crearVentanita(versionAnterior) {
  const ventana = document.createElement('div');
  ventana.id = 'ventanita-anterior';
  ventana.className = 'ventanita';
  ventana.innerHTML = `
    <div class="ventanita-header">
      <span class="ventanita-titulo">${versionAnterior.ventanitaEmoji} ${versionAnterior.año}</span>
      <button class="ventanita-btn-min" id="btn-min-ventanita" title="Minimizar">—</button>
    </div>
    <div class="ventanita-cuerpo" id="ventanita-cuerpo">
      <p class="ventanita-año-label">${versionAnterior.edad} años 🎂</p>
      <p class="ventanita-frase">${versionAnterior.ventanitaFrase}</p>
      <p class="ventanita-sub">${versionAnterior.anosAmistad} años de amistad 💖</p>
    </div>
  `;
  document.body.appendChild(ventana);

  let minimizado = false;
  const btnMin = document.getElementById('btn-min-ventanita');
  const cuerpo = document.getElementById('ventanita-cuerpo');
  const tituloEl = ventana.querySelector('.ventanita-titulo');

  btnMin.addEventListener('click', () => {
    minimizado = !minimizado;
    if (minimizado) {
      cuerpo.style.display = 'none';
      ventana.classList.add('minimizada');
      btnMin.textContent = versionAnterior.ventanitaEmoji;
      btnMin.title = 'Expandir recuerdo';
      tituloEl.style.display = 'none';
    } else {
      cuerpo.style.display = 'block';
      ventana.classList.remove('minimizada');
      btnMin.textContent = '—';
      btnMin.title = 'Minimizar';
      tituloEl.style.display = 'inline';
    }
  });
}

// ============================================
// EFECTO MÁQUINA DE ESCRIBIR
// ============================================
let charIndex = 0;

function escribirTitulo() {
  const el = document.getElementById('titulo-escritura');
  if (!el) return;
  if (charIndex < VERSION_ACTUAL.tituloEscritura.length) {
    el.innerHTML += VERSION_ACTUAL.tituloEscritura.charAt(charIndex);
    charIndex++;
    setTimeout(escribirTitulo, 80);
  }
}

// ============================================
// CORAZONES FLOTANTES
// ============================================
const corazonesContainer = document.getElementById('corazones-container');

function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  const lista = VERSION_ACTUAL.corazones;
  corazon.innerHTML = lista[Math.floor(Math.random() * lista.length)];
  corazon.style.left = Math.random() * 100 + '%';
  corazon.style.fontSize = (15 + Math.random() * 25) + 'px';
  corazon.style.animationDuration = (8 + Math.random() * 8) + 's';
  corazon.style.animationDelay = Math.random() * 5 + 's';
  corazonesContainer.appendChild(corazon);
  setTimeout(() => corazon.remove(), 14000);
}

setInterval(() => {
  if (corazonesContainer.children.length < 40) crearCorazon();
}, 800);

// ============================================
// GLOBOS
// ============================================
const container = document.getElementById('globos-container');

function crearGlobo() {
  if (!container) return;
  const globo = document.createElement('div');
  globo.classList.add('globo');
  const colores = VERSION_ACTUAL.coloresGlobo;
  globo.classList.add(colores[Math.floor(Math.random() * colores.length)]);
  globo.style.left = Math.random() * (window.innerWidth - 80) + 'px';
  const dur = 6 + Math.random() * 5;
  globo.style.animationDuration = dur + 's';
  globo.style.animationDelay = Math.random() * 4 + 's';
  globo.style.transform = `scale(${0.7 + Math.random() * 0.6})`;
  container.appendChild(globo);
  setTimeout(() => globo.remove(), (dur + 4) * 1000);
}

function lanzarGlobos() {
  for (let i = 0; i < 25; i++) setTimeout(() => crearGlobo(), i * 200);
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
  const cols = VERSION_ACTUAL.coloresConfeti;
  confeti.style.backgroundColor = cols[Math.floor(Math.random() * cols.length)];
  const dur = 4 + Math.random() * 4;
  confeti.style.animationDuration = dur + 's';
  confeti.style.animationDelay = Math.random() * 6 + 's';
  container.appendChild(confeti);
  setTimeout(() => confeti.remove(), (dur + 6) * 1000);
}

function lanzarConfeti() {
  for (let i = 0; i < 50; i++) setTimeout(() => crearConfeti(), i * 60);
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
  const h = document.querySelector('.manecilla.hora');
  const m = document.querySelector('.manecilla.minuto');
  const s = document.querySelector('.manecilla.segundo');
  if (h) h.style.transform = `translateX(-50%) rotate(${(horas * 30) + (minutos * 0.5)}deg)`;
  if (m) m.style.transform = `translateX(-50%) rotate(${minutos * 6}deg)`;
  if (s) s.style.transform = `translateX(-50%) rotate(${segundos * 6}deg)`;
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
  const diasSemana = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const diaSemana = diasSemana[ahora.getDay()];
  const dia = ahora.getDate();
  const mes = meses[ahora.getMonth()];
  const año = ahora.getFullYear();
  const esHoyCumple = ahora.getMonth() === 5 && ahora.getDate() === 18;

  if (esHoyCumple) {
    contador.innerHTML = `🎂 ¡HOY ES TU CUMPLEAÑOS, ANDY! ¡Feliz cumpleaños! 🎉🎈✨`;
    contador.style.fontWeight = 'bold';
    contador.style.fontSize = '1.1rem';
    return;
  }

  let proximoCumple = new Date(año, 5, 18, 0, 0, 0);
  if (ahora >= proximoCumple) proximoCumple = new Date(año + 1, 5, 18, 0, 0, 0);
  const diff = proximoCumple - ahora;
  const seg = Math.floor(diff / 1000);
  const d = Math.floor(seg / (3600 * 24));
  const hh = Math.floor((seg % (3600 * 24)) / 3600);
  const mi = Math.floor((seg % 3600) / 60);
  const sc = seg % 60;
  contador.innerHTML = `🎂 Hola Andy, hoy es <strong>${diaSemana} ${dia} de ${mes} de ${año}</strong>, faltan <strong>${d} días</strong>, ${hh} horas, ${mi} minutos y ${sc} segundos para tu próximo cumpleaños 🎈✨`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ============================================
// MODALES
// ============================================
function abrirModal(imgSrc) {
  document.getElementById('modalImagen').style.display = 'block';
  document.getElementById('modalImg').src = imgSrc;
  vibrarSiSePuede();
}

function cerrarModal() {
  document.getElementById('modalImagen').style.display = 'none';
}

function abrirSorpresa() {
  document.getElementById('modalSorpresa').style.display = 'block';
  vibrarSiSePuede();
  lanzarConfeti();
}

function cerrarSorpresa() {
  document.getElementById('modalSorpresa').style.display = 'none';
}

document.getElementById('btnSorpresa').addEventListener('click', abrirSorpresa);

window.onclick = function(event) {
  const ms = document.getElementById('modalSorpresa');
  const mi = document.getElementById('modalImagen');
  if (event.target === ms) cerrarSorpresa();
  if (event.target === mi) cerrarModal();
};

// ============================================
// MODO OSCURO
// ============================================
const btnModo = document.getElementById('btnModoOscuro');
let modoOscuro = false;

btnModo.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  modoOscuro = !modoOscuro;
  btnModo.innerHTML = modoOscuro ? '☀️' : '🌙';
  vibrarSiSePuede();
});

// ============================================
// VIBRACIÓN
// ============================================
function vibrarSiSePuede() {
  if (navigator.vibrate) navigator.vibrate(50);
}

document.querySelectorAll('.card-img, .btn-latido, .video-premium, .btn-sorpresa, .btn-modo').forEach(el => {
  el.addEventListener('touchstart', () => vibrarSiSePuede());
  el.addEventListener('click', () => vibrarSiSePuede());
});

// ============================================
// VIDEOS
// ============================================
document.querySelectorAll('.video-premium').forEach(video => {
  video.addEventListener('touchstart', () => { video.style.transform = 'scale(1.02)'; });
  video.addEventListener('touchend', () => { video.style.transform = ''; });
});

const observerVideos = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.play().catch(() => {});
    else entry.target.pause();
  });
}, { threshold: 0.5 });

document.querySelectorAll('.video-premium').forEach(video => observerVideos.observe(video));

// ============================================
// INICIALIZACIÓN
// ============================================
window.addEventListener('load', () => {
  aplicarVersion();
  escribirTitulo();
  lanzarGlobos();
  lanzarConfeti();

  if (VERSION_ACTUAL.año > 2025) {
    setTimeout(() => lanzarConfeti(), 2000);
    setTimeout(() => lanzarGlobos(), 1000);
  }

  setTimeout(() => {
    if (container) {
      container.style.display = 'none';
      container.innerHTML = '';
      container.style.display = '';
    }
  }, 8000);
});
