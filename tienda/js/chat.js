// ==================== CHAT DE INTELIGENCIA ARTIFICIAL MEJORADO ====================

// ===== VARIABLES DE CONTROL =====
let calificacionMostrada = false;
let chatTerminado = false;
let timerInactividad = null;
let tiempoSinMensajes = 0;
let ultimoMensajeUsuario = '';
let mensajesIntercambiados = 0;

// ===== TEMAS PERMITIDOS =====
const TEMAS_PERMITIDOS = [
    'pedido', 'envio', 'envió', 'enviar', 'entrega', 'despacho', 'paquete', 'caja',
    'devolucion', 'devolver', 'cambio', 'cambiar', 'reembolso', 'garantia',
    'pago', 'pagar', 'tarjeta', 'credito', 'debito', 'webpay', 'transferencia',
    'producto', 'productos', 'compra', 'comprar', 'carrito', 'catalogo',
    'precio', 'costos', 'oferta', 'cupon', 'descuento', 'promocion',
    'usuario', 'cuenta', 'perfil', 'registro', 'sesion',
    'soporte', 'ayuda', 'atencion', 'problema', 'inconveniente',
    'seguimiento', 'rastrear', 'codigo', 'tracking',
    'factura', 'boleta', 'comprobante', 'dañado', 'roto', 'defectuoso',
    'mensajeria', 'correo', 'chile', 'santiago',
    'asesor', 'persona', 'humano', 'agente', 'llamar', 'hablar'
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

// ===== VALIDAR TEMA PERMITIDO =====
function esTemaPermitido(texto) {
    const textoLower = texto.toLowerCase();
    
    for (let tema of TEMAS_PROHIBIDOS) {
        if (textoLower.includes(tema)) {
            return false;
        }
    }
    
    for (let tema of TEMAS_PERMITIDOS) {
        if (textoLower.includes(tema)) {
            return true;
        }
    }
    
    const palabrasClave = ['como', 'que', 'donde', 'cuando', 'porque', 'para', 'cual', 'puedo', 'puede'];
    for (let palabra of palabrasClave) {
        if (textoLower.startsWith(palabra)) {
            if (textoLower.includes('compra') || textoLower.includes('producto') || 
                textoLower.includes('tienda') || textoLower.includes('shop') ||
                textoLower.includes('comprar') || textoLower.includes('precio')) {
                return true;
            }
        }
    }
    
    return false;
}

// ===== RESPUESTAS DE LA IA (MÁS INTELIGENTE) =====
function procesarIntencionIA(entrada) {
    const frase = entrada.toLowerCase();
    
    // ===== DETECCIÓN DE PETICIONES ESPECÍFICAS =====
    
    // 1. SOLICITUD DE ASESOR / PERSONA
    if (frase.includes('asesor') || frase.includes('persona') || frase.includes('humano') || 
        frase.includes('agente') || frase.includes('hablar con alguien') || frase.includes('atendeme') ||
        frase.includes('quiero hablar con') || frase.includes('me comunique') || 
        frase.includes('con un asesor') || frase.includes('atención personalizada')) {
        return `👤 ¡Claro! Entiendo que necesitas hablar con un asesor humano.

📋 Por favor, sigue estos pasos:
1️⃣ Escribe "SÍ" para confirmar que quieres ser transferido a un asesor
2️⃣ Un agente de soporte te atenderá en breve (tiempo estimado: < 2 minutos)

O si prefieres, puedes escribir tu consulta detallada y yo mismo puedo ayudarte. ¿Qué prefieres? 🤔`;
    }
    
    // 2. CONFIRMACIÓN DE TRANSFERENCIA A ASESOR
    if (frase.includes('si') && (frase.includes('transferir') || frase.includes('asesor') || 
        frase.includes('confirmo') || frase.includes('acepto'))) {
        return `✅ ¡Perfecto! He enviado tu solicitud a un asesor humano.

⏳ Tiempo estimado de espera: menos de 2 minutos

Mientras tanto, puedes escribir tu consulta para que el asesor la tenga lista cuando te atienda. 📝

🔔 Recibirás una notificación cuando el asesor esté disponible.`;
    }
    
    // 3. SALUDOS
    if (frase.includes('hola') || frase.includes('buenos dias') || frase.includes('buenas tardes') || frase.includes('buenas noches')) {
        return `¡Hola! 👋 Bienvenido a ShopVerse. ¿Cómo puedo ayudarte hoy? 📦 Puedo asistirte con envíos, pagos, devoluciones o cualquier duda sobre tu compra. ¡Cuéntame! 😊`;
    }
    
    // 4. DESPEDIDAS
    if (frase.includes('chao') || frase.includes('adios') || frase.includes('bye') || frase.includes('gracias') && frase.includes('todo')) {
        chatTerminado = true;
        return `¡Fue un placer ayudarte! 🙌 Si necesitas algo más, aquí estaré. ¡Que tengas un excelente día! 🌟`;
    }
    
    // 5. AGRADECIMIENTO (sin despedida)
    if (frase.includes('gracias') && !frase.includes('todo')) {
        return `¡De nada! 😊 ¿Necesitas ayuda con algo más? Estoy aquí para lo que necesites. 💪`;
    }
    
    // ===== DETECCIÓN AVANZADA POR CONTEXTO =====
    const esDemora = /\b(demora|tard[eao]|retras[ao]|aún no|aun no|todavía no|todavia no|no ha llegado|no me ha llegado|pasaron \d+|han pasado \d+|d[ií]as)\b/i.test(frase);
    const esEnvio = /\b(env[ií]o|envia|envi[ao]|lleg[oó]|llega|paquete|despacho|seguimiento|rastre[ao]|tracking|direcci[oó]n|domicilio|mensajer[ií]a|no llega|no lleg[oó])\b/i.test(frase);
    const esDano = /\b(dañado|roto|quebrado|maltratado|golpeado|defectuoso|falla|estropeado|defecto)\b/i.test(frase);
    const esDevolucion = /\b(devolver|devoluci[oó]n|cambiar|cambio|reembolso|garant[ií]a|regresar|retorn[ao]|devolver)\b/i.test(frase);
    const esPago = /\b(pago|pagar|tarjeta|cr[eé]dito|debito|webpay|transferencia|cobr[ao]|factura|boleta|m[eé]todo)\b/i.test(frase);
    const esCuenta = /\b(cuenta|perfil|usuario|contraseña|clave|password|email|correo|registro|sesi[oó]n)\b/i.test(frase);
    const esProducto = /\b(producto|productos|catalogo|disponible|precio|stock|modelo|marca)\b/i.test(frase);
    
    // PRODUCTO DAÑADO
    if (esDano) {
        return `😔 Lamento mucho que tu producto haya llegado en mal estado. 

📋 Por favor, sigue estos pasos:
1️⃣ Toma fotos del producto dañado
2️⃣ Toma fotos del empaque y la caja
3️⃣ Envía las fotos a soporte@shopverse.com con tu número de pedido

🔄 Te ofreceremos un reemplazo completo o un reembolso en un plazo máximo de 48 horas.

¿Necesitas que te ayude con algo más? 🤝`;
    }
    
    // ENVÍO / DEMORA
    if (esEnvio || esDemora) {
        if (esDemora) {
            return `📦 ¡Entiendo tu preocupación! Los envíos de ShopVerse tienen un tiempo estimado de 3 a 5 días hábiles. Si ya pasaron más de 7 días desde tu compra, por favor escríbenos a soporte@shopverse.com con tu número de pedido y te daremos prioridad para investigar con la empresa de mensajería. 🚀

Mientras tanto, puedes verificar el estado en <b>'Mis Compras'</b> desde tu perfil. ¿Tienes tu código de seguimiento a la mano?`;
        }
        return `📦 Para revisar el estado de tu pedido, ve a la sección <b>'Mis Compras'</b> en tu perfil. Allí encontrarás el número de seguimiento y la fecha estimada de entrega. 🚚 Si necesitas más ayuda, ¡estoy aquí! 😊`;
    }
    
    // DEVOLUCIÓN
    if (esDevolucion) {
        return `🔄 ¡Claro que sí! En ShopVerse tienes 30 días para devolver productos desde su recepción. El artículo debe estar en su empaque original y sin uso. 📦 ¿Quieres que te ayude a generar una solicitud de devolución? Solo necesito tu número de pedido. ✨`;
    }
    
    // PAGO
    if (esPago) {
        return `💳 Aceptamos múltiples métodos de pago: Tarjetas de crédito/débito (Visa, Mastercard, American Express), WebPay y transferencias bancarias. Todos los pagos son 100% seguros con encriptación SSL. 🔒 ¿Tienes algún problema con un pago en particular?`;
    }
    
    // CUENTA
    if (esCuenta) {
        if (frase.includes('contraseña') || frase.includes('clave') || frase.includes('password')) {
            return `🔐 Para cambiar tu contraseña, ve a tu perfil → Configuración → Seguridad. Allí podrás establecer una nueva contraseña. Si olvidaste tu contraseña, usa la opción "¿Olvidaste tu contraseña?" en el inicio de sesión. 📧 Recibirás un enlace para restablecerla.`;
        }
        return `👤 Puedes gestionar tu cuenta en el perfil de usuario. Desde allí puedes ver tus compras, favoritos, y configurar tus datos. 🔐 ¿Necesitas ayuda con algo específico de tu cuenta?`;
    }
    
    // PRODUCTO
    if (esProducto) {
        return `🛍️ En ShopVerse tenemos un amplio catálogo de productos. Puedes navegar por categorías usando el menú de categorías. 🏷️ También puedes usar el buscador para encontrar productos específicos. ¿Qué tipo de producto buscas? 🤔`;
    }
    
    // ===== TEMA NO PERMITIDO =====
    if (!esTemaPermitido(frase)) {
        return `😅 Lo siento, solo puedo ayudarte con temas relacionados a ShopVerse. ` +
               `Pregúntame sobre: 📦 Envíos, 💳 Pagos, 🔄 Devoluciones, 🛒 Productos, ` +
               `👤 Cuenta y más. ¿En qué más puedo asistirte hoy? 🛍️`;
    }
    
    // ===== RESPUESTA POR DEFECTO (INTELIGENTE) =====
    return `🤔 Entiendo tu consulta. Déjame analizarla mejor... 🧠

📌 Para ayudarte mejor, ¿podrías darme más detalles sobre tu situación? Puedo asistirte con:
• 📦 Estado de envíos
• 💳 Problemas con pagos
• 🔄 Devoluciones y cambios
• 🛍️ Información de productos
• 👤 Gestión de cuenta
• 📦 Productos dañados o defectuosos
• 👨‍💼 Hablar con un asesor humano

¡Estoy aquí para ayudarte! 😊✨`;
}

// ===== CALIFICACIÓN (SOLO AL FINAL DEL CHAT) =====
function mostrarCalificacion() {
    if (calificacionMostrada) return Promise.resolve(null);
    
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
                    <button id="btn-soporte-tecnico" class="mt-3 text-xs text-red-500 hover:text-red-700 transition flex items-center gap-1 mx-auto">
                        <i class="fas fa-headset"></i> ¿Necesitas ayuda de soporte técnico?
                    </button>
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
                });
                
                document.getElementById('btn-soporte-tecnico').addEventListener('click', function() {
                    Swal.close();
                    abrirSoporteTecnico();
                });
            },
            preConfirm: () => {
                const rating = document.querySelectorAll('#rating-estrellas i.text-yellow-400').length;
                const comentario = document.getElementById('comentario-calificacion').value;
                return { rating, comentario };
            }
        }).then((result) => {
            calificacionMostrada = true;
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

// ===== ABRIR SOPORTE TÉCNICO =====
function abrirSoporteTecnico() {
    Swal.fire({
        title: '🛠️ Soporte Técnico',
        html: `
            <div class="text-left">
                <p class="text-gray-600 mb-3">¿La IA no pudo resolver tu problema? Un agente de soporte técnico puede ayudarte.</p>
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                    <p class="text-sm text-yellow-700"><i class="fas fa-info-circle mr-1"></i> Tiempo estimado de respuesta: <strong>menos de 5 minutos</strong></p>
                </div>
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p class="text-sm text-gray-600">Describe tu problema para que el agente pueda ayudarte mejor:</p>
                    <textarea id="problema-soporte" rows="3" 
                        class="w-full mt-2 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                        placeholder="Ej: Mi pedido #1234 no llega y ya pasaron 10 días..."></textarea>
                </div>
            </div>
        `,
        confirmButtonText: '📨 Enviar a soporte',
        confirmButtonColor: '#ef4444',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#6b7280',
        preConfirm: () => {
            const problema = document.getElementById('problema-soporte').value.trim();
            if (!problema) {
                Swal.showValidationMessage('Por favor, describe tu problema');
                return false;
            }
            return problema;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const problema = result.value;
            Swal.fire({
                title: '✅ ¡Solicitud enviada!',
                html: `
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-check text-green-600 text-3xl"></i>
                        </div>
                        <p class="text-gray-600">Tu solicitud ha sido enviada al equipo de soporte técnico.</p>
                        <p class="text-sm text-gray-500 mt-2">Un agente te contactará en breve.</p>
                        <div class="mt-3 bg-gray-50 rounded-lg p-3 text-left">
                            <p class="text-xs text-gray-500"><strong>Tu mensaje:</strong></p>
                            <p class="text-sm text-gray-700">"${problema}"</p>
                        </div>
                    </div>
                `,
                icon: 'success',
                confirmButtonColor: '#7c3aed',
                confirmButtonText: '✅ Entendido'
            });
        }
    });
}

// ===== DETECTOR DE INACTIVIDAD =====
function iniciarDetectorInactividad() {
    if (timerInactividad) clearInterval(timerInactividad);
    
    timerInactividad = setInterval(() => {
        tiempoSinMensajes++;
        // Si han pasado 30 segundos sin mensajes y hubo interacción
        if (tiempoSinMensajes >= 30 && mensajesIntercambiados >= 2 && !calificacionMostrada && !chatTerminado) {
            clearInterval(timerInactividad);
            timerInactividad = null;
            // Mostrar mensaje de finalización
            agregarBurbuja('⏳ Parece que no tienes más preguntas. ¿Te fue útil mi ayuda? ⭐', false);
            setTimeout(() => {
                mostrarCalificacion();
            }, 2000);
        }
    }, 1000);
}

// ===== REINICIAR DETECTOR DE INACTIVIDAD =====
function reiniciarInactividad() {
    tiempoSinMensajes = 0;
    if (!timerInactividad) {
        iniciarDetectorInactividad();
    }
}

// ===== ENVIAR MENSAJE =====
async function enviarMensajeUsuario(event) {
    event.preventDefault();
    
    const input = document.getElementById('input-mensaje');
    const textoMensaje = input.value.trim();
    
    if (textoMensaje === "") return;
    
    // Guardar último mensaje
    ultimoMensajeUsuario = textoMensaje;
    mensajesIntercambiados++;
    reiniciarInactividad();
    
    agregarBurbuja(textoMensaje, true);
    input.value = "";
    
    const idIndicador = mostrarIndicadorEscribiendo();
    
    // Detectar si es una despedida para mostrar calificación inmediata
    const esDespedida = textoMensaje.toLowerCase().includes('chao') || 
                        textoMensaje.toLowerCase().includes('adios') || 
                        textoMensaje.toLowerCase().includes('bye') ||
                        (textoMensaje.toLowerCase().includes('gracias') && 
                         textoMensaje.toLowerCase().includes('todo'));
    
    setTimeout(async () => {
        removerIndicadorEscribiendo(idIndicador);
        const respuestaIA = procesarIntencionIA(textoMensaje);
        agregarBurbuja(respuestaIA, false);
        
        // Si es despedida, mostrar calificación después de 3 segundos
        if (esDespedida) {
            chatTerminado = true;
            if (timerInactividad) {
                clearInterval(timerInactividad);
                timerInactividad = null;
            }
            setTimeout(() => {
                mostrarCalificacion();
            }, 3000);
        }
        
        // Si la respuesta es sobre transferencia a asesor
        if (respuestaIA.includes('transferido a un asesor') || respuestaIA.includes('solicitud a un asesor')) {
            // No mostrar calificación automática, esperar interacción
        }
        
    }, 1500);
}

// ===== GRABACIÓN DE AUDIO =====
let recognitionChat = null;
let transcripcionFinalChat = '';
let isRecordingChat = false;
let silencioTimerChat = null;
let tiempoGrabacionChat = 0;
let intervaloGrabacionChat = null;

document.addEventListener('DOMContentLoaded', function() {
    const btnGrabarChat = document.getElementById('btn-grabar-audio-chat');
    if (btnGrabarChat) {
        btnGrabarChat.addEventListener('click', function() {
            if (!isRecordingChat) {
                iniciarGrabacionChat();
            } else {
                detenerGrabacionChatCompleto();
            }
        });
    }
});

function iniciarGrabacionChat() {
    const estadoGrabacion = document.getElementById('estado-grabacion-chat');
    const btnGrabar = document.getElementById('btn-grabar-audio-chat');
    const input = document.getElementById('input-mensaje');
    
    transcripcionFinalChat = '';
    isRecordingChat = true;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
        try {
            recognitionChat = new SpeechRecognition();
            recognitionChat.lang = 'es-ES';
            recognitionChat.interimResults = true;
            recognitionChat.continuous = true;
            
            recognitionChat.onresult = function(event) {
                if (silencioTimerChat) clearTimeout(silencioTimerChat);
                
                let interimTranscript = '';
                let finalTranscript = '';
                
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }
                
                if (finalTranscript) {
                    transcripcionFinalChat = finalTranscript.trim();
                }
                
                if (input) {
                    if (transcripcionFinalChat) {
                        input.value = transcripcionFinalChat;
                        input.style.color = '#1f2937';
                    } else if (interimTranscript) {
                        input.value = interimTranscript;
                        input.style.color = '#6b7280';
                    }
                }
                
                silencioTimerChat = setTimeout(() => {
                    if (isRecordingChat && recognitionChat) {
                        detenerGrabacionChatCompleto();
                    }
                }, 3000);
            };
            
            recognitionChat.onerror = function(event) {
                if (event.error === 'not-allowed' || event.error === 'audio-capture') {
                    Swal.fire({
                        title: '⚠️ Permiso de micrófono',
                        text: 'Por favor, permite el acceso al micrófono para usar el reconocimiento de voz.',
                        icon: 'warning',
                        confirmButtonColor: '#7c3aed'
                    });
                    detenerGrabacionChatCompleto();
                }
            };
            
            recognitionChat.onend = function() {
                if (transcripcionFinalChat && isRecordingChat) {
                    procesarTranscripcionFinalChat();
                }
                isRecordingChat = false;
            };
            
            recognitionChat.start();
            
            btnGrabar.innerHTML = '<i class="fas fa-stop"></i>';
            btnGrabar.classList.add('recording');
            estadoGrabacion.classList.remove('hidden');
            
            tiempoGrabacionChat = 0;
            if (intervaloGrabacionChat) {
                clearInterval(intervaloGrabacionChat);
            }
            intervaloGrabacionChat = setInterval(() => {
                tiempoGrabacionChat++;
                const minutos = String(Math.floor(tiempoGrabacionChat / 60)).padStart(2, '0');
                const segundos = String(tiempoGrabacionChat % 60).padStart(2, '0');
                const tiempoElement = document.getElementById('tiempo-grabacion-chat');
                if (tiempoElement) {
                    tiempoElement.textContent = `${minutos}:${segundos}`;
                }
            }, 1000);
            
        } catch (error) {
            console.error('Error al iniciar reconocimiento:', error);
            isRecordingChat = false;
        }
    } else {
        Swal.fire({
            title: '⚠️ No compatible',
            text: 'Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge.',
            icon: 'warning',
            confirmButtonColor: '#7c3aed'
        });
    }
}

