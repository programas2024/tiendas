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

// ===== COPIAR TELÉFONO =====
function copiarTelefono() {
    const telefono = '+56 9 1234 5678';
    navigator.clipboard.writeText(telefono).then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Copiado!',
            text: 'El teléfono ha sido copiado al portapapeles',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    }).catch(() => {
        Swal.fire({
            title: 'Copia el teléfono',
            text: telefono,
            icon: 'info',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: 'Copiar'
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
            const timerInterval = setInterval(() => {}, 100);
            
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
        'estado-envio': {
            titulo: '📦 Estado y Envío del pedido',
            texto: 'Ofrecemos envío gratis en tus compras. El tiempo de entrega estimado es de 3 a 5 días hábiles. Para rastrear el paquete exacto, ve a "Mis compras" en tu perfil para obtener tu código de seguimiento activo.',
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
        cancelButtonText: 'Preguntar a IA',
        cancelButtonColor: '#3b82f6'
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = 'chat.html';
        }
    });
}

// ===== BUSCADOR DE PROBLEMAS / REDIRECCIÓN A CHAT IA =====
function filtrarFAQs() {
    const query = document.getElementById('buscador-problema').value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta span').innerText.toLowerCase();
        const respuesta = item.querySelector('.faq-respuesta').innerText.toLowerCase();
        
        if (pregunta.includes(query) || respuesta.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function buscarOIrAIChat() {
    const query = document.getElementById('buscador-problema').value.trim();
    if (query.length > 0) {
        // Guardamos la consulta para que la IA la procese automáticamente al cargar
        localStorage.setItem('consulta_ia', query);
        window.location.href = 'chat.html';
    } else {
        window.location.href = 'chat.html';
    }
}

// Listener dinámico para filtrar mientras escribe
document.addEventListener('DOMContentLoaded', function() {
    const buscadorProblema = document.getElementById('buscador-problema');
    if (buscadorProblema) {
        buscadorProblema.addEventListener('input', filtrarFAQs);
        buscadorProblema.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') buscarOIrAIChat();
        });
    }
});

window.buscarOIrAIChat = buscarOIrAIChat;

// ===== VOLVER AL INICIO =====
function volverInicio() {
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
    if (typeof cerrarModal === 'function') cerrarModal('modal-perfil');
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        window.location.href = 'soporte.html';
    } else {
        mostrarContacto();
    }
}

// ===== INICIALIZAR SOPORTE =====
function inicializarSoporte() {
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
    
    const primerFaq = document.querySelector('.faq-item');
    if (primerFaq) {
        primerFaq.classList.add('active');
    }
}

// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    inicializarSoporte();
    
    const btnVolver = document.getElementById('btn-volver-inicio');
    if (btnVolver) {
        btnVolver.addEventListener('click', volverInicio);
    }
    
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
window.copiarTelefono = copiarTelefono;
window.abrirChat = abrirChat;
window.ayudaRapida = ayudaRapida;
window.volverInicio = volverInicio;
window.mostrarContacto = mostrarContacto;
window.abrirSoportePerfil = abrirSoportePerfil;
window.inicializarSoporte = inicializarSoporte;