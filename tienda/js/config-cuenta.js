// ==================== CONFIGURACIÓN - CUENTA ====================

// ===== LOGROS =====
function verLogros() {
    Swal.fire({
        title: '🏆 Logros desbloqueados',
        html: `
            <div class="text-left space-y-3 max-h-80 overflow-y-auto pr-2">
                <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                    <div class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">🎯</div>
                    <div class="flex-1">
                        <p class="font-bold text-gray-800">Primera compra</p>
                        <p class="text-sm text-gray-600">Completaste tu primera compra 🛒</p>
                    </div>
                    <span class="text-emerald-500 text-2xl">✅</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                    <div class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">🛍️</div>
                    <div class="flex-1">
                        <p class="font-bold text-gray-800">5 productos comprados</p>
                        <p class="text-sm text-gray-600">Ya llevas 5 compras realizadas 📦</p>
                    </div>
                    <span class="text-emerald-500 text-2xl">✅</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                    <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">✍️</div>
                    <div class="flex-1">
                        <p class="font-bold text-gray-800">10 reseñas escritas</p>
                        <p class="text-sm text-gray-600">Tu opinión es importante ⭐</p>
                    </div>
                    <span class="text-emerald-500 text-2xl">✅</span>
                </div>
                <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl border border-amber-200 opacity-60">
                    <div class="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">👑</div>
                    <div class="flex-1">
                        <p class="font-bold text-gray-800">Miembro VIP</p>
                        <p class="text-sm text-gray-600">Falta 1 compra para desbloquear 🔒</p>
                    </div>
                    <span class="text-gray-400 text-2xl">🔒</span>
                </div>
                <div class="mt-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-purple-200 text-center">
                    <p class="text-gray-700 font-medium">📊 Progreso total</p>
                    <div class="flex items-center justify-center gap-4 mt-2">
                        <span class="text-3xl font-bold text-purple-600">12</span>
                        <span class="text-gray-400 text-2xl">/</span>
                        <span class="text-2xl text-gray-600">20</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
                        <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000" style="width: 60%"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-2">🎯 8 logros restantes por desbloquear</p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '🎯 Ver más logros',
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

// ===== SALDO =====
function verSaldo() {
    Swal.fire({
        title: '💰 Saldo disponible',
        html: `
            <div class="text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <span class="text-5xl">💎</span>
                </div>
                <p class="text-4xl font-bold text-emerald-600">$25.000</p>
                <p class="text-sm text-gray-500 mt-2">🇨🇱 Pesos chilenos disponibles</p>
                <div class="mt-6 grid grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                        <div class="flex items-center justify-center gap-2">
                            <span class="text-2xl">📈</span>
                            <p class="text-2xl font-bold text-blue-600">+$5.000</p>
                        </div>
                        <p class="text-xs text-gray-600 mt-1">Último ingreso</p>
                        <p class="text-xs text-gray-400 mt-1">📅 20/06/2026</p>
                    </div>
                    <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200">
                        <div class="flex items-center justify-center gap-2">
                            <span class="text-2xl">📦</span>
                            <p class="text-2xl font-bold text-purple-600">3</p>
                        </div>
                        <p class="text-xs text-gray-600 mt-1">Compras este mes</p>
                        <p class="text-xs text-gray-400 mt-1">🛒 Total acumulado</p>
                    </div>
                </div>
                <div class="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                    <p class="text-sm text-gray-700">💡 Recarga tu saldo y obtén <span class="font-bold text-amber-600">10% extra</span> en tu primera recarga</p>
                </div>
                <div class="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <p class="text-sm text-gray-700">🎯 Próximo objetivo: <span class="font-bold text-emerald-600">$50.000 CLP</span> (Nivel Plata)</p>
                    <div class="w-full bg-gray-200 rounded-full h-2 mt-2 overflow-hidden">
                        <div class="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full" style="width: 50%"></div>
                    </div>
                    <p class="text-xs text-gray-500 mt-1">50% completado</p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💳 Recargar saldo',
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
                title: '💳 Recargar saldo',
                text: '🔐 Serás redirigido a la pasarela de pago segura',
                icon: 'info',
                confirmButtonColor: '#7c3aed',
                confirmButtonText: '💳 Continuar',
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
            }).then(() => {
                document.body.style.overflow = '';
            });
        }
    });
}

// ===== EXPORTAR =====
window.verLogros = verLogros;
window.verSaldo = verSaldo;