// ==================== CHAT DE INTELIGENCIA ARTIFICIAL MEJORADO ====================

// ===== TEMAS PERMITIDOS PARA LA IA =====
const TEMAS_PERMITIDOS = [
    'pedido', 'envio', 'envió', 'enviar', 'entrega', 'despacho', 'paquete', 'caja',
    'devolucion', 'devolver', 'cambio', 'cambiar', 'reembolso', 'garantia',
    'pago', 'pagar', 'tarjeta', 'credito', 'debito', 'webpay', 'transferencia',
    'producto', 'productos', 'compra', 'comprar', 'carrito', 'catalogo',
    'precio', 'costos', 'oferta', 'cupon', 'descuento', 'promocion',
    'usuario', 'cuenta', 'perfil', 'registro', 'sesion',
    'soporte', 'ayuda', 'atencion', 'problema', 'inconveniente',
    'seguimiento', 'rastrear', 'codigo', 'tracking',
    'factura', 'boleta', 'comprobante',
    'mensajeria', 'correo', 'chile', 'santiago'
];

const TEMAS_PROHIBIDOS = [
    'vida', 'muerte', 'existencia', 'universo', 'dios', 'religion',
    'politica', 'gobierno', 'presidente', 'eleccion',
    'futbol', 'deporte', 'equipo', 'partido', 'mundial',
    'huevo', 'gallina', 'filosofia', 'significado',
    'clima', 'temperatura', 'lluvia', 'calor',
    'amor', 'pareja', 'relaciones', 'sentimientos',
    'historia', 'fecha', 'año', 'siglo', 'paso'
];

// ===== FUNCIÓN PARA VALIDAR SI EL TEMA ES PERMITIDO =====
function esTemaPermitido(texto) {
    const textoLower = texto.toLowerCase();
    
    // Verificar temas prohibidos
    for (let tema of TEMAS_PROHIBIDOS) {
        if (textoLower.includes(tema)) {
            return false;
        }
    }
    
    // Verificar temas permitidos
    for (let tema of TEMAS_PERMITIDOS) {
        if (textoLower.includes(tema)) {
            return true;
        }
    }
    
    // Si no contiene ningún tema específico, permitir si es una pregunta relacionada con compras
    const palabrasClave = ['como', 'que', 'donde', 'cuando', 'porque', 'para', 'cual', 'puedo', 'puede'];
    for (let palabra of palabrasClave) {
        if (textoLower.startsWith(palabra)) {
            // Verificar si tiene palabras relacionadas con compras
            if (textoLower.includes('compra') || textoLower.includes('producto') || 
                textoLower.includes('tienda') || textoLower.includes('shop') ||
                textoLower.includes('comprar') || textoLower.includes('precio')) {
                return true;
            }
        }
    }
    
    return false;
}

