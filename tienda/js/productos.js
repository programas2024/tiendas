// ==================== DATOS DE PRODUCTOS ====================
// ============================================================
// FORZAR OCULTAMIENTO DE BARRAS DE DESPLAZAMIENTO
// ============================================================

(function ocultarScrollGlobal() {
    // Función para ocultar scroll en cualquier elemento
    function ocultarScrollEnElementos() {
        const elementos = document.querySelectorAll('*');
        elementos.forEach(el => {
            // Verificar si el elemento tiene scroll
            const tieneScrollVertical = el.scrollHeight > el.clientHeight;
            const tieneScrollHorizontal = el.scrollWidth > el.clientWidth;
            
            if (tieneScrollVertical || tieneScrollHorizontal) {
                el.style.scrollbarWidth = 'none';
                el.style.msOverflowStyle = 'none';
                // Para WebKit
                const style = document.createElement('style');
                style.textContent = `
                    ${el.tagName.toLowerCase()}::-webkit-scrollbar {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    }
                `;
                document.head.appendChild(style);
            }
        });
    }
    
    // Ejecutar al cargar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', ocultarScrollEnElementos);
    } else {
        ocultarScrollEnElementos();
    }
    
    // Observar cambios en el DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Elemento
                        if (node.scrollHeight > node.clientHeight || 
                            node.scrollWidth > node.clientWidth) {
                            node.style.scrollbarWidth = 'none';
                            node.style.msOverflowStyle = 'none';
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // También para cuando el tamaño cambia
    window.addEventListener('resize', function() {
        document.querySelectorAll('*').forEach(el => {
            if (el.scrollHeight > el.clientHeight || 
                el.scrollWidth > el.clientWidth) {
                el.style.scrollbarWidth = 'none';
                el.style.msOverflowStyle = 'none';
            }
        });
    });
    
    // Para SweetAlert específicamente
    const swalObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.classList) {
                        if (node.classList.contains('swal2-container') || 
                            node.classList.contains('swal2-popup')) {
                            // Forzar ocultar scroll
                            const popups = document.querySelectorAll('.swal2-popup, .swal2-container, .swal2-html-container');
                            popups.forEach(function(popup) {
                                popup.style.scrollbarWidth = 'none';
                                popup.style.msOverflowStyle = 'none';
                                popup.style.overflow = 'hidden';
                                // WebKit
                                if (popup.style.webkitScrollbar) {
                                    popup.style.webkitScrollbar = 'display: none';
                                }
                            });
                            
                            // También el body
                            document.body.style.overflow = 'hidden';
                            document.body.style.paddingRight = '0';
                        }
                    }
                });
            }
        });
    });
    
    swalObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    console.log('✅ Barras de desplazamiento ocultas correctamente');
})();

// Función para ocultar scroll en elementos específicos
function ocultarScrollEn(elemento) {
    if (!elemento) return;
    
    // Si es un selector
    if (typeof elemento === 'string') {
        const elementos = document.querySelectorAll(elemento);
        elementos.forEach(el => {
            el.style.scrollbarWidth = 'none';
            el.style.msOverflowStyle = 'none';
            // WebKit
            const style = document.createElement('style');
            const id = 'scroll-hide-' + Math.random().toString(36).substr(2, 9);
            style.id = id;
            style.textContent = `
                #${id}::-webkit-scrollbar {
                    display: none !important;
                    width: 0 !important;
                    height: 0 !important;
                }
            `;
            el.id = id;
            document.head.appendChild(style);
        });
    } else {
        // Si es un elemento DOM
        elemento.style.scrollbarWidth = 'none';
        elemento.style.msOverflowStyle = 'none';
    }
}

// Exportar función para uso global
window.ocultarScrollEn = ocultarScrollEn;


