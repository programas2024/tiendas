// ==================== APP PRINCIPAL - SHOPVERSE ====================

// ===== DATOS DE EJEMPLO =====
const productos = [
    { 
        id: 1, 
        nombre: 'Smartphone Galaxy S24', 
        precio: 899.99, 
        precioOferta: 799.99,
        categoria: 'electronica', 
        imagen: 'https://picsum.photos/400/300?random=1',
        descripcion: 'El smartphone más avanzado con pantalla AMOLED, 5G y cámara de 200MP.',
        stock: 15,
        rating: 4.8,
        reviews: 127,
        especificaciones: ['Pantalla 6.8"', '256GB', '12GB RAM', 'Batería 5000mAh'],
        colores: ['Negro', 'Blanco', 'Violeta']
    },
    { 
        id: 2, 
        nombre: 'Laptop Dell XPS 13', 
        precio: 1299.99, 
        precioOferta: null,
        categoria: 'computacion', 
        imagen: 'https://picsum.photos/400/300?random=2',
        descripcion: 'Ultrabook premium con procesador Intel Core i7, 16GB RAM y SSD 512GB.',
        stock: 8,
        rating: 4.9,
        reviews: 89,
        especificaciones: ['Intel i7', '16GB RAM', '512GB SSD', 'Pantalla 13.4"'],
        colores: ['Plata', 'Negro']
    },
    { 
        id: 3, 
        nombre: 'Audífonos Sony WH-1000XM5', 
        precio: 349.99, 
        precioOferta: 299.99,
        categoria: 'audio', 
        imagen: 'https://picsum.photos/400/300?random=3',
        descripcion: 'Audífonos con cancelación de ruido líder en la industria y sonido de alta fidelidad.',
        stock: 25,
        rating: 4.7,
        reviews: 203,
        especificaciones: ['Bluetooth 5.2', '30h batería', 'Cancelación activa'],
        colores: ['Negro', 'Plateado', 'Azul']
    },
    { 
        id: 4, 
        nombre: 'Smartwatch Apple Watch S9', 
        precio: 499.99, 
        precioOferta: 449.99,
        categoria: 'electronica', 
        imagen: 'https://picsum.photos/400/300?random=4',
        descripcion: 'El smartwatch más avanzado con sensor de oxígeno en sangre y ECG.',
        stock: 12,
        rating: 4.6,
        reviews: 156,
        especificaciones: ['Pantalla siempre activa', 'GPS', 'ECG', 'Oxímetro'],
        colores: ['Negro', 'Plateado', 'Rosa']
    },
    { 
        id: 5, 
        nombre: 'Tablet iPad Pro 12.9', 
        precio: 1099.99, 
        precioOferta: 999.99,
        categoria: 'computacion', 
        imagen: 'https://picsum.photos/400/300?random=5',
        descripcion: 'La tablet más potente con chip M2, pantalla Liquid Retina XDR y Apple Pencil.',
        stock: 6,
        rating: 4.9,
        reviews: 78,
        especificaciones: ['Chip M2', '12.9"', '256GB', 'Apple Pencil compatible'],
        colores: ['Gris espacial', 'Plateado']
    },
    { 
        id: 6, 
        nombre: 'Cámara Sony Alpha A7IV', 
        precio: 2499.99, 
        precioOferta: null,
        categoria: 'fotografia', 
        imagen: 'https://picsum.photos/400/300?random=6',
        descripcion: 'Cámara mirrorless full frame con 33MP, 4K 60p y seguimiento de ojos.',
        stock: 4,
        rating: 4.8,
        reviews: 45,
        especificaciones: ['33MP', '4K 60p', 'Full Frame', 'Seguimiento IA'],
        colores: ['Negro']
    },
    { 
        id: 7, 
        nombre: 'Teclado Mecánico Logitech G Pro', 
        precio: 159.99, 
        precioOferta: 129.99,
        categoria: 'accesorios', 
        imagen: 'https://picsum.photos/400/300?random=7',
        descripcion: 'Teclado mecánico para gaming con switches GX y RGB LIGHTSYNC.',
        stock: 30,
        rating: 4.5,
        reviews: 312,
        especificaciones: ['Switches GX', 'RGB', 'Teclas PBT', 'USB-C'],
        colores: ['Negro', 'Blanco']
    },
    { 
        id: 8, 
        nombre: 'Monitor Samsung Odyssey G9', 
        precio: 899.99, 
        precioOferta: 799.99,
        categoria: 'computacion', 
        imagen: 'https://picsum.photos/400/300?random=8',
        descripcion: 'Monitor curvo 49" 240Hz 1ms para una experiencia gaming inmersiva.',
        stock: 3,
        rating: 4.7,
        reviews: 67,
        especificaciones: ['49"', '240Hz', '1ms', 'QLED', 'HDR1000'],
        colores: ['Negro']
    }
];

