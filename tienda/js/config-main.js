// ==================== CONFIGURACIÓN - MAIN ====================

// ===== GUARDAR CONFIGURACIÓN =====
function guardarConfiguracion() {
    Swal.fire({
        icon: 'success',
        title: '✅ ¡Configuración guardada!',
        text: '✨ Todos tus cambios han sido aplicados correctamente',
        timer: 2500,
        showConfirmButton: true,
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💫 Perfecto',
        showCancelButton: true,
        cancelButtonText: '❌ Cerrar',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        showCloseButton: true,
        backdrop: 'rgba(0,0,0,0.6)',
        allowOutsideClick: true,
        customClass: {
            popup: 'rounded-2xl shadow-2xl border border-purple-500/30 max-w-md',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2.5 text-white font-semibold',
            cancelButton: 'bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-xl px-6 py-2.5 text-gray-700 font-semibold'
        }
    }).then(() => {
        document.body.style.overflow = '';
    });
}

// ===== VOLVER AL INICIO =====
function volverInicio() {
    const main = document.querySelector('main');
    if (main) {
        main.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        main.style.opacity = '0';
        main.style.transform = 'translateY(30px) scale(0.98)';
    }
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 400);
}

// ===== CERRAR MODALES =====
function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// ===== FINALIZAR COMPRA =====
function finalizarCompra() {
    Swal.fire({
        icon: 'success',
        title: '✅ ¡Compra finalizada!',
        text: 'Tu pedido ha sido procesado correctamente',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💫 Ver pedido',
        showCancelButton: true,
        cancelButtonText: '❌ Cerrar',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        showCloseButton: true,
        backdrop: 'rgba(0,0,0,0.6)',
        allowOutsideClick: true,
        customClass: {
            popup: 'rounded-2xl shadow-2xl border border-purple-500/30 max-w-md',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2.5 text-white font-semibold',
            cancelButton: 'bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-xl px-6 py-2.5 text-gray-700 font-semibold'
        }
    }).then(() => {
        document.body.style.overflow = '';
    });
}

// ===== INICIALIZAR CONFIGURACIÓN =====
function inicializarConfiguracion() {
    // Restaurar switches guardados
    const switches = document.querySelectorAll('.toggle-switch');
    switches.forEach((sw, index) => {
        const saved = localStorage.getItem(`config_switch_${index}`);
        if (saved === 'true') {
            sw.classList.add('active');
        }
    });
    
    // Inicializar tooltips
    if (typeof tippy !== 'undefined') {
        tippy('#btn-categorias', { content: 'Categorías', placement: 'bottom' });
        tippy('#btn-carrito', { content: 'Carrito', placement: 'bottom' });
        tippy('#btn-perfil', { content: 'Mi Perfil', placement: 'bottom' });
    }
}

// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    inicializarConfiguracion();
});

// ===== EXPORTAR =====
window.guardarConfiguracion = guardarConfiguracion;
window.volverInicio = volverInicio;
window.cerrarModal = cerrarModal;
window.finalizarCompra = finalizarCompra;
window.toggleSwitch = toggleSwitch;
window.inicializarConfiguracion = inicializarConfiguracion;