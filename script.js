const container = document.getElementById('globos-container');

function crearGlobo() {
  const globo = document.createElement('div');
  globo.classList.add('globo');
  
  const posX = Math.random() * window.innerWidth;
  globo.style.left = posX + 'px';
  
  const duracion = 6 + Math.random() * 4;
  globo.style.animationDuration = duracion + 's';
  
  const retraso = Math.random() * 6;
  globo.style.animationDelay = retraso + 's';
  
  container.appendChild(globo);

  setTimeout(() => {
    if (globo.parentNode === container) {
      container.removeChild(globo);
    }
  }, (duracion + retraso) * 1000);
}

function crearConfeti() {
  const confeti = document.createElement('div');
  confeti.classList.add('confeti');
  
  confeti.style.left = Math.random() * window.innerWidth + 'px';
  confeti.style.top = -10 + 'px';
  
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
    crearGlobo();
  }
  for (let j = 0; j < cantidadConfeti; j++) {
    crearConfeti();
  }
}

window.addEventListener('load', () => {
  crearMuchosGlobosYConfeti(25, 50);

  setTimeout(() => {
    container.style.display = 'none';
    container.innerHTML = '';
    container.style.display = 'block'; // Por si se recarga
  }, 7000);
});

// Botón para subir y recargar (efecto renovar)
function scrollAndReload() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => location.reload(), 500);
}