const categorias = [
    { id: 'electronica', nombre: 'Electrónica', icono: 'fa-laptop' },
    { id: 'computacion', nombre: 'Computación', icono: 'fa-desktop' },
    { id: 'audio', nombre: 'Audio', icono: 'fa-headphones' },
    { id: 'fotografia', nombre: 'Fotografía', icono: 'fa-camera' },
    { id: 'accesorios', nombre: 'Accesorios', icono: 'fa-plug' }
];

const cupones = [
    { codigo: 'BIENVENIDA10', descuento: 10, valido: true, usado: false },
    { codigo: 'SHOP20', descuento: 20, valido: true, usado: false },
    { codigo: 'FLASH30', descuento: 30, valido: false, usado: false }
];

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

function renderizarProductos(lista) {
    const contenedor = document.getElementById('productos-container');
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
                 class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
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
    const cuponInfo = document.getElementById('cupon-aplicado-info');
    const cuponCodigo = document.getElementById('cupon-codigo');
    const cuponDescuento = document.getElementById('cupon-descuento');
    
    if (!contenido) return;
    
    const subtotal = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    let descuento = 0;
    
    if (cuponAplicado && cuponAplicado.valido) {
        descuento = (subtotal * cuponAplicado.descuento) / 100;
        if (cuponInfo) {
            cuponInfo.classList.remove('hidden');
            if (cuponCodigo) cuponCodigo.textContent = cuponAplicado.codigo;
            if (cuponDescuento) cuponDescuento.textContent = `-$${descuento.toFixed(2)}`;
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
        return;
    }
    
    contenido.innerHTML = `
        <div class="space-y-3">
            ${carrito.map(item => `
                <div class="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <img src="${item.imagen}" alt="${item.nombre}" class="w-16 h-16 rounded-lg object-cover">
                    <div class="flex-1 min-w-0">
                        <p class="font-semibold text-sm truncate">${item.nombre}</p>
                        <p class="text-purple-600 font-bold text-sm">$${(item.precio * item.cantidad).toFixed(2)}</p>
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
            `).join('')}
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
            document.getElementById('cupon-aplicado-info')?.classList.add('hidden');
            document.getElementById('input-cupon').value = '';
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

// ===== FUNCIONES DE MODALES =====
function abrirCarrito() {
    renderizarCarrito();
    const modal = document.getElementById('modal-carrito');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function abrirCategorias() {
    const modal = document.getElementById('modal-categorias');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function abrirPerfil() {
    const modal = document.getElementById('modal-perfil');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// ===== FUNCIÓN DE COMPRA =====
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
    
    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
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
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
    });
    
    // Cerrar modales al hacer clic fuera
    document.querySelectorAll('.fixed.inset-0').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
    
<<<<<<< HEAD
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
window.renderizarProductos = renderizarProductos;
window.renderizarCategorias = renderizarCategorias;
window.renderizarFiltrosRapidos = renderizarFiltrosRapidos;
window.actualizarCarrito = actualizarCarrito;
window.renderizarCarrito = renderizarCarrito;
=======
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

// ==================== MODALES ====================
function abrirCarrito() {
    renderizarCarrito();
    const modal = document.getElementById('modal-carrito');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    document.body.style.overflow = 'hidden';
}

function abrirCategorias() {
    const modal = document.getElementById('modal-categorias');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    document.body.style.overflow = 'hidden';
}

function abrirPerfil() {
    const modal = document.getElementById('modal-perfil');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    document.body.style.overflow = 'hidden';
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    document.body.style.overflow = '';
}

// Cerrar modal al hacer clic fuera
document.querySelectorAll('.fixed.inset-0').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
        }
    });
});

// ==================== VER DETALLE ====================
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
    
    // Actualizar contador de reseñas
    const reseñasList = obtenerReseñas(productoId);
    reviewsCount.textContent = `(${reseñasList.length} reseñas)`;
    
    // Renderizar reseñas
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
    
    if (producto.tallas) {
        especificacionesHTML += `
            <div class="mt-3">
                <h4 class="font-semibold text-gray-700">Tallas:</h4>
                <div class="flex flex-wrap gap-2 mt-1">
                    ${producto.tallas.map(talla => 
                        `<span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">${talla}</span>`
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
    
    if (producto.autor) {
        especificacionesHTML += `
            <div class="mt-3">
                <h4 class="font-semibold text-gray-700">Autor:</h4>
                <p class="text-gray-600">${producto.autor}</p>
            </div>
        `;
    }
    
    if (producto.paginas) {
        especificacionesHTML += `
            <div class="mt-3">
                <h4 class="font-semibold text-gray-700">Páginas:</h4>
                <p class="text-gray-600">${producto.paginas}</p>
            </div>
        `;
    }
    
    contenido.innerHTML = `
        <div class="relative">
            <img src="${producto.imagen}" alt="${producto.nombre}" 
                 class="w-full rounded-xl shadow-lg">
            ${producto.precioOferta ? `
                <span class="oferta-badge absolute top-3 right-3">
                    -${descuento}% OFF
                </span>
            ` : ''}
        </div>
        <div>
            <div class="flex items-center gap-2 mb-2">
                <div class="estrellas text-xl">
                    ${renderizarEstrellas(producto.rating)}
                </div>
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
    
    // Actualizar tooltip del botón de reseñas
    setTimeout(() => {
        const btnReseña2 = document.getElementById('btn-agregar-reseña');
        if (btnReseña2 && typeof tippy !== 'undefined') {
            btnReseña2._tippy?.destroy();
            tippy(btnReseña2, {
                content: '✍️ Escribe una reseña',
                placement: 'bottom',
                animation: 'shift-away'
            });
        }
    }, 100);
}

// ==================== FUNCIÓN PARA ELIMINAR CUPÓN ====================
function eliminarCupon() {
    if (!cuponAplicado) return;
    
    Swal.fire({
        title: '¿Eliminar cupón?',
        text: `Se eliminará el cupón "${cuponAplicado.codigo}"`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#dc2626',
        cancelButtonColor: '#4b5563',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        scrollbarPadding: false,
        allowOutsideClick: true,
        customClass: {
            popup: 'swal2-no-scroll rounded-2xl shadow-2xl',
            container: 'swal2-no-scroll-container',
            confirmButton: 'bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-xl font-semibold order-2 ml-2',
            cancelButton: 'bg-gray-600 hover:bg-gray-700 px-6 py-2.5 rounded-xl font-semibold order-1'
        },
        buttonsStyling: true,
        reverseButtons: false
    }).then((result) => {
        if (result.isConfirmed) {
            cuponAplicado.usado = false;
            cuponAplicado = null;
            document.getElementById('cupon-aplicado-info')?.classList.add('hidden');
            document.getElementById('input-cupon').value = '';
            
            Swal.fire({
                icon: 'info',
                title: 'Cupón eliminado',
                timer: 1200,
                showConfirmButton: false,
                toast: true,
                position: 'top-end',
                scrollbarPadding: false,
                allowOutsideClick: true,
                customClass: {
                    popup: 'swal2-no-scroll',
                    container: 'swal2-no-scroll-container'
                }
            });
            
            actualizarCarrito();
            renderizarCarrito();
        }
    });
}

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.fixed.inset-0:not(.hidden)').forEach(modal => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = '';
        }
    }
    
    if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        document.getElementById('buscador')?.focus();
    }
    
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        abrirCarrito();
    }
});

console.log('🚀 ShopVerse - Tienda Virtual Premium');
console.log(`📦 ${productos.length} productos cargados`);
console.log(`🏷️ ${categorias.length} categorías disponibles`);
console.log('💡 Atajos: ESC (cerrar) | Ctrl+B (buscar) | Ctrl+C (carrito)');
>>>>>>> 3437f819a29d6a19a9d54d2263132ebdf6e398f3
