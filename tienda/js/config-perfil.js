// ==================== CONFIGURACIÓN - PERFIL ====================

// ===== EDITAR NOMBRE =====
function editarNombre() {
    Swal.fire({
        title: '👤 Editar nombre',
        text: '✏️ Ingresa tu nuevo nombre de usuario',
        input: 'text',
        inputValue: 'Usuario Demo',
        inputPlaceholder: 'Tu nombre completo',
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💾 Actualizar nombre',
        showCancelButton: true,
        cancelButtonText: '❌ Cancelar',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        showCloseButton: true,
        backdrop: 'rgba(0,0,0,0.6)',
        allowOutsideClick: true,
        customClass: {
            popup: 'rounded-2xl shadow-2xl border border-purple-500/30 max-w-md',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2.5 text-white font-semibold',
            cancelButton: 'bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-xl px-6 py-2.5 text-gray-700 font-semibold',
            input: 'bg-gray-50 text-gray-800 border-2 border-purple-500 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent'
        }
    }).then((result) => {
        document.body.style.overflow = '';
        
        if (result.isConfirmed && result.value) {
            Swal.fire({
                icon: 'success',
                title: '✅ ¡Nombre actualizado!',
                text: `✨ Tu nuevo nombre es: ${result.value}`,
                timer: 2500,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                showCloseButton: true
            });
        }
    });
}

// ===== EDITAR CORREO =====
function editarCorreo() {
    Swal.fire({
        title: '✉️ Editar correo',
        text: '📧 Ingresa tu nuevo correo electrónico',
        input: 'email',
        inputValue: 'usuario@shopverse.com',
        inputPlaceholder: 'tu@email.com',
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💾 Actualizar correo',
        showCancelButton: true,
        cancelButtonText: '❌ Cancelar',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        showCloseButton: true,
        backdrop: 'rgba(0,0,0,0.6)',
        allowOutsideClick: true,
        customClass: {
            popup: 'rounded-2xl shadow-2xl border border-purple-500/30 max-w-md',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2.5 text-white font-semibold',
            cancelButton: 'bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-xl px-6 py-2.5 text-gray-700 font-semibold',
            input: 'bg-gray-50 text-gray-800 border-2 border-purple-500 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent'
        }
    }).then((result) => {
        document.body.style.overflow = '';
        
        if (result.isConfirmed && result.value) {
            Swal.fire({
                icon: 'success',
                title: '✅ ¡Correo actualizado!',
                text: `📧 Tu nuevo correo es: ${result.value}`,
                timer: 2500,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                showCloseButton: true
            });
        }
    });
}

// ===== EXPORTAR =====
window.editarNombre = editarNombre;
window.editarCorreo = editarCorreo;