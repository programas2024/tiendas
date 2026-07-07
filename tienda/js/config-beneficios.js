// ==================== CONFIGURACIÓN - BENEFICIOS ====================

// ===== COPIAR CÓDIGO =====
function copiarCodigo() {
    const codigo = '🏷️ SHOP-2026-ABC123';
    navigator.clipboard.writeText(codigo).then(() => {
        Swal.fire({
            icon: 'success',
            title: '🎉 ¡Código copiado!',
            text: codigo,
            timer: 2500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            showCloseButton: true
        });
    });
}

// ===== INVITAR AMIGOS =====
function mostrarInvitar() {
    Swal.fire({
        title: '👥 Invitar amigos',
        html: `
            <div class="text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <span class="text-5xl">🎁</span>
                </div>
                <p class="text-gray-700 font-medium">¡Invita a tus amigos y gana!</p>
                <p class="text-sm text-gray-500 mt-1">Comparte tu código único de invitación</p>
                <div class="mt-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-purple-200 flex items-center justify-between">
                    <code class="text-purple-700 font-bold text-lg">🏷️ SHOP-2026-ABC123</code>
                    <button onclick="copiarCodigo()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold flex items-center gap-2">
                        <span>📋</span> Copiar
                    </button>
                </div>
                <p class="text-sm text-gray-700 mt-3">🎯 Gana <span class="font-bold text-emerald-600 text-lg">$5.000 CLP</span> por cada amigo que se registre</p>
                <div class="mt-4 grid grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 border border-green-200">
                        <div class="flex items-center justify-center gap-2">
                            <span class="text-2xl">👥</span>
                            <p class="text-3xl font-bold text-emerald-600">3</p>
                        </div>
                        <p class="text-xs text-gray-600">Amigos invitados</p>
                    </div>
                    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 border border-blue-200">
                        <div class="flex items-center justify-center gap-2">
                            <span class="text-2xl">💰</span>
                            <p class="text-3xl font-bold text-blue-600">$15.000</p>
                        </div>
                        <p class="text-xs text-gray-600">Ganados</p>
                    </div>
                </div>
                <div class="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <p class="text-sm text-gray-700">🎯 Próximo objetivo: <span class="font-bold text-amber-600">5 amigos</span> (Bonus extra de $10.000)</p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                        <div class="bg-gradient-to-r from-amber-400 to-orange-400 h-2 rounded-full" style="width: 60%"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">60% completado</p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '🔗 Compartir enlace',
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
    }).then((result) => {
        document.body.style.overflow = '';
        
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: '📤 ¡Enlace compartido!',
                text: '🔗 Tu enlace de invitación ha sido copiado para compartir',
                timer: 2500,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                showCloseButton: true
            });
        }
    });
}

// ===== VIP =====
function mostrarVIP() {
    Swal.fire({
        title: '👑 Descuentos VIP',
        html: `
            <div class="text-center">
                <div class="w-28 h-28 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <span class="text-6xl">👑</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Miembro VIP</h3>
                <p class="text-gray-500">Nivel: <span class="font-bold text-amber-500 text-xl">⭐ Oro ⭐</span></p>
                <div class="mt-6 grid grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                        <p class="text-2xl font-bold text-purple-600">15%</p>
                        <p class="text-xs text-gray-600">🛍️ Descuento en compras</p>
                    </div>
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                        <p class="text-2xl font-bold text-blue-600">🚚</p>
                        <p class="text-xs text-gray-600">Envío gratis siempre</p>
                    </div>
                    <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                        <p class="text-2xl font-bold text-emerald-600">⚡</p>
                        <p class="text-xs text-gray-600">Atención VIP prioritaria</p>
                    </div>
                    <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
                        <p class="text-2xl font-bold text-orange-600">+30%</p>
                        <p class="text-xs text-gray-600">⭐ Puntos extra</p>
                    </div>
                </div>
                <div class="mt-4 p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200">
                    <p class="text-sm text-gray-700">🏆 Próximo nivel: <span class="font-bold text-yellow-600">Platino</span> (20 compras)</p>
                    <div class="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
                        <div class="bg-gradient-to-r from-amber-400 to-yellow-500 h-3 rounded-full transition-all duration-1000" style="width: 75%"></div>
                    </div>
                    <div class="flex justify-between text-xs text-gray-500 mt-1">
                        <span>📊 15 de 20 compras</span>
                        <span>75%</span>
                    </div>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💫 Entendido',
        showCancelButton: true,
        cancelButtonText: '❌ Cerrar',
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
    }).then(() => {
        document.body.style.overflow = '';
    });
}

// ===== EXPORTAR =====
window.copiarCodigo = copiarCodigo;
window.mostrarInvitar = mostrarInvitar;
window.mostrarVIP = mostrarVIP;