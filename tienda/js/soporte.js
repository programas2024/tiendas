// ==================== SISTEMA DE SOPORTE MEJORADO ====================

// ===== BASE DE CONOCIMIENTO =====
const preguntasEstablecidas = [
    {
        id: 1,
        pregunta: "¿Cómo puedo realizar un pedido?",
        respuesta: "Para realizar un pedido, simplemente navega por nuestro catálogo de productos, selecciona los artículos que deseas, agrégalos al carrito de compras y sigue los pasos de pago. Puedes pagar con tarjeta de crédito, débito o transferencia bancaria."
    },
    {
        id: 2,
        pregunta: "¿Cuánto tarda el envío y cómo lo rastreo?",
        respuesta: "Los envíos tardan de 3 a 5 días hábiles. Al ser despachado, recibirás un correo con el número de seguimiento. También puedes ver este estado en tiempo real ingresando a 'Mis compras' desde tu perfil."
    },
    {
        id: 3,
        pregunta: "¿Qué métodos de pago aceptan?",
        respuesta: "Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), tarjetas de débito, transferencias bancarias y pagos a través de WebPay. Todos los pagos son 100% seguros."
    },
    {
        id: 4,
        pregunta: "¿Cómo puedo devolver un producto?",
        respuesta: "Si no estás satisfecho con tu compra, puedes devolver el producto en un plazo de 30 días desde la fecha de compra. El producto debe estar en su empaque original y en perfectas condiciones. Contáctanos para iniciar el proceso de devolución."
    },
    {
        id: 5,
        pregunta: "¿No me llegó mi paquete qué hago?",
        respuesta: "Si tu paquete no ha llegado en el tiempo estimado (3-5 días hábiles), por favor verifica el número de seguimiento en 'Mis compras'. Si pasaron más de 7 días, contáctanos para iniciar una investigación con la empresa de mensajería."
    },
    {
        id: 6,
        pregunta: "¿Puedo cambiar mi dirección de envío?",
        respuesta: "Sí, puedes cambiar tu dirección de envío siempre que el pedido no haya sido despachado. Ve a 'Mis compras', selecciona el pedido y busca la opción 'Modificar dirección'. Si ya fue despachado, contacta al servicio de mensajería con tu número de seguimiento."
    }
];

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

// ===== FUNCIÓN DE BÚSQUEDA INTELIGENTE =====
function buscarPreguntaInteligente(consulta) {
    const palabras = consulta.toLowerCase().split(' ');
    let mejoresResultados = [];
    
    preguntasEstablecidas.forEach(item => {
        const preguntaLower = item.pregunta.toLowerCase();
        let coincidencias = 0;
        
        // Contar cuántas palabras de la consulta coinciden con la pregunta
        palabras.forEach(palabra => {
            if (preguntaLower.includes(palabra) && palabra.length > 2) {
                coincidencias++;
            }
        });
        
        // También verificar coincidencias exactas de frases
        if (preguntaLower.includes(consulta.toLowerCase()) || 
            consulta.toLowerCase().includes(preguntaLower.substring(0, 20))) {
            coincidencias += 5;
        }
        
        if (coincidencias > 0) {
            mejoresResultados.push({
                ...item,
                coincidencias: coincidencias,
                porcentaje: Math.min((coincidencias / palabras.length) * 100, 100)
            });
        }
    });
    
    // Ordenar por cantidad de coincidencias (mayor a menor)
    mejoresResultados.sort((a, b) => b.coincidencias - a.coincidencias);
    
    // Si hay resultados con al menos 30% de coincidencia, devolver el mejor
    if (mejoresResultados.length > 0 && mejoresResultados[0].porcentaje >= 30) {
        return mejoresResultados[0];
    }
    
    return null;
}

// ===== MOSTRAR RESULTADO DE BÚSQUEDA =====
function mostrarResultadoBusqueda(resultado, consulta) {
    if (resultado) {
        Swal.fire({
            title: '🔍 Pregunta encontrada',
            html: `
                <div class="text-left">
                    <div class="p-4 bg-purple-50 rounded-lg border border-purple-100 mb-4">
                        <p class="font-bold text-purple-700 text-sm">📌 Pregunta relacionada:</p>
                        <p class="text-gray-800 font-medium">${resultado.pregunta}</p>
                    </div>
                    <div class="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <p class="font-bold text-blue-700 text-sm">💡 Respuesta:</p>
                        <p class="text-gray-700">${resultado.respuesta}</p>
                    </div>
                    <div class="mt-3 text-xs text-gray-500 text-center">
                        Coincidencia: ${Math.round(resultado.porcentaje)}%
                    </div>
                </div>
            `,
            icon: 'success',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: '✅ Entendido',
            showCancelButton: true,
            cancelButtonText: '🤖 Preguntar a IA',
            cancelButtonColor: '#3b82f6'
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.cancel) {
                localStorage.setItem('consulta_ia', consulta);
                window.location.href = 'chat.html';
            }
        });
    } else {
        Swal.fire({
            title: '❓ No encontré una respuesta',
            html: `
                <div class="text-center">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-robot text-purple-600 text-3xl"></i>
                    </div>
                    <p class="text-gray-600">No encontré una respuesta exacta en nuestras preguntas frecuentes.</p>
                    <p class="text-gray-600 mt-2">¿Quieres consultar con nuestra <strong>Asistente IA</strong>?</p>
                    <p class="text-xs text-gray-500 mt-3">La IA puede ayudarte con: 📦 Envíos | 💳 Pagos | 🔄 Devoluciones</p>
                </div>
            `,
            icon: 'info',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: '🤖 Preguntar a IA',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#6b7280'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('consulta_ia', consulta);
                window.location.href = 'chat.html';
            }
        });
    }
}

