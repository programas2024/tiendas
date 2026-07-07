// ==================== SISTEMA DE CONFIGURACIÓN ====================

// ===== TOGGLE SWITCH =====
function toggleSwitch(element) {
    element.classList.toggle('active');
    const isActive = element.classList.contains('active');
    const label = element.closest('.config-card')?.querySelector('.text-gray-500');
    if (label) {
        const text = isActive ? 'activada' : 'desactivada';
        label.textContent = label.textContent.replace(/activada|desactivada/, text);
    }
    
    // Guardar estado
    const key = element.closest('.config-card')?.querySelector('.font-semibold')?.textContent || 'switch';
    localStorage.setItem(`config_${key}`, isActive);
}

// ===== COPIAR CÓDIGO DE INVITACIÓN =====
function copiarCodigo() {
    const codigo = '🏷️ SHOP-2026-ABC123';
    navigator.clipboard.writeText(codigo.replace('🏷️ ', '')).then(() => {
        Swal.fire({
            icon: 'success',
            title: '🎉 ¡Copiado!',
            text: 'Código copiado al portapapeles',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: '#1a1a2e',
            color: '#ffffff',
            iconColor: '#a78bfa'
        });
    }).catch(() => {
        Swal.fire({
            title: '📋 Copia el código',
            text: codigo.replace('🏷️ ', ''),
            icon: 'info',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: '📋 Copiar',
            showCancelButton: true,
            cancelButtonText: '❌ Cancelar',
            background: '#1a1a2e',
            color: '#ffffff',
            iconColor: '#a78bfa'
        }).then((result) => {
            if (result.isConfirmed) {
                prompt('Copia el código:', codigo.replace('🏷️ ', ''));
            }
        });
    });
}

// ===== GUARDAR CONFIGURACIÓN =====
function guardarConfiguracion() {
    const switches = document.querySelectorAll('.toggle-switch.active');
    const configuracion = {
        modo_oscuro: false,
        perfil_publico: false,
        notificaciones: true,
        alto_contraste: false,
        mostrar_email: true,
        fecha: new Date().toISOString()
    };
    
    switches.forEach((sw, index) => {
        const key = `switch_${index}`;
        configuracion[key] = true;
    });
    
    localStorage.setItem('shopverse_config', JSON.stringify(configuracion));
    
    Swal.fire({
        icon: 'success',
        title: '✅ ¡Configuración guardada!',
        text: 'Tus cambios han sido aplicados correctamente ✨',
        timer: 2500,
        showConfirmButton: true,
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '💫 Perfecto',
        background: '#1a1a2e',
        color: '#ffffff',
        iconColor: '#34d399',
        backdrop: 'rgba(0,0,0,0.7)'
    });
}

