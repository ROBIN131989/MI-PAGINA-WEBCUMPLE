// ============================================
// VERSIONES DE CUMPLEAÑOS
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
  tituloEscritura: "✨ ¡Feliz Cumpleaños, Amiga! ✨",
  subtitulo: "💖 Celebrando 9 años de amistad 💖",
  h2: "🎈 ¿22 años ya? ¡No puede ser! 🎈",
  mensajePrincipal: `
    <p>Este es un espacio para tu nuevo mensaje de 2026.</p>
    <br>Cuando quieras, puedes escribir aquí lo que sientes, dedicarle palabras especiales, recordar momentos bonitos o simplemente decir "te quiero".</br>
    <br>La página está lista para que la personalices con tu propio mensaje, tus propias imágenes y tus propios videos.</br>
    <br>✨ El diseño es completamente nuevo, con colores violetas y una tipografía elegante para que se note que es una nueva etapa.</br>
    <p><strong><em>"Cada año es una oportunidad para celebrar la vida y el amor que compartimos."</em></strong></p>
  `
};

// ============================================
// DETECTAR VERSIÓN (FORZADA A 2026 PARA AHORA)
// ============================================

function obtenerVersion() {
  // 🔥 FORZADO: Mostrar versión 2026 AHORA
  return VERSION_2026;
}

const VERSION_ACTUAL = obtenerVersion();

// ============================================
// APLICAR VERSIÓN A LA PÁGINA
// ============================================

function aplicarVersion() {
  const v = VERSION_ACTUAL;
  
  document.getElementById('subtitulo').textContent = v.subtitulo;
  document.getElementById('titulo-mensaje').textContent = v.h2;
  document.getElementById('contenido-mensaje').innerHTML = v.mensajePrincipal;
  document.getElementById('footer-mensaje').textContent = v.footerMensaje || 'Gracias por ser parte de mi vida. Te quiero mucho.';
  
  const header = document.querySelector('header');
  if (header) {
    header.style.background = 'rgba(200, 170, 230, 0.25)';
    header.style.borderColor = 'rgba(180, 150, 220, 0.3)';
  }
  const h1 = document.querySelector('header h1');
  if (h1) h1.style.color = '#4a1a6b';
}

// ============================================
// VENTANITA DE RECUERDO (2025)
// ============================================

function cargarRecuerdo2025() {
  const contenido = document.getElementById('recuerdo-contenido');
  if (!contenido) return;
  
  contenido.innerHTML = `
    <h3>🎂 ¡Feliz Cumpleaños, Amiga! 🎂</h3>
    <p><strong>💖 Celebrando 8 años de amistad 💖</strong></p>
    <br>
    <p>${VERSION_2025.mensajePrincipal.replace(/<br\s*\/?>/gi, '<br>')}</p>
    <p class="frase-destacada">"Lo valioso no se reemplaza, simplemente se guarda en un rincón especial del corazón."</p>
    <p style="margin-top: 10px;">💖 8 años de amistad 💖</p>
  `;
}

function configurarVentanita() {
  const btnMin = document.getElementById('btn-recuerdo-min');
  const tarjeta = document.getElementById('tarjeta-recuerdo');
  const btnCerrar = document.getElementById('btn-cerrar-recuerdo');
  
  if (!btnMin || !tarjeta || !btnCerrar) return;
  
  let expandido = false;
  
  cargarRecuerdo2025();
  
  btnMin.addEventListener('click', function() {
    expandido = true;
    btnMin.style.display = 'none';
    tarjeta.style.display = 'block';
    tarjeta.style.animation = 'slideDown 0.4s ease';
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
// EFECTO MÁQUINA DE ESCRIBIR
// ============================================

let i = 0;
const tituloOriginal = VERSION_ACTUAL.tituloEscritura;

function escribirTitulo() {
  const tituloElemento = document.getElementById('titulo-escritura');
  if (i < tituloOriginal.length) {
    tituloElemento.innerHTML += tituloOriginal.charAt(i);
    i++;
    setTimeout(escribirTitulo, 60);
  }
}

// ============================================
// CORAZONES FLOTANTES
// ============================================

const corazonesContainer = document.getElementById('corazones-container');
const corazones = ['❤️', '💖', '💗', '💓', '💕', '💝', '🌸', '🌺'];

function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.innerHTML = corazones[Math.floor(Math.random() * corazones.length)];
  corazon.style.left = Math.random() * 100 + '%';
  corazon.style.fontSize = (14 + Math.random() * 26) + 'px';
  corazon.style.animationDuration = (8 + Math.random() * 8) + 's';
  corazon.style.animationDelay = Math.random() * 5 + 's';
  corazonesContainer.appendChild(corazon);
  setTimeout(() => corazon.remove(), 14000);
}

setInterval(() => {
  if (corazonesContainer.children.length < 40) crearCorazon();
}, 700);

// ============================================
// GLOBOS 3D
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
    setTimeout(() => crearGlobo(), j * 180);
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
  const coloresConfeti = ['#8b4ba3', '#9b59b6', '#c9a0e0', '#d5c0e8', '#7b3f9e', '#ffd700', '#ff69b4'];
  confeti.style.backgroundColor = coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)];
  const duracion = 4 + Math.random() * 4;
  confeti.style.animationDuration = duracion + 's';
  confeti.style.animationDelay = Math.random() * 6 + 's';
  container.appendChild(confeti);
  setTimeout(() => confeti.remove(), (duracion + 6) * 1000);
}

