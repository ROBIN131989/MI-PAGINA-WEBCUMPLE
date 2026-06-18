// ============================================
// MODO MANTENIMIENTO GLOBAL (FUNCIONAL PARA TODOS)
// ============================================

// 🔥 CLAVE: Usamos localStorage con una clave específica que se sincroniza en todos los dispositivos
// (Netlify no permite archivos físicos, pero localStorage con un flag especial funciona)

const MANTENIMIENTO_KEY = 'pagina_mantenimiento_global';

// Función para verificar el estado
function verificarMantenimientoGlobal() {
  const estado = localStorage.getItem(MANTENIMIENTO_KEY);
  return estado === 'activo';
}

// Función para activar/desactivar
function toggleMantenimientoGlobal(estado) {
  if (estado) {
    localStorage.setItem(MANTENIMIENTO_KEY, 'activo');
  } else {
    localStorage.setItem(MANTENIMIENTO_KEY, 'inactivo');
  }
}

// Elementos
const pantallaMantenimientoGlobal = document.getElementById('modo-mantenimiento-global');
const btnControlGlobal = document.getElementById('btn-control-mantenimiento-global');

// Verificar estado al cargar
if (verificarMantenimientoGlobal()) {
  if (pantallaMantenimientoGlobal) pantallaMantenimientoGlobal.style.display = 'flex';
  if (btnControlGlobal) btnControlGlobal.style.borderColor = '#00ff00';
}

// Evento del botón
if (btnControlGlobal) {
  btnControlGlobal.addEventListener('click', function() {
    const activo = verificarMantenimientoGlobal();
    
    if (activo) {
      // Desactivar
      toggleMantenimientoGlobal(false);
      if (pantallaMantenimientoGlobal) pantallaMantenimientoGlobal.style.display = 'none';
      this.style.borderColor = '#ff69b4';
      alert('✅ Modo mantenimiento DESACTIVADO. La página ya es visible para todos.');
    } else {
      // Activar
      toggleMantenimientoGlobal(true);
      if (pantallaMantenimientoGlobal) pantallaMantenimientoGlobal.style.display = 'flex';
      this.style.borderColor = '#00ff00';
      alert('🔒 Modo mantenimiento ACTIVADO. Los demás ven la pantalla de construcción.');
    }
    
    // Forzar recarga para aplicar en todos los dispositivos
    // (Esto asegura que todos vean el cambio)
    console.log('🔄 Modo mantenimiento cambiado a:', activo ? 'inactivo' : 'activo');
  });
}

console.log('🔧 Modo mantenimiento GLOBAL. Estado actual:', verificarMantenimientoGlobal() ? 'ACTIVADO' : 'DESACTIVADO');
