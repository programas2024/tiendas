// ==================== CARRITO ====================
let carrito = [];

function agregarAlCarrito(productoId) {
    const producto = obtenerProductoPorId(productoId);
    if (!producto) return;
    
    const existente = carrito.find(item => item.id === productoId);
    if (existente) {
        existente.cantidad++;
        Swal.fire({
            icon: 'success',
            title: '¡Cantidad actualizada!',
            text: `${producto.nombre} ahora tiene ${existente.cantidad} unidades`,
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #f0f0ff)',
            iconColor: '#7c3aed',
            // OCULTAR SCROLL
            scrollbarPadding: false,
            allowOutsideClick: true,
            customClass: {
                popup: 'swal2-no-scroll',
                container: 'swal2-no-scroll-container'
            }
        });
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
        Swal.fire({
            icon: 'success',
            title: '¡Agregado al carrito!',
            html: `
                <div class="flex items-center gap-4 text-left">
                    <img src="${producto.imagen}" class="w-16 h-16 rounded-lg object-cover">
                    <div>
                        <p class="font-semibold">${producto.nombre}</p>
                        <p class="text-purple-600 font-bold">$${(producto.precioOferta || producto.precio).toFixed(2)}</p>
                    </div>
                </div>
            `,
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #f0f0ff)',
            iconColor: '#7c3aed',
            scrollbarPadding: false,
            allowOutsideClick: true,
            customClass: {
                popup: 'swal2-no-scroll',
                container: 'swal2-no-scroll-container'
            }
        });
    }
    
    actualizarCarrito();
}

