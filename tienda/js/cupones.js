// ==================== cupones.js ====================
// ==================== FUNCIONES DE CUPÓN ====================

// Aplicar cupón desde el input
function aplicarCuponInput() {
    const input = document.getElementById('input-cupon');
    if (!input) return;
    
    const codigo = input.value.trim();
    if (!codigo) {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ Ingresa un código',
            text: 'Escribe el código de tu cupón',
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #fffbeb)',
            iconColor: '#f59e0b',
            scrollbarPadding: false,
            customClass: {
                popup: 'swal2-no-scroll',
                container: 'swal2-no-scroll-container'
            }
        });
        return;
    }
    
    const resultado = aplicarCupon(codigo);
    if (resultado) {
        input.value = '';
        renderizarCarrito();
    }
}

// Eliminar cupón aplicado
function eliminarCupon() {
    if (typeof cuponAplicado !== 'undefined' && cuponAplicado) {
        cuponAplicado = null;
        renderizarCarrito();
        Swal.fire({
            icon: 'info',
            title: 'Cupón eliminado',
            text: 'El cupón ha sido removido',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #f0f0ff)',
            iconColor: '#6b7280',
            scrollbarPadding: false,
            customClass: {
                popup: 'swal2-no-scroll',
                container: 'swal2-no-scroll-container'
            }
        });
    }
}

// Actualizar el badge de cupones
function actualizarBadgeCupones() {
    const badge = document.getElementById('cupones-badge');
    if (badge && typeof cupones !== 'undefined') {
        const disponibles = cupones.filter(c => c.valido && !c.usado);
        const count = disponibles.length;
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Llamar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarBadgeCupones();
});
// Verificar si la variable ya existe
if (typeof cupones === 'undefined') {
    // Definir los cupones si no existen
    window.cupones = [
        {
            codigo: 'SHOP10',
            descuento: 10,
            tipo: 'porcentaje',
            descripcion: '10% de descuento en toda la tienda',
            valido: true,
            usado: false,
            minCompra: 0
        },
        {
            codigo: 'SHOP20',
            descuento: 20,
            tipo: 'porcentaje',
            descripcion: '20% de descuento en toda la tienda',
            valido: true,
            usado: false,
            minCompra: 100
        },
        {
            codigo: 'SHOP25',
            descuento: 25,
            tipo: 'porcentaje',
            descripcion: '25% de descuento en toda la tienda',
            valido: true,
            usado: false,
            minCompra: 200
        },
        {
            codigo: 'SHOPFREE',
            descuento: 0,
            tipo: 'envio',
            descripcion: 'Envío gratis sin mínimo de compra',
            valido: true,
            usado: false,
            minCompra: 0
        },
        {
            codigo: 'SHOP50',
            descuento: 50,
            tipo: 'fijo',
            descripcion: '$50 de descuento en compras superiores a $200',
            valido: true,
            usado: false,
            minCompra: 200
        }
    ];
}

// Usar window.cupones para acceder desde cualquier lugar
const cuponesGlobal = window.cupones;

let cuponAplicado = null;

function aplicarCupon(codigo) {
    const cupon = cuponesGlobal.find(c => c.codigo.toUpperCase() === codigo.toUpperCase());
    
    if (!cupon) {
        Swal.fire({
            icon: 'error',
            title: '❌ Cupón inválido',
            text: 'El código ingresado no existe',
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #fef2f2)',
            iconColor: '#dc2626',
            scrollbarPadding: false,
            customClass: {
                popup: 'swal2-no-scroll'
            }
        });
        return false;
    }
    
    if (!cupon.valido) {
        Swal.fire({
            icon: 'error',
            title: '❌ Cupón expirado',
            text: 'Este cupón ya no está disponible',
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #fef2f2)',
            iconColor: '#dc2626',
            scrollbarPadding: false,
            customClass: {
                popup: 'swal2-no-scroll'
            }
        });
        return false;
    }
    
    if (cupon.usado) {
        Swal.fire({
            icon: 'error',
            title: '❌ Cupón ya usado',
            text: 'Este cupón ya fue utilizado',
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #fef2f2)',
            iconColor: '#dc2626',
            scrollbarPadding: false,
            customClass: {
                popup: 'swal2-no-scroll'
            }
        });
        return false;
    }
    
    const total = calcularTotal();
    if (total < cupon.minCompra) {
        Swal.fire({
            icon: 'warning',
            title: '⚠️ Monto mínimo no alcanzado',
            text: `Este cupón requiere una compra mínima de $${cupon.minCompra.toFixed(2)}`,
            timer: 2500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end',
            background: 'linear-gradient(to right, #fff, #fffbeb)',
            iconColor: '#f59e0b',
            scrollbarPadding: false,
            customClass: {
                popup: 'swal2-no-scroll'
            }
        });
        return false;
    }
    
    cuponAplicado = cupon;
    cupon.usado = true;
    
    Swal.fire({
        icon: 'success',
        title: '🎉 Cupón aplicado!',
        html: `
            <div class="text-center">
                <p class="text-lg font-semibold">${cupon.descripcion}</p>
                ${cupon.tipo === 'porcentaje' ? `<p class="text-3xl font-bold text-purple-600">${cupon.descuento}% OFF</p>` : ''}
                ${cupon.tipo === 'fijo' ? `<p class="text-3xl font-bold text-purple-600">$${cupon.descuento} de descuento</p>` : ''}
                ${cupon.tipo === 'envio' ? `<p class="text-3xl font-bold text-purple-600">🚚 Envío GRATIS</p>` : ''}
            </div>
        `,
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end',
        background: 'linear-gradient(to right, #fff, #f0fdf4)',
        iconColor: '#22c55e',
        scrollbarPadding: false,
        customClass: {
            popup: 'swal2-no-scroll'
        }
    });
    
    actualizarCarrito();
    renderizarCarrito();
    return true;
}

