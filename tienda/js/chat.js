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

// ===== RESPUESTAS DE LA IA (MÁS INTELIGENTE Y ESPECÍFICA) =====
function procesarIntencionIA(entrada) {
    const frase = entrada.toLowerCase();
    
    // ===== DETECCIÓN DE CONTEXTO AVANZADA =====
    const esProblemaPago = /\b(pago|pagar|tarjeta|cr[eé]dito|debito|webpay|transferencia|cobr[ao]|factura|boleta|rechaz[ao]|negado|declin[ao]|m[eé]todo)\b/i.test(frase);
    const esProblemaEnvio = /\b(env[ií]o|envia|envi[ao]|lleg[oó]|llega|paquete|despacho|seguimiento|rastre[ao]|tracking|direcci[oó]n|domicilio|mensajer[ií]a|no llega|no lleg[oó]|demora|tard[eao]|retras[ao]|aún no|aun no|todavía no|todavia no)\b/i.test(frase);
    const esProblemaProducto = /\b(producto|productos|catalogo|disponible|precio|stock|modelo|marca|talla|color|tamaño)\b/i.test(frase);
    const esProblemaDevolucion = /\b(devolver|devoluci[oó]n|cambiar|cambio|reembolso|garant[ií]a|regresar|retorn[ao]|insatisfecho|dañado|roto|quebrado|maltratado|golpeado|defectuoso|falla|estropeado|defecto)\b/i.test(frase);
    const esProblemaCuenta = /\b(cuenta|perfil|usuario|contraseña|clave|password|email|correo|registro|sesi[oó]n|olvid[eé]|recuperar|restablecer)\b/i.test(frase);
    const esProblemaCupon = /\b(cup[óo]n|cupon|descuento|c[dó]digo|promoci[oó]n|oferta|voucher)\b/i.test(frase);
    const esProblemaSoporte = /\b(asesor|persona|humano|agente|hablar|comunicar|atencion|contactar|servicio)\b/i.test(frase);
    
    // ===== RESPUESTAS DETALLADAS POR CONTEXTO =====
    
    // 1. PROBLEMAS DE PAGO
    if (esProblemaPago) {
        if (frase.includes('rechaz') || frase.includes('negado') || frase.includes('declin')) {
            return `💳 **Tu pago fue rechazado.** Esto puede ocurrir por:
            
🔹 **Fondos insuficientes** - Verifica tu saldo disponible.
🔹 **Límite diario** - Algunas tarjetas tienen límites por día.
🔹 **Datos incorrectos** - Revisa el número, fecha y CVV.
🔹 **Bloqueo de seguridad** - Tu banco pudo bloquear la operación por seguridad.

📌 **Recomendación:** Contacta a tu banco para autorizar la compra o prueba con otro método de pago.

¿Necesitas ayuda con otro método de pago? 🤔`;
        }
        return `💳 **Métodos de pago disponibles en ShopVerse:**

✅ **Tarjetas de crédito/débito:** Visa, Mastercard, American Express
✅ **WebPay** - Pago seguro en línea
✅ **Transferencia bancaria** - Recibirás los datos al finalizar

🔒 **Seguridad:** Todos los pagos están encriptados con SSL de 256 bits.

💰 **¿Tienes algún problema específico con tu pago?** Cuéntame y te ayudo paso a paso.`;
    }
    
    // 2. PROBLEMAS DE ENVÍO
    if (esProblemaEnvio) {
        if (frase.includes('no llega') || frase.includes('no llegó') || frase.includes('demora') || frase.includes('tarda')) {
            return `📦 **Lamento que tu pedido no haya llegado.** 

🔍 **Pasos a seguir:**
1️⃣ Revisa el número de **seguimiento** en "Mis compras"
2️⃣ Verifica que la dirección sea correcta
3️⃣ Contacta a la mensajería con tu código de tracking

⏱️ **Tiempos estimados:**
• Santiago: 1-2 días hábiles
• Regiones: 3-5 días hábiles
• Zonas extremas: 5-7 días hábiles

📞 Si pasaron más de 7 días, escríbenos a **soporte@shopverse.com** con tu número de pedido y te daremos prioridad.

¿Tienes tu código de seguimiento? 🔢`;
        }
        return `📦 **Información de envíos ShopVerse:**

🚚 **Plazos de entrega:** 3-5 días hábiles
📬 **Seguimiento:** Recibirás un correo con tu código de tracking
📍 **Cambio de dirección:** Posible antes del despacho

💡 **Consejo:** Revisa siempre tu correo (incluyendo spam) para no perder las actualizaciones de tu pedido.

¿Quieres rastrear un pedido específico? 🧐`;
    }
    
    // 3. DEVOLUCIONES Y GARANTÍA
    if (esProblemaDevolucion) {
        if (frase.includes('dañado') || frase.includes('roto') || frase.includes('defectuoso')) {
            return `😔 **Lamento mucho que tu producto haya llegado en mal estado.**

📋 **Procedimiento para productos dañados:**
1️⃣ Toma **fotos claras** del producto dañado
2️⃣ Toma **fotos del empaque** (caja, burbujas, etc.)
3️⃣ Envía las fotos a **soporte@shopverse.com** con tu **número de pedido**

🔄 **Opciones disponibles:**
• Reemplazo completo sin costo
• Reembolso total (100% del valor)
• Bono de compensación para futuras compras

⏱️ **Tiempo de respuesta:** Máximo 48 horas hábiles.

¿Necesitas ayuda con el proceso de devolución? 🤝`;
        }
        return `🔄 **Política de devoluciones ShopVerse:**

✅ **Plazo:** 30 días desde la fecha de compra
📦 **Condiciones:** Producto en empaque original, sin uso
💵 **Reembolso:** Se acredita en tu método de pago original

**Pasos para devolver:**
1. Contáctanos con tu número de pedido
2. Te enviaremos una guía de devolución
3. Empaqueta el producto de forma segura
4. Envíalo por mensajería (sin costo adicional)

¿Quieres iniciar una devolución ahora? 🔄`;
    }
    
    // 4. PROBLEMAS DE CUENTA
    if (esProblemaCuenta) {
        if (frase.includes('contraseña') || frase.includes('clave') || frase.includes('password')) {
            return `🔐 **Cambio/Recuperación de contraseña:**

🔑 **Si olvidaste tu contraseña:**
1. Ve a la página de inicio de sesión
2. Haz clic en **"¿Olvidaste tu contraseña?"**
3. Ingresa tu email y te llegará un enlace de restablecimiento

🛡️ **Cambiar contraseña (estando logueado):**
1. Ve a tu **perfil** → **Configuración**
2. Selecciona **Seguridad** → **Cambiar contraseña**
3. Ingresa tu contraseña actual y la nueva (mínimo 8 caracteres)

⚠️ **Recomendación:** Usa una contraseña segura con mayúsculas, números y símbolos.

¿Necesitas más ayuda con tu cuenta? 👤`;
        }
        return `👤 **Gestión de cuenta ShopVerse:**

📋 **Desde tu perfil puedes:**
• Ver historial de compras
• Administrar direcciones de envío
• Cambiar datos personales
• Configurar notificaciones
• Ver favoritos

🔐 **Seguridad:** Tus datos están protegidos con encriptación avanzada.

¿Qué necesitas hacer específicamente en tu cuenta? 🤔`;
    }
    
    // 5. CUPONES Y DESCUENTOS
    if (esProblemaCupon) {
        return `🎫 **Cupones de descuento ShopVerse:**

💰 **¿Cómo aplicar un cupón?**
1. Agrega productos a tu carrito
2. Ve al carrito de compras
3. Ingresa el código en el campo **"Cupón"**
4. Haz clic en **"Aplicar"**

📌 **Condiciones:**
• Un cupón por compra
• Válido por tiempo limitado
• No acumulable con otras ofertas

🎁 **¿No tienes cupón?** 
Suscríbete a nuestro newsletter para recibir descuentos exclusivos.

¿Tienes un código que no funciona? Revísalo o contáctanos.`;
    }
    
    // 6. SOPORTE / HABLAR CON ASESOR
    if (esProblemaSoporte) {
        return `👤 **Contacto con soporte humano:**

📞 **Opciones disponibles:**
• 📧 **Email:** soporte@shopverse.com (respuesta en 24h)
• 📱 **Teléfono:** +56 9 1234 5678 (Lun-Vie 9:00-18:00)
• 💬 **Chat en vivo:** Disponible en soporte.html

⏰ **Horario de atención:**
Lunes a Viernes: 9:00 - 18:00 hrs
Sábados: 10:00 - 14:00 hrs

🤖 **Mientras esperas...** 
Puedo ayudarte con la mayoría de los problemas. Cuéntame tu consulta y si no puedo resolverla, te transferiré a un asesor.

¿Qué problema tienes? Estoy aquí para ayudarte. 😊`;
    }
    
    // 7. SALUDOS Y DESPEDIDAS
    if (frase.includes('hola') || frase.includes('buenos dias') || frase.includes('buenas tardes') || frase.includes('buenas noches')) {
        return `¡Hola! 👋 Soy tu asistente virtual de ShopVerse. 

📦 Puedo ayudarte con:
• **Envíos** y seguimiento 🚚
• **Pagos** y métodos 💳
• **Devoluciones** y garantía 🔄
• **Productos** y catálogo 🛍️
• **Cuenta** y perfil 👤
• **Cupones** y descuentos 🎫

¿En qué puedo asistirte hoy? ¡Cuéntame tu consulta! 😊`;
    }
    
    if (frase.includes('chao') || frase.includes('adios') || frase.includes('bye') || (frase.includes('gracias') && frase.includes('todo'))) {
        chatTerminado = true;
        return `¡Ha sido un placer ayudarte! 🙌 

🌟 **¿Te fue útil mi atención?** Me encantaría saber tu opinión.

🔔 Si necesitas algo más, aquí estaré para ti. 
¡Que tengas un excelente día y disfruta de tus compras en ShopVerse! 🛍️✨`;
    }
    
    if (frase.includes('gracias')) {
        return `¡De nada! 😊 Es un gusto ayudarte. 

💡 ¿Necesitas ayuda con algo más? Puedo asistirte con:
• Seguimiento de pedidos
• Problemas con pagos
• Devoluciones
• Información de productos
• Gestión de cuenta

¡Estoy aquí para lo que necesites! 💪`;
    }
    
    // ===== CONSULTA GENÉRICA PERO VÁLIDA =====
    if (esTemaPermitido(frase)) {
        return `🤔 **Entiendo tu consulta.** Para ayudarte mejor, necesito un poco más de contexto.

📌 **¿Podrías especificar?**
• ¿Es sobre un **pedido** que realizaste?
• ¿Tienes problemas con un **pago**?
• ¿Necesitas información sobre **devoluciones**?
• ¿Quieres saber sobre **productos** o **precios**?
• ¿Es un tema de tu **cuenta** o **perfil**?

📝 **Ejemplo:** "Mi pedido #1234 no ha llegado y ya pasaron 5 días"

¡Cuéntame más y te daré una solución precisa! 🎯`;
    }
    
    // ===== TEMA NO PERMITIDO =====
    if (!esTemaPermitido(frase)) {
        return `😅 **Lo siento, solo puedo ayudarte con temas relacionados a ShopVerse.**

📌 **Temas que manejo:**
• 📦 Envíos y seguimiento
• 💳 Pagos y métodos
• 🔄 Devoluciones y cambios
• 🛍️ Productos y catálogo
• 👤 Cuenta y perfil
• 🎫 Cupones y descuentos

**¿Tienes alguna consulta sobre tu compra o nuestra tienda?** 
¡Estoy aquí para ayudarte! 🛒✨`;
    }
    
    // ===== RESPUESTA POR DEFECTO (INTELIGENTE) =====
    return `🤔 **Analizando tu consulta...**

💡 Para darte la mejor respuesta, necesito un poco más de información.

📌 **Preguntas que puedo responder:**
• ¿Cómo rastreo mi pedido?
• ¿Cuánto tarda el envío?
• ¿Cómo devuelvo un producto?
• ¿Qué métodos de pago aceptan?
• ¿Cómo cambio mi contraseña?
• ¿Cómo aplico un cupón?

✍️ **Escríbeme con más detalles** y te daré una solución precisa y rápida.

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