// ===== BUSCADOR DE PROBLEMAS =====
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
    if (query.length < 3) {
        Swal.fire({
            title: '✏️ Escribe más detalles',
            text: 'Por favor, escribe al menos 3 caracteres para buscar una respuesta.',
            icon: 'info',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    const resultado = buscarPreguntaInteligente(query);
    
    if (resultado) {
        mostrarResultadoBusqueda(resultado, query);
    } else {
        localStorage.setItem('consulta_ia', query);
        window.location.href = 'chat.html';
    }
}

// ===== GRABACIÓN DE AUDIO EN SOPORTE =====
let mediaRecorder = null;
let audioChunks = [];
let tiempoGrabacion = 0;
let intervaloGrabacion = null;

function iniciarGrabacion() {
    const estadoGrabacion = document.getElementById('estado-grabacion');
    const btnGrabar = document.getElementById('btn-grabar-audio');
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            tiempoGrabacion = 0;
            
            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };
            
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                procesarAudio(audioBlob);
                detenerGrabacionUI();
            };
            
            mediaRecorder.start();
            
            btnGrabar.innerHTML = '<i class="fas fa-stop"></i>';
            btnGrabar.classList.add('recording');
            estadoGrabacion.classList.remove('hidden');
            
            intervaloGrabacion = setInterval(() => {
                tiempoGrabacion++;
                const minutos = String(Math.floor(tiempoGrabacion / 60)).padStart(2, '0');
                const segundos = String(tiempoGrabacion % 60).padStart(2, '0');
                document.getElementById('tiempo-grabacion').textContent = `${minutos}:${segundos}`;
            }, 1000);
        })
        .catch(error => {
            Swal.fire({
                title: '❌ Error de micrófono',
                text: 'No se pudo acceder al micrófono. Verifica los permisos del navegador.',
                icon: 'error',
                confirmButtonColor: '#7c3aed'
            });
            console.error('Error al acceder al micrófono:', error);
        });
}

function detenerGrabacionUI() {
    const btnGrabar = document.getElementById('btn-grabar-audio');
    const estadoGrabacion = document.getElementById('estado-grabacion');
    
    btnGrabar.innerHTML = '<i class="fas fa-microphone"></i>';
    btnGrabar.classList.remove('recording');
    estadoGrabacion.classList.add('hidden');
    
    if (intervaloGrabacion) {
        clearInterval(intervaloGrabacion);
        intervaloGrabacion = null;
    }
}

function procesarAudio(audioBlob) {
    const ejemplos = [
        'No me llegó mi paquete',
        'Cómo puedo devolver un producto',
        'Quiero cambiar mi método de pago',
        'Dónde está mi pedido',
        'Problema con mi envío'
    ];
    const textoAleatorio = ejemplos[Math.floor(Math.random() * ejemplos.length)];
    
    Swal.fire({
        title: '🎤 Audio procesado',
        text: `Texto detectado: "${textoAleatorio}"`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
    });
    
    setTimeout(() => {
        document.getElementById('buscador-problema').value = textoAleatorio;
        buscarOIrAIChat();
    }, 1500);
}

// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', function() {
    // Eventos del buscador
    const buscadorProblema = document.getElementById('buscador-problema');
    if (buscadorProblema) {
        buscadorProblema.addEventListener('input', filtrarFAQs);
        buscadorProblema.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') buscarOIrAIChat();
        });
    }
    
    // Evento de grabación
    const btnGrabar = document.getElementById('btn-grabar-audio');
    if (btnGrabar) {
        btnGrabar.addEventListener('click', function() {
            if (!mediaRecorder || mediaRecorder.state === 'inactive') {
                iniciarGrabacion();
            } else {
                mediaRecorder.stop();
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
                detenerGrabacionUI();
            }
        });
    }
    
    // Inicializar tippy
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
    
    // Abrir primer FAQ
    const primerFaq = document.querySelector('.faq-item');
    if (primerFaq) {
        primerFaq.classList.add('active');
    }
});

// ===== EXPORTAR FUNCIONES =====
window.toggleFAQ = toggleFAQ;
window.copiarEmail = copiarEmail;
window.copiarTelefono = copiarTelefono;
window.abrirChat = abrirChat;
window.ayudaRapida = ayudaRapida;
window.buscarOIrAIChat = buscarOIrAIChat;
window.filtrarFAQs = filtrarFAQs;