// ===== RESPUESTAS DE LA IA =====
function procesarIntencionIA(entrada) {
    const frase = entrada.toLowerCase();
    
    // Validar si el tema es permitido
    if (!esTemaPermitido(frase)) {
        return `😅 Lo siento, solo puedo ayudarte con temas relacionados a ShopVerse. ` +
               `Pregúntame sobre: 📦 Envíos, 💳 Pagos, 🔄 Devoluciones, 🛒 Productos, ` +
               `👤 Cuenta y más. ¿En qué más puedo asistirte hoy? 🛍️`;
    }
    
    // Saludos
    if (frase.includes('hola') || frase.includes('buenos dias') || frase.includes('buenas tardes') || frase.includes('buenas noches')) {
        return `¡Hola! 👋 Bienvenido a ShopVerse. ¿Cómo puedo ayudarte hoy? 📦 Puedo asistirte con envíos, pagos, devoluciones o cualquier duda sobre tu compra. ¡Cuéntame! 😊`;
    }
    
    // Despedidas
    if (frase.includes('chao') || frase.includes('adios') || frase.includes('bye') || frase.includes('gracias')) {
        return `¡Fue un placer ayudarte! 🙌 Si necesitas algo más, aquí estaré. ¡Que tengas un excelente día! 🌟 No olvides calificar mi atención al final. ⭐⭐⭐⭐⭐`;
    }
    
    // Pedidos y envíos
    if (frase.includes('pedido') || frase.includes('no llega') || frase.includes('seguimiento') || 
        frase.includes('rastrear') || frase.includes('envio') || frase.includes('entrega') || frase.includes('paquete')) {
        if (frase.includes('no llega') || frase.includes('demora') || frase.includes('tarda')) {
            return `📦 ¡Lamento la demora! Los envíos de ShopVerse tienen un tiempo estimado de 3 a 5 días hábiles. Si pasaron más de 7 días, por favor escríbenos a soporte@shopverse.com con tu número de pedido y te daremos prioridad. 🚀 ¿Tienes tu código de seguimiento?`;
        }
        return `📦 Para revisar el estado de tu pedido, ve a la sección <b>'Mis Compras'</b> en tu perfil. Allí encontrarás el número de seguimiento y la fecha estimada de entrega. 🚚 Si necesitas más ayuda, ¡estoy aquí! 😊`;
    }
    
    // Devoluciones
    if (frase.includes('devolucion') || frase.includes('reembolso') || frase.includes('cambiar') || frase.includes('devolver') || frase.includes('cambio')) {
        return `🔄 ¡Claro que sí! En ShopVerse tienes 30 días para devolver productos desde su recepción. El artículo debe estar en su empaque original y sin uso. 📦 ¿Quieres que te ayude a generar una solicitud de devolución? Solo necesito tu número de pedido. ✨`;
    }
    
    // Pagos
    if (frase.includes('pago') || frase.includes('tarjeta') || frase.includes('webpay') || 
        frase.includes('cobro') || frase.includes('transferencia') || frase.includes('metodo') || frase.includes('credito') || frase.includes('debito')) {
        return `💳 Aceptamos múltiples métodos de pago: Tarjetas de crédito/débito (Visa, Mastercard, American Express), WebPay y transferencias bancarias. Todos los pagos son 100% seguros con encriptación SSL. 🔒 ¿Tienes algún problema con un pago en particular?`;
    }
    
    // Productos y catálogo
    if (frase.includes('producto') || frase.includes('catalogo') || frase.includes('disponible') || frase.includes('precio')) {
        return `🛍️ En ShopVerse tenemos un amplio catálogo de productos. Puedes navegar por categorías usando el menú de categorías. 🏷️ También puedes usar el buscador para encontrar productos específicos. ¿Qué tipo de producto buscas? 🤔`;
    }
    
    // Cuenta y perfil
    if (frase.includes('usuario') || frase.includes('cuenta') || frase.includes('perfil') || frase.includes('registro') || frase.includes('sesion')) {
        return `👤 Puedes gestionar tu cuenta en el perfil de usuario. Desde allí puedes ver tus compras, favoritos, y configurar tus datos. 🔐 ¿Necesitas ayuda con algo específico de tu cuenta?`;
    }
    
    // Respuesta por defecto si no se entiende pero es tema permitido
    return `🤔 Entiendo tu consulta. Déjame analizarla mejor... 🧠

📌 Para ayudarte mejor, ¿podrías darme más detalles sobre tu situación? Puedo asistirte con:
• 📦 Estado de envíos
• 💳 Problemas con pagos
• 🔄 Devoluciones y cambios
• 🛍️ Información de productos
• 👤 Gestión de cuenta

¡Estoy aquí para ayudarte! 😊✨`;
}

