// ============================================
// VERSIONES DE CUMPLEAÑOS
// 2025 → muestra hasta el 17 jun 2026 a las 11:59 PM
// 2026 → muestra desde el 18 jun 2026 a las 12:00 AM
// ============================================
 
const VERSION_2025 = {
  año: 2025,
  edad: 21,
  tituloEscritura: "¡Feliz cumpleaños, amiga!",
  subtitulo: "Celebrando 8 años de amistad 💖",
  h2: "🎈 ¿21 años ya? WOOW 🎈",
  mensajePrincipal: `
    <p>Eres alguien muy especial para mí… y uff, cómo han pasado los años...</p>
    <br>Hoy cumples 21; de verdad que si tú no puedes creerlo, pues yo tampoco. 
    La verdad es que sí es sorprendente, y aunque hace tiempo que no hablamos tanto como antes,
     no podía dejar pasar esta fecha sin escribirte algo. 
     Porque la verdad es que no todos los días cumple años una persona con la que compartiste tanto 
     y que sigue teniendo un lugar especial en tu vida, aunque el tiempo y la distancia se hayan
     hecho presentes interfiriendo :(.
    </br>
    <br> Han pasado ya 8 años desde que nos conocimos. Ocho.
     Se dice fácil, pero dentro de esos años hay tantas memorias, tantas pláticas, tanto de secu-nenes, 
     pero más han sido en pandemia, incluso cuando te puse a leer cosas para mi tarea de catecismo, jaja,
      unos pasajes bíblicos. Han estado risas, momentos buenos y también silencios que, aunque incómodos a veces, 
      también formaron parte de nuestra historia, sobre todo en estas últimas fechas, meses.
    </br>
    <br>Hemos cambiado, y eso es natural. Cada quien ha tomado su camino, 
    hemos vivido cosas que nos han transformado, 
    y quizás por eso hoy somos personas distintas a las que empezaron esta amistad. 
    Pero eso no borra lo que fuimos ni el aprecio que te tengo.
    </br>
    <br> Hoy quiero desearte un cumpleaños lleno de cosas reales: tranquilidad, alegría, 
    compañía sincera y claridad para lo que venga. Que los 21 te traigan nuevas versiones de
     ti misma, esperando que todas estas sean positivas.
    </br>
    <br> Gracias por haber sido parte de mi vida todos estos años, por dejarme conocerte y por estar 
    presente en etapas importantes para mí.
    </br>
    <p><strong><em>"Lo valioso no se reemplaza, simplemente se guarda en un rincón especial del corazón."</em></strong></p>
    <br>Te mando un abrazo fuerte, de esos que no necesitan palabras.</br>
  `,
  colorHeader: "#a8325b"
};
 
const VERSION_2026 = {
  año: 2026,
  edad: 22,
  tituloEscritura: "¡Feliz cumpleaños, amiga! 🎊",
  subtitulo: "Celebrando 9 años de amistad 💖",
  h2: "🎈 ¿22 años ya? ¡No puede ser! 🎈",
  mensajePrincipal: `
    <p>Un año más y aquí seguimos… ¡22 años, Andy! 🎂</p>
    <br>
    Cada año que pasa me doy cuenta de lo mucho que has crecido,
    lo mucho que hemos vivido y de todo lo que aún está por venir.
    Hoy es un día para celebrarte, para recordarte lo especial que eres
    y lo mucho que significas para mí después de todos estos años.
    </br>
    <br>
    9 años de amistad. Nueve. Ya son casi una década, ¿lo puedes creer?
    Desde aquellos tiempos de la secundaria hasta hoy, adultos navegando la vida,
    cada momento ha valido la pena. Y aunque los caminos a veces se separan,
    el corazón siempre sabe dónde están las personas que importan.
    </br>
    <br>
    Que este año de vida te traiga todo lo que mereces: paz, amor, éxito,
    y muchas razones para sonreír. Que los 22 sean tu mejor año hasta ahora.
    </br>
    <p><strong><em>"La amistad verdadera no depende del tiempo ni de la distancia, simplemente existe."</em></strong></p>
    <br>Con todo el cariño del mundo, feliz cumpleaños. 🎉</br>
  `,
  colorHeader: "#7b2d8b"
};
 
// ============================================
// DETECTAR QUÉ VERSIÓN MOSTRAR
// ============================================
function obtenerVersion() {
  const ahora = new Date();
  const cumple2026 = new Date(2026, 5, 17, 17, 3, 0); // 18 junio 2026 00:00:00
  return ahora >= cumple2026 ? VERSION_2026 : VERSION_2025;
}
 
