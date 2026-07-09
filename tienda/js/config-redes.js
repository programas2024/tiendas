// ==================== CONFIGURACIÓN - REDES SOCIALES ====================

// ===== CONECTAR RED SOCIAL =====
function conectarRedSocial(red) {
    const redes = {
        facebook: { nombre: 'Facebook', emoji: '📘', color: '#1877f2' },
        instagram: { nombre: 'Instagram', emoji: '📸', color: '#e6683c' },
        twitter: { nombre: 'Twitter', emoji: '🐦', color: '#1da1f2' },
        youtube: { nombre: 'YouTube', emoji: '▶️', color: '#ff0000' }
    };
    
    const data = redes[red] || { nombre: red, emoji: '🔗', color: '#7c3aed' };
    
    Swal.fire({
        title: `${data.emoji} Conectar ${data.nombre}`,
        html: `
            <div class="text-center">
                <div class="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-110 transition-all duration-300" style="background: ${data.color}">
                    <span class="text-5xl">${data.emoji}</span>
                </div>
                <p class="text-gray-700">Conecta tu cuenta de <span class="font-bold">${data.nombre}</span></p>
                <p class="text-sm text-gray-500 mt-2">🔐 Tus datos estarán seguros y protegidos</p>
                <div class="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-purple-100">
                    <p class="text-xs text-gray-600">✅ Comparte tus logros con tus amigos</p>
                    <p class="text-xs text-gray-600">📱 Sincroniza tu actividad</p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: `✅ Conectar ${data.nombre}`,
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
            cancelButton: 'bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-xl px-6 py-2.5 text-gray-700 font-semibold'
        }
    }).then((result) => {
        document.body.style.overflow = '';
        
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: '✅ ¡Conectado!',
                text: `${data.emoji} Tu cuenta de ${data.nombre} ha sido conectada exitosamente`,
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
window.conectarRedSocial = conectarRedSocial;