function lanzarConfeti() {
  for (let j = 0; j < 50; j++) {
    setTimeout(() => crearConfeti(), j * 50);
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
// CONTADOR DE CUMPLEAÑOS (MEJORADO)
// ============================================

function actualizarContador() {
  const contador = document.getElementById('contador-cumple');
  if (!contador) return;
  
  const ahora = new Date();
  const dia = ahora.getDate();
  const mes = ahora.getMonth();
  const año = ahora.getFullYear();
  
  // Fecha del próximo cumpleaños (18 de junio)
  let proximoCumple = new Date(año, 5, 18, 0, 0, 0); // 5 = Junio
  if (ahora >= proximoCumple) {
    proximoCumple = new Date(año + 1, 5, 18, 0, 0, 0);
  }
  
  // Verificar si HOY es el cumpleaños
  const esHoyCumple = (mes === 5 && dia === 18);
  
  if (esHoyCumple) {
    contador.innerHTML = `🎂 ¡HOY ES TU CUMPLEAÑOS, ANDY! 🎉🎈✨<br><span style="font-size:0.8rem; opacity:0.8;">¡Que tengas un día increíble!</span>`;
    contador.style.background = 'rgba(180, 150, 220, 0.3)';
    contador.style.fontWeight = 'bold';
    contador.style.fontSize = '1.15rem';
    contador.style.borderColor = 'rgba(180, 150, 220, 0.5)';
    return;
  }
  
  // Calcular diferencia
  const diff = proximoCumple - ahora;
  const segundosTotales = Math.floor(diff / 1000);
  const diasRestantes = Math.floor(segundosTotales / (3600 * 24));
  const horasRestantes = Math.floor((segundosTotales % (3600 * 24)) / 3600);
  const minutosRestantes = Math.floor((segundosTotales % 3600) / 60);
  const segundosRestantes = segundosTotales % 60;
  
  const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const diaSemana = diasSemana[ahora.getDay()];
  const nombreMes = meses[ahora.getMonth()];
  
  contador.innerHTML = `🎂 Hola Andy, hoy es <strong>${diaSemana} ${dia} de ${nombreMes} de ${año}</strong>, faltan <strong>${diasRestantes} días</strong>, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos para tu próximo cumpleaños 🎈✨`;
  contador.style.background = 'rgba(255, 255, 255, 0.4)';
  contador.style.fontWeight = '400';
  contador.style.fontSize = '1rem';
  contador.style.borderColor = 'rgba(150, 100, 220, 0.2)';
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ============================================
// MODALES Y EVENTOS
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
// VIDEOS (expansión)
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
  aplicarVersion();
  configurarVentanita();
  escribirTitulo();
  lanzarGlobos();
  lanzarConfeti();
  
  setTimeout(() => {
    if (container) {
      container.style.display = 'none';
      container.innerHTML = '';
      container.style.display = '';
    }
  }, 8000);
});

// ============================================
// MODO MANTENIMIENTO
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
  document.querySelectorAll('video').forEach(v => { v.pause(); v.currentTime = 0; });
}

function activarModoMantenimiento() {
  modoMantenimientoActivo = true;
  pantallaMantenimiento.style.display = 'flex';
  detenerTodosLosVideos();
  localStorage.setItem('modoMantenimientoGlobal', 'activo');
  if (avisoAdmin) avisoAdmin.style.display = 'block';
}

function desactivarModoMantenimiento() {
  modoMantenimientoActivo = false;
  pantallaMantenimiento.style.display = 'none';
  localStorage.setItem('modoMantenimientoGlobal', 'inactivo');
  if (avisoAdmin) avisoAdmin.style.display = 'none';
}