const productos = [
    // Ropa
    {
        id: 1,
        nombre: "Camiseta Clásica",
        precio: 29.99,
        precioOferta: 19.99,
        categoria: "ropa",
        imagen: "https://picsum.photos/seed/1/400/400",
        descripcion: "Camiseta de algodón 100% premium. Disponible en varios colores.",
        rating: 4.5,
        reviews: 128,
        stock: 45,
        tallas: ["S", "M", "L", "XL"],
        colores: ["Blanco", "Negro", "Azul"]
    },
    {
        id: 2,
        nombre: "Jeans Slim Fit",
        precio: 59.99,
        precioOferta: null,
        categoria: "ropa",
        imagen: "https://picsum.photos/seed/2/400/400",
        descripcion: "Jeans de corte slim fit con denim de alta calidad.",
        rating: 4.2,
        reviews: 95,
        stock: 30,
        tallas: ["30", "32", "34", "36"],
        colores: ["Azul oscuro", "Negro"]
    },
    {
        id: 3,
        nombre: "Chaqueta de Cuero",
        precio: 129.99,
        precioOferta: 99.99,
        categoria: "ropa",
        imagen: "https://picsum.photos/seed/3/400/400",
        descripcion: "Chaqueta de cuero genuino. Diseño clásico biker.",
        rating: 4.8,
        reviews: 203,
        stock: 15,
        tallas: ["M", "L", "XL"],
        colores: ["Negro", "Marrón"]
    },
    {
        id: 4,
        nombre: "Vestido Floral",
        precio: 49.99,
        precioOferta: 39.99,
        categoria: "ropa",
        imagen: "https://picsum.photos/seed/4/400/400",
        descripcion: "Vestido de verano con estampado floral. Tela ligera y fresca.",
        rating: 4.3,
        reviews: 67,
        stock: 25,
        tallas: ["S", "M", "L"],
        colores: ["Rojo", "Azul", "Amarillo"]
    },
    
    // Electrónicos
    {
        id: 5,
        nombre: "Smartphone Pro",
        precio: 699.99,
        precioOferta: 599.99,
        categoria: "electronica",
        imagen: "https://picsum.photos/seed/5/400/400",
        descripcion: "Smartphone de última generación con cámara de 108MP.",
        rating: 4.9,
        reviews: 512,
        stock: 20,
        especificaciones: ["6.8\" OLED", "108MP", "5000mAh", "5G"]
    },
    {
        id: 6,
        nombre: "Laptop Ultra",
        precio: 899.99,
        precioOferta: null,
        categoria: "electronica",
        imagen: "https://picsum.photos/seed/6/400/400",
        descripcion: "Laptop ultra ligera con procesador i7, 16GB RAM.",
        rating: 4.7,
        reviews: 321,
        stock: 12,
        especificaciones: ["i7", "16GB RAM", "512GB SSD", "4K"]
    },
    {
        id: 7,
        nombre: "Auriculares Inalámbricos",
        precio: 79.99,
        precioOferta: 59.99,
        categoria: "electronica",
        imagen: "https://picsum.photos/seed/7/400/400",
        descripcion: "Auriculares con cancelación activa de ruido.",
        rating: 4.4,
        reviews: 189,
        stock: 40,
        especificaciones: ["Bluetooth 5.0", "30h batería", "ANC"]
    },
    
    // Hogar
    {
        id: 8,
        nombre: "Lámpara LED",
        precio: 39.99,
        precioOferta: 29.99,
        categoria: "hogar",
        imagen: "https://picsum.photos/seed/8/400/400",
        descripcion: "Lámpara de escritorio LED regulable con múltiples modos.",
        rating: 4.1,
        reviews: 56,
        stock: 35,
        especificaciones: ["LED", "Regulable", "USB"]
    },
    {
        id: 9,
        nombre: "Juego de Sábanas",
        precio: 45.99,
        precioOferta: null,
        categoria: "hogar",
        imagen: "https://picsum.photos/seed/9/400/400",
        descripcion: "Sábanas de algodón egipcio de 300 hilos.",
        rating: 4.6,
        reviews: 78,
        stock: 28,
        tallas: ["Queen", "King"],
        colores: ["Blanco", "Gris"]
    },
    
    // Deportes
    {
        id: 10,
        nombre: "Zapatillas Running",
        precio: 89.99,
        precioOferta: 69.99,
        categoria: "deportes",
        imagen: "https://picsum.photos/seed/10/400/400",
        descripcion: "Zapatillas para running con amortiguación avanzada.",
        rating: 4.5,
        reviews: 156,
        stock: 32,
        tallas: ["38", "39", "40", "41", "42", "43"]
    },
    {
        id: 11,
        nombre: "Pelota de Fútbol",
        precio: 24.99,
        precioOferta: null,
        categoria: "deportes",
        imagen: "https://picsum.photos/seed/11/400/400",
        descripcion: "Pelota de fútbol profesional con certificación FIFA.",
        rating: 4.0,
        reviews: 43,
        stock: 50,
        especificaciones: ["Tamaño 5", "FIFA aprobada"]
    },
    
    // Libros
    {
        id: 12,
        nombre: "Libro de Programación",
        precio: 34.99,
        precioOferta: 24.99,
        categoria: "libros",
        imagen: "https://picsum.photos/seed/12/400/400",
        descripcion: "Aprende a programar desde cero con este libro completo.",
        rating: 4.8,
        reviews: 234,
        stock: 60,
        autor: "Juan Pérez",
        paginas: 450
    },
    {
        id: 13,
        nombre: "Novela Best Seller",
        precio: 19.99,
        precioOferta: null,
        categoria: "libros",
        imagen: "https://picsum.photos/seed/13/400/400",
        descripcion: "Novela de misterio que ha cautivado a millones.",
        rating: 4.3,
        reviews: 178,
        stock: 42,
        autor: "María García",
        paginas: 320
    },
    
    // Juguetes
    {
        id: 14,
        nombre: "Robot Educativo",
        precio: 59.99,
        precioOferta: 49.99,
        categoria: "juguetes",
        imagen: "https://picsum.photos/seed/14/400/400",
        descripcion: "Robot programable para niños. Aprende robótica jugando.",
        rating: 4.2,
        reviews: 89,
        stock: 22,
        especificaciones: ["Programable", "Control remoto"]
    },
    {
        id: 15,
        nombre: "Puzzle 3D",
        precio: 29.99,
        precioOferta: null,
        categoria: "juguetes",
        imagen: "https://picsum.photos/seed/15/400/400",
        descripcion: "Puzzle 3D para armar. 200 piezas.",
        rating: 4.0,
        reviews: 34,
        stock: 38,
        especificaciones: ["200 piezas", "3D"]
    }
];