// ===== EDITAR CONFIGURACIÓN =====
function editarConfig(tipo) {
    const opciones = {
        'nombre': {
            icon: '👤',
            title: 'Editar nombre',
            input: 'text',
            inputValue: 'Usuario Demo',
            text: '✏️ Ingresa tu nuevo nombre de usuario',
            confirmText: '💾 Actualizar nombre',
            placeholder: 'Tu nombre completo'
        },
        'correo': {
            icon: '✉️',
            title: 'Editar correo electrónico',
            input: 'email',
            inputValue: 'usuario@shopverse.com',
            text: '📧 Ingresa tu nuevo correo electrónico',
            confirmText: '💾 Actualizar correo',
            placeholder: 'tu@email.com'
        },
        'logros': {
            icon: '🏆',
            title: '🏅 Logros desbloqueados',
            html: `
                <div class="text-left space-y-3">
                    <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl border border-emerald-200">
                        <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">🎯</div>
                        <div class="flex-1">
                            <p class="font-bold text-gray-800">Primera compra</p>
                            <p class="text-sm text-gray-600">Completaste tu primera compra 🛒</p>
                        </div>
                        <span class="text-emerald-500 text-2xl">✅</span>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
                        <div class="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">🛍️</div>
                        <div class="flex-1">
                            <p class="font-bold text-gray-800">5 productos comprados</p>
                            <p class="text-sm text-gray-600">Ya llevas 5 compras realizadas 📦</p>
                        </div>
                        <span class="text-emerald-500 text-2xl">✅</span>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl border border-purple-200">
                        <div class="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">✍️</div>
                        <div class="flex-1">
                            <p class="font-bold text-gray-800">10 reseñas escritas</p>
                            <p class="text-sm text-gray-600">Tu opinión es importante para otros ⭐</p>
                        </div>
                        <span class="text-emerald-500 text-2xl">✅</span>
                    </div>
                    <div class="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl border border-amber-200 opacity-60">
                        <div class="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">👑</div>
                        <div class="flex-1">
                            <p class="font-bold text-gray-800">Miembro VIP</p>
                            <p class="text-sm text-gray-600">Falta 1 compra para desbloquear 🔒</p>
                        </div>
                        <span class="text-gray-400 text-2xl">🔒</span>
                    </div>
                    <div class="mt-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-purple-200 text-center">
                        <p class="text-gray-700 font-medium">Progreso total</p>
                        <div class="flex items-center justify-center gap-4 mt-2">
                            <span class="text-3xl font-bold text-purple-600">12</span>
                            <span class="text-gray-400">/</span>
                            <span class="text-2xl text-gray-600">20</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
                            <div class="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000" style="width: 60%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">🎯 8 logros restantes por desbloquear</p>
                    </div>
                </div>
            `,
            confirmText: '🎯 Ver más logros',
            showConfirm: true
        },
        'saldo': {
            icon: '💰',
            title: '💎 Saldo disponible',
            html: `
                <div class="text-center">
                    <div class="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-105 transition">
                        <span class="text-5xl">💰</span>
                    </div>
                    <p class="text-5xl font-bold text-emerald-600">$25.000</p>
                    <p class="text-sm text-gray-500 mt-2">🇨🇱 Pesos chilenos disponibles</p>
                    <div class="mt-6 grid grid-cols-2 gap-4">
                        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
                            <p class="text-2xl font-bold text-blue-600">+$5.000</p>
                            <p class="text-xs text-gray-600">Último ingreso</p>
                            <p class="text-xs text-gray-400 mt-1">📅 20/06/2026</p>
                        </div>
                        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200">
                            <p class="text-2xl font-bold text-purple-600">3</p>
                            <p class="text-xs text-gray-600">Compras este mes</p>
                            <p class="text-xs text-gray-400 mt-1">📦 Total acumulado</p>
                        </div>
                    </div>
                    <div class="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                        <p class="text-sm text-gray-700">💡 Recarga tu saldo y obtén <span class="font-bold text-amber-600">10% extra</span> en tu primera recarga</p>
                    </div>
                </div>
            `,
            confirmText: '💳 Recargar saldo',
            showConfirm: true
        },
        'redes': {
            icon: '🔗',
            title: '🌐 Conectar redes sociales',
            html: `
                <div class="space-y-3">
                    <button onclick="conectarRedSocial('facebook')" class="w-full bg-[#1877f2] text-white py-3 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-4 text-lg font-semibold">
                        <span class="text-2xl">📘</span>
                        <span>Conectar Facebook</span>
                        <span class="text-sm opacity-75">+</span>
                    </button>
                    <button onclick="conectarRedSocial('instagram')" class="w-full bg-gradient-to-r from-[#f09433] to-[#e6683c] text-white py-3 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-4 text-lg font-semibold">
                        <span class="text-2xl">📸</span>
                        <span>Conectar Instagram</span>
                        <span class="text-sm opacity-75">+</span>
                    </button>
                    <button onclick="conectarRedSocial('twitter')" class="w-full bg-[#1da1f2] text-white py-3 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-4 text-lg font-semibold">
                        <span class="text-2xl">🐦</span>
                        <span>Conectar Twitter</span>
                        <span class="text-sm opacity-75">+</span>
                    </button>
                    <button onclick="conectarRedSocial('youtube')" class="w-full bg-[#ff0000] text-white py-3 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-4 text-lg font-semibold">
                        <span class="text-2xl">▶️</span>
                        <span>Conectar YouTube</span>
                        <span class="text-sm opacity-75">+</span>
                    </button>
                    <div class="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 text-center">
                        <p class="text-green-700 font-medium">✅ 2 redes sociales conectadas</p>
                        <p class="text-xs text-gray-500 mt-1">Comparte tus logros con tus amigos</p>
                    </div>
                </div>
            `,
            showConfirm: false
        },
        'privacidad': {
            icon: '🔒',
            title: '🛡️ Privacidad',
            html: `
                <div class="text-left space-y-3">
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">📧</span>
                            <div>
                                <p class="font-semibold text-gray-800">Mostrar email en perfil</p>
                                <p class="text-xs text-gray-500">Visible para otros usuarios</p>
                            </div>
                        </div>
                        <div class="toggle-switch active" onclick="event.stopPropagation(); toggleSwitch(this)"></div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">👀</span>
                            <div>
                                <p class="font-semibold text-gray-800">Perfil público</p>
                                <p class="text-xs text-gray-500">Cualquier usuario puede ver tu perfil</p>
                            </div>
                        </div>
                        <div class="toggle-switch" onclick="event.stopPropagation(); toggleSwitch(this)"></div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">📨</span>
                            <div>
                                <p class="font-semibold text-gray-800">Recibir ofertas por email</p>
                                <p class="text-xs text-gray-500">Promociones y descuentos exclusivos</p>
                            </div>
                        </div>
                        <div class="toggle-switch active" onclick="event.stopPropagation(); toggleSwitch(this)"></div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">📊</span>
                            <div>
                                <p class="font-semibold text-gray-800">Compartir datos de navegación</p>
                                <p class="text-xs text-gray-500">Mejora tu experiencia de compra</p>
                            </div>
                        </div>
                        <div class="toggle-switch" onclick="event.stopPropagation(); toggleSwitch(this)"></div>
                    </div>
                </div>
            `,
            confirmText: '💾 Guardar cambios',
            showConfirm: true
        },
        'accesibilidad': {
            icon: '♿',
            title: '♿ Accesibilidad',
            html: `
                <div class="text-left space-y-3">
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🔤</span>
                            <div>
                                <p class="font-semibold text-gray-800">Tamaño de fuente</p>
                                <p class="text-xs text-gray-500">Ajusta el texto a tu preferencia</p>
                            </div>
                        </div>
                        <select class="border-2 border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200">
                            <option>🔤 Pequeño</option>
                            <option selected>🔤 Mediano</option>
                            <option>🔤 Grande</option>
                            <option>🔤 Muy grande</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🌙</span>
                            <div>
                                <p class="font-semibold text-gray-800">Modo oscuro</p>
                                <p class="text-xs text-gray-500">Tema oscuro para la aplicación</p>
                            </div>
                        </div>
                        <div class="toggle-switch" onclick="event.stopPropagation(); toggleSwitch(this)"></div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🎨</span>
                            <div>
                                <p class="font-semibold text-gray-800">Alto contraste</p>
                                <p class="text-xs text-gray-500">Colores de alto contraste</p>
                            </div>
                        </div>
                        <div class="toggle-switch" onclick="event.stopPropagation(); toggleSwitch(this)"></div>
                    </div>
                    <div class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-purple-300 transition-all">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🎬</span>
                            <div>
                                <p class="font-semibold text-gray-800">Reducir animaciones</p>
                                <p class="text-xs text-gray-500">Reduce movimiento en la interfaz</p>
                            </div>
                        </div>
                        <div class="toggle-switch" onclick="event.stopPropagation(); toggleSwitch(this)"></div>
                    </div>
                </div>
            `,
            confirmText: '💾 Guardar cambios',
            showConfirm: true
        },
        'invitar': {
            icon: '👥',
            title: '👥 Invitar amigos',
            html: `
                <div class="text-center">
                    <div class="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-105 transition">
                        <span class="text-5xl">🎁</span>
                    </div>
                    <p class="text-gray-700 font-medium">¡Invita a tus amigos y gana!</p>
                    <div class="mt-4 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border-2 border-purple-200 flex items-center justify-between">
                        <code class="text-purple-700 font-bold text-lg">🏷️ SHOP-2026-ABC123</code>
                        <button onclick="copiarCodigo()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm font-semibold flex items-center gap-2">
                            <span>📋</span> Copiar
                        </button>
                    </div>
                    <p class="text-sm text-gray-600 mt-3">🎯 Gana <span class="font-bold text-emerald-600 text-lg">$5.000 CLP</span> por cada amigo que se registre</p>
                    <div class="mt-4 grid grid-cols-2 gap-4">
                        <div class="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-4 border border-green-200">
                            <p class="text-3xl font-bold text-emerald-600">3</p>
                            <p class="text-xs text-gray-600">👥 Amigos invitados</p>
                        </div>
                        <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 border border-blue-200">
                            <p class="text-3xl font-bold text-blue-600">$15.000</p>
                            <p class="text-xs text-gray-600">💰 Ganados</p>
                        </div>
                    </div>
                    <div class="mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
                        <p class="text-sm text-gray-700">🎯 Próximo objetivo: <span class="font-bold text-amber-600">5 amigos</span> (Bonus extra de $10.000)</p>
                    </div>
                </div>
            `,
            confirmText: '🔗 Compartir enlace',
            showConfirm: true
        },
        'vip': {
            icon: '👑',
            title: '👑 Descuentos VIP',
            html: `
                <div class="text-center">
                    <div class="w-28 h-28 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl transform hover:scale-105 transition">
                        <span class="text-6xl">👑</span>
                    </div>
                    <h3 class="text-3xl font-bold text-gray-800">Miembro VIP</h3>
                    <p class="text-gray-500">Nivel: <span class="font-bold text-amber-500 text-2xl">⭐ Oro ⭐</span></p>
                    <div class="mt-6 grid grid-cols-2 gap-4">
                        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 border border-purple-200">
                            <p class="text-3xl font-bold text-purple-600">15%</p>
                            <p class="text-xs text-gray-600">🛍️ Descuento en compras</p>
                        </div>
                        <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200">
                            <p class="text-3xl font-bold text-blue-600">🚚</p>
                            <p class="text-xs text-gray-600">Envío gratis siempre</p>
                        </div>
                        <div class="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-4 border border-emerald-200">
                            <p class="text-3xl font-bold text-emerald-600">⚡</p>
                            <p class="text-xs text-gray-600">Atención VIP prioritaria</p>
                        </div>
                        <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200">
                            <p class="text-3xl font-bold text-orange-600">+30%</p>
                            <p class="text-xs text-gray-600">⭐ Puntos extra</p>
                        </div>
                    </div>
                    <div class="mt-4 p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border-2 border-amber-200">
                        <p class="text-sm text-gray-700">🏆 Próximo nivel: <span class="font-bold text-yellow-600 text-lg">Platino</span> (20 compras)</p>
                        <div class="w-full bg-gray-200 rounded-full h-3 mt-3 overflow-hidden">
                            <div class="bg-gradient-to-r from-amber-400 to-yellow-500 h-3 rounded-full transition-all duration-1000" style="width: 75%"></div>
                        </div>
                        <p class="text-xs text-gray-500 mt-2">📊 15 de 20 compras completadas</p>
                    </div>
                </div>
            `,
            showConfirm: false
        },
        'terminos': {
            icon: '📜',
            title: '📋 Términos legales',
            html: `
                <div class="text-left max-h-64 overflow-y-auto space-y-3 pr-2">
                    <div class="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-purple-200">
                        <p class="text-sm text-gray-600"><strong>📌 Versión:</strong> 2.0 - 2026</p>
                        <p class="text-sm text-gray-600"><strong>📅 Última actualización:</strong> 20 de junio de 2026</p>
                    </div>
                    
                    <div class="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                        <h4 class="font-bold text-gray-800 flex items-center gap-2">📋 1. Términos de uso</h4>
                        <p class="text-sm text-gray-600 mt-2">Al utilizar ShopVerse, aceptas cumplir con estos términos y condiciones. El incumplimiento puede resultar en la suspensión de tu cuenta.</p>
                    </div>
                    
                    <div class="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                        <h4 class="font-bold text-gray-800 flex items-center gap-2">🔒 2. Privacidad</h4>
                        <p class="text-sm text-gray-600 mt-2">Protegemos tus datos personales según nuestra política de privacidad. No compartimos tu información con terceros sin tu consentimiento.</p>
                    </div>
                    
                    <div class="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                        <h4 class="font-bold text-gray-800 flex items-center gap-2">🛒 3. Compras</h4>
                        <p class="text-sm text-gray-600 mt-2">Todas las compras son finales. Las devoluciones se rigen por nuestra política de devolución dentro de los 30 días.</p>
                    </div>
                    
                    <div class="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                        <h4 class="font-bold text-gray-800 flex items-center gap-2">⚠️ 4. Responsabilidad</h4>
                        <p class="text-sm text-gray-600 mt-2">ShopVerse no se hace responsable por el mal uso de los productos adquiridos en nuestra plataforma.</p>
                    </div>
                    
                    <div class="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                        <h4 class="font-bold text-gray-800 flex items-center gap-2">🔄 5. Modificaciones</h4>
                        <p class="text-sm text-gray-600 mt-2">Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios serán notificados por email.</p>
                    </div>
                    
                    <div class="p-5 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border-2 border-emerald-200 text-center">
                        <p class="text-sm text-gray-700 font-medium">
                            ✅ Acepto los términos y condiciones
                        </p>
                        <p class="text-xs text-gray-500 mt-1">Al continuar, aceptas nuestra política de privacidad</p>
                    </div>
                </div>
            `,
            confirmText: '✅ Aceptar términos',
            showConfirm: true
        }
    };
    
    const config = opciones[tipo];
    if (!config) {
        Swal.fire({
            icon: 'info',
            title: '⚙️ Configuración',
            text: 'Opción en desarrollo 🚧',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: '💫 Entendido',
            background: '#1a1a2e',
            color: '#ffffff',
            iconColor: '#a78bfa'
        });
        return;
    }
    
    Swal.fire({
        title: `${config.icon} ${config.title}`,
        text: config.text || '',
        html: config.html || '',
        input: config.input || '',
        inputValue: config.inputValue || '',
        inputPlaceholder: config.placeholder || '',
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: config.confirmText || '💫 Aceptar',
        showConfirmButton: config.showConfirm !== undefined ? config.showConfirm : true,
        showCancelButton: true,
        cancelButtonText: '❌ Cancelar',
        cancelButtonColor: '#6b7280',
        backdrop: 'rgba(0,0,0,0.7)',
        background: '#1a1a2e',
        color: '#ffffff',
        iconColor: '#a78bfa',
        customClass: {
            popup: 'rounded-3xl shadow-2xl',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl px-6 py-2.5 text-white font-semibold',
            cancelButton: 'bg-gray-700 hover:bg-gray-600 transition-all duration-300 rounded-xl px-6 py-2.5 text-white font-semibold',
            input: 'bg-gray-800 text-white border-2 border-purple-500 rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-transparent'
        }
    }).then((result) => {
        // Restaurar scroll al cerrar
        document.body.style.overflow = '';
        
        if (result.isConfirmed) {
            if (tipo === 'nombre' && result.value) {
                Swal.fire({
                    icon: 'success',
                    title: '✅ ¡Nombre actualizado!',
                    text: `✨ Tu nuevo nombre es: ${result.value}`,
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    background: '#1a1a2e',
                    color: '#ffffff',
                    iconColor: '#34d399'
                });
            } else if (tipo === 'correo' && result.value) {
                Swal.fire({
                    icon: 'success',
                    title: '✅ ¡Correo actualizado!',
                    text: `📧 Tu nuevo correo es: ${result.value}`,
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    background: '#1a1a2e',
                    color: '#ffffff',
                    iconColor: '#34d399'
                });
            } else if (tipo === 'invitar') {
                Swal.fire({
                    icon: 'success',
                    title: '📤 ¡Enlace compartido!',
                    text: '🔗 Tu enlace de invitación ha sido copiado para compartir',
                    timer: 2500,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    background: '#1a1a2e',
                    color: '#ffffff',
                    iconColor: '#f59e0b'
                });
            } else if (tipo === 'terminos') {
                Swal.fire({
                    icon: 'success',
                    title: '✅ Términos aceptados',
                    text: '📋 Has aceptado los términos y condiciones',
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    background: '#1a1a2e',
                    color: '#ffffff',
                    iconColor: '#34d399'
                });
            } else if (tipo === 'privacidad' || tipo === 'accesibilidad') {
                Swal.fire({
                    icon: 'success',
                    title: '✅ Cambios guardados',
                    text: '⚙️ Tu configuración ha sido actualizada',
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                    background: '#1a1a2e',
                    color: '#ffffff',
                    iconColor: '#34d399'
                });
            } else if (tipo === 'saldo') {
                Swal.fire({
                    icon: 'info',
                    title: '💳 Recargar saldo',
                    text: '🔐 Serás redirigido a la pasarela de pago segura',
                    confirmButtonColor: '#7c3aed',
                    confirmButtonText: '💳 Continuar',
                    background: '#1a1a2e',
                    color: '#ffffff',
                    iconColor: '#f59e0b'
                });
            } else if (tipo === 'logros') {
                Swal.fire({
                    icon: 'info',
                    title: '🏆 Todos los logros',
                    text: '🎯 Próximamente más logros disponibles',
                    confirmButtonColor: '#7c3aed',
                    confirmButtonText: '🎯 Ver más',
                    background: '#1a1a2e',
                    color: '#ffffff',
                    iconColor: '#f59e0b'
                });
            }
        }
    });
}

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
        icon: 'info',
        title: `${data.emoji} Conectar ${data.nombre}`,
        html: `
            <div class="text-center">
                <div class="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl" style="background: ${data.color}">
                    <span class="text-5xl">${data.emoji}</span>
                </div>
                <p class="text-gray-300">Serás redirigido a ${data.nombre} para autorizar la conexión.</p>
                <p class="text-sm text-gray-400 mt-2">🔒 Tus datos estarán seguros y protegidos.</p>
            </div>
        `,
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '✅ Autorizar conexión',
        showCancelButton: true,
        cancelButtonText: '❌ Cancelar',
        background: '#1a1a2e',
        color: '#ffffff',
        iconColor: '#a78bfa'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: '✅ ¡Conectado!',
                text: `${data.emoji} Tu cuenta de ${data.nombre} ha sido conectada exitosamente`,
                timer: 2500,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                background: '#1a1a2e',
                color: '#ffffff',
                iconColor: '#34d399'
            });
        }
    });
}

// ===== VOLVER AL INICIO =====
function volverInicio() {
    document.querySelector('main').style.opacity = '0';
    document.querySelector('main').style.transform = 'translateY(20px)';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// ===== INICIALIZAR CONFIGURACIÓN =====
function inicializarConfiguracion() {
    // Restaurar switches guardados
    const switches = document.querySelectorAll('.toggle-switch');
    switches.forEach((sw, index) => {
        const key = `switch_${index}`;
        const saved = localStorage.getItem(`config_${key}`);
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
    
    // Fix para scroll - cerrar modales con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.body.style.overflow = '';
        }
    });
});

// ===== EXPORTAR FUNCIONES =====
window.toggleSwitch = toggleSwitch;
window.copiarCodigo = copiarCodigo;
window.guardarConfiguracion = guardarConfiguracion;
window.editarConfig = editarConfig;
window.conectarRedSocial = conectarRedSocial;
window.volverInicio = volverInicio;
window.inicializarConfiguracion = inicializarConfiguracion;