function detenerGrabacionChatCompleto() {
    const btnGrabar = document.getElementById('btn-grabar-audio-chat');
    const estadoGrabacion = document.getElementById('estado-grabacion-chat');
    
    isRecordingChat = false;
    
    if (recognitionChat) {
        try {
            recognitionChat.stop();
        } catch (e) {}
        recognitionChat = null;
    }
    
    if (silencioTimerChat) {
        clearTimeout(silencioTimerChat);
        silencioTimerChat = null;
    }
    
    if (intervaloGrabacionChat) {
        clearInterval(intervaloGrabacionChat);
        intervaloGrabacionChat = null;
    }
    
    if (btnGrabar) {
        btnGrabar.innerHTML = '<i class="fas fa-microphone"></i>';
        btnGrabar.classList.remove('recording');
    }
    if (estadoGrabacion) {
        estadoGrabacion.classList.add('hidden');
    }
    
    if (transcripcionFinalChat) {
        procesarTranscripcionFinalChat();
    }
}

function procesarTranscripcionFinalChat() {
    const input = document.getElementById('input-mensaje');
    const texto = transcripcionFinalChat.trim();
    
    if (!texto) {
        Swal.fire({
            title: '🎤 No se detectó voz',
            text: 'No se pudo reconocer lo que dijiste. Intenta de nuevo.',
            icon: 'warning',
            timer: 2000,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
        return;
    }
    
    Swal.fire({
        title: '🎤 Audio procesado',
        text: `"${texto}"`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
    
    setTimeout(() => {
        if (input) {
            input.value = texto;
            input.style.color = '#1f2937';
            setTimeout(() => {
                const event = new Event('submit', { cancelable: true });
                document.getElementById('form-chat').dispatchEvent(event);
            }, 800);
        }
    }, 800);
}

// ===== ADJUNTAR IMÁGENES =====
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
                                agregarBurbuja('🖼️ [Imagen adjunta - La IA está analizando...]', true);
                                const idIndicador = mostrarIndicadorEscribiendo();
                                setTimeout(() => {
                                    removerIndicadorEscribiendo(idIndicador);
                                    agregarBurbuja('🖼️ He analizado tu imagen. Parece ser un comprobante/foto relacionada con tu consulta. ¿Puedes darme más contexto para ayudarte mejor? 📋', false);
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

// ===== FUNCIONES DE BURBUJAS =====
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

// ===== CARGAR CONSULTA AUTOMÁTICA =====
document.addEventListener('DOMContentLoaded', () => {
    const consultaGuardada = localStorage.getItem('consulta_ia');
    if (consultaGuardada) {
        localStorage.removeItem('consulta_ia');
        const input = document.getElementById('input-mensaje');
        if (input) {
            input.value = consultaGuardada;
            const mockEvent = { preventDefault: () => {} };
            setTimeout(() => enviarMensajeUsuario(mockEvent), 500);
        }
    }
    
    // Iniciar detector de inactividad
    iniciarDetectorInactividad();
});

// ===== EXPORTAR =====
window.enviarMensajeUsuario = enviarMensajeUsuario;
window.agregarBurbuja = agregarBurbuja;
window.mostrarIndicadorEscribiendo = mostrarIndicadorEscribiendo;
window.removerIndicadorEscribiendo = removerIndicadorEscribiendo;
window.eliminarImagen = eliminarImagen;
window.mostrarCalificacion = mostrarCalificacion;
window.abrirSoporteTecnico = abrirSoporteTecnico;
window.iniciarGrabacionChat = iniciarGrabacionChat;
window.detenerGrabacionChatCompleto = detenerGrabacionChatCompleto;