// ==================== CATEGORÍAS ====================
const categorias = [
    { id: 'ropa', icono: 'fa-tshirt', nombre: 'Ropa' },
    { id: 'electronica', icono: 'fa-laptop', nombre: 'Electrónica' },
    { id: 'hogar', icono: 'fa-couch', nombre: 'Hogar' },
    { id: 'deportes', icono: 'fa-running', nombre: 'Deportes' },
    { id: 'libros', icono: 'fa-book', nombre: 'Libros' },
    { id: 'juguetes', icono: 'fa-puzzle-piece', nombre: 'Juguetes' }
];

// ==================== FUNCIONES DE PRODUCTOS ====================
function obtenerProductosPorCategoria(categoria) {
    if (categoria === 'todos') return productos;
    return productos.filter(p => p.categoria === categoria);
}

function buscarProductos(texto) {
    const term = texto.toLowerCase().trim();
    if (!term) return productos;
    return productos.filter(p => 
        p.nombre.toLowerCase().includes(term) || 
        p.descripcion.toLowerCase().includes(term) ||
        p.categoria.toLowerCase().includes(term)
    );
}

function obtenerProductoPorId(id) {
    return productos.find(p => p.id === id);
}

function renderizarEstrellas(rating) {
    const total = 5;
    let html = '';
    for (let i = 1; i <= total; i++) {
        if (i <= Math.floor(rating)) {
            html += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            html += '<i class="fas fa-star-half-alt"></i>';
        } else {
            html += '<i class="far fa-star vacia"></i>';
        }
    }
    return html;
}

function renderizarProductos(lista) {
    const grid = document.getElementById('productos-grid');
    if (!grid) return;
    
    if (lista.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-16">
                <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                <p class="text-2xl font-semibold text-gray-500">No encontramos productos</p>
                <p class="text-gray-400 mt-2">Intenta con otra búsqueda</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = lista.map(producto => {
        const precioMostrar = producto.precioOferta || producto.precio;
        const precioOriginal = producto.precioOferta ? producto.precio : null;
        const descuento = precioOriginal ? Math.round(((precioOriginal - precioMostrar) / precioOriginal) * 100) : 0;
        
        return `
            <div class="producto-card bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer" 
                 onclick="verDetalle(${producto.id})">
                <div class="relative overflow-hidden">
                    <img src="${producto.imagen}" alt="${producto.nombre}" 
                         class="producto-imagen w-full h-56 object-cover">
                    ${producto.precioOferta ? `
                        <span class="oferta-badge absolute top-3 right-3">
                            -${descuento}% OFF
                        </span>
                    ` : ''}
                    <div class="rating-badge absolute bottom-3 left-3 flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400"></i>
                        ${producto.rating} (${producto.reviews})
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-lg truncate">${producto.nombre}</h3>
                    <p class="text-gray-500 text-sm line-clamp-2 h-10">${producto.descripcion}</p>
                    <div class="mt-3 flex items-center justify-between">
                        <div>
                            ${producto.precioOferta ? 
                                `<div class="flex items-center gap-2">
                                    <span class="text-gray-400 line-through text-sm">$${producto.precio.toFixed(2)}</span>
                                    <span class="text-purple-600 font-bold text-2xl">$${producto.precioOferta.toFixed(2)}</span>
                                </div>` :
                                `<span class="text-purple-600 font-bold text-2xl">$${producto.precio.toFixed(2)}</span>`
                            }
                        </div>
                        <button onclick="event.stopPropagation(); agregarAlCarrito(${producto.id})" 
                                class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2.5 rounded-xl hover:shadow-lg transition transform hover:scale-105 flex items-center gap-2">
                            <i class="fas fa-cart-plus"></i>
                            <span class="hidden sm:inline">Agregar</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}