function calcularTotalConCupon(total) {
    if (!cuponAplicado) return total;
    
    let descuento = 0;
    let nuevoTotal = total;
    
    switch (cuponAplicado.tipo) {
        case 'porcentaje':
            descuento = (total * cuponAplicado.descuento) / 100;
            nuevoTotal = total - descuento;
            break;
        case 'fijo':
            descuento = Math.min(cuponAplicado.descuento, total);
            nuevoTotal = total - descuento;
            break;
        case 'envio':
            descuento = 15;
            nuevoTotal = total - descuento;
            break;
    }
    
    return Math.max(0, nuevoTotal);
}

function obtenerDescuentoAplicado(total) {
    if (!cuponAplicado) return 0;
    return total - calcularTotalConCupon(total);
}

function mostrarCuponesDisponibles() {
    // Verificar que cupones existe
    if (typeof cupones === 'undefined' || !cupones.length) {
        console.error('❌ No se encontraron cupones');
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudieron cargar los cupones',
            confirmButtonColor: '#7c3aed'
        });
        return;
    }

    const disponibles = cupones.filter(c => c.valido && !c.usado);
    
    if (disponibles.length === 0) {
        Swal.fire({
            icon: 'info',
            title: '📋 Cupones disponibles',
            text: 'No hay cupones disponibles en este momento',
            confirmButtonColor: '#7c3aed',
            showCloseButton: true, // 🔥 Mostrar botón cerrar
            scrollbarPadding: false,
            customClass: {
                popup: 'swal2-no-scroll',
                container: 'swal2-container-no-scroll'
            },
            didOpen: () => {
                const popup = Swal.getPopup();
                if (popup) {
                    popup.style.overflow = 'hidden';
                    popup.style.maxHeight = 'auto';
                }
            }
        });
        return;
    }
    
    // 🔥 ICONO MODERNO - Cupón dentro de círculo
    const iconoHTML = `
        <div style="display: flex; justify-content: center; margin-bottom: 8px;">
            <div style="
                width: 70px;
                height: 70px;
                background: linear-gradient(135deg, #8b5cf6, #6d28d9);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
                animation: pulse 2s infinite;
            ">
                <i class="fas fa-ticket-alt" style="color: white; font-size: 32px;"></i>
            </div>
        </div>
    `;
    
    const cuponesMostrar = disponibles.slice(0, 5);
    
    let html = `
        ${iconoHTML}
        <div class="text-center mb-3">
            <p style="color: #6b7280; font-size: 0.9rem;">¡Aprovecha estos descuentos!</p>
        </div>
        <div class="space-y-2" style="max-height: 280px; overflow-y: auto; scrollbar-width: none; -ms-overflow-style: none; padding-right: 4px;">
    `;
    
    cuponesMostrar.forEach(c => {
        let badge = '';
        let badgeColor = 'bg-purple-600';
        let iconoBadge = '';
        
        if (c.tipo === 'porcentaje') {
            badge = `${c.descuento}% OFF`;
            badgeColor = 'bg-gradient-to-r from-purple-600 to-pink-600';
            iconoBadge = '🎯';
        } else if (c.tipo === 'fijo') {
            badge = `$${c.descuento} OFF`;
            badgeColor = 'bg-gradient-to-r from-blue-600 to-cyan-600';
            iconoBadge = '💰';
        } else if (c.tipo === 'envio') {
            badge = '🚚 Envío gratis';
            badgeColor = 'bg-gradient-to-r from-green-600 to-emerald-600';
            iconoBadge = '📦';
        }
        
        html += `
            <div class="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl flex justify-between items-center border border-purple-200 hover:shadow-md transition-all duration-300" style="cursor: default;">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span style="font-size: 1.1rem;">${iconoBadge}</span>
                        <span class="font-mono font-bold text-purple-600 text-sm">${c.codigo}</span>
                    </div>
                    <p class="text-xs text-gray-600 truncate">${c.descripcion}</p>
                    ${c.minCompra > 0 ? `<p class="text-xs text-gray-400">🛒 Mínimo: $${c.minCompra.toFixed(2)}</p>` : ''}
                </div>
                <span class="px-3 py-1 ${badgeColor} text-white text-xs font-bold rounded-full ml-2 whitespace-nowrap shadow-sm">${badge}</span>
            </div>
        `;
    });
    
    if (disponibles.length > 5) {
        html += `
            <div class="text-center text-xs text-gray-400 mt-2">
                + ${disponibles.length - 5} cupones más disponibles
            </div>
        `;
    }
    
    html += '</div>';
    
    // 🔥 AGREGAR ESTILOS PARA LA ANIMACIÓN DEL ICONO
    const styleAnimacion = document.createElement('style');
    styleAnimacion.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
    `;
    document.head.appendChild(styleAnimacion);
    
    Swal.fire({
        title: '🎁 Cupones Disponibles',
        html: html,
        icon: null, // 🔥 Sin icono predeterminado
        showCloseButton: true, // 🔥 MOSTRAR BOTÓN CERRAR (X)
        closeButtonHtml: '✕', // 🔥 Personalizar la X
        confirmButtonColor: '#7c3aed',
        confirmButtonText: '✓ Entendido',
        background: 'linear-gradient(135deg, #ffffff, #f8f4ff)',
        scrollbarPadding: false,
        width: 460, // 🔥 UN POCO MÁS ANCHO
        padding: '1.5rem 2rem 1.5rem 2rem', // 🔥 MÁS PADDING
        allowOutsideClick: true,
        backdrop: 'rgba(0,0,0,0.5)',
        customClass: {
            popup: 'swal2-popup-cupones-moderno',
            container: 'swal2-container-no-scroll',
            closeButton: 'swal2-close-button-moderno'
        },
        didOpen: () => {
            // 🔥 FORZAR OCULTAR SCROLL Y REDUCIR TAMAÑO
            const popup = Swal.getPopup();
            if (popup) {
                popup.style.overflow = 'hidden';
                popup.style.maxHeight = '520px'; // 🔥 MÁS ALTURA
                popup.style.scrollbarWidth = 'none';
                popup.style.msOverflowStyle = 'none';
                popup.style.borderRadius = '20px';
                popup.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2)';
            }
            
            // 🔥 PERSONALIZAR BOTÓN CERRAR (X)
            const closeButton = Swal.getCloseButton();
            if (closeButton) {
                closeButton.style.color = '#8b5cf6';
                closeButton.style.fontSize = '24px';
                closeButton.style.fontWeight = '300';
                closeButton.style.width = '36px';
                closeButton.style.height = '36px';
                closeButton.style.display = 'flex';
                closeButton.style.alignItems = 'center';
                closeButton.style.justifyContent = 'center';
                closeButton.style.borderRadius = '50%';
                closeButton.style.transition = 'all 0.3s ease';
                closeButton.style.background = 'rgba(139, 92, 246, 0.08)';
                
                // Hover del botón cerrar
                closeButton.addEventListener('mouseenter', function() {
                    this.style.background = 'rgba(139, 92, 246, 0.2)';
                    this.style.transform = 'scale(1.1) rotate(90deg)';
                });
                closeButton.addEventListener('mouseleave', function() {
                    this.style.background = 'rgba(139, 92, 246, 0.08)';
                    this.style.transform = 'scale(1) rotate(0deg)';
                });
            }
            
            // 🔥 OCULTAR SCROLL EN EL CONTENIDO
            const htmlContainer = Swal.getHtmlContainer();
            if (htmlContainer) {
                htmlContainer.style.overflow = 'hidden';
                htmlContainer.style.maxHeight = 'none';
                htmlContainer.style.padding = '0';
            }
            
            // 🔥 OCULTAR SCROLL EN EL CONTENEDOR DE CUPONES
            const cuponesContainer = document.querySelector('.swal2-html-container div');
            if (cuponesContainer) {
                cuponesContainer.style.scrollbarWidth = 'none';
                cuponesContainer.style.msOverflowStyle = 'none';
                cuponesContainer.style.maxHeight = '280px';
                cuponesContainer.style.overflowY = 'auto';
                
                // Para WebKit
                const style = document.createElement('style');
                style.textContent = `
                    .swal2-html-container div::-webkit-scrollbar {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                    }
                `;
                document.head.appendChild(style);
            }
            
            // 🔥 BOTÓN CONFIRMAR MÁS ESTILIZADO
            const confirmButton = Swal.getConfirmButton();
            if (confirmButton) {
                confirmButton.style.padding = '10px 32px';
                confirmButton.style.fontSize = '15px';
                confirmButton.style.fontWeight = '600';
                confirmButton.style.borderRadius = '12px';
                confirmButton.style.background = 'linear-gradient(135deg, #8b5cf6, #6d28d9)';
                confirmButton.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
                confirmButton.style.transition = 'all 0.3s ease';
                
                confirmButton.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0 6px 25px rgba(139, 92, 246, 0.5)';
                });
                confirmButton.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)';
                });
            }
        },
        willClose: () => {
            // Limpiar estilos inline si es necesario
        }
    });
}
// Exportar funciones para uso global
window.mostrarCuponesDisponibles = mostrarCuponesDisponibles;
window.aplicarCupon = aplicarCupon;
window.calcularTotalConCupon = calcularTotalConCupon;
window.obtenerDescuentoAplicado = obtenerDescuentoAplicado;