// ==================== APP PRINCIPAL - SHOPVERSE ====================

// ===== DATOS DE EJEMPLO =====
// Los datos de productos, categorías y cupones se cargan desde tienda/js/productos.js
// para evitar declaraciones duplicadas en múltiples scripts.

let carrito = [];
let cuponAplicado = null;

// ===== SISTEMA DE RESEÑAS =====
let reseñas = [
    { id: 1, productoId: 1, usuario: 'María G.', rating: 5, comentario: 'Excelente producto, llegó rápido y en perfectas condiciones.', fecha: '2024-01-15' },
    { id: 2, productoId: 1, usuario: 'Carlos R.', rating: 4, comentario: 'Muy buen teléfono, la batería dura muchísimo.', fecha: '2024-01-20' },
    { id: 3, productoId: 2, usuario: 'Ana L.', rating: 5, comentario: 'La mejor laptop que he tenido, súper rápida y ligera.', fecha: '2024-02-01' },
    { id: 4, productoId: 3, usuario: 'Pedro M.', rating: 5, comentario: 'La cancelación de ruido es increíble, valen cada peso.', fecha: '2024-02-05' },
    { id: 5, productoId: 3, usuario: 'Laura S.', rating: 4, comentario: 'Muy cómodos y buen sonido, pero caros.', fecha: '2024-02-10' }
];

// ===== FUNCIONES DE PRODUCTOS =====
function obtenerProductosPorCategoria(categoria) {
    if (categoria === 'todos') return productos;
    return productos.filter(p => p.categoria === categoria);
}

function obtenerProductoPorId(id) {
    return productos.find(p => p.id === id);
}

function buscarProductos(termino) {
    if (!termino || termino.trim() === '') return productos;
    const lower = termino.toLowerCase().trim();
    return productos.filter(p => 
        p.nombre.toLowerCase().includes(lower) || 
        p.categoria.toLowerCase().includes(lower) ||
        p.descripcion.toLowerCase().includes(lower)
    );
}

function renderizarEstrellas(rating) {
    const estrellasLlenas = Math.floor(rating);
    const tieneMedia = rating % 1 >= 0.5;
    let html = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < estrellasLlenas) {
            html += '<span class="text-yellow-400">★</span>';
        } else if (i === estrellasLlenas && tieneMedia) {
            html += '<span class="text-yellow-400">⭐</span>';
        } else {
            html += '<span class="text-gray-300">★</span>';
        }
    }
    
    return html;
}

