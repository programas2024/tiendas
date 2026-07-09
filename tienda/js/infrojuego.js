function mostrarInfoJuego(juego = '') {
    const detalles = {
        ruleta: {
            titulo: 'Ruleta de la Fortuna',
            texto: 'Gira la ruleta para ganar cupones exclusivos, puntos extras o sorpresas especiales. Cada giro es una nueva oportunidad.',
            boton: '¡A girar!',
            partidasJugadas: 128,
            nivelActual: 7,
            puntosAcumulados: 2450,
            icono: 'fa-spinner',
            color: 'from-blue-600 to-blue-700'
        },
        royal: {
            titulo: 'Royal Challenge',
            texto: 'Un reto de estrategia y suerte. Completa el desafío Royal para desbloquear descuentos premium y recompensas de nivel superior.',
            boton: 'Ver estrategia',
            partidasJugadas: 89,
            nivelActual: 5,
            puntosAcumulados: 1820,
            icono: 'fa-crown',
            color: 'from-purple-600 to-pink-600'
        },
        bonanza: {
            titulo: 'Bonanza Express',
            texto: 'Juego rápido para ganar bonificaciones instantáneas. Ideal para acumular puntos de tienda y comprar más rápido.',
            boton: 'Jugar ahora',
            partidasJugadas: 245,
            nivelActual: 9,
            puntosAcumulados: 3150,
            icono: 'fa-bolt',
            color: 'from-yellow-500 to-orange-500'
        }
    };

    const juegoInfo = detalles[juego] || {
        titulo: 'Juegos ShopVerse',
        texto: 'Elige entre Ruleta de la Fortuna, Royal Challenge o Bonanza Express. Cada juego ofrece premios distintos que puedes usar en tu compra.',
        boton: 'Empezar',
        partidasJugadas: 0,
        nivelActual: 1,
        puntosAcumulados: 0,
        icono: 'fa-dice',
        color: 'from-blue-600 to-purple-600'
    };

    Swal.fire({
        title: `
            <div class="text-center">
                <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${juegoInfo.color} rounded-full shadow-xl mb-3">
                    <i class="fas ${juegoInfo.icono} text-white text-3xl"></i>
                </div>
                <h3 class="text-2xl font-bold bg-gradient-to-r ${juegoInfo.color} bg-clip-text text-transparent">
                    ${juegoInfo.titulo}
                </h3>
                <p class="text-gray-500 text-xs">Descubre cómo jugar y ganar recompensas</p>
            </div>
        `,
        html: `
            <div class="space-y-4">
                <!-- Descripción -->
                <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-purple-100">
                    <p class="text-gray-700 text-xs leading-relaxed text-center">
                        <i class="fas fa-quote-left text-purple-400 mr-1"></i>
                        ${juegoInfo.texto}
                        <i class="fas fa-quote-right text-purple-400 ml-1"></i>
                    </p>
                </div>
                
                <!-- Características principales -->
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition group">
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                <i class="fas fa-gift text-white text-xs"></i>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-gray-800 text-xs">Recompensas</h4>
                                <p class="text-[10px] text-gray-500 leading-tight">Cupones y descuentos</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition group">
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                <i class="fas fa-chart-line text-white text-xs"></i>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-gray-800 text-xs">Progreso</h4>
                                <p class="text-[10px] text-gray-500 leading-tight">Puntos y niveles</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition group">
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                <i class="fas fa-lightbulb text-white text-xs"></i>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-gray-800 text-xs">Tips rápidos</h4>
                                <p class="text-[10px] text-gray-500 leading-tight">Juega cuando quieras</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition group">
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition">
                                <i class="fas fa-infinity text-white text-xs"></i>
                            </div>
                            <div class="text-left">
                                <h4 class="font-semibold text-gray-800 text-xs">Participación</h4>
                                <p class="text-[10px] text-gray-500 leading-tight">Juega sin límites</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Beneficios -->
                <div>
                    <h4 class="font-bold text-gray-700 text-xs mb-1.5 flex items-center gap-1.5">
                        <i class="fas fa-list-check text-purple-600 text-xs"></i>
                        Beneficios
                    </h4>
                    <div class="grid grid-cols-2 gap-1.5 text-[10px]">
                        <div class="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5">
                            <i class="fas fa-trophy text-yellow-500 text-[10px]"></i>
                            <span class="text-gray-600">Gana puntos</span>
                        </div>
                        <div class="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5">
                            <i class="fas fa-tag text-blue-500 text-[10px]"></i>
                            <span class="text-gray-600">Cupones</span>
                        </div>
                        <div class="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5">
                            <i class="fas fa-arrow-up text-green-500 text-[10px]"></i>
                            <span class="text-gray-600">Niveles</span>
                        </div>
                        <div class="flex items-center gap-1.5 bg-gray-50 rounded-lg px-2.5 py-1.5">
                            <i class="fas fa-play-circle text-blue-500 text-[10px]"></i>
                            <span class="text-gray-600">Ilimitado</span>
                        </div>
                    </div>
                </div>
                
                <!-- Estadísticas rápidas -->
                <div class="grid grid-cols-3 gap-2 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-purple-100">
                    <div>
                        <p class="text-xl font-bold text-purple-600">${juegoInfo.partidasJugadas}</p>
                        <p class="text-[10px] text-gray-500">Partidas</p>
                    </div>
                    <div>
                        <p class="text-xl font-bold text-blue-600">${juegoInfo.nivelActual}</p>
                        <p class="text-[10px] text-gray-500">Nivel</p>
                    </div>
                    <div>
                        <p class="text-xl font-bold text-green-600">${juegoInfo.puntosAcumulados}</p>
                        <p class="text-[10px] text-gray-500">Puntos</p>
                    </div>
                </div>
                
                <!-- Versión -->
                <div class="text-center text-[10px] text-gray-400 border-t border-gray-100 pt-2.5">
                    <i class="fas fa-gamepad mr-1"></i>
                    Juego interactivo • ¡Diviértete y gana!
                </div>
            </div>
        `,
        iconColor: '#3b82f6',
        width: 480,
        confirmButtonText: juegoInfo.boton || 'Empezar',
        customClass: {
            popup: 'swal2-no-scroll rounded-2xl shadow-2xl border border-slate-200',
            confirmButton: `bg-gradient-to-r ${juegoInfo.color} text-white px-8 py-2.5 rounded-full font-semibold shadow-lg hover:opacity-95 transition text-sm`,
            htmlContainer: 'text-slate-700'
        },
        background: '#f8fafc',
        buttonsStyling: false,
        allowOutsideClick: true,
        showCloseButton: true,
        showCancelButton: false,
        backdrop: 'rgba(15, 23, 42, 0.45)'
    });
}
// Event listeners
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-info-juegos')?.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarInfoJuego(); // Muestra el juego por defecto
    });
    
    document.getElementById('btn-info-juegos-hero')?.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarInfoJuego(); // Muestra el juego por defecto
    });
    
    document.querySelectorAll('[data-info-juego]').forEach(el => {
        el.addEventListener('click', () => {
            const juego = el.dataset.infoJuego;
            mostrarInfoJuego(juego);
        });
    });
});