// ===== FUNCIÓN PARA MOSTRAR CALIFICACIÓN =====
function mostrarCalificacion() {
    return new Promise((resolve) => {
        Swal.fire({
            title: '⭐ ¡Califica mi atención!',
            html: `
                <div class="text-center">
                    <p class="text-gray-600 mb-4">¿Cómo fue tu experiencia conmigo?</p>
                    <div id="rating-estrellas" class="flex justify-center gap-2 text-3xl mb-4">
                        <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-400 transition" data-rating="1"></i>
                        <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-400 transition" data-rating="2"></i>
                        <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-400 transition" data-rating="3"></i>
                        <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-400 transition" data-rating="4"></i>
                        <i class="fas fa-star text-gray-300 cursor-pointer hover:text-yellow-400 transition" data-rating="5"></i>
                    </div>
                    <div id="rating-seleccionado" class="text-sm text-gray-500 mb-3">Selecciona una calificación</div>
                    <div class="mt-3">
                        <textarea id="comentario-calificacion" placeholder="Comentario opcional..." 
                            class="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm" 
                            rows="3"></textarea>
                    </div>
                </div>
            `,
            showConfirmButton: true,
            confirmButtonText: '✅ Enviar calificación',
            confirmButtonColor: '#7c3aed',
            showCancelButton: true,
            cancelButtonText: 'Omitir',
            cancelButtonColor: '#6b7280',
            didOpen: () => {
                let ratingSeleccionado = 0;
                const estrellas = document.querySelectorAll('#rating-estrellas i');
                const textoSeleccionado = document.getElementById('rating-seleccionado');
                
                estrellas.forEach(estrella => {
                    estrella.addEventListener('click', function() {
                        ratingSeleccionado = parseInt(this.dataset.rating);
                        estrellas.forEach((e, index) => {
                            if (index < ratingSeleccionado) {
                                e.className = 'fas fa-star text-yellow-400';
                            } else {
                                e.className = 'fas fa-star text-gray-300';
                            }
                        });
                        textoSeleccionado.textContent = `⭐ ${ratingSeleccionado} de 5 estrellas`;
                        textoSeleccionado.className = 'text-sm text-yellow-600 font-semibold mb-3';
                    });
                    
                    estrella.addEventListener('mouseenter', function() {
                        const hoverRating = parseInt(this.dataset.rating);
                        estrellas.forEach((e, index) => {
                            if (index < hoverRating) {
                                e.className = 'fas fa-star text-yellow-200';
                            }
                        });
                    });
                    
                    estrella.addEventListener('mouseleave', function() {
                        estrellas.forEach((e, index) => {
                            if (index < ratingSeleccionado) {
                                e.className = 'fas fa-star text-yellow-400';
                            } else {
                                e.className = 'fas fa-star text-gray-300';
                            }
                        });
                    });
                });
            },
            preConfirm: () => {
                const rating = document.querySelectorAll('#rating-estrellas i.text-yellow-400').length;
                const comentario = document.getElementById('comentario-calificacion').value;
                return { rating, comentario };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const { rating, comentario } = result.value;
                if (rating > 0) {
                    Swal.fire({
                        title: '🎉 ¡Gracias por tu calificación!',
                        html: `
                            <div class="text-center">
                                <div class="text-4xl mb-2">${'⭐'.repeat(rating)}</div>
                                <p class="text-gray-600">Has calificado con ${rating} estrella${rating > 1 ? 's' : ''}</p>
                                ${comentario ? `<p class="text-sm text-gray-500 mt-2">"${comentario}"</p>` : ''}
                                <p class="text-xs text-gray-400 mt-4">Tu opinión nos ayuda a mejorar 💪</p>
                            </div>
                        `,
                        icon: 'success',
                        confirmButtonColor: '#7c3aed',
                        confirmButtonText: '¡Genial!'
                    });
                }
                resolve(result.value);
            } else {
                resolve(null);
            }
        });
    });
}

// ===== FUNCIÓN MEJORADA PARA ENVIAR MENSAJE =====
async function enviarMensajeUsuario(event) {
    event.preventDefault();
    
    const input = document.getElementById('input-mensaje');
    const textoMensaje = input.value.trim();
    
    if (textoMensaje === "") return;
    
    // 1. Renderizar mensaje del usuario
    agregarBurbuja(textoMensaje, true);
    input.value = "";
    
    // 2. Mostrar indicador de que la IA está "escribiendo"
    const idIndicador = mostrarIndicadorEscribiendo();
    
    // 3. Procesar respuesta de la IA
    setTimeout(async () => {
        removerIndicadorEscribiendo(idIndicador);
        const respuestaIA = procesarIntencionIA(textoMensaje);
        agregarBurbuja(respuestaIA, false);
        
        // 4. Mostrar calificación después de la respuesta
        // Solo si no es un saludo o despedida simple
        const esInteraccionSimple = textoMensaje.toLowerCase().includes('hola') || 
                                   textoMensaje.toLowerCase().includes('gracias') ||
                                   textoMensaje.toLowerCase().includes('chao') ||
                                   textoMensaje.toLowerCase().includes('adios') ||
                                   textoMensaje.toLowerCase().includes('buenos dias');
        
        if (!esInteraccionSimple) {
            setTimeout(() => {
                mostrarCalificacion();
            }, 1000);
        }
    }, 1500);
}

