// ==================== CONFIGURACIÓN - ACCESIBILIDAD ====================

// ===== TOGGLE SWITCH PARA ACCESIBILIDAD =====
function toggleAccesibilidad(element) {
    element.classList.toggle('active');
}

// ===== TOGGLE SWITCH GENÉRICO =====
function toggleSwitch(element) {
    element.classList.toggle('active');
}

// ===== MOSTRAR ACCESIBILIDAD =====
function mostrarAccesibilidad() {
    Swal.fire({
        title: '♿ Accesibilidad',
        html: `
            <div class="text-left space-y-3 max-h-80 overflow-y-auto pr-2">
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 transition">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">🔤</span>
                        <div>
                            <p class="font-semibold text-gray-800 text-sm">Tamaño de fuente</p>
                            <p class="text-xs text-gray-500">Ajusta el texto a tu preferencia</p>
                        </div>
                    </div>
                    <select class="bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200">
                        <option>🔤 Pequeño</option>
                        <option selected>🔤 Mediano</option>
                        <option>🔤 Grande</option>
                        <option>🔤 Muy grande</option>
                    </select>
                </div>
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 transition">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">🌙</span>
                        <div>
                            <p class="font-semibold text-gray-800 text-sm">Modo oscuro</p>
                            <p class="text-xs text-gray-500">Tema oscuro para la aplicación</p>
                        </div>
                    </div>
                    <div class="toggle-switch" onclick="event.stopPropagation(); toggleAccesibilidad(this)"></div>
                </div>
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 transition">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">🎨</span>
                        <div>
                            <p class="font-semibold text-gray-800 text-sm">Alto contraste</p>
                            <p class="text-xs text-gray-500">Colores de alto contraste</p>
                        </div>
                    </div>
                    <div class="toggle-switch" onclick="event.stopPropagation(); toggleAccesibilidad(this)"></div>
                </div>
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 transition">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">🎬</span>
                        <div>
                            <p class="font-semibold text-gray-800 text-sm">Reducir animaciones</p>
                            <p class="text-xs text-gray-500">Reduce movimiento en la interfaz</p>
                        </div>
                    </div>
                    <div class="toggle-switch" onclick="event.stopPropagation(); toggleAccesibilidad(this)"></div>
                </div>
                <div class="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-purple-100 text-center">
                    <p class="text-sm text-gray-700">♿ Haciendo ShopVerse accesible para todos</p>
                    <p class="text-xs text-gray-500 mt-1">Tu comodidad es nuestra prioridad</p>
                </div>
            </div>
            <style>
                .toggle-switch {
                    position: relative;
                    width: 48px;
                    height: 26px;
                    background: #d1d5db;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    flex-shrink: 0;
                }
                .toggle-switch.active {
                    background: #7c3aed;
                }
                .toggle-switch::after {
                    content: '';
                    position: absolute;
                    top: 3px;
                    left: 3px;
                    width: 20px;
                    height: 20px;
                    background: white;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }
                .toggle-switch.active::after {
                    transform: translateX(22px);
                }
            </style>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💾 Guardar cambios',
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
                title: '✅ Cambios guardados',
                text: '⚙️ Tu configuración de accesibilidad ha sido actualizada',
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
window.toggleAccesibilidad = toggleAccesibilidad;
window.toggleSwitch = toggleSwitch;
window.mostrarAccesibilidad = mostrarAccesibilidad;