// ==================== SISTEMA DE INFORMACIÓN ====================

function mostrarInfo() {
    const modal = document.getElementById('modal-info');
    if (!modal) return;
    
    const contenido = document.getElementById('info-contenido');
    if (!contenido) return;
    
    contenido.innerHTML = `
        <div class="space-y-6">
            <!-- Logo grande -->
            <div class="text-center">
                <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-xl mb-4">
                    <i class="fas fa-store-alt text-white text-4xl"></i>
                </div>
                <h3 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ShopVerse
                </h3>
                <p class="text-gray-500 text-sm">Tu tienda virtual completa</p>
            </div>
            
            <!-- Descripción -->
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-100">
                <p class="text-gray-700 text-center leading-relaxed">
                    <i class="fas fa-quote-left text-purple-400 mr-1"></i>
                    ShopVerse es una tienda virtual moderna que ofrece una experiencia de compra completa, 
                    intuitiva y segura para todos los usuarios.
                    <i class="fas fa-quote-right text-purple-400 ml-1"></i>
                </p>
            </div>
            
            <!-- Características principales -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition group">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                            <i class="fas fa-store text-white text-sm"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 text-sm">Catálogo completo</h4>
                            <p class="text-xs text-gray-500">Más de 15 productos en 6 categorías diferentes</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition group">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                            <i class="fas fa-tags text-white text-sm"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 text-sm">Ofertas exclusivas</h4>
                            <p class="text-xs text-gray-500">Precios especiales y descuentos en productos seleccionados</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition group">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                            <i class="fas fa-truck text-white text-sm"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 text-sm">Envío gratis</h4>
                            <p class="text-xs text-gray-500">Envíos gratuitos en todas las compras</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition group">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                            <i class="fas fa-shield-alt text-white text-sm"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 text-sm">Compra segura</h4>
                            <p class="text-xs text-gray-500">Transacciones 100% seguras y protegidas</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition group">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                            <i class="fas fa-star text-white text-sm"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 text-sm">Sistema de reseñas</h4>
                            <p class="text-xs text-gray-500">Opiniones reales de otros compradores</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition group">
                    <div class="flex items-start gap-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                            <i class="fas fa-ticket-alt text-white text-sm"></i>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-800 text-sm">Cupones de descuento</h4>
                            <p class="text-xs text-gray-500">Códigos promocionales con grandes ahorros</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Funcionalidades detalladas -->
            <div>
                <h4 class="font-bold text-gray-700 text-sm mb-2 flex items-center gap-2">
                    <i class="fas fa-list-check text-purple-600"></i>
                    Funcionalidades disponibles
                </h4>
                <div class="grid grid-cols-2 gap-2 text-xs">
                    <div class="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <i class="fas fa-search text-blue-500 text-xs"></i>
                        <span class="text-gray-600">Búsqueda de productos</span>
                    </div>
                    <div class="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <i class="fas fa-filter text-purple-500 text-xs"></i>
                        <span class="text-gray-600">Filtros por categoría</span>
                    </div>
                    <div class="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <i class="fas fa-cart-plus text-green-500 text-xs"></i>
                        <span class="text-gray-600">Carrito de compras</span>
                    </div>
                    <div class="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <i class="fas fa-percent text-orange-500 text-xs"></i>
                        <span class="text-gray-600">Cupones y descuentos</span>
                    </div>
                    <div class="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <i class="fas fa-star text-yellow-500 text-xs"></i>
                        <span class="text-gray-600">Reseñas y calificaciones</span>
                    </div>
                    <div class="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <i class="fas fa-user text-indigo-500 text-xs"></i>
                        <span class="text-gray-600">Perfil de usuario</span>
                    </div>
                </div>
            </div>
            
            <!-- Estadísticas rápidas -->
            <div class="grid grid-cols-3 gap-2 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-100">
                <div>
                    <p class="text-2xl font-bold text-purple-600">${typeof productos !== 'undefined' ? productos.length : 0}</p>
                    <p class="text-xs text-gray-500">Productos</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-blue-600">${typeof categorias !== 'undefined' ? categorias.length : 0}</p>
                    <p class="text-xs text-gray-500">Categorías</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-green-600">${typeof cupones !== 'undefined' ? cupones.filter(c => c.valido).length : 0}</p>
                    <p class="text-xs text-gray-500">Cupones</p>
                </div>
            </div>
            
            <!-- Versión -->
            <div class="text-center text-xs text-gray-400 border-t border-gray-100 pt-3">
                <i class="fas fa-code mr-1"></i>
                ShopVerse v2.0 • Desarrollado con ❤️
            </div>
        </div>
    `;
    
    // 🔥 MOSTRAR EL MODAL
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// 🔥 FUNCIÓN PARA CERRAR EL MODAL DE INFORMACIÓN
function cerrarInfo() {
    const modal = document.getElementById('modal-info');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Event listener para el botón de información
document.addEventListener('DOMContentLoaded', function() {
    const btnInfo = document.getElementById('btn-info');
    if (btnInfo) {
        btnInfo.addEventListener('click', function(e) {
            e.stopPropagation();
            mostrarInfo();
        });
    }
    
    // 🔥 CERRAR CON LA X (dentro del modal)
    const closeBtn = document.querySelector('#modal-info .fa-times')?.parentElement;
    if (closeBtn) {
        closeBtn.addEventListener('click', cerrarInfo);
    }
    
    // 🔥 CERRAR HACIENDO CLICK FUERA
    const modal = document.getElementById('modal-info');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarInfo();
            }
        });
    }
});
