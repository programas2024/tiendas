// ==================== SISTEMA DE INFORMACIÓN Y SOPORTE ====================

// ===== MOSTRAR INFORMACIÓN DEL SISTEMA =====
function mostrarInfo() {
    const modal = document.getElementById('modal-info');
    if (!modal) return;
    
    const contenido = document.getElementById('info-contenido');
    if (!contenido) return;
    
    // Obtener estadísticas de los datos globales
    const productosCount = typeof productos !== 'undefined' ? productos.length : 0;
    const categoriasCount = typeof categorias !== 'undefined' ? categorias.length : 0;
    const cuponesValidos = typeof cupones !== 'undefined' ? cupones.filter(c => c.valido).length : 0;
    
    contenido.innerHTML = `
        <div class="space-y-6">
            <!-- Logo grande -->
            <div class="text-center">
                <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl mb-4">
                    <i class="fas fa-headset text-white text-4xl"></i>
                </div>
                <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Centro de Soporte
                </h3>
                <p class="text-gray-500 text-sm">¿Necesitas ayuda? Estamos aquí para ti</p>
            </div>
            
            <!-- Descripción -->
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-100">
                <p class="text-gray-700 text-center leading-relaxed">
                    <i class="fas fa-quote-left text-purple-400 mr-1"></i>
                    En ShopVerse nos preocupamos por ti. Nuestro equipo de soporte está disponible para ayudarte 
                    con cualquier consulta o problema que puedas tener.
                    <i class="fas fa-quote-right text-purple-400 ml-1"></i>
                </p>
            </div>
            
            <!-- Métodos de contacto -->
            <div>
                <h4 class="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2">
                    <i class="fas fa-phone text-purple-600"></i>
                    Métodos de contacto
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <!-- Email -->
                    <div class="bg-blue-50 rounded-xl p-4 border border-blue-100 hover:shadow-md transition group">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                <i class="fas fa-envelope text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 text-sm">Email</h4>
                                <p class="text-xs text-gray-500">soporte@shopverse.com</p>
                                <button onclick="copiarEmail()" class="text-xs text-purple-600 hover:text-purple-800 mt-1">
                                    <i class="fas fa-copy"></i> Copiar
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Teléfono -->
                    <div class="bg-green-50 rounded-xl p-4 border border-green-100 hover:shadow-md transition group">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                <i class="fas fa-phone text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 text-sm">Teléfono</h4>
                                <p class="text-xs text-gray-500">+56 9 1234 5678</p>
                                <p class="text-xs text-green-600 mt-1">Llamada gratis</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Chat -->
                    <div class="bg-purple-50 rounded-xl p-4 border border-purple-100 hover:shadow-md transition group">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                <i class="fas fa-comment-dots text-white text-sm"></i>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800 text-sm">Chat en vivo</h4>
                                <p class="text-xs text-gray-500">Atención inmediata</p>
                                <button onclick="abrirChat()" class="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-lg mt-1 hover:shadow-lg transition">
                                    <i class="fas fa-comment"></i> Iniciar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Horario de atención -->
            <div>
                <h4 class="font-bold text-gray-700 text-sm mb-2 flex items-center gap-2">
                    <i class="fas fa-clock text-orange-600"></i>
                    Horario de atención
                </h4>
                <div class="grid grid-cols-2 gap-2 text-sm">
                    <div class="bg-orange-50 rounded-lg px-4 py-3 border border-orange-100">
                        <p class="font-semibold text-gray-700">Lunes a Viernes</p>
                        <p class="text-gray-600">9:00 - 18:00</p>
                    </div>
                    <div class="bg-orange-50 rounded-lg px-4 py-3 border border-orange-100">
                        <p class="font-semibold text-gray-700">Sábado</p>
                        <p class="text-gray-600">10:00 - 14:00</p>
                    </div>
                </div>
            </div>
            
            <!-- Preguntas Frecuentes -->
            <div>
                <h4 class="font-bold text-gray-700 text-sm mb-2 flex items-center gap-2">
                    <i class="fas fa-question-circle text-purple-600"></i>
                    Preguntas Frecuentes
                </h4>
                <div class="space-y-2">
                    <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <details>
                            <summary class="font-semibold text-gray-700 text-sm cursor-pointer hover:text-purple-600 transition">
                                ¿Cómo puedo realizar un pedido?
                            </summary>
                            <p class="text-xs text-gray-600 mt-2">Selecciona los productos, agrégalos al carrito y sigue los pasos de pago.</p>
                        </details>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <details>
                            <summary class="font-semibold text-gray-700 text-sm cursor-pointer hover:text-purple-600 transition">
                                ¿Cuánto tarda el envío?
                            </summary>
                            <p class="text-xs text-gray-600 mt-2">Los envíos se realizan en 3-5 días hábiles. Recibirás un número de seguimiento.</p>
                        </details>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <details>
                            <summary class="font-semibold text-gray-700 text-sm cursor-pointer hover:text-purple-600 transition">
                                ¿Cómo puedo rastrear mi pedido?
                            </summary>
                            <p class="text-xs text-gray-600 mt-2">Ve a "Mis compras" en tu perfil y encontrarás el número de seguimiento.</p>
                        </details>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <details>
                            <summary class="font-semibold text-gray-700 text-sm cursor-pointer hover:text-purple-600 transition">
                                ¿Qué métodos de pago aceptan?
                            </summary>
                            <p class="text-xs text-gray-600 mt-2">Aceptamos tarjetas de crédito, débito, transferencias y WebPay.</p>
                        </details>
                    </div>
                    <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
                        <details>
                            <summary class="font-semibold text-gray-700 text-sm cursor-pointer hover:text-purple-600 transition">
                                ¿Cómo puedo devolver un producto?
                            </summary>
                            <p class="text-xs text-gray-600 mt-2">Puedes devolver cualquier producto dentro de los 30 días posteriores a la compra.</p>
                        </details>
                    </div>
                </div>
            </div>
            
            <!-- Estadísticas rápidas -->
            <div class="grid grid-cols-3 gap-2 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-100">
                <div>
                    <p class="text-2xl font-bold text-purple-600">${productosCount}</p>
                    <p class="text-xs text-gray-500">Productos</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-blue-600">${categoriasCount}</p>
                    <p class="text-xs text-gray-500">Categorías</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-green-600">${cuponesValidos}</p>
                    <p class="text-xs text-gray-500">Cupones</p>
                </div>
            </div>
            
            <!-- Versión -->
            <div class="text-center text-xs text-gray-400 border-t border-gray-100 pt-3">
                <i class="fas fa-code mr-1"></i>
                ShopVerse v2.0 • Soporte disponible 24/7
            </div>
        </div>
    `;
    
    // 🔥 MOSTRAR EL MODAL
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// ===== CERRAR MODAL DE INFORMACIÓN =====
function cerrarInfo() {
    const modal = document.getElementById('modal-info');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// ===== COPIAR EMAIL =====
function copiarEmail() {
    const email = 'soporte@shopverse.com';
    navigator.clipboard.writeText(email).then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Copiado!',
            text: 'El email ha sido copiado al portapapeles',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    }).catch(() => {
        // Fallback si no funciona clipboard
        Swal.fire({
            title: 'Copia el email',
            text: email,
            icon: 'info',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: 'Copiar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                prompt('Copia el email:', email);
            }
        });
    });
}

