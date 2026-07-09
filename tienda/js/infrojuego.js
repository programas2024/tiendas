function mostrarInfoJuego(juego = '') {
    const detalles = {
        ruleta: {
            titulo: 'Ruleta de la Fortuna',
            texto: 'Gira la ruleta para ganar cupones exclusivos, puntos extras o sorpresas especiales. Cada giro es una nueva oportunidad.',
            boton: '¡A girar!'
        },
        royal: {
            titulo: 'Royal Challenge',
            texto: 'Un reto de estrategia y suerte. Completa el desafío Royal para desbloquear descuentos premium y recompensas de nivel superior.',
            boton: 'Ver estrategia'
        },
        bonanza: {
            titulo: 'Bonanza Express',
            texto: 'Juego rápido para ganar bonificaciones instantáneas. Ideal para acumular puntos de tienda y comprar más rápido.',
            boton: 'Jugar ahora'
        }
    };

    const juegoInfo = detalles[juego] || {
        titulo: 'Juegos ShopVerse',
        texto: 'Elige entre Ruleta de la Fortuna, Royal Challenge o Bonanza Express. Cada juego ofrece premios distintos que puedes usar en tu compra.',
        boton: 'Empezar'
    };

    Swal.fire({
        title: `<span class="text-xl font-bold">${juegoInfo.titulo}</span>`,
        html: `
            <div class="text-left space-y-4">
                <p class="text-gray-700 text-sm">${juegoInfo.texto}</p>
                <ul class="space-y-2 text-gray-600 text-sm">
                    <li>• Gana cupones y descuentos especiales.</li>
                    <li>• Acumula puntos de tienda para tus próximas compras.</li>
                    <li>• Vuelve a jugar siempre que quieras.</li>
                </ul>
            </div>
        `,
        icon: 'info',
        confirmButtonText: juegoInfo.boton,
        customClass: {
            popup: 'swal2-no-scroll rounded-3xl shadow-2xl',
            confirmButton: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg',
            htmlContainer: 'text-gray-700'
        },
        background: 'linear-gradient(to right, #ffffff, #f8fafc)',
        allowOutsideClick: true,
        scrollbarPadding: false,
        showCancelButton: false,
        showCloseButton: true
    });
}

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-info-juegos')?.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarInfoJuego();
    });
    document.getElementById('btn-info-juegos-hero')?.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarInfoJuego();
    });
    document.querySelectorAll('[data-info-juego]').forEach(el => {
        el.addEventListener('click', () => mostrarInfoJuego(el.dataset.infoJuego));
    });
});