function renderizarProductos(lista) {
    const contenedor = document.getElementById('productos-grid');
    if (!contenedor) return;
    
    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="col-span-full text-center py-12">
                <i class="fas fa-search text-5xl text-gray-300 mb-4"></i>
                <h3 class="text-xl font-semibold text-gray-600">No encontramos productos</h3>
                <p class="text-gray-400">Prueba con otro término de búsqueda</p>
            </div>
        `;
        return;
    }
    
    contenedor.innerHTML = lista.map(p => {
        const precioMostrar = p.precioOferta || p.precio;
        const descuento = p.precioOferta ? Math.round(((p.precio - p.precioOferta) / p.precio) * 100) : 0;
        
        return `
            <div onclick="verDetalle(${p.id})" 
                 class="producto-item bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                 data-nombre="${p.nombre}"
                 data-descripcion="${p.descripcion}"
                 data-categoria="${p.categoria}">
                <div class="relative overflow-hidden">
                    <img src="${p.imagen}" alt="${p.nombre}" 
                         class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500">
                    ${p.precioOferta ? `
                        <span class="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            -${descuento}% OFF
                        </span>
                    ` : ''}
                    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onclick="event.stopPropagation(); agregarAlCarrito(${p.id})" 
                                class="w-full bg-white text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
                            <i class="fas fa-cart-plus mr-2"></i>Agregar
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <p class="text-xs text-purple-600 font-semibold uppercase tracking-wider">${p.categoria}</p>
                    <h4 class="font-semibold text-gray-800 mt-1 group-hover:text-purple-600 transition">${p.nombre}</h4>
                    <div class="flex items-center gap-2 mt-1">
                        <div class="text-yellow-400 text-sm">${renderizarEstrellas(p.rating)}</div>
                        <span class="text-gray-400 text-xs">(${p.reviews})</span>
                    </div>
                    <div class="mt-2 flex items-center gap-2">
                        ${p.precioOferta ? 
                            `<span class="text-gray-400 line-through text-sm">$${p.precio.toFixed(2)}</span>
                             <span class="text-purple-600 font-bold text-xl">$${p.precioOferta.toFixed(2)}</span>` :
                            `<span class="text-purple-600 font-bold text-xl">$${p.precio.toFixed(2)}</span>`
                        }
                        <span class="text-green-600 text-xs ml-auto">${p.stock} unidades</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== FUNCIONES DE CARRITO =====
function agregarAlCarrito(id) {
    const producto = obtenerProductoPorId(id);
    if (!producto) return;
    
    const existente = carrito.find(item => item.id === id);
    if (existente) {
        if (existente.cantidad < producto.stock) {
            existente.cantidad++;
        } else {
            Swal.fire({
                title: '⚠️ Sin stock',
                text: `Solo hay ${producto.stock} unidades disponibles`,
                icon: 'warning',
                timer: 1500,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
            return;
        }
    } else {
        if (producto.stock > 0) {
            carrito.push({ ...producto, cantidad: 1 });
        } else {
            Swal.fire({
                title: '⚠️ Sin stock',
                text: 'Este producto no está disponible',
                icon: 'warning',
                timer: 1500,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
            return;
        }
    }
    
    actualizarCarrito();
    renderizarCarrito();
    
    Swal.fire({
        title: '🛒 ¡Agregado!',
        text: `${producto.nombre} añadido al carrito`,
        icon: 'success',
        timer: 1200,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        iconColor: '#7c3aed'
    });
}

function eliminarDelCarrito(id) {
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) {
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        } else {
            carrito.splice(index, 1);
        }
        actualizarCarrito();
        renderizarCarrito();
    }
}

function eliminarProductoDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
    renderizarCarrito();
}

function vaciarCarrito() {
    if (carrito.length === 0) return;
    
    Swal.fire({
        title: '¿Vaciar carrito?',
        text: 'Se eliminarán todos los productos',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#dc2626',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            cuponAplicado = null;
            document.getElementById('cupon-aplicado-info')?.classList.add('hidden');
            actualizarCarrito();
            renderizarCarrito();
            
            Swal.fire({
                icon: 'info',
                title: 'Carrito vacío',
                timer: 1000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
        }
    });
}

function actualizarCarrito() {
    const contador = document.getElementById('contador-carrito');
    const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    if (contador) contador.textContent = cantidadTotal;
}

function renderizarCarrito() {
    const contenido = document.getElementById('carrito-contenido');
    const total = document.getElementById('carrito-total');
    const totalConCupon = document.getElementById('carrito-total-con-cupon');
    const cuponInfo = document.getElementById('cupon-aplicado-info');
    
    if (!contenido) return;
    
    const subtotal = carrito.reduce((sum, item) => sum + (item.precioOferta || item.precio) * item.cantidad, 0);
    let descuento = 0;
    
    if (cuponAplicado && cuponAplicado.valido) {
        descuento = (subtotal * cuponAplicado.descuento) / 100;
        if (cuponInfo) {
            cuponInfo.classList.remove('hidden');
            const cuponDescripcion = document.getElementById('cupon-descripcion');
            if (cuponDescripcion) {
                cuponDescripcion.textContent = `Descuento del ${cuponAplicado.descuento}% aplicado`;
            }
        }
    } else if (cuponInfo) {
        cuponInfo.classList.add('hidden');
    }
    
    const totalFinal = subtotal - descuento;
    
    if (carrito.length === 0) {
        contenido.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-shopping-cart text-6xl text-gray-200 mb-4"></i>
                <p class="text-gray-500 text-lg">Tu carrito está vacío</p>
                <p class="text-gray-400 text-sm mt-2">¡Explora nuestros productos y encuentra lo que buscas!</p>
                <button onclick="cerrarModal('modal-carrito')" 
                        class="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
                    <i class="fas fa-store mr-2"></i>Seguir comprando
                </button>
            </div>
        `;
        if (total) total.textContent = '$0.00';
        if (totalConCupon) {
            totalConCupon.classList.add('hidden');
            totalConCupon.textContent = '';
        }
        return;
    }
    
    contenido.innerHTML = `
        <div class="space-y-3">
            ${carrito.map(item => {
                const precioItem = item.precioOferta || item.precio;
                return `
                    <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <img src="${item.imagen}" alt="${item.nombre}" class="w-16 h-16 rounded-lg object-cover">
                        <div class="flex-1 min-w-0">
                            <p class="font-semibold text-sm truncate">${item.nombre}</p>
                            <p class="text-purple-600 font-bold text-sm">$${(precioItem * item.cantidad).toFixed(2)}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <button onclick="eliminarDelCarrito(${item.id})" 
                                    class="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition text-sm">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="font-semibold w-6 text-center text-sm">${item.cantidad}</span>
                            <button onclick="agregarAlCarrito(${item.id})" 
                                    class="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition text-sm">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button onclick="eliminarProductoDelCarrito(${item.id})" 
                                    class="w-8 h-8 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition text-sm ml-1">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    if (total) {
        total.innerHTML = `
            <div class="space-y-2">
                <div class="flex justify-between text-sm">
                    <span class="text-gray-500">Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                ${descuento > 0 ? `
                    <div class="flex justify-between text-sm text-green-600">
                        <span>Descuento (${cuponAplicado.descuento}%):</span>
                        <span>-$${descuento.toFixed(2)}</span>
                    </div>
                ` : ''}
                <div class="flex justify-between text-xl font-bold pt-2 border-t border-gray-200">
                    <span>Total:</span>
                    <span class="text-purple-600">$${totalFinal.toFixed(2)}</span>
                </div>
                ${descuento > 0 ? `
                    <div class="text-xs text-green-600 text-center">
                        ¡Ahorraste $${descuento.toFixed(2)} con el cupón!
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    if (totalConCupon) {
        if (descuento > 0) {
            totalConCupon.textContent = `$${totalFinal.toFixed(2)}`;
            totalConCupon.classList.remove('hidden');
        } else {
            totalConCupon.classList.add('hidden');
        }
    }
}

// ===== SISTEMA DE CUPONES =====
function aplicarCupon(codigo) {
    const cupon = cupones.find(c => c.codigo === codigo.toUpperCase() && c.valido && !c.usado);
    
    if (!cupon) {
        Swal.fire({
            title: '❌ Cupón inválido',
            text: 'El código ingresado no es válido o ya fue utilizado',
            icon: 'error',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
        return;
    }
    
    cuponAplicado = cupon;
    cupon.usado = true;
    renderizarCarrito();
    
    Swal.fire({
        title: '🎉 ¡Cupón aplicado!',
        text: `Descuento del ${cupon.descuento}% aplicado correctamente`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

function eliminarCupon() {
    if (!cuponAplicado) return;
    
    Swal.fire({
        title: '¿Eliminar cupón?',
        text: `Se eliminará el cupón "${cuponAplicado.codigo}"`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#dc2626',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            cuponAplicado.usado = false;
            cuponAplicado = null;
            const cuponInfo = document.getElementById('cupon-aplicado-info');
            if (cuponInfo) cuponInfo.classList.add('hidden');
            const inputCupon = document.getElementById('input-cupon');
            if (inputCupon) inputCupon.value = '';
            renderizarCarrito();
            
            Swal.fire({
                icon: 'info',
                title: 'Cupón eliminado',
                timer: 1000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
        }
    });
}

function mostrarCuponesDisponibles() {
    const cuponesDisponibles = cupones.filter(c => c.valido && !c.usado);
    
    if (cuponesDisponibles.length === 0) {
        Swal.fire({
            title: '🎫 Sin cupones disponibles',
            text: 'No hay cupones válidos en este momento',
            icon: 'info',
            confirmButtonColor: '#7c3aed'
        });
        return;
    }
    
    Swal.fire({
        title: '🎫 Cupones disponibles',
        html: `
            <div class="text-left space-y-3">
                ${cuponesDisponibles.map(c => `
                    <div class="p-3 bg-purple-50 rounded-lg border border-purple-200 flex justify-between items-center">
                        <div>
                            <span class="font-bold text-purple-700">${c.codigo}</span>
                            <span class="text-sm text-gray-500 ml-2">${c.descuento}% OFF</span>
                        </div>
                        <button onclick="aplicarCupon('${c.codigo}'); Swal.close();" 
                                class="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700 transition">
                            Usar
                        </button>
                    </div>
                `).join('')}
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: 'Cerrar'
    });
}

// ===== FUNCIONES DE RESEÑAS =====
function obtenerReseñas(productoId) {
    return reseñas.filter(r => r.productoId === productoId);
}

function renderizarReseñas(productoId) {
    const reseñasList = obtenerReseñas(productoId);
    if (reseñasList.length === 0) {
        return `<p class="text-gray-500 text-sm">Aún no hay reseñas para este producto. ¡Sé el primero en opinar!</p>`;
    }
    
    return reseñasList.map(r => `
        <div class="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-semibold text-sm">${r.usuario}</p>
                    <div class="text-yellow-400 text-sm">${'⭐'.repeat(r.rating)}</div>
                </div>
                <span class="text-xs text-gray-400">${r.fecha}</span>
            </div>
            <p class="text-sm text-gray-600 mt-1">${r.comentario}</p>
        </div>
    `).join('');
}

// ===== FUNCIONES DE CATEGORÍAS =====
function renderizarCategorias() {
    const contenedor = document.getElementById('lista-categorias');
    if (!contenedor) return;
    
    contenedor.innerHTML = `
        <div onclick="filtrarPorCategoria('todos')" 
             class="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl text-center hover:shadow-lg transition cursor-pointer border-2 border-purple-300">
            <i class="fas fa-th-large text-3xl text-purple-600"></i>
            <p class="font-semibold mt-2">Todos</p>
        </div>
        ${categorias.map(cat => `
            <div onclick="filtrarPorCategoria('${cat.id}')" 
                 class="p-4 bg-gray-50 rounded-xl text-center hover:shadow-lg transition cursor-pointer hover:bg-purple-50 border-2 border-transparent hover:border-purple-300">
                <i class="fas ${cat.icono} text-3xl text-purple-600"></i>
                <p class="font-semibold mt-2">${cat.nombre}</p>
            </div>
        `).join('')}
    `;
}

function renderizarFiltrosRapidos() {
    const contenedor = document.getElementById('filtros-rapidos');
    if (!contenedor) return;
    
    contenedor.innerHTML = `
        <button onclick="filtrarPorCategoria('todos')" 
                class="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700 transition">
            Todos
        </button>
        ${categorias.map(cat => `
            <button onclick="filtrarPorCategoria('${cat.id}')" 
                    class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition">
                <i class="fas ${cat.icono} mr-1"></i> ${cat.nombre}
            </button>
        `).join('')}
    `;
}

// ===== FUNCIONES DE MODALES =====
function abrirCarrito() {
    renderizarCarrito();
    const modal = document.getElementById('modal-carrito');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function abrirCategorias() {
    renderizarCategorias();
    const modal = document.getElementById('modal-categorias');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function abrirPerfil() {
    const modal = document.getElementById('modal-perfil');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

// ===== VER DETALLE =====
function verDetalle(productoId) {
    const producto = obtenerProductoPorId(productoId);
    if (!producto) return;
    
    const modal = document.getElementById('modal-detalle');
    const titulo = document.getElementById('detalle-titulo');
    const contenido = document.getElementById('detalle-contenido');
    const reseñasContainer = document.getElementById('detalle-reseñas');
    const reviewsCount = document.getElementById('detalle-reviews-count');
    const btnReseña = document.getElementById('btn-agregar-reseña');
    
    titulo.textContent = producto.nombre;
    btnReseña.dataset.productoId = productoId;
    
    const reseñasList = obtenerReseñas(productoId);
    reviewsCount.textContent = `(${reseñasList.length} reseñas)`;
    reseñasContainer.innerHTML = renderizarReseñas(productoId);
    
    const precioMostrar = producto.precioOferta || producto.precio;
    const precioOriginal = producto.precioOferta ? producto.precio : null;
    const descuento = precioOriginal ? Math.round(((precioOriginal - precioMostrar) / precioOriginal) * 100) : 0;
    
    let especificacionesHTML = '';
    if (producto.especificaciones) {
        especificacionesHTML = `
            <div class="mt-3">
                <h4 class="font-semibold text-gray-700">Especificaciones:</h4>
                <div class="flex flex-wrap gap-2 mt-1">
                    ${producto.especificaciones.map(esp => 
                        `<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">${esp}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    if (producto.colores) {
        especificacionesHTML += `
            <div class="mt-3">
                <h4 class="font-semibold text-gray-700">Colores:</h4>
                <div class="flex flex-wrap gap-2 mt-1">
                    ${producto.colores.map(color => 
                        `<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">${color}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }
    
    contenido.innerHTML = `
        <div class="relative">
            <img src="${producto.imagen}" alt="${producto.nombre}" 
                 class="w-full rounded-xl shadow-lg">
            ${producto.precioOferta ? `
                <span class="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    -${descuento}% OFF
                </span>
            ` : ''}
        </div>
        <div>
            <div class="flex items-center gap-2 mb-2">
                <div class="text-yellow-400 text-xl">${renderizarEstrellas(producto.rating)}</div>
                <span class="text-gray-500 text-sm">(${producto.reviews} reseñas)</span>
            </div>
            
            <p class="text-gray-600 leading-relaxed">${producto.descripcion}</p>
            
            <div class="mt-4 p-4 bg-gray-50 rounded-xl">
                <div class="flex items-center justify-between">
                    <div>
                        ${producto.precioOferta ? 
                            `<div>
                                <span class="text-gray-400 line-through text-lg">$${producto.precio.toFixed(2)}</span>
                                <span class="text-purple-600 font-bold text-3xl ml-2">$${producto.precioOferta.toFixed(2)}</span>
                            </div>` :
                            `<span class="text-purple-600 font-bold text-3xl">$${producto.precio.toFixed(2)}</span>`
                        }
                    </div>
                    <span class="text-green-600 font-semibold">
                        <i class="fas fa-check-circle"></i> Stock: ${producto.stock} unidades
                    </span>
                </div>
            </div>
            
            ${especificacionesHTML}
            
            <div class="mt-4 flex flex-col sm:flex-row gap-3">
                <button onclick="event.stopPropagation(); agregarAlCarrito(${producto.id}); cerrarModal('modal-detalle');" 
                        class="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
                <button onclick="cerrarModal('modal-detalle')" 
                        class="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// ===== FILTRAR POR CATEGORÍA =====
function filtrarPorCategoria(categoria) {
    const productosFiltrados = obtenerProductosPorCategoria(categoria);
    renderizarProductos(productosFiltrados);
    cerrarModal('modal-categorias');
    
    const nombreCategoria = categoria === 'todos' ? 'Todos los productos' : 
        categorias.find(c => c.id === categoria)?.nombre || categoria;
    
    Swal.fire({
        icon: 'info',
        title: `📋 ${nombreCategoria}`,
        text: `${productosFiltrados.length} productos encontrados`,
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        iconColor: '#7c3aed'
    });
}

// ===== FINALIZAR COMPRA =====
function finalizarCompra() {
    if (carrito.length === 0) {
        Swal.fire({
            title: '🛒 Carrito vacío',
            text: 'Agrega productos antes de finalizar la compra',
            icon: 'info',
            confirmButtonColor: '#7c3aed'
        });
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + (item.precioOferta || item.precio) * item.cantidad, 0);
    let descuento = 0;
    if (cuponAplicado && cuponAplicado.valido) {
        descuento = (total * cuponAplicado.descuento) / 100;
    }
    const totalFinal = total - descuento;
    
    Swal.fire({
        title: '✅ ¡Compra finalizada!',
        html: `
            <div class="text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-check text-green-600 text-4xl"></i>
                </div>
                <p class="text-gray-600">Tu pedido ha sido realizado con éxito.</p>
                <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p class="text-sm text-gray-500">Total pagado:</p>
                    <p class="text-2xl font-bold text-purple-600">$${totalFinal.toFixed(2)}</p>
                    ${descuento > 0 ? `<p class="text-xs text-green-600">Ahorraste $${descuento.toFixed(2)}</p>` : ''}
                </div>
                <p class="text-xs text-gray-400 mt-3">Recibirás un correo con los detalles del pedido.</p>
            </div>
        `,
        icon: 'success',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '✅ Ver pedido'
    }).then(() => {
        carrito = [];
        cuponAplicado = null;
        document.getElementById('cupon-aplicado-info')?.classList.add('hidden');
        actualizarCarrito();
        renderizarCarrito();
        cerrarModal('modal-carrito');
    });
}

// ===== TOOLTIPS =====
function inicializarTooltips() {
    if (typeof tippy === 'undefined') return;
    
    const tooltips = [
        { id: '#btn-categorias', content: '📂 Explorar categorías' },
        { id: '#btn-carrito', content: '🛒 Ver mi carrito' },
        { id: '#btn-perfil', content: '👤 Mi perfil' },
        { id: '#btn-info', content: 'ℹ️ Centro de Soporte' },
    ];
    
    tooltips.forEach(({ id, content }) => {
        const el = document.querySelector(id);
        if (el) {
            try {
                tippy(el, {
                    content: content,
                    placement: 'bottom',
                    animation: 'shift-away'
                });
            } catch (e) {
                console.warn('Error creando tooltip:', e);
            }
        }
    });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar productos y categorías
    renderizarProductos(productos);
    renderizarCategorias();
    renderizarFiltrosRapidos();
    actualizarCarrito();
    inicializarTooltips();
    
    // Eventos de búsqueda
    const buscador = document.getElementById('buscador');
    const buscadorMovil = document.getElementById('buscador-movil');
    
    const handleBusqueda = (e) => {
        const term = e.target.value;
        const resultados = buscarProductos(term);
        renderizarProductos(resultados);
    };
    
    if (buscador) buscador.addEventListener('input', handleBusqueda);
    if (buscadorMovil) buscadorMovil.addEventListener('input', handleBusqueda);
    
    // Eventos de los botones
    document.getElementById('btn-categorias')?.addEventListener('click', abrirCategorias);
    document.getElementById('btn-carrito')?.addEventListener('click', abrirCarrito);
    document.getElementById('btn-perfil')?.addEventListener('click', abrirPerfil);
    document.getElementById('btn-juego-azar')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'juegos.html';
    });
    
    // Enter en el input de cupón
    document.getElementById('input-cupon')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            aplicarCupon(document.getElementById('input-cupon').value);
        }
    });
    
    // Cerrar modales con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.fixed.inset-0:not(.hidden)').forEach(modal => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            });
        }
    });
    
    // Cerrar modales al hacer clic fuera
    document.querySelectorAll('.fixed.inset-0').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }
        });
    });
    
    console.log('🚀 ShopVerse - Tienda Virtual Premium');
    console.log(`📦 ${productos.length} productos cargados`);
    console.log(`🏷️ ${categorias.length} categorías disponibles`);
    console.log('💡 Atajos: ESC (cerrar) | Ctrl+B (buscar) | Ctrl+C (carrito)');
});

// ===== FUNCIONES GLOBALES PARA USO EN HTML =====
window.agregarAlCarrito = agregarAlCarrito;
window.eliminarDelCarrito = eliminarDelCarrito;
window.eliminarProductoDelCarrito = eliminarProductoDelCarrito;
window.vaciarCarrito = vaciarCarrito;
window.finalizarCompra = finalizarCompra;
window.verDetalle = verDetalle;
window.filtrarPorCategoria = filtrarPorCategoria;
window.abrirCarrito = abrirCarrito;
window.abrirCategorias = abrirCategorias;
window.abrirPerfil = abrirPerfil;
window.cerrarModal = cerrarModal;
window.aplicarCupon = aplicarCupon;
window.eliminarCupon = eliminarCupon;
window.mostrarCuponesDisponibles = mostrarCuponesDisponibles;
window.renderizarProductos = renderizarProductos;
window.renderizarCategorias = renderizarCategorias;
window.renderizarFiltrosRapidos = renderizarFiltrosRapidos;
window.actualizarCarrito = actualizarCarrito;
window.renderizarCarrito = renderizarCarrito;