function agregarBurbuja(texto, esUsuario) {
    const cajaMensajes = document.getElementById('caja-mensajes');
    const divMensaje = document.createElement('div');
    
    if (esUsuario) {
        divMensaje.className = "flex items-start gap-2.5 max-w-[85%] ml-auto justify-end";
        divMensaje.innerHTML = `
            <div class="flex flex-col w-full leading-1.5 p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md rounded-xl bubble-user">
                <p class="text-sm font-normal">${texto}</p>
                <span class="text-[10px] text-purple-200 mt-1 text-right">Enviado</span>
            </div>
        `;
    } else {
        divMensaje.className = "flex items-start gap-2.5 max-w-[85%]";
        divMensaje.innerHTML = `
            <div class="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm shadow flex-shrink-0">
                <i class="fas fa-robot"></i>
            </div>
            <div class="flex flex-col w-full leading-1.5 p-4 bg-white shadow-sm border border-gray-100 rounded-xl bubble-ia">
                <p class="text-sm font-normal text-gray-800">${texto}</p>
                <span class="text-[10px] text-gray-400 mt-1 text-right">IA Asistente</span>
            </div>
        `;
    }
    
    cajaMensajes.appendChild(divMensaje);
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
}

function mostrarIndicadorEscribiendo() {
    const cajaMensajes = document.getElementById('caja-mensajes');
    const id = "escribiendo-" + Date.now();
    const divIndicador = document.createElement('div');
    divIndicador.id = id;
    divIndicador.className = "flex items-start gap-2.5 max-w-[85%]";
    divIndicador.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center text-sm flex-shrink-0">
            <i class="fas fa-robot"></i>
        </div>
        <div class="p-3 bg-gray-100 rounded-xl text-gray-500 text-xs flex items-center gap-1">
            <span>Escribiendo</span>
            <span class="animate-ping">.</span><span class="animate-ping delay-150">.</span><span class="animate-ping delay-300">.</span>
        </div>
    `;
    cajaMensajes.appendChild(divIndicador);
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
    return id;
}

function removerIndicadorEscribiendo(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

// ===== FUNCIÓN PARA ADJUNTAR IMÁGENES =====
document.addEventListener('DOMContentLoaded', function() {
    const btnAdjuntar = document.getElementById('btn-adjuntar-imagen');
    if (btnAdjuntar) {
        btnAdjuntar.addEventListener('click', function() {
            const inputFile = document.createElement('input');
            inputFile.type = 'file';
            inputFile.accept = 'image/*';
            inputFile.onchange = function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const preview = document.getElementById('preview-imagen');
                        const img = document.getElementById('imagen-preview');
                        img.src = event.target.result;
                        preview.classList.remove('hidden');
                        
                        Swal.fire({
                            title: '🖼️ Imagen adjunta',
                            html: `
                                <div class="text-center">
                                    <img src="${event.target.result}" alt="Imagen adjunta" class="max-h-48 mx-auto rounded-lg border border-gray-200">
                                    <p class="text-gray-600 mt-3">¿Quieres adjuntar esta imagen a tu consulta?</p>
                                </div>
                            `,
                            confirmButtonText: '✅ Sí, adjuntar',
                            confirmButtonColor: '#7c3aed',
                            showCancelButton: true,
                            cancelButtonText: 'Cancelar'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                agregarBurbuja('🖼️ [Imagen adjunta]', true);
                                
                                Swal.fire({
                                    title: '🔍 Analizando imagen...',
                                    text: 'La IA está procesando tu imagen para ayudarte mejor.',
                                    icon: 'info',
                                    timer: 2000,
                                    showConfirmButton: false
                                });
                                
                                setTimeout(() => {
                                    const idIndicador = mostrarIndicadorEscribiendo();
                                    setTimeout(() => {
                                        removerIndicadorEscribiendo(idIndicador);
                                        agregarBurbuja('🖼️ He analizado tu imagen. Parece ser un comprobante/foto relacionada con tu consulta. ¿Puedes darme más contexto para ayudarte mejor? 📋', false);
                                    }, 1500);
                                }, 2000);
                            } else {
                                eliminarImagen();
                            }
                        });
                    };
                    reader.readAsDataURL(file);
                }
            };
            inputFile.click();
        });
    }
});

function eliminarImagen() {
    document.getElementById('preview-imagen').classList.add('hidden');
    document.getElementById('imagen-preview').src = '';
}

// ===== GRABACIÓN DE AUDIO EN EL CHAT =====
let mediaRecorderChat = null;
let audioChunksChat = [];
let tiempoGrabacionChat = 0;
let intervaloGrabacionChat = null;

document.addEventListener('DOMContentLoaded', function() {
    const btnGrabarChat = document.getElementById('btn-grabar-audio-chat');
    if (btnGrabarChat) {
        btnGrabarChat.addEventListener('click', function() {
            if (!mediaRecorderChat || mediaRecorderChat.state === 'inactive') {
                iniciarGrabacionChat();
            } else {
                mediaRecorderChat.stop();
                mediaRecorderChat.stream.getTracks().forEach(track => track.stop());
                detenerGrabacionChatUI();
            }
        });
    }
});

function iniciarGrabacionChat() {
    const estadoGrabacion = document.getElementById('estado-grabacion-chat');
    const btnGrabar = document.getElementById('btn-grabar-audio-chat');
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorderChat = new MediaRecorder(stream);
            audioChunksChat = [];
            tiempoGrabacionChat = 0;
            
            mediaRecorderChat.ondataavailable = event => {
                audioChunksChat.push(event.data);
            };
            
            mediaRecorderChat.onstop = () => {
                const audioBlob = new Blob(audioChunksChat, { type: 'audio/wav' });
                procesarAudioChat(audioBlob);
                detenerGrabacionChatUI();
            };
            
            mediaRecorderChat.start();
            
            btnGrabar.innerHTML = '<i class="fas fa-stop"></i>';
            btnGrabar.classList.add('recording');
            estadoGrabacion.classList.remove('hidden');
            
            intervaloGrabacionChat = setInterval(() => {
                tiempoGrabacionChat++;
                const minutos = String(Math.floor(tiempoGrabacionChat / 60)).padStart(2, '0');
                const segundos = String(tiempoGrabacionChat % 60).padStart(2, '0');
                document.getElementById('tiempo-grabacion-chat').textContent = `${minutos}:${segundos}`;
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

function detenerGrabacionChatUI() {
    const btnGrabar = document.getElementById('btn-grabar-audio-chat');
    const estadoGrabacion = document.getElementById('estado-grabacion-chat');
    
    btnGrabar.innerHTML = '<i class="fas fa-microphone"></i>';
    btnGrabar.classList.remove('recording');
    estadoGrabacion.classList.add('hidden');
    
    if (intervaloGrabacionChat) {
        clearInterval(intervaloGrabacionChat);
        intervaloGrabacionChat = null;
    }
}

function procesarAudioChat(audioBlob) {
    // Simulación de procesamiento de audio a texto
    const ejemplos = [
        'No me llegó mi pedido',
        'Quiero devolver un producto',
        'Problema con el pago',
        'Dónde está mi envío',
        'Cómo puedo cambiar mi dirección'
    ];
    const textoAleatorio = ejemplos[Math.floor(Math.random() * ejemplos.length)];
    
    Swal.fire({
        title: '🎤 Procesando audio...',
        text: `Texto detectado: "${textoAleatorio}"`,
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
    });
    
    setTimeout(() => {
        const input = document.getElementById('input-mensaje');
        input.value = textoAleatorio;
        // Enviar automáticamente
        const event = new Event('submit', { cancelable: true });
        document.getElementById('form-chat').dispatchEvent(event);
    }, 2000);
}

// ===== CARGAR CONSULTA AUTOMÁTICA DESDE EL CENTRO DE SOPORTE =====
document.addEventListener('DOMContentLoaded', () => {
    const consultaGuardada = localStorage.getItem('consulta_ia');
    if (consultaGuardada) {
        localStorage.removeItem('consulta_ia');
        
        const input = document.getElementById('input-mensaje');
        if (input) {
            input.value = consultaGuardada;
            const mockEvent = { preventDefault: () => {} };
            enviarMensajeUsuario(mockEvent);
        }
    }
});

// ===== EXPORTAR FUNCIONES PARA USO GLOBAL =====
window.enviarMensajeUsuario = enviarMensajeUsuario;
window.agregarBurbuja = agregarBurbuja;
window.mostrarIndicadorEscribiendo = mostrarIndicadorEscribiendo;
window.removerIndicadorEscribiendo = removerIndicadorEscribiendo;
window.eliminarImagen = eliminarImagen;
window.mostrarCalificacion = mostrarCalificacion;