function mostrarMensaje(mensaje, tipo) {
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
  popupPassword.style.display = 'flex';
  passwordInput.value = '';
  passwordInput.focus();
  mensajeErrorContainer.innerHTML = '';
}

function cerrarPopupPassword() {
  popupPassword.style.display = 'none';
}

function verificarEstadoMantenimiento() {
  const estadoGuardado = localStorage.getItem('modoMantenimientoGlobal');
  if (estadoGuardado === 'activo') {
    modoMantenimientoActivo = true;
    pantallaMantenimiento.style.display = 'flex';
    if (avisoAdmin) avisoAdmin.style.display = 'block';
    detenerTodosLosVideos();
  } else {
    modoMantenimientoActivo = false;
    pantallaMantenimiento.style.display = 'none';
    if (avisoAdmin) avisoAdmin.style.display = 'none';
  }
}

if (btnAdmin) {
  btnAdmin.addEventListener('click', mostrarPopupPassword);
}

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && popupPassword.style.display === 'flex') {
    verificarPassword();
  }
});

window.onclick = function(event) {
  if (event.target === popupPassword) {
    cerrarPopupPassword();
  }
};

verificarEstadoMantenimiento();

// ============================================
// ESTILOS ADICIONALES PARA GLOBOS Y CORAZONES
// ============================================

// Inyectar estilos de globos y corazones si no existen en el CSS
const estilosGlobos = document.createElement('style');
estilosGlobos.textContent = `
  .corazon {
    position: absolute;
    font-size: 20px;
    opacity: 0.5;
    animation: flotarCorazon 12s linear infinite;
    user-select: none;
    pointer-events: none;
  }
  @keyframes flotarCorazon {
    0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
    10% { opacity: 0.5; }
    90% { opacity: 0.5; }
    100% { transform: translateY(-10vh) rotate(20deg); opacity: 0; }
  }
  
  #globos-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    overflow: hidden;
    z-index: 1000;
  }
  .globo {
    position: absolute;
    bottom: -150px;
    width: 60px;
    height: 80px;
    border-radius: 50% 50% 50% 50%;
    animation: flotarGlobo 8s ease-in-out infinite;
    cursor: pointer;
    z-index: 1001;
    transition: transform 0.3s ease;
  }
  .globo::before {
    content: "";
    position: absolute;
    top: 15%;
    left: 20%;
    width: 25%;
    height: 20%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%);
    border-radius: 50%;
    z-index: 2;
  }
  .globo::after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 50%;
    width: 2px;
    height: 30px;
    background: linear-gradient(180deg, #8B4513, #D2691E);
    transform: translateX(-50%);
    border-radius: 1px;
    animation: ondularCuerda 2s ease-in-out infinite;
  }
  @keyframes flotarGlobo {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    10% { opacity: 1; }
    50% { transform: translateY(-60vh) translateX(20px); }
    90% { opacity: 1; }
    100% { transform: translateY(-120vh) translateX(-20px); opacity: 0; }
  }
  @keyframes ondularCuerda {
    0%, 100% { transform: translateX(-50%) rotate(0deg); }
    25% { transform: translateX(-50%) rotate(3deg); }
    75% { transform: translateX(-50%) rotate(-3deg); }
  }
  .globo.color1 { background: radial-gradient(circle at 30% 30%, #FF6B8A, #C2185B); }
  .globo.color2 { background: radial-gradient(circle at 30% 30%, #FFB6C1, #E91E63); }
  .globo.color3 { background: radial-gradient(circle at 30% 30%, #FFD1DC, #FF69B4); }
  .globo.color4 { background: radial-gradient(circle at 30% 30%, #FF99CC, #FF1493); }
  .globo.color5 { background: radial-gradient(circle at 30% 30%, #FFC0CB, #DB7093); }
  .globo.color6 { background: radial-gradient(circle at 30% 30%, #FFA6C9, #FF4081); }
  .globo.color7 { background: radial-gradient(circle at 30% 30%, #F8BBD0, #EC407A); }
  .globo.color8 { background: radial-gradient(circle at 30% 30%, #FCE4EC, #D81B60); }
  
  .confeti {
    position: absolute;
    width: 8px;
    height: 8px;
    opacity: 0.9;
    border-radius: 2px;
    animation-name: caer;
    animation-timing-function: linear;
    animation-iteration-count: 1;
  }
  @keyframes caer {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.9; }
    100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
  }
`;
document.head.appendChild(estilosGlobos);