function eliminarDelCarrito(productoId) {
    const producto = carrito.find(item => item.id === productoId);
    if (!producto) return;
    
    Swal.fire({
        title: '¿Eliminar producto?',
        html: `
            <div class="flex items-center gap-4 p-1" style="padding-left: 70px;">
                <img src="${producto.imagen}" class="w-16 h-16 rounded-xl object-cover shadow-md flex-shrink-0">
                <div class="flex-1 text-left">
                    <p class="font-bold text-gray-800 text-base">${producto.nombre}</p>
                    <p class="text-gray-500 text-sm mt-0.5">Cantidad: <span class="font-semibold text-gray-700">${producto.cantidad}</span></p>
                    <p class="text-purple-600 font-bold text-lg mt-0.5">$${(producto.precioOferta || producto.precio).toFixed(2)}</p>
                </div>
            </div>
        `,
        showCloseButton: true,
        closeButtonHtml: '✕',
        showCancelButton: true,
        confirmButtonColor: '#dc2626',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        icon: 'warning',
        iconColor: '#dc2626',
        background: 'linear-gradient(135deg, #ffffff, #fef2f2)',
        scrollbarPadding: false,
        allowOutsideClick: true,
        width: 400,
        padding: '1rem 1.5rem 0.8rem',
        customClass: {
            popup: 'swal2-no-scroll rounded-2xl shadow-2xl',
            container: 'swal2-no-scroll-container',
            closeButton: 'swal2-close-button-modern',
            confirmButton: 'bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl font-semibold order-2 ml-2 min-w-[100px]',
            cancelButton: 'bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-xl font-semibold order-1 min-w-[100px]'
        },
        buttonsStyling: true,
        reverseButtons: false,
        didOpen: () => {
            // Scroll invisible
            const popup = Swal.getPopup();
            if (popup) {
                popup.style.overflowY = 'auto';
                popup.style.scrollbarWidth = 'none';
                popup.style.msOverflowStyle = 'none';
                popup.style.maxHeight = '90vh';
                
                const style = document.createElement('style');
                style.textContent = `
                    .swal2-popup::-webkit-scrollbar {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    }
                `;
                document.head.appendChild(style);
            }
            
            // X personalizada
            const closeButton = Swal.getCloseButton();
            if (closeButton) {
                closeButton.style.position = 'absolute';
                closeButton.style.top = '10px';
                closeButton.style.right = '14px';
                closeButton.style.color = '#8b5cf6';
                closeButton.style.fontSize = '20px';
                closeButton.style.fontWeight = '300';
                closeButton.style.width = '32px';
                closeButton.style.height = '32px';
                closeButton.style.display = 'flex';
                closeButton.style.alignItems = 'center';
                closeButton.style.justifyContent = 'center';
                closeButton.style.borderRadius = '50%';
                closeButton.style.transition = 'all 0.3s ease';
                closeButton.style.background = 'rgba(139, 92, 246, 0.08)';
                closeButton.style.border = 'none';
                closeButton.style.cursor = 'pointer';
                closeButton.style.zIndex = '999';
                
                closeButton.addEventListener('mouseenter', function() {
                    this.style.background = 'rgba(139, 92, 246, 0.2)';
                    this.style.transform = 'scale(1.1) rotate(90deg)';
                });
                closeButton.addEventListener('mouseleave', function() {
                    this.style.background = 'rgba(139, 92, 246, 0.08)';
                    this.style.transform = 'scale(1) rotate(0deg)';
                });
            }
            
            // Ajustes
            const title = Swal.getTitle();
            if (title) {
                title.style.paddingRight = '30px';
                title.style.fontSize = '1.2rem';
                title.style.color = '#1f2937';
            }
            
            const htmlContainer = Swal.getHtmlContainer();
            if (htmlContainer) {
                htmlContainer.style.padding = '0';
                htmlContainer.style.margin = '0.3rem 0';
            }
            
            const icon = document.querySelector('.swal2-icon');
            if (icon) {
                icon.style.margin = '0 auto 0.3rem';
                icon.style.transform = 'scale(0.9)';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = carrito.filter(item => item.id !== productoId);
            actualizarCarrito();
            renderizarCarrito();
            
            Swal.fire({
                icon: 'success',
                title: '¡Eliminado!',
                text: `${producto.nombre} fue removido`,
                timer: 1200,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                background: 'linear-gradient(135deg, #ffffff, #f0fdf4)',
                iconColor: '#22c55e',
                scrollbarPadding: false,
                allowOutsideClick: true,
                customClass: {
                    popup: 'swal2-no-scroll rounded-xl shadow-lg',
                    container: 'swal2-no-scroll-container'
                }
            });
        }
    });
}

function actualizarCantidad(productoId, nuevaCantidad) {
    const item = carrito.find(p => p.id === productoId);
    if (!item) return;
    
    if (nuevaCantidad <= 0) {
        eliminarDelCarrito(productoId);
        return;
    }
    
    item.cantidad = nuevaCantidad;
    actualizarCarrito();
    renderizarCarrito();
}

function actualizarCarrito() {
    const contador = document.getElementById('contador-carrito');
    if (contador) {
        const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        contador.textContent = total;
        contador.style.display = total > 0 ? 'inline' : 'none';
    }
}

function calcularTotal() {
    return carrito.reduce((sum, item) => {
        const precio = item.precioOferta || item.precio;
        return sum + (precio * item.cantidad);
    }, 0);
}

function renderizarCarrito() {
    const contenido = document.getElementById('carrito-contenido');
    const totalElement = document.getElementById('carrito-total');
    const totalConCuponElement = document.getElementById('carrito-total-con-cupon');
    const cuponInfo = document.getElementById('cupon-aplicado-info');
    const cuponDescripcion = document.getElementById('cupon-descripcion');
    
    if (!contenido) return;
    
    if (carrito.length === 0) {
    contenido.innerHTML = `
        <div class="flex flex-col items-center justify-center py-10 px-4 animate__animated animate__fadeIn">
            <!-- Icono animado -->
            <div class="relative mb-6">
                <div class="w-36 h-36 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-full flex items-center justify-center shadow-lg">
                    <div class="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                        <i class="fas fa-shopping-cart text-5xl text-white"></i>
                    </div>
                </div>
                <!-- Badge de "vacío" -->
                <div class="absolute -top-1 -right-1 bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                    Vacío
                </div>
                <!-- Círculos decorativos -->
                <div class="absolute -top-4 -left-4 w-12 h-12 bg-blue-200 rounded-full opacity-50 animate-ping" style="animation-duration: 3s;"></div>
                <div class="absolute -bottom-4 -right-4 w-10 h-10 bg-purple-200 rounded-full opacity-50 animate-ping" style="animation-duration: 4s; animation-delay: 1s;"></div>
            </div>
            
            <!-- Texto -->
            <h3 class="text-2xl font-bold text-gray-800 mb-2">¡Carrito vacío!</h3>
            <p class="text-gray-500 text-center max-w-xs mb-2">Parece que aún no has agregado productos</p>
            <p class="text-sm text-gray-400 text-center max-w-xs mb-6">¡Descubre nuestras ofertas y llena tu carrito!</p>
            
            <!-- Botón principal -->
            <button onclick="cerrarModal('modal-carrito')" 
                    class="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-3.5 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-bold text-lg relative overflow-hidden">
                <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
                <i class="fas fa-store group-hover:rotate-6 transition-transform"></i>
                Seguir comprando
                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
            
            <!-- Features -->
            <div class="mt-8 flex flex-wrap justify-center gap-4 text-xs">
                <div class="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    <i class="fas fa-tag text-purple-500"></i>
                    <span class="text-gray-600">Hasta 50% OFF</span>
                </div>
                <div class="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    <i class="fas fa-truck text-blue-500"></i>
                    <span class="text-gray-600">Envío gratis</span>
                </div>
                <div class="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    <i class="fas fa-shield-alt text-green-500"></i>
                    <span class="text-gray-600">Compra segura</span>
                </div>
            </div>
            
            <!-- Productos sugeridos (opcional) -->
            <div class="mt-6 w-full max-w-sm">
                <p class="text-xs text-gray-400 text-center mb-3">🔥 Productos populares</p>
                <div class="flex gap-2 justify-center">
                    ${productos.slice(0, 3).map(p => `
                        <div onclick="verDetalle(${p.id}); cerrarModal('modal-carrito')" 
                             class="w-16 h-16 rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-110 transition-transform border-2 border-transparent hover:border-purple-400">
                            <img src="${p.imagen}" alt="${p.nombre}" class="w-full h-full object-cover">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    if (totalElement) totalElement.textContent = '$0.00';
    if (totalConCuponElement) {
        totalConCuponElement.classList.add('hidden');
        totalConCuponElement.textContent = '';
    }
    if (cuponInfo) cuponInfo.classList.add('hidden');
    return;
}
    
    contenido.innerHTML = carrito.map((item) => {
        const precio = item.precioOferta || item.precio;
        const subtotal = precio * item.cantidad;
        return `
            <div class="carrito-item flex items-center gap-4">
                <img src="${item.imagen}" alt="${item.nombre}" class="w-20 h-20 object-cover rounded-xl shadow-md">
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-gray-800 truncate">${item.nombre}</h4>
                    <p class="text-purple-600 font-bold text-lg">$${precio.toFixed(2)}</p>
                    <p class="text-sm text-gray-500">Subtotal: $${subtotal.toFixed(2)}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="actualizarCantidad(${item.id}, ${item.cantidad - 1})" 
                            class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
                        <i class="fas fa-minus text-sm"></i>
                    </button>
                    <span class="w-8 text-center font-bold text-lg">${item.cantidad}</span>
                    <button onclick="actualizarCantidad(${item.id}, ${item.cantidad + 1})" 
                            class="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center">
                        <i class="fas fa-plus text-sm"></i>
                    </button>
                </div>
                <button onclick="eliminarDelCarrito(${item.id})" 
                        class="btn-danger text-red-500 hover:text-red-700 transition text-xl ml-2">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');
    
    // Mostrar totales con cupón
    const total = calcularTotal();
    const totalConCupon = typeof calcularTotalConCupon === 'function' ? calcularTotalConCupon(total) : total;
    const descuento = typeof obtenerDescuentoAplicado === 'function' ? obtenerDescuentoAplicado(total) : 0;
    
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
        if (descuento > 0) {
            totalElement.className = 'text-gray-400 line-through text-sm';
        } else {
            totalElement.className = 'text-purple-600';
        }
    }
    
    if (totalConCuponElement) {
        if (descuento > 0) {
            totalConCuponElement.classList.remove('hidden');
            totalConCuponElement.textContent = `$${totalConCupon.toFixed(2)}`;
        } else {
            totalConCuponElement.classList.add('hidden');
        }
    }
    
    // Mostrar información del cupón
    if (typeof cuponAplicado !== 'undefined' && cuponAplicado && cuponInfo && cuponDescripcion) {
        cuponInfo.classList.remove('hidden');
        cuponDescripcion.textContent = `${cuponAplicado.descripcion} - Ahorro: $${descuento.toFixed(2)}`;
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Carrito vacío',
            text: 'Agrega productos antes de finalizar la compra',
            confirmButtonColor: '#3b82f6',
            confirmButtonText: '<i class="fas fa-shopping-cart mr-2"></i>Ir a comprar',
            background: 'linear-gradient(to right, #fff, #f0f0ff)',
            iconColor: '#3b82f6',
            scrollbarPadding: false,
            allowOutsideClick: true,
            customClass: {
                popup: 'swal2-no-scroll',
                container: 'swal2-no-scroll-container'
            }
        }).then(() => {
            cerrarModal('modal-carrito');
        });
        return;
    }
    
    const total = calcularTotal();
    const totalConCupon = typeof calcularTotalConCupon === 'function' ? calcularTotalConCupon(total) : total;
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    
    Swal.fire({
        title: '¡Confirmar compra!',
        html: `
            <div class="text-left max-w-sm mx-auto">
                <div class="flex justify-between py-2 border-b">
                    <span class="text-gray-600">Productos:</span>
                    <span class="font-semibold">${totalItems} unidades</span>
                </div>
                <div class="flex justify-between py-2 border-b">
                    <span class="text-gray-600">Subtotal:</span>
                    <span class="font-semibold">$${total.toFixed(2)}</span>
                </div>
                ${totalConCupon < total ? `
                    <div class="flex justify-between py-2 border-b text-green-600">
                        <span>Descuento:</span>
                        <span class="font-semibold">-$${(total - totalConCupon).toFixed(2)}</span>
                    </div>
                ` : ''}
                <div class="flex justify-between py-2 border-b">
                    <span class="text-gray-600">Envío:</span>
                    <span class="text-green-600 font-semibold">¡Gratis!</span>
                </div>
                <div class="flex justify-between py-3 text-xl font-bold">
                    <span>Total:</span>
                    <span class="text-purple-600">$${totalConCupon.toFixed(2)}</span>
                </div>
            </div>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#7c3aed',
        cancelButtonColor: '#4b5563',
        confirmButtonText: '<i class="fas fa-check mr-2"></i>Confirmar compra',
        cancelButtonText: '<i class="fas fa-times mr-2"></i>Cancelar',
        background: 'linear-gradient(to right, #fff, #f5f0ff)',
        iconColor: '#7c3aed',
        scrollbarPadding: false,
        allowOutsideClick: true,
        customClass: {
            popup: 'swal2-no-scroll rounded-2xl shadow-2xl',
            container: 'swal2-no-scroll-container',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl px-8 py-3 rounded-xl font-semibold order-2 ml-2',
            cancelButton: 'bg-gray-600 hover:bg-gray-700 px-8 py-3 rounded-xl font-semibold order-1'
        },
        buttonsStyling: true,
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: '🎉 ¡Compra realizada!',
                html: `
                    <div class="py-4">
                        <i class="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
                        <p class="text-lg font-semibold">¡Gracias por tu compra!</p>
                        <p class="text-2xl font-bold text-purple-600 mt-2">Total: $${totalConCupon.toFixed(2)}</p>
                        <p class="text-sm text-gray-500 mt-2">Recibirás un email de confirmación</p>
                    </div>
                `,
                confirmButtonColor: '#7c3aed',
                confirmButtonText: '<i class="fas fa-home mr-2"></i>Volver a la tienda',
                background: 'linear-gradient(to right, #fff, #f0fff4)',
                iconColor: '#22c55e',
                scrollbarPadding: false,
                allowOutsideClick: true,
                customClass: {
                    popup: 'swal2-no-scroll',
                    container: 'swal2-no-scroll-container'
                }
            });
            carrito = [];
            if (typeof cuponAplicado !== 'undefined' && cuponAplicado) {
                cuponAplicado = null;
            }
            actualizarCarrito();
            renderizarCarrito();
            cerrarModal('modal-carrito');
        }
    });
}