const VERSION_ACTUAL = obtenerVersion();
 
// ============================================
// APLICAR VERSIÓN A LA PÁGINA
// ============================================
function aplicarVersion() {
  // Subtítulo del header
  const subtituloEl = document.getElementById('subtitulo');
  if (subtituloEl) subtituloEl.textContent = VERSION_ACTUAL.subtitulo;
 
  // H2 del mensaje
  const h2El = document.querySelector('.mensaje-glass h2');
  if (h2El) h2El.textContent = VERSION_ACTUAL.h2;
 
  // Mensaje principal
  const mensajeEl = document.querySelector('.mensaje-texto');
  if (mensajeEl) mensajeEl.innerHTML = VERSION_ACTUAL.mensajePrincipal;
 
  // Color del header (opcional, efecto visual de "nueva versión")
  if (VERSION_ACTUAL.año === 2026) {
    const header = document.querySelector('header');
    if (header) {
      header.style.background = 'rgba(180, 150, 220, 0.35)';
      header.style.borderColor = 'rgba(200, 150, 255, 0.5)';
    }
    const h1 = document.querySelector('header h1');
    if (h1) h1.style.color = '#7b2d8b';
  }
}
 
// ============================================
// EFECTO MÁQUINA DE ESCRIBIR
// ============================================
let i = 0;
const tituloOriginal = VERSION_ACTUAL.tituloEscritura;
 
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
 
setInterval(() => {
  if (corazonesContainer.children.length < 40) crearCorazon();
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
  for (let j = 0; j < 25; j++) {
    setTimeout(() => crearGlobo(), j * 200);
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
  for (let j = 0; j < 50; j++) {
    setTimeout(() => crearConfeti(), j * 60);
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
  const minutoDeg = minutos * 6;
  const segundoDeg = segundos * 6;
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
 
  // Calcular próximo cumpleaños dinámicamente
  let proximoCumple = new Date(año, 5, 18, 0, 0, 0);
  if (ahora >= proximoCumple) proximoCumple = new Date(año + 1, 5, 18, 0, 0, 0);
 
  // Si HOY es el cumpleaños, mostrar mensaje especial
  const esHoyCumple = ahora.getMonth() === 5 && ahora.getDate() === 18;
 
  if (esHoyCumple) {
    contador.innerHTML = `🎂 ¡HOY ES TU CUMPLEAÑOS, ANDY! ¡Felicidades! 🎉🎈✨`;
    contador.style.background = 'rgba(255, 105, 180, 0.3)';
    contador.style.fontWeight = 'bold';
    contador.style.fontSize = '1.1rem';
    return;
  }
 
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
  const modalImg = document.getElementById('modalImg');
  modal.style.display = 'block';
  modalImg.src = imgSrc;
  vibrarSiSePuede();
}
 
function cerrarModal() {
  document.getElementById('modalImagen').style.display = 'none';
}
 
// ============================================
// MODAL SORPRESA
// ============================================
function abrirSorpresa() {
  const modal = document.getElementById('modalSorpresa');
  modal.style.display = 'block';
  vibrarSiSePuede();
  lanzarConfeti();
}
 
function cerrarSorpresa() {
  document.getElementById('modalSorpresa').style.display = 'none';
}
 
document.getElementById('btnSorpresa').addEventListener('click', abrirSorpresa);
 
window.onclick = function(event) {
  const modalSorpresa = document.getElementById('modalSorpresa');
  const modalImagen = document.getElementById('modalImagen');
  if (event.target === modalSorpresa) cerrarSorpresa();
  if (event.target === modalImagen) cerrarModal();
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
// VIDEOS EFECTO EXPANDIR
// ============================================
document.querySelectorAll('.video-premium').forEach(video => {
  video.addEventListener('touchstart', () => { video.style.transform = 'scale(1.02)'; });
  video.addEventListener('touchend', () => { video.style.transform = ''; });
});
 
// ============================================
// AUTO-REPRODUCCIÓN DE VIDEOS
// ============================================
const observerVideos = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play().catch(() => {});
    } else {
      entry.target.pause();
    }
  });
}, { threshold: 0.5 });
 
document.querySelectorAll('.video-premium').forEach(video => {
  observerVideos.observe(video);
});
 
// ============================================
// INICIALIZACIÓN
// ============================================
window.addEventListener('load', () => {
  aplicarVersion(); // ← Aplica la versión correcta primero
  escribirTitulo();
  lanzarGlobos();
  lanzarConfeti();
 
  // Si es la versión 2026, lanzar animación extra de celebración
  if (VERSION_ACTUAL.año === 2026) {
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
