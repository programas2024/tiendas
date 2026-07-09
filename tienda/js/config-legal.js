// ==================== CONFIGURACIÓN - LEGAL ====================

// ===== TÉRMINOS Y CONDICIONES =====
function mostrarTerminos() {
    Swal.fire({
        title: '📋 Términos y condiciones',
        html: `
            <div class="text-left max-h-80 overflow-y-auto pr-2 space-y-3">
                <div class="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-purple-100">
                    <p class="text-sm text-gray-600"><strong>📌 Versión:</strong> 2.0 - 2026</p>
                    <p class="text-sm text-gray-600"><strong>📅 Última actualización:</strong> 20 de junio de 2026</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">📋 1. Términos de uso</h4>
                    <p class="text-sm text-gray-600 mt-2">Al utilizar ShopVerse, aceptas cumplir con estos términos y condiciones. El incumplimiento puede resultar en la suspensión de tu cuenta.</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">🔒 2. Privacidad</h4>
                    <p class="text-sm text-gray-600 mt-2">Protegemos tus datos personales según nuestra política de privacidad. No compartimos tu información con terceros sin tu consentimiento.</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">🛒 3. Compras</h4>
                    <p class="text-sm text-gray-600 mt-2">Todas las compras son finales. Las devoluciones se rigen por nuestra política de devolución dentro de los 30 días.</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">⚠️ 4. Responsabilidad</h4>
                    <p class="text-sm text-gray-600 mt-2">ShopVerse no se hace responsable por el mal uso de los productos adquiridos en nuestra plataforma.</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">🔄 5. Modificaciones</h4>
                    <p class="text-sm text-gray-600 mt-2">Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados por email.</p>
                </div>
                <div class="p-5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-200 text-center">
                    <p class="text-sm text-gray-700 font-medium">✅ Al continuar, aceptas los términos y condiciones</p>
                    <p class="text-xs text-gray-500 mt-1">Tu confianza es nuestra prioridad</p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '✅ Aceptar términos',
        showCancelButton: true,
        cancelButtonText: '❌ Cancelar',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        showCloseButton: true,
        backdrop: 'rgba(0,0,0,0.6)',
        allowOutsideClick: true,
        customClass: {
            popup: 'rounded-2xl shadow-2xl border border-purple-500/30 max-w-lg',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2.5 text-white font-semibold',
            cancelButton: 'bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-xl px-6 py-2.5 text-gray-700 font-semibold'
        }
    }).then((result) => {
        document.body.style.overflow = '';
        
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: '✅ Términos aceptados',
                text: '📋 Has aceptado los términos y condiciones',
                timer: 2500,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                showCloseButton: true
            });
        }
    });
}

// ===== POLÍTICA DE PRIVACIDAD =====
function mostrarPrivacidadLegal() {
    Swal.fire({
        title: '🔒 Política de privacidad',
        html: `
            <div class="text-left max-h-80 overflow-y-auto pr-2 space-y-3">
                <div class="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-purple-100">
                    <p class="text-sm text-gray-600"><strong>📌 Versión:</strong> 2.0 - 2026</p>
                    <p class="text-sm text-gray-600"><strong>📅 Última actualización:</strong> 20 de junio de 2026</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">📊 1. Datos recopilados</h4>
                    <p class="text-sm text-gray-600 mt-2">Recopilamos información básica como nombre, email, dirección de envío y datos de pago para procesar tus pedidos correctamente.</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">🔐 2. Seguridad</h4>
                    <p class="text-sm text-gray-600 mt-2">Implementamos medidas de seguridad avanzadas para proteger tu información personal contra accesos no autorizados.</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">📧 3. Uso de la información</h4>
                    <p class="text-sm text-gray-600 mt-2">Utilizamos tus datos para procesar pedidos, enviar actualizaciones, ofrecer promociones personalizadas y mejorar nuestros servicios.</p>
                </div>
                <div class="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 flex items-center gap-2">🛡️ 4. Protección de datos</h4>
                    <p class="text-sm text-gray-600 mt-2">Cumplimos con la Ley de Protección de Datos Personales (Ley 19.628). Tus datos son tratados con estricta confidencialidad.</p>
                </div>
                <div class="p-5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl border-2 border-emerald-200 text-center">
                    <p class="text-sm text-gray-700 font-medium">✅ Acepto la política de privacidad</p>
                    <p class="text-xs text-gray-500 mt-1">Tus datos están seguros con nosotros</p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '✅ Aceptar política',
        showCancelButton: true,
        cancelButtonText: '❌ Cancelar',
        cancelButtonColor: '#6b7280',
        reverseButtons: true,
        showCloseButton: true,
        backdrop: 'rgba(0,0,0,0.6)',
        allowOutsideClick: true,
        customClass: {
            popup: 'rounded-2xl shadow-2xl border border-purple-500/30 max-w-lg',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2.5 text-white font-semibold',
            cancelButton: 'bg-gray-200 hover:bg-gray-300 transition-all duration-300 rounded-xl px-6 py-2.5 text-gray-700 font-semibold'
        }
    }).then((result) => {
        document.body.style.overflow = '';
        
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: '✅ Política aceptada',
                text: '🔒 Has aceptado la política de privacidad',
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
window.mostrarTerminos = mostrarTerminos;
window.mostrarPrivacidadLegal = mostrarPrivacidadLegal;