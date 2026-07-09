// ==================== JUEGO DE AZAR / LÓGICA DEL JUEGO ====================
const juegoAzarSlides = [
    {
        titulo: 'Gira la rueda de la suerte',
        descripcion: 'Cada intento puede darte un cupón de descuento o puntos de tienda para tu próxima compra.',
    },
    {
        titulo: 'Cupones especiales',
        descripcion: 'Gana cupones de hasta 25% OFF o descuentos fijos que puedes aplicar en tu carrito.',
    },
    {
        titulo: 'Puntos acumulables',
        descripcion: 'Acumula puntos y úsalos para descuentos adicionales o beneficios exclusivos.',
    }
];

let juegoAzarSlideIndex = 0;

function initJuegoAzarCarousel() {
    const slidesContainer = document.getElementById('juego-carousel-slides');
    const indicatorsContainer = document.getElementById('juego-carousel-indicators');

    if (!slidesContainer || !indicatorsContainer) return;

    slidesContainer.innerHTML = juegoAzarSlides.map((slide, index) => `
        <div class="juego-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
            <div class="slide-card">
                <h3 class="font-bold text-2xl text-white">${slide.titulo}</h3>
                <p class="mt-4 text-white/90">${slide.descripcion}</p>
            </div>
        </div>
    `).join('');

    indicatorsContainer.innerHTML = juegoAzarSlides.map((_, index) => `
        <span class="juego-indicator ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
    `).join('');

    document.querySelectorAll('.juego-indicator').forEach(indicator => {
        indicator.addEventListener('click', () => {
            const slide = Number(indicator.dataset.slide);
            setJuegoAzarSlide(slide);
        });
    });

    document.getElementById('carousel-prev')?.addEventListener('click', () => {
        setJuegoAzarSlide(juegoAzarSlideIndex - 1);
    });

    document.getElementById('carousel-next')?.addEventListener('click', () => {
        setJuegoAzarSlide(juegoAzarSlideIndex + 1);
    });
}

function setJuegoAzarSlide(index) {
    const total = juegoAzarSlides.length;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    juegoAzarSlideIndex = index;

    const slides = document.querySelectorAll('.juego-slide');
    const indicators = document.querySelectorAll('.juego-indicator');

    slides.forEach(slide => {
        slide.classList.toggle('active', Number(slide.dataset.slide) === index);
    });
    indicators.forEach(indicator => {
        indicator.classList.toggle('active', Number(indicator.dataset.slide) === index);
    });
}

function jugarAzar() {
    const roll = Math.random();
    let mensaje = '';
    let premio = false;

    if (roll < 0.45) {
        const descuento = Math.random() < 0.5 ? 15 : 25;
        const codigo = `AZAR${Math.floor(100 + Math.random() * 900)}`;
        const cupon = {
            codigo,
            descuento,
            tipo: 'porcentaje',
            descripcion: `${descuento}% de descuento ganado en Juego de Azar`,
            valido: true,
            usado: false,
            minCompra: 0
        };
        window.cupones = window.cupones || [];
        if (!window.cupones.some(c => c.codigo === codigo)) {
            window.cupones.unshift(cupon);
        }
        actualizarBadgeCupones();
        mensaje = `¡Felicidades! Ganaste el cupón <strong>${codigo}</strong> con ${descuento}% de descuento.`;
        premio = true;
    } else if (roll < 0.85) {
        const puntos = 50;
        window.puntosUsuario = (window.puntosUsuario || 0) + puntos;
        actualizarPuntosJuego();
        mensaje = `¡Bien! Ganaste ${puntos} puntos de tienda.`;
        premio = true;
    } else {
        mensaje = 'No ganaste esta vez, pero puedes intentar de nuevo.';
    }

    Swal.fire({
        icon: premio ? 'success' : 'info',
        title: premio ? '🎉 Ganaste' : '😕 Intenta nuevamente',
        html: `<div class="text-left">${mensaje}</div>`,
        timer: 3000,
        showConfirmButton: false,
        position: 'top-end',
        toast: true,
        background: premio ? 'linear-gradient(to right, #ecfdf5, #d1fae5)' : 'linear-gradient(to right, #fef3c7, #fde68a)',
        iconColor: premio ? '#16a34a' : '#92400e',
        customClass: {
            popup: 'swal2-no-scroll'
        }
    });
}

function abrirJuegoAzar() {
    Swal.fire({
        title: '🎲 Juego de Azar',
        html: `
            <p class="text-left text-gray-700 mb-3">Gira tu suerte y gana cupones o puntos especiales para tu compra.</p>
            <div class="text-left text-sm text-gray-600">
                <p class="mb-1">• Cupón de descuento instantáneo.</p>
                <p class="mb-1">• Puntos de tienda acumulables.</p>
                <p>• Puedes volver a jugar si no ganas.</p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Jugar',
        cancelButtonText: 'Cerrar',
        background: 'linear-gradient(to right, #fff7ed, #fef3c7)',
        icon: 'question',
        iconColor: '#d97706',
        customClass: {
            popup: 'swal2-no-scroll'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            jugarAzar();
        }
    });
}

function actualizarPuntosJuego() {
    const puntosEl = document.getElementById('jugador-puntos');
    if (puntosEl) {
        puntosEl.textContent = window.puntosUsuario || 0;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    initJuegoAzarCarousel();
    actualizarPuntosJuego();
});