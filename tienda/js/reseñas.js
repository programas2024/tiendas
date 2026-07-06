// ==================== SISTEMA DE RESEÑAS ====================

let reseñas = {};

function inicializarReseñas() {
    productos.forEach(p => {
        if (!reseñas[p.id]) {
            reseñas[p.id] = [
                {
                    id: Date.now() + Math.random(),
                    usuario: 'Cliente Feliz',
                    rating: 5,
                    comentario: '¡Excelente producto! Muy recomendado.',
                    fecha: new Date(Date.now() - 86400000 * 5).toISOString(),
                    compraVerificada: true
                },
                {
                    id: Date.now() + Math.random() + 1,
                    usuario: 'Comprador Frecuente',
                    rating: 4,
                    comentario: 'Buen producto, cumple con lo prometido.',
                    fecha: new Date(Date.now() - 86400000 * 3).toISOString(),
                    compraVerificada: true
                }
            ];
        }
    });
}

inicializarReseñas();

function agregarReseña(productoId, rating, comentario, usuario = 'Usuario') {
    if (!reseñas[productoId]) {
        reseñas[productoId] = [];
    }
    
    const nuevaReseña = {
        id: Date.now() + Math.random(),
        usuario: usuario,
        rating: rating,
        comentario: comentario,
        fecha: new Date().toISOString(),
        compraVerificada: true
    };
    
    reseñas[productoId].unshift(nuevaReseña);
    actualizarRatingProducto(productoId);
    
    Swal.fire({
        icon: 'success',
        title: '⭐ ¡Reseña publicada!',
        html: `
            <div class="text-center" style="overflow: hidden !important;">
                <div class="text-4xl mb-2">⭐${rating}</div>
                <p class="text-gray-600">"${comentario}"</p>
                <p class="text-sm text-gray-400 mt-2">Gracias por tu opinión</p>
            </div>
        `,
        timer: 2500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        background: 'linear-gradient(to right, #fff, #f0fdf4)',
        iconColor: '#22c55e',
        scrollbarPadding: false,
        allowOutsideClick: true,
        customClass: {
            popup: 'swal2-popup-no-scroll',
            container: 'swal2-container-no-scroll'
        },
        didOpen: () => {
            const popup = Swal.getPopup();
            if (popup) {
                popup.style.overflow = 'hidden';
                popup.style.scrollbarWidth = 'none';
                popup.style.msOverflowStyle = 'none';
                popup.style.padding = '1rem';
            }
            const htmlContainer = Swal.getHtmlContainer();
            if (htmlContainer) {
                htmlContainer.style.overflow = 'hidden';
                htmlContainer.style.maxHeight = 'none';
            }
        }
    });
}

function actualizarRatingProducto(productoId) {
    if (!reseñas[productoId] || reseñas[productoId].length === 0) return;
    
    const total = reseñas[productoId].length;
    const suma = reseñas[productoId].reduce((acc, r) => acc + r.rating, 0);
    const promedio = suma / total;
    
    const producto = productos.find(p => p.id === productoId);
    if (producto) {
        producto.rating = Math.round(promedio * 10) / 10;
        producto.reviews = total;
    }
}

function obtenerReseñas(productoId) {
    return reseñas[productoId] || [];
}

function renderizarReseñas(productoId) {
    const lista = obtenerReseñas(productoId);
    if (lista.length === 0) {
        return `
            <div class="text-center py-8">
                <i class="fas fa-comment text-4xl text-gray-300 mb-2"></i>
                <p class="text-gray-500">Sin reseñas aún</p>
                <p class="text-sm text-gray-400">¡Sé el primero en opinar!</p>
            </div>
        `;
    }
    
    return lista.map(r => {
        const fecha = new Date(r.fecha);
        const fechaFormateada = fecha.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        return `
            <div class="reseña-item p-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            ${r.usuario.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p class="font-semibold text-gray-800">${r.usuario}</p>
                            <div class="text-yellow-400 text-sm">
                                ${'⭐'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}
                            </div>
                        </div>
                    </div>
                    ${r.compraVerificada ? '<span class="text-green-600 text-xs bg-green-100 px-2 py-1 rounded-full">✅ Compra verificada</span>' : ''}
                </div>
                <p class="text-gray-700 mt-2 ml-12">${r.comentario}</p>
                <p class="text-xs text-gray-400 mt-1 ml-12">${fechaFormateada}</p>
            </div>
        `;
    }).join('');
}

