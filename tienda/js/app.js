// ==================== APP PRINCIPAL ====================

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
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
});

// ==================== TOOLTIPS CON TIPPY ====================
function inicializarTooltips() {
    if (typeof tippy === 'undefined') return;
    
    const tooltips = [
        { id: '#btn-categorias', content: '📂 Explorar categorías' },
        { id: '#btn-carrito', content: '🛒 Ver mi carrito' },
        { id: '#btn-perfil', content: '👤 Mi perfil' },
        { id: '#btn-info', content: 'ℹ️ Información de la tienda' },
    ];
    
    tooltips.forEach(({ id, content }) => {
        const el = document.querySelector(id);
        if (el) {
            tippy(el, {
                content: content,
                placement: 'bottom',
                animation: 'shift-away'
            });
        }
    });
    
    // Tooltip para el botón de reseñas (se agrega dinámicamente)
    const btnReseña = document.getElementById('btn-agregar-reseña');
    if (btnReseña) {
        tippy(btnReseña, {
            content: '✍️ Escribe una reseña',
            placement: 'bottom',
            animation: 'shift-away'
        });
    }
}

// ==================== CATEGORÍAS ====================
function renderizarCategorias() {
    const contenedor = document.getElementById('lista-categorias');
    if (!contenedor) return;
    
    contenedor.innerHTML = categorias.map(cat => `
        <div onclick="filtrarPorCategoria('${cat.id}')" 
             class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center cursor-pointer hover:shadow-xl transition transform hover:scale-105 hover:-translate-y-1 group">
            <i class="fas ${cat.icono} text-4xl text-purple-600 mb-3 group-hover:text-purple-700 transition"></i>
            <p class="font-semibold text-gray-800">${cat.nombre}</p>
            <p class="text-xs text-gray-400 mt-1">Ver productos</p>
        </div>
    `).join('');
}

function renderizarFiltrosRapidos() {
    const contenedor = document.getElementById('filtros-rapidos');
    if (!contenedor) return;
    
    const filtros = [
        { id: 'todos', nombre: 'Todos', icono: 'fa-th' },
        ...categorias.map(cat => ({ id: cat.id, nombre: cat.nombre, icono: cat.icono }))
    ];
    
    contenedor.innerHTML = filtros.map(cat => `
        <button class="filtro-btn px-5 py-2.5 rounded-full ${cat.id === 'todos' ? 'active' : 'bg-blue-100 text-blue-700'} hover:shadow-lg transition" 
                data-categoria="${cat.id}" onclick="filtrarPorCategoria('${cat.id}')">
            <i class="fas ${cat.icono} mr-1.5"></i> ${cat.nombre}
        </button>
    `).join('');
}

// ==================== FILTROS ====================
let categoriaActual = 'todos';

function filtrarPorCategoria(categoria) {
    categoriaActual = categoria;
    
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.categoria === categoria);
        if (btn.dataset.categoria === categoria) {
            btn.className = 'filtro-btn active px-5 py-2.5 rounded-full shadow-lg';
        } else {
            btn.className = 'filtro-btn px-5 py-2.5 rounded-full bg-blue-100 text-blue-700 hover:shadow-lg transition';
        }
    });
    
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