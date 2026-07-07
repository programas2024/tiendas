// ==================== SISTEMA DE INFORMACIÓN - ASISTENTE IA ====================

function mostrarInfo() {
    const modal = document.getElementById('modal-info');
    if (!modal) return;
    
    const contenido = document.getElementById('info-contenido');
    if (!contenido) return;
    
    contenido.innerHTML = `
        <div class="space-y-6">
            <!-- Logo del Asistente -->
            <div class="text-center">
                <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl mb-4 relative">
                    <i class="fas fa-robot text-white text-5xl"></i>
                    <span class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></span>
                </div>
                <h3 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Asistente Virtual ShopVerse
                </h3>
                <p class="text-gray-500 text-sm">Tu soporte inteligente 24/7</p>
            </div>
            
            <!-- Descripción -->
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <p class="text-gray-700 text-center leading-relaxed">
                    <i class="fas fa-quote-left text-purple-400 mr-1"></i>
                    El Asistente Virtual de ShopVerse es un sistema de soporte inteligente basado en IA 
                    que está disponible <strong>24 horas al día, 7 días a la semana</strong> para resolver 
                    todas tus dudas sobre compras, envíos, pagos y más.
                    <i class="fas fa-quote-right text-purple-400 ml-1"></i>
                </p>
            </div>
            
            <!-- ¿Qué puedo hacer? -->
            <div>
                <h4 class="font-bold text-gray-700 text-sm mb-2 flex items-center gap-2">
                    <i class="fas fa-question-circle text-purple-600"></i>
                    ¿Qué puedo preguntar?
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div class="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2.5 border border-purple-100 hover:shadow-md transition">
                        <i class="fas fa-truck text-purple-500 text-sm"></i>
                        <span class="text-gray-700">📦 Estado de envíos</span>
                    </div>
                    <div class="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2.5 border border-purple-100 hover:shadow-md transition">
                        <i class="fas fa-credit-card text-purple-500 text-sm"></i>
                        <span class="text-gray-700">💳 Métodos de pago</span>
                    </div>
                    <div class="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2.5 border border-purple-100 hover:shadow-md transition">
                        <i class="fas fa-undo-alt text-purple-500 text-sm"></i>
                        <span class="text-gray-700">🔄 Devoluciones</span>
                    </div>
                    <div class="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2.5 border border-purple-100 hover:shadow-md transition">
                        <i class="fas fa-ticket-alt text-purple-500 text-sm"></i>
                        <span class="text-gray-700">🏷️ Cupones y descuentos</span>
                    </div>
                    <div class="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2.5 border border-purple-100 hover:shadow-md transition">
                        <i class="fas fa-box text-purple-500 text-sm"></i>
                        <span class="text-gray-700">📦 Productos disponibles</span>
                    </div>
                    <div class="flex items-center gap-2 bg-purple-50 rounded-lg px-3 py-2.5 border border-purple-100 hover:shadow-md transition">
                        <i class="fas fa-user text-purple-500 text-sm"></i>
                        <span class="text-gray-700">👤 Mi cuenta y perfil</span>
                    </div>
                </div>
            </div>
            
            <!-- Características del asistente -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition text-center group">
                    <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition">
                        <i class="fas fa-clock text-white text-lg"></i>
                    </div>
                    <h4 class="font-semibold text-gray-800 text-sm">24/7</h4>
                    <p class="text-xs text-gray-500">Disponible siempre</p>
                </div>
                
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition text-center group">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition">
                        <i class="fas fa-bolt text-white text-lg"></i>
                    </div>
                    <h4 class="font-semibold text-gray-800 text-sm">Respuesta rápida</h4>
                    <p class="text-xs text-gray-500">Menos de 5 segundos</p>
                </div>
                
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition text-center group">
                    <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition">
                        <i class="fas fa-brain text-white text-lg"></i>
                    </div>
                    <h4 class="font-semibold text-gray-800 text-sm">IA inteligente</h4>
                    <p class="text-xs text-gray-500">Aprendizaje continuo</p>
                </div>
            </div>
            
            <!-- Ejemplos de preguntas -->
            <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-100">
                <h4 class="font-bold text-gray-700 text-sm mb-2 flex items-center gap-2">
                    <i class="fas fa-lightbulb text-yellow-500"></i>
                    Ejemplos de preguntas que puedes hacer:
                </h4>
                <div class="flex flex-wrap gap-2 text-xs">
                    <span class="bg-white px-3 py-1.5 rounded-full border border-purple-200 text-gray-600 shadow-sm">"¿Cómo rastreo mi pedido?"</span>
                    <span class="bg-white px-3 py-1.5 rounded-full border border-purple-200 text-gray-600 shadow-sm">"¿Aceptan tarjetas de crédito?"</span>
                    <span class="bg-white px-3 py-1.5 rounded-full border border-purple-200 text-gray-600 shadow-sm">"¿Cuánto tarda el envío?"</span>
                    <span class="bg-white px-3 py-1.5 rounded-full border border-purple-200 text-gray-600 shadow-sm">"¿Puedo devolver un producto?"</span>
                    <span class="bg-white px-3 py-1.5 rounded-full border border-purple-200 text-gray-600 shadow-sm">"¿Tienen cupones de descuento?"</span>
                    <span class="bg-white px-3 py-1.5 rounded-full border border-purple-200 text-gray-600 shadow-sm">"¿Qué métodos de pago hay?"</span>
                </div>
            </div>
            
            <!-- Estadísticas del asistente -->
            <div class="grid grid-cols-3 gap-2 text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <div>
                    <p class="text-2xl font-bold text-purple-600">24/7</p>
                    <p class="text-xs text-gray-500">Disponibilidad</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-blue-600">&lt;5s</p>
                    <p class="text-xs text-gray-500">Tiempo respuesta</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-green-600">100%</p>
                    <p class="text-xs text-gray-500">Gratuito</p>
                </div>
            </div>
            
            <!-- Versión y estado -->
            <div class="text-center text-xs text-gray-400 border-t border-gray-100 pt-3">
                <i class="fas fa-robot text-purple-400 mr-1"></i>
                Asistente IA v2.0 • Siempre activo 🟢
            </div>
        </div>
    `;
    
    // MOSTRAR EL MODAL
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// FUNCIÓN PARA CERRAR EL MODAL DE INFORMACIÓN
function cerrarInfo() {
    const modal = document.getElementById('modal-info');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Botón de información
    const btnInfo = document.getElementById('btn-info');
    if (btnInfo) {
        btnInfo.addEventListener('click', function(e) {
            e.stopPropagation();
            mostrarInfo();
        });
    }
    
    // CERRAR CON LA X (dentro del modal)
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