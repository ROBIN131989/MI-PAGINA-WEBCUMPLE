// ============================================
// VERSIONES
// ============================================

const VERSION_2025 = {
  año: 2025,
  edad: 21,
  tituloEscritura: "¡Feliz cumpleaños, amiga!",
  subtitulo: "Celebrando 8 años de amistad 💖",
  h2: "🎈 ¿21 años ya? WOOW 🎈",
  color: "#a8325b",
  headerBg: "rgba(255, 204, 221, 0.4)",
  h1Color: "#a8325b",
  footerMensaje: "Averiguamos de qué estamos hechos, cuando seamos llamados para ayudar a nuestros amigos en necesidad, y si alguna vez olvidas lo que de verdad significas para mí, todos los días te lo recordaré.",
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
     ti misma, esperando que todas estas sean positivas; sin embargo, a veces las malas también 
     nos dejan algo por delante, ya sea una experiencia que nos ayuda a darnos cuenta de que lo 
     hemos hecho mal y que hay posibilidad de hacerlo otra vez y mejor, o simplemente que ya no 
     vuelva a ocurrir. También desearte nuevas metas y momentos que te hagan sentir orgullosa de
     lo que eres y de lo que estás construyendo.
    </br>
    <br> Gracias por haber sido parte de mi vida todos estos años, por dejarme conocerte y por estar 
    presente en etapas importantes para mí. Y aunque la vida nos tenga un poco alejados, quiero que
     sepas que todavía valoro muchísimo nuestra historia. Tal vez no sientas lo mismo, pero quiero 
     decirte que, aunque estamos en el proceso de la adultez, en el fondo de mi corazón aún mantendré 
     esa bella amistad que hemos construido a través de largos y difíciles años. Sí he conocido personas
      nuevas, pero hay cosas en la vida que simplemente es difícil reemplazar o simplemente no se pueden;
       es como el agua, la puedes cambiar por un refresco, pero no es lo mismo.
    </br>
    <p><strong><em>"Lo valioso no se reemplaza, simplemente se guarda en un rincón especial del corazón."</em></strong></p>
    <br>Te mando un abrazo fuerte, de esos que no necesitan palabras.</br>
  `
};

const VERSION_2026 = {
  año: 2026,
  edad: 22,
  tituloEscritura: "✨ ¡Feliz cumpleaños, amiga! ✨",
  subtitulo: "💖 Celebrando 9 años de amistad 💖",
  h2: "🎈 ¿22 años ya? ¡No puede ser! 🎈",
  color: "#7b2d8b",
  headerBg: "rgba(180, 150, 220, 0.3)",
  h1Color: "#4a1a6b",
  footerMensaje: "Un año más y aquí seguimos. Gracias por ser parte de mi vida. Te quiero mucho.",
  mensajePrincipal: `
    <p>¡Hola, Andy! 🌟</p>
    <br>
    Hoy cumples 22 años, y aunque el tiempo pase volando, hay cosas que no cambian: el cariño que te tengo y la gratitud por todos estos años de amistad.
    </br>
    <br>
    Ya son 9 años desde que nos conocimos. Nueve años llenos de historias, de risas, de momentos que se quedan grabados en la memoria. Desde aquellos días de secundaria hasta ahora, adultos con caminos distintos pero con un lazo que no se rompe.
    </br>
    <br>
    La vida nos ha llevado por rumbos diferentes, pero siempre llevo conmigo los buenos recuerdos que construimos juntos. Porque las personas que dejan huella no se olvidan, simplemente se guardan en un lugar especial del corazón.
    </br>
    <br>
    Hoy quiero desearte un año lleno de cosas bonitas: alegría, paz, éxitos y, sobre todo, mucha claridad para seguir construyendo tu camino. Que los 22 te traigan todo lo que mereces y más.
    </br>
    <br>
    Gracias por ser parte de mi vida durante todos estos años. Y aunque no hablemos tan seguido como antes, quiero que sepas que siempre estaré aquí para ti. 💜
    </br>
    <p><strong><em>"La amistad no se mide por la frecuencia con la que se habla, sino por la certeza de que siempre se está ahí cuando se necesita."</em></strong></p>
    <br>Con todo mi cariño, feliz cumpleaños. 🎂</br>
  `
};

// ============================================
// DETECTAR VERSIÓN (FORZAR 2026)
// ============================================

function obtenerVersion() {
  // 🔥 Forzamos 2026 para que se vea ahora
  return VERSION_2026;
}

const VERSION_ACTUAL = obtenerVersion();

// ============================================
// APLICAR VERSIÓN
// ============================================

function aplicarVersion() {
  const v = VERSION_ACTUAL;

  const subtituloEl = document.getElementById('subtitulo');
  if (subtituloEl) subtituloEl.textContent = v.subtitulo;

  const h2El = document.getElementById('titulo-mensaje');
  if (h2El) h2El.textContent = v.h2;

  const mensajeEl = document.getElementById('contenido-mensaje');
  if (mensajeEl) mensajeEl.innerHTML = v.mensajePrincipal;

  const footerEl = document.getElementById('footer-mensaje');
  if (footerEl) footerEl.textContent = v.footerMensaje;

  const header = document.querySelector('header');
  if (header) {
    header.style.background = v.headerBg;
    header.style.borderColor = 'rgba(150, 100, 200, 0.5)';
  }
  const h1 = document.querySelector('header h1');
  if (h1) h1.style.color = v.h1Color;

  document.querySelector(':root').style.setProperty('--color-principal', v.color);
}

// ============================================
// VENTANITA DE RECUERDO
// ============================================

function configurarVentanita() {
  const btnMin = document.getElementById('btn-recuerdo-min');
  const tarjeta = document.getElementById('tarjeta-recuerdo');
  const btnCerrar = document.getElementById('btn-cerrar-recuerdo');

  if (!btnMin || !tarjeta || !btnCerrar) return;

  let expandido = false;

  btnMin.addEventListener('click', function() {
    expandido = true;
    btnMin.style.display = 'none';
    tarjeta.style.display = 'block';
    tarjeta.style.animation = 'none';
    setTimeout(() => tarjeta.style.animation = 'aparecerRecuerdo 0.4s ease', 10);
  });

  btnCerrar.addEventListener('click', function() {
    expandido = false;
    tarjeta.style.display = 'none';
    btnMin.style.display = 'flex';
  });

  document.addEventListener('click', function(e) {
    const container = document.getElementById('ventanita-recuerdo');
    if (expandido && container && !container.contains(e.target)) {
      tarjeta.style.display = 'none';
      btnMin.style.display = 'flex';
      expandido = false;
    }
  });
}

// ============================================
// MÁQUINA DE ESCRIBIR
// ============================================

let i = 0;
const tituloOriginal = VERSION_ACTUAL.tituloEscritura;

function escribirTitulo() {
  const tituloElemento = document.getElementById('titulo-escritura');
  if (!tituloElemento) return;
  if (i < tituloOriginal.length) {
    tituloElemento.innerHTML += tituloOriginal.charAt(i);
    i++;
    setTimeout(escribirTitulo, 80);
  }
}

// ============================================
// CORAZONES FLOTANTES
// ============================================

const corazonesContainer = document.getElementById('corazones-container');
const corazones = ['❤️', '💖', '💗', '💓', '💕', '💝', '🌸', '🌺'];

function crearCorazon() {
  if (!corazonesContainer) return;
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
  if (corazonesContainer && corazonesContainer.children.length < 40) crearCorazon();
}, 800);

// ============================================
// GLOBOS 3D
// ============================================

const globosContainer = document.getElementById('globos-container');

function crearGlobo() {
  if (!globosContainer) return;
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
  globosContainer.appendChild(globo);
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
  if (!globosContainer) return;
  const confeti = document.createElement('div');
  confeti.classList.add('confeti');
  confeti.style.left = Math.random() * window.innerWidth + 'px';
  confeti.style.top = '-10px';
  const coloresConfeti = ['#ff69b4', '#ffb6c1', '#ff1493', '#ffc0cb', '#db7093', '#ff6347', '#ffd700'];
  confeti.style.backgroundColor = coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)];
  const duracion = 4 + Math.random() * 4;
  confeti.style.animationDuration = duracion + 's';
  confeti.style.animationDelay = Math.random() * 6 + 's';
  globosContainer.appendChild(confeti);
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
// RELOJ
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
// CONTADOR
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
  if (ahora >= proximoCumple) {
    proximoCumple = new Date(año + 1, 5, 18, 0, 0, 0);
  }

  const esHoyCumple = ahora.getMonth() === 5 && ahora.getDate() === 18;

  if (esHoyCumple) {
    contador.innerHTML = `🎂 ¡HOY ES TU CUMPLEAÑOS, ANDY! 🎉🎈✨
      <br><span style="font-size: 0.9rem; opacity: 0.8;">¡Felicidades! Que tengas un día maravilloso.</span>`;
    contador.style.background = 'rgba(180, 150, 220, 0.4)';
    contador.style.border = '2px solid #7b2d8b';
    contador.style.fontWeight = 'bold';
    contador.style.fontSize = '1.2rem';
    contador.style.padding = '16px';
    return;
  }

  const diff = proximoCumple - ahora;
  const segundosTotales = Math.floor(diff / 1000);
  const diasRestantes = Math.floor(segundosTotales / (3600 * 24));
  const horasRestantes = Math.floor((segundosTotales % (3600 * 24)) / 3600);
  const minutosRestantes = Math.floor((segundosTotales % 3600) / 60);
  const segundosRestantes = segundosTotales % 60;

  let mensajeContador = `🎂 Hola Andy, hoy es <strong>${diaSemana} ${dia} de ${mes} de ${año}</strong>`;

  if (diasRestantes === 0) {
    mensajeContador += `, ¡mañana es tu cumpleaños! 🎈 Faltan <strong>${horasRestantes} horas</strong>, ${minutosRestantes} minutos y ${segundosRestantes} segundos.`;
  } else if (diasRestantes === 1) {
    mensajeContador += `, falta <strong>1 día</strong>, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para tu próximo cumpleaños 🎂`;
  } else {
    mensajeContador += `, faltan <strong>${diasRestantes} días</strong>, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para tu próximo cumpleaños 🎈✨`;
  }

  contador.innerHTML = mensajeContador;
  contador.style.background = 'rgba(255, 255, 255, 0.5)';
  contador.style.border = 'none';
  contador.style.fontWeight = 'normal';
  contador.style.fontSize = '1rem';
  contador.style.padding = '12px';
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ============================================
// MODALES
// ============================================

function abrirModal(imgSrc) {
  const modal = document.getElementById('modalImagen');
  const modalImg = document.getElementById('modalImg');
  if (!modal || !modalImg) return;
  modal.style.display = 'block';
  modalImg.src = imgSrc;
  vibrarSiSePuede();
}

function cerrarModal() {
  const modal = document.getElementById('modalImagen');
  if (modal) modal.style.display = 'none';
}

function abrirSorpresa() {
  const modal = document.getElementById('modalSorpresa');
  if (!modal) return;
  modal.style.display = 'block';
  vibrarSiSePuede();
  lanzarConfeti();
}

function cerrarSorpresa() {
  const modal = document.getElementById('modalSorpresa');
  if (modal) modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const btnSorpresa = document.getElementById('btnSorpresa');
  if (btnSorpresa) btnSorpresa.addEventListener('click', abrirSorpresa);
});

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

if (btnModo) {
  btnModo.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modoOscuro = !modoOscuro;
    btnModo.innerHTML = modoOscuro ? '☀️' : '🌙';
    vibrarSiSePuede();
  });
}

// ============================================
// VIBRACIÓN
// ============================================

function vibrarSiSePuede() {
  if (navigator.vibrate) navigator.vibrate(50);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card-img, .btn-latido, .video-premium, .btn-sorpresa, .btn-modo').forEach(el => {
    el.addEventListener('touchstart', () => vibrarSiSePuede());
    el.addEventListener('click', () => vibrarSiSePuede());
  });
});

// ============================================
// VIDEOS EFECTO EXPANDIR
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-premium').forEach(video => {
    video.addEventListener('touchstart', () => {
      video.style.transform = 'scale(1.02)';
    });
    video.addEventListener('touchend', () => {
      video.style.transform = '';
    });
  });
});

// ============================================
// VIDEOS AUTO-REPRODUCCIÓN
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

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-premium').forEach(video => {
    observerVideos.observe(video);
  });
});

// ============================================
// INICIALIZACIÓN
// ============================================

window.addEventListener('load', () => {
  aplicarVersion();
  configurarVentanita();
  escribirTitulo();
  lanzarGlobos();
  lanzarConfeti();

  if (VERSION_ACTUAL.año === 2026) {
    setTimeout(() => lanzarConfeti(), 2000);
    setTimeout(() => lanzarGlobos(), 1000);
  }

  setTimeout(() => {
    if (globosContainer) {
      globosContainer.style.display = 'none';
      globosContainer.innerHTML = '';
      globosContainer.style.display = '';
    }
  }, 8000);
});

// ============================================
// MODO MANTENIMIENTO (ADMIN CONTRASEÑA)
// ============================================

const CONTRASENA_ADMIN = "192480014-5";

let modoMantenimientoActivo = false;
let intentosFallidos = 0;
let bloqueado = false;
let tiempoBloqueo = 0;

const pantallaMantenimiento = document.getElementById('pantalla-mantenimiento-premium');
const btnAdmin = document.getElementById('btn-admin');
const popupPassword = document.getElementById('popup-password');
const passwordInput = document.getElementById('password-input');
const mensajeErrorContainer = document.getElementById('mensaje-error-container');
const avisoAdmin = document.getElementById('aviso-admin');

function detenerTodosLosVideos() {
  document.querySelectorAll('video').forEach(video => {
    video.pause();
    video.currentTime = 0;
  });
}

function activarModoMantenimiento() {
  modoMantenimientoActivo = true;
  if (pantallaMantenimiento) pantallaMantenimiento.style.display = 'flex';
  detenerTodosLosVideos();
  localStorage.setItem('modoMantenimientoGlobal', 'activo');
  if (avisoAdmin) avisoAdmin.style.display = 'block';
}

function desactivarModoMantenimiento() {
  modoMantenimientoActivo = false;
  if (pantallaMantenimiento) pantallaMantenimiento.style.display = 'none';
  localStorage.setItem('modoMantenimientoGlobal', 'inactivo');
  if (avisoAdmin) avisoAdmin.style.display = 'none';
}

function mostrarMensaje(mensaje, tipo) {
  if (!mensajeErrorContainer) return;
  const className = tipo === 'error' ? 'mensaje-error-admin' : 'mensaje-exito-admin';
  mensajeErrorContainer.innerHTML = `<div class="${className}">${mensaje}</div>`;
  setTimeout(() => mensajeErrorContainer.innerHTML = '', 4000);
}

function verificarPassword() {
  if (bloqueado) {
    const segundosRestantes = Math.ceil((tiempoBloqueo - Date.now()) / 1000);
    mostrarMensaje(`🔒 BLOQUEADO. Espera ${segundosRestantes} segundos.`, 'error');
    return;
  }

  const password = passwordInput.value;

  if (password === CONTRASENA_ADMIN) {
    intentosFallidos = 0;
    if (modoMantenimientoActivo) {
      desactivarModoMantenimiento();
      mostrarMensaje('✅ Modo mantenimiento DESACTIVADO', 'exito');
    } else {
      activarModoMantenimiento();
      mostrarMensaje('✅ Modo mantenimiento ACTIVADO', 'exito');
    }
    cerrarPopupPassword();
  } else {
    intentosFallidos++;
    const intentosRestantes = 3 - intentosFallidos;

    let mensaje = '';
    switch(intentosFallidos) {
      case 1: mensaje = '❌ Nope. Solo para admins. ¿Otra vez? 😏'; break;
      case 2: mensaje = '❌ Jajaja... No, no, no. Sigue soñando. 😈'; break;
      case 3: mensaje = '❌ ÚLTIMA OPORTUNIDAD... ¡Y fallaste! 🔒 Acceso bloqueado por 10 segundos'; break;
      default: mensaje = '❌ Contraseña incorrecta';
    }

    if (intentosRestantes > 0 && intentosFallidos < 3) {
      mensaje += `<br>Intentos restantes: ${intentosRestantes}`;
    }

    mostrarMensaje(mensaje, 'error');

    if (intentosFallidos >= 3) {
      bloqueado = true;
      tiempoBloqueo = Date.now() + 10000;
      setTimeout(() => {
        bloqueado = false;
        intentosFallidos = 0;
        mostrarMensaje('✅ Bloqueo terminado', 'exito');
      }, 10000);
      cerrarPopupPassword();
    }

    passwordInput.value = '';
    passwordInput.focus();
  }
}

function mostrarPopupPassword() {
  if (bloqueado) {
    const segundosRestantes = Math.ceil((tiempoBloqueo - Date.now()) / 1000);
    mostrarMensaje(`🔒 BLOQUEADO. Espera ${segundosRestantes} segundos.`, 'error');
    return;
  }
  if (popupPassword) {
    popupPassword.style.display = 'flex';
    passwordInput.value = '';
    passwordInput.focus();
    mensajeErrorContainer.innerHTML = '';
  }
}

function cerrarPopupPassword() {
  if (popupPassword) popupPassword.style.display = 'none';
}

function verificarEstadoMantenimiento() {
  const estadoGuardado = localStorage.getItem('modoMantenimientoGlobal');
  if (estadoGuardado === 'activo') {
    modoMantenimientoActivo = true;
    if (pantallaMantenimiento) pantallaMantenimiento.style.display = 'flex';
    if (avisoAdmin) avisoAdmin.style.display = 'block';
    detenerTodosLosVideos();
  } else {
    modoMantenimientoActivo = false;
    if (pantallaMantenimiento) pantallaMantenimiento.style.display = 'none';
    if (avisoAdmin) avisoAdmin.style.display = 'none';
  }
}

if (btnAdmin) {
  btnAdmin.addEventListener('click', mostrarPopupPassword);
}

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && popupPassword && popupPassword.style.display === 'flex') {
    verificarPassword();
  }
});

window.onclick = function(event) {
  if (event.target === popupPassword) {
    cerrarPopupPassword();
  }
};

verificarEstadoMantenimiento();

console.log('🎂 ¡Página de cumpleaños cargada con éxito! Versión:', VERSION_ACTUAL.año);
