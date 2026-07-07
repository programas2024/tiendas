// ==================== SISTEMA DE SOPORTE ====================

// ===== TOGGLE FAQ =====
function toggleFAQ(element) {
    element.classList.toggle('active');
}

// ===== COPIAR EMAIL =====
function copiarEmail() {
    const email = 'soporte@shopverse.com';
    navigator.clipboard.writeText(email).then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Copiado!',
            text: 'El email ha sido copiado al portapapeles',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    }).catch(() => {
        // Fallback si no funciona clipboard
        Swal.fire({
            title: 'Copia el email',
            text: email,
            icon: 'info',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: 'Copiar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                prompt('Copia el email:', email);
            }
        });
    });
}

// ===== ABRIR CHAT =====
function abrirChat() {
    Swal.fire({
        title: '💬 Chat en vivo',
        html: `
            <div class="text-left">
                <p class="text-gray-600">Un agente te atenderá en breve.</p>
                <div class="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <p class="text-sm text-gray-600">
                        <i class="fas fa-clock text-purple-600"></i>
                        Tiempo estimado de espera: <strong>menos de 2 minutos</strong>
                    </p>
                </div>
                <div class="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p class="text-xs text-gray-500">
                        <i class="fas fa-info-circle text-blue-600"></i>
                        Horario de atención: Lun-Vie 9:00 - 18:00
                    </p>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: 'Iniciar chat',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        backdrop: 'rgba(0,0,0,0.6)'
    }).then((result) => {
        if (result.isConfirmed) {
            // Simular conexión al chat
            const timerInterval = setInterval(() => {
                // No hacer nada, solo esperar
            }, 100);
            
            Swal.fire({
                title: '🟢 ¡Conectado!',
                html: `
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-comment-dots text-green-600 text-3xl"></i>
                        </div>
                        <p class="text-gray-600">Chat iniciado con éxito.</p>
                        <p class="text-sm text-gray-500 mt-2">Espera la respuesta de un agente.</p>
                        <div class="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Agente disponible
                        </div>
                    </div>
                `,
                icon: 'success',
                timer: 3000,
                showConfirmButton: true,
                confirmButtonColor: '#7c3aed',
                confirmButtonText: '✅ Entendido'
            }).then(() => {
                clearInterval(timerInterval);
            });
        }
    });
}

// ===== AYUDA RÁPIDA =====
function ayudaRapida(tipo) {
    const mensajes = {
        'pedido': {
            titulo: '📦 Estado del pedido',
            texto: 'Para rastrear tu pedido, ve a "Mis compras" en tu perfil. Allí encontrarás el número de seguimiento y podrás ver el estado actual de tu entrega.',
            icono: 'info'
        },
        'devolucion': {
            titulo: '🔄 Devoluciones',
            texto: 'Puedes devolver cualquier producto dentro de los 30 días posteriores a la compra. El producto debe estar en su empaque original y en perfectas condiciones. Contáctanos para iniciar el proceso de devolución.',
            icono: 'info'
        },
        'pago': {
            titulo: '💳 Métodos de pago',
            texto: 'Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), tarjetas de débito, transferencias bancarias y WebPay. Todos los pagos son 100% seguros y encriptados.',
            icono: 'info'
        },
        'envio': {
            titulo: '🚚 Envíos',
            texto: 'Ofrecemos envío gratis en todas las compras. El tiempo de entrega es de 3 a 5 días hábiles. Recibirás un número de seguimiento por email cuando tu pedido sea despachado.',
            icono: 'info'
        }
    };
    
    const data = mensajes[tipo] || {
        titulo: '💡 Información',
        texto: 'Consulta disponible en nuestro centro de soporte.',
        icono: 'info'
    };
    
    Swal.fire({
        title: data.titulo,
        text: data.texto,
        icon: data.icono,
        confirmButtonColor: '#7c3aed',
        confirmButtonText: 'Entendido',
        showCancelButton: true,
        cancelButtonText: 'Contactar soporte',
        cancelButtonColor: '#3b82f6'
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            abrirChat();
        }
    });
}

// ===== VOLVER AL INICIO =====
function volverInicio() {
    // Animación de salida
    const main = document.querySelector('main');
    if (main) {
        main.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        main.style.opacity = '0';
        main.style.transform = 'translateY(20px)';
    }
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// ===== MOSTRAR INFORMACIÓN DE CONTACTO =====
function mostrarContacto() {
    Swal.fire({
        title: '📞 Contáctanos',
        html: `
            <div class="text-left space-y-3">
                <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <i class="fas fa-envelope text-blue-600 text-xl"></i>
                    <div>
                        <p class="font-semibold text-sm">Email</p>
                        <p class="text-sm text-gray-600">soporte@shopverse.com</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <i class="fas fa-phone text-green-600 text-xl"></i>
                    <div>
                        <p class="font-semibold text-sm">Teléfono</p>
                        <p class="text-sm text-gray-600">+56 9 1234 5678</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                    <i class="fas fa-comment-dots text-purple-600 text-xl"></i>
                    <div>
                        <p class="font-semibold text-sm">Chat en vivo</p>
                        <p class="text-sm text-gray-600">Disponible en horario laboral</p>
                    </div>
                </div>
                <div class="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                    <i class="fas fa-clock text-orange-600 text-xl"></i>
                    <div>
                        <p class="font-semibold text-sm">Horario</p>
                        <p class="text-sm text-gray-600">Lun-Vie: 9:00 - 18:00</p>
                        <p class="text-sm text-gray-600">Sáb: 10:00 - 14:00</p>
                    </div>
                </div>
            </div>
        `,
        icon: 'info',
        confirmButtonColor: '#7c3aed',
        confirmButtonText: 'Entendido',
        showCancelButton: true,
        cancelButtonText: '📧 Enviar email',
        cancelButtonColor: '#3b82f6'
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = 'mailto:soporte@shopverse.com';
        }
    });
}

// ===== ABRIR SOPORTE DESDE EL PERFIL =====
function abrirSoportePerfil() {
    cerrarModal('modal-perfil');
    // Si estamos en index.html, redirigir a soporte.html
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        window.location.href = 'soporte.html';
    } else {
        // Si ya estamos en soporte.html, mostrar el modal de contacto
        mostrarContacto();
    }
}

// ===== INICIALIZAR SOPORTE =====
function inicializarSoporte() {
    // Inicializar tooltips con Tippy
    if (typeof tippy !== 'undefined') {
        const elementos = [
            { id: '#btn-categorias', contenido: 'Categorías' },
            { id: '#btn-carrito', contenido: 'Carrito' },
            { id: '#btn-perfil', contenido: 'Mi Perfil' }
        ];
        
        elementos.forEach(el => {
            const elem = document.querySelector(el.id);
            if (elem) {
                tippy(elem, { 
                    content: el.contenido, 
                    placement: 'bottom',
                    animation: 'shift-away',
                    theme: 'custom'
                });
            }
        });
    }
    
    // Abrir primer FAQ por defecto
    const primerFaq = document.querySelector('.faq-item');
    if (primerFaq) {
        primerFaq.classList.add('active');
    }
}

// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    inicializarSoporte();
    
    // Botón de volver al inicio (si existe)
    const btnVolver = document.getElementById('btn-volver-inicio');
    if (btnVolver) {
        btnVolver.addEventListener('click', volverInicio);
    }
    
    // Botones de ayuda rápida
    document.querySelectorAll('[data-ayuda]').forEach(btn => {
        btn.addEventListener('click', function() {
            const tipo = this.dataset.ayuda;
            ayudaRapida(tipo);
        });
    });
});

// ===== EXPORTAR FUNCIONES PARA USO GLOBAL =====
window.toggleFAQ = toggleFAQ;
window.copiarEmail = copiarEmail;
window.abrirChat = abrirChat;
window.ayudaRapida = ayudaRapida;
window.volverInicio = volverInicio;
window.mostrarContacto = mostrarContacto;
window.abrirSoportePerfil = abrirSoportePerfil;
window.inicializarSoporte = inicializarSoporte;