// ===== ABRIR CHAT =====
function abrirChat() {
    Swal.fire({
        title: '💬 Chat en vivo',
        html: `
            <div class="text-left">
                <p class="text-gray-600">Un agente te atenderá en breve.</p>
                <div class="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <p class="text-sm text-gray-600">
                        <i class="fas fa-clock text-purple-600"></i>
                        Tiempo estimado de espera: <strong>menos de 2 minutos</strong>
                    </p>
                </div>
                <div class="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p class="text-xs text-gray-500">
                        <i class="fas fa-info-circle text-blue-600"></i>
                        Horario de atención: Lun-Vie 9:00 - 18:00
                    </p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: 'Iniciar chat',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        backdrop: 'rgba(0,0,0,0.6)'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '🟢 ¡Conectado!',
                html: `
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-comment-dots text-green-600 text-3xl"></i>
                        </div>
                        <p class="text-gray-600">Chat iniciado con éxito.</p>
                        <p class="text-sm text-gray-500 mt-2">Espera la respuesta de un agente.</p>
                        <div class="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Agente disponible
                        </div>
                    </div>
                `,
                icon: 'success',
                timer: 3000,
                showConfirmButton: true,
                confirmButtonColor: '#7c3aed',
                confirmButtonText: '✅ Entendido'
            });
        }
    });
}

// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    // Botón de información (ahora muestra soporte)
    const btnInfo = document.getElementById('btn-info');
    if (btnInfo) {
        btnInfo.addEventListener('click', function(e) {
            e.stopPropagation();
            mostrarInfo();
        });
    }
    
    // CERRAR CON LA X
    const closeBtn = document.querySelector('#modal-info .fa-times')?.parentElement;
    if (closeBtn) {
        closeBtn.addEventListener('click', cerrarInfo);
    }
    
    // CERRAR HACIENDO CLICK FUERA
    const modal = document.getElementById('modal-info');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarInfo();
            }
        });
    }
});

// ===== EXPORTAR FUNCIONES PARA USO GLOBAL =====
window.mostrarInfo = mostrarInfo;
window.cerrarInfo = cerrarInfo;
window.copiarEmail = copiarEmail;
window.abrirChat = abrirChat;