function mostrarFormularioReseña(productoId) {
    let ratingSeleccionado = 0;
    let comentario = '';
    
    const html = `
        <div class="text-center" style="overflow: hidden !important;">
            <p class="text-gray-600 mb-4">Califica este producto</p>
            <div id="stars-container" class="flex justify-center gap-2 text-4xl mb-4">
                ${[1,2,3,4,5].map(i => `
                    <span class="star-rating-input cursor-pointer transition hover:scale-125" data-rating="${i}" style="color: #d1d5db;">
                        ★
                    </span>
                `).join('')}
            </div>
            <div class="mb-4">
                <textarea id="comentario-reseña" rows="3" placeholder="Escribe tu opinión..." 
                          class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                          style="resize: none; overflow: hidden;"></textarea>
            </div>
        </div>
    `;
    
    Swal.fire({
        title: '✍️ Escribe una reseña',
        html: html,
        showCancelButton: true,
        confirmButtonColor: '#7c3aed',
        cancelButtonColor: '#4b5563',
        confirmButtonText: 'Publicar reseña',
        cancelButtonText: 'Cancelar',
        background: 'linear-gradient(to right, #fff, #f5f0ff)',
        scrollbarPadding: false,
        allowOutsideClick: true,
        // 🔥 AÑADE ESTO PARA ELIMINAR EL SCROLL
        padding: '1.5rem',
        width: 450,
        heightAuto: true,
        customClass: {
            popup: 'swal2-popup-no-scroll',
            container: 'swal2-container-no-scroll',
            confirmButton: 'order-2 ml-2',
            cancelButton: 'order-1'
        },
        // 🔥 ESTO ES CLAVE - ESCONDER EL SCROLL
        didOpen: () => {
            // Forzar que el popup no tenga scroll
            const popup = Swal.getPopup();
            if (popup) {
                popup.style.overflow = 'hidden';
                popup.style.scrollbarWidth = 'none';
                popup.style.msOverflowStyle = 'none';
            }
            
            // Forzar que el html container no tenga scroll
            const htmlContainer = Swal.getHtmlContainer();
            if (htmlContainer) {
                htmlContainer.style.overflow = 'hidden';
                htmlContainer.style.maxHeight = 'none';
                htmlContainer.style.scrollbarWidth = 'none';
                htmlContainer.style.msOverflowStyle = 'none';
            }
            
            // Seleccionar estrellas
            document.querySelectorAll('.star-rating-input').forEach(star => {
                star.addEventListener('click', function() {
                    ratingSeleccionado = parseInt(this.dataset.rating);
                    document.querySelectorAll('.star-rating-input').forEach((s, index) => {
                        s.style.color = index < ratingSeleccionado ? '#fbbf24' : '#d1d5db';
                        s.style.transform = index < ratingSeleccionado ? 'scale(1.2)' : 'scale(1)';
                    });
                });
                
                star.addEventListener('mouseenter', function() {
                    const r = parseInt(this.dataset.rating);
                    document.querySelectorAll('.star-rating-input').forEach((s, index) => {
                        if (index < r) {
                            s.style.color = '#fcd34d';
                            s.style.transform = 'scale(1.1)';
                        }
                    });
                });
                
                star.addEventListener('mouseleave', function() {
                    document.querySelectorAll('.star-rating-input').forEach((s, index) => {
                        if (index < ratingSeleccionado) {
                            s.style.color = '#fbbf24';
                            s.style.transform = 'scale(1.2)';
                        } else {
                            s.style.color = '#d1d5db';
                            s.style.transform = 'scale(1)';
                        }
                    });
                });
            });
            
            const textarea = document.getElementById('comentario-reseña');
            if (textarea) {
                textarea.style.resize = 'none';
                textarea.style.overflow = 'hidden';
                textarea.addEventListener('input', function() {
                    comentario = this.value;
                });
            }
            
            // 🔥 FORZAR QUE NO HAYA SCROLL EN EL BODY
            document.body.style.overflow = 'hidden';
        },
        didClose: () => {
            // Restaurar scroll del body
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        },
        preConfirm: () => {
            const textarea = document.getElementById('comentario-reseña');
            const comentario = textarea ? textarea.value.trim() : '';
            
            if (ratingSeleccionado === 0) {
                Swal.showValidationMessage('⚠️ Por favor selecciona una calificación');
                return false;
            }
            
            if (comentario.length < 5) {
                Swal.showValidationMessage('⚠️ Escribe un comentario de al menos 5 caracteres');
                return false;
            }
            
            return { rating: ratingSeleccionado, comentario: comentario };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { rating, comentario } = result.value;
            agregarReseña(productoId, rating, comentario);
            verDetalle(productoId);
        }
    });

}