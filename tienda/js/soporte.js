// ==================== SISTEMA DE SOPORTE MEJORADO ====================

// ===== BASE DE CONOCIMIENTO CON MÁS PREGUNTAS =====
const preguntasEstablecidas = [
    {
        id: 1,
        pregunta: "¿Cómo puedo realizar un pedido?",
        respuesta: "Para realizar un pedido, simplemente navega por nuestro catálogo de productos, selecciona los artículos que deseas, agrégalos al carrito de compras y sigue los pasos de pago. Puedes pagar con tarjeta de crédito, débito o transferencia bancaria.",
        palabrasClave: ['pedido', 'comprar', 'carrito', 'producto', 'seleccionar', 'pagar', 'orden', 'compra'],
        contexto: 'compra'
    },
    {
        id: 2,
        pregunta: "¿Cuánto tarda el envío y cómo lo rastreo?",
        respuesta: "Los envíos tardan de 3 a 5 días hábiles. Al ser despachado, recibirás un correo con el número de seguimiento. También puedes ver este estado en tiempo real ingresando a 'Mis compras' desde tu perfil.",
        palabrasClave: ['envío', 'envio', 'tarda', 'demora', 'rastrear', 'seguimiento', 'tracking', 'correo', 'despacho', 'llegar', 'plazo'],
        contexto: 'envio'
    },
    {
        id: 3,
        pregunta: "¿Qué métodos de pago aceptan?",
        respuesta: "Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), tarjetas de débito, transferencias bancarias y pagos a través de WebPay. Todos los pagos son 100% seguros.",
        palabrasClave: ['pago', 'pagar', 'tarjeta', 'crédito', 'debito', 'webpay', 'transferencia', 'método', 'forma', 'cobrar'],
        contexto: 'pago'
    },
    {
        id: 4,
        pregunta: "¿Cómo puedo devolver un producto?",
        respuesta: "Si no estás satisfecho con tu compra, puedes devolver el producto en un plazo de 30 días desde la fecha de compra. El producto debe estar en su empaque original y en perfectas condiciones. Contáctanos para iniciar el proceso de devolución.",
        palabrasClave: ['devolver', 'devolución', 'devolucion', 'cambiar', 'cambio', 'reembolso', 'garantía', 'insatisfecho', 'satisfecho'],
        contexto: 'devolucion'
    },
    {
        id: 5,
        pregunta: "¿No me llegó mi paquete qué hago?",
        respuesta: "Si tu paquete no ha llegado en el tiempo estimado (3-5 días hábiles), por favor verifica el número de seguimiento en 'Mis compras'. Si pasaron más de 7 días, contáctanos para iniciar una investigación con la empresa de mensajería.",
        palabrasClave: ['paquete', 'llego', 'llegó', 'no llega', 'no llegó', 'extraviado', 'perdido', 'investigación', 'mensajería'],
        contexto: 'envio'
    },
    {
        id: 6,
        pregunta: "¿Puedo cambiar mi dirección de envío?",
        respuesta: "Sí, puedes cambiar tu dirección de envío siempre que el pedido no haya sido despachado. Ve a 'Mis compras', selecciona el pedido y busca la opción 'Modificar dirección'. Si ya fue despachado, contacta al servicio de mensajería con tu número de seguimiento.",
        palabrasClave: ['dirección', 'cambiar', 'modificar', 'envío', 'pedido', 'domicilio', 'ubicación', 'direccion'],
        contexto: 'envio'
    },
    {
        id: 7,
        pregunta: "Mi producto llegó dañado ¿qué hago?",
        respuesta: "Lamento mucho que tu producto haya llegado dañado. Por favor, toma fotos del producto, del empaque y de la caja. Luego contáctanos a soporte@shopverse.com con las fotos y tu número de pedido. Te ofreceremos un reemplazo o reembolso completo en un plazo máximo de 48 horas.",
        palabrasClave: ['dañado', 'roto', 'quebrado', 'maltratado', 'golpeado', 'defectuoso', 'falla', 'estropeado', 'defecto'],
        contexto: 'devolucion'
    },
    {
        id: 8,
        pregunta: "¿Cómo contacto con servicio al cliente?",
        respuesta: "Puedes contactarnos por email a soporte@shopverse.com, por teléfono al +56 9 1234 5678 (Lun-Vie 9:00-18:00), o usando nuestro chat en vivo disponible en la página de soporte. También puedes usar nuestro Asistente IA 24/7 en la sección de chat.",
        palabrasClave: ['contactar', 'contacto', 'servicio', 'cliente', 'atención', 'ayuda', 'hablar', 'comunicar', 'atencion'],
        contexto: 'soporte'
    },
    {
        id: 9,
        pregunta: "¿Ofrecen garantía en los productos?",
        respuesta: "Sí, todos nuestros productos cuentan con garantía de 1 año contra defectos de fabricación. Para productos electrónicos, la garantía es de 2 años. Si presentas algún problema, contáctanos con tu número de pedido y te ayudaremos a gestionar la garantía.",
        palabrasClave: ['garantía', 'garantia', 'defecto', 'fabricación', 'reparar', 'cambio', 'problema', 'falla'],
        contexto: 'devolucion'
    },
    {
        id: 10,
        pregunta: "¿Puedo cancelar mi pedido?",
        respuesta: "Sí, puedes cancelar tu pedido siempre que no haya sido despachado. Para cancelar, ve a 'Mis compras', selecciona el pedido y haz clic en 'Cancelar pedido'. Si ya fue despachado, no podrás cancelarlo pero podrás devolverlo una vez recibido.",
        palabrasClave: ['cancelar', 'cancelación', 'cancelacion', 'anular', 'anulación', 'anulacion', 'pedido', 'compra'],
        contexto: 'compra'
    },
    {
        id: 11,
        pregunta: "¿Cuánto cuesta el envío?",
        respuesta: "El costo de envío varía según tu ubicación y el peso del pedido. El costo se calcula automáticamente al ingresar tu dirección en el checkout. Ofrecemos envío gratis en compras superiores a $50.000.",
        palabrasClave: ['costo', 'precio', 'envío', 'envio', 'gratis', 'gratuito', 'cobro', 'tarifa', 'calcular'],
        contexto: 'envio'
    },
    {
        id: 12,
        pregunta: "¿Puedo cambiar mi contraseña?",
        respuesta: "Sí, puedes cambiar tu contraseña en cualquier momento desde tu perfil. Ve a 'Configuración' y luego a 'Seguridad'. Allí encontrarás la opción para cambiar tu contraseña. También puedes solicitar un restablecimiento desde la página de inicio de sesión.",
        palabrasClave: ['contraseña', 'password', 'clave', 'cambiar', 'restablecer', 'olvidé', 'olvide', 'cuenta'],
        contexto: 'cuenta'
    },
    {
        id: 13,
        pregunta: "¿Dónde puedo ver mis pedidos anteriores?",
        respuesta: "Puedes ver todos tus pedidos anteriores en la sección 'Mis compras' dentro de tu perfil. Allí encontrarás el historial completo de compras, el estado de cada pedido y los detalles de seguimiento.",
        palabrasClave: ['pedidos', 'compras', 'historial', 'anteriores', 'ver', 'mis compras', 'lista', 'detalle'],
        contexto: 'cuenta'
    },
    {
        id: 14,
        pregunta: "¿Cómo funcionan los cupones de descuento?",
        respuesta: "Los cupones de descuento se pueden aplicar al momento de pagar en el carrito. Ingresa el código del cupón en el campo correspondiente y el descuento se aplicará automáticamente. Cada cupón tiene sus propias condiciones y vigencia.",
        palabrasClave: ['cupón', 'cupon', 'descuento', 'codigo', 'código', 'aplicar', 'promoción', 'promocion', 'oferta'],
        contexto: 'pago'
    },
    {
        id: 15,
        pregunta: "¿Qué hago si olvidé mi contraseña?",
        respuesta: "Si olvidaste tu contraseña, ve a la página de inicio de sesión y haz clic en '¿Olvidaste tu contraseña?'. Ingresa tu correo electrónico y recibirás un enlace para restablecer tu contraseña de forma segura.",
        palabrasClave: ['olvidé', 'olvide', 'contraseña', 'clave', 'recuperar', 'restablecer', 'email', 'correo'],
        contexto: 'cuenta'
    }
];

// ===== FUNCIÓN DE BÚSQUEDA INTELIGENTE MEJORADA =====
function buscarPreguntaInteligente(consulta) {
    const consultaLower = consulta.toLowerCase().trim();
    const palabras = consultaLower.split(/\s+/);
    let mejoresResultados = [];
    
    const palabrasFiltradas = palabras.filter(p => p.length > 2);
    
    const esSobreDemora = /\b(demora|tard[eao]|retras[ao]|aún no|aun no|todavía no|todavia no|no ha llegado|no me ha llegado|pasaron \d+|han pasado \d+|d[ií]as)\b/i.test(consultaLower);
    const esSobreDano = /\b(dañado|roto|quebrado|maltratado|golpeado|defectuoso|falla|estropeado|defecto)\b/i.test(consultaLower);
    const esSobrePago = /\b(pago|pagar|tarjeta|cr[eé]dito|debito|webpay|transferencia|cobr[ao]|factura|boleta|m[eé]todo)\b/i.test(consultaLower);
    const esSobreDevolucion = /\b(devolver|devoluci[oó]n|cambiar|cambio|reembolso|garant[ií]a|regresar|retorn[ao]|devolver)\b/i.test(consultaLower);
    const esSobreEnvio = /\b(env[ií]o|envia|envi[ao]|lleg[oó]|llega|paquete|despacho|seguimiento|rastre[ao]|tracking|direcci[oó]n|domicilio|mensajer[ií]a|no llega|no lleg[oó])\b/i.test(consultaLower);
    const esSobreCuenta = /\b(cuenta|perfil|usuario|contraseña|clave|password|email|correo|registro|sesi[oó]n)\b/i.test(consultaLower);
    
    preguntasEstablecidas.forEach(item => {
        let puntaje = 0;
        let coincidenciasExactas = 0;
        
        item.palabrasClave.forEach(palabraClave => {
            if (consultaLower.includes(palabraClave)) {
                puntaje += 3;
                coincidenciasExactas++;
            }
        });
        
        palabrasFiltradas.forEach(palabra => {
            if (item.pregunta.toLowerCase().includes(palabra)) {
                puntaje += 1;
            }
            if (item.palabrasClave.some(pc => {
                return pc.includes(palabra) || palabra.includes(pc) ||
                       (palabra.length > 4 && pc.length > 4 && (
                           pc.substring(0, pc.length-1) === palabra.substring(0, palabra.length-1) ||
                           palabra.substring(0, palabra.length-1) === pc.substring(0, pc.length-1)
                       ));
            })) {
                puntaje += 2;
            }
        });
        
        if (esSobreDemora && item.contexto === 'envio') puntaje += 6;
        if (esSobreDano && item.contexto === 'devolucion') puntaje += 5;
        if (esSobrePago && item.contexto === 'pago') puntaje += 5;
        if (esSobreDevolucion && item.contexto === 'devolucion') puntaje += 5;
        if (esSobreEnvio && item.contexto === 'envio') puntaje += 4;
        if (esSobreCuenta && item.contexto === 'cuenta') puntaje += 5;
        
        if (esSobreDano && item.contexto !== 'devolucion') puntaje -= 6;
        if ((esSobreDemora || esSobreEnvio) && item.contexto === 'pago') puntaje -= 5;
        if (esSobreDevolucion && item.contexto === 'envio' && !esSobreEnvio) puntaje -= 4;
        if (esSobrePago && item.contexto === 'envio') puntaje -= 4;
        
        if (puntaje > 0) {
            mejoresResultados.push({
                ...item,
                puntaje: puntaje,
                coincidencias: coincidenciasExactas
            });
        }
    });
    
    mejoresResultados.sort((a, b) => b.puntaje - a.puntaje);
    
    if (mejoresResultados.length > 0 && mejoresResultados[0].puntaje >= 3) {
        return mejoresResultados[0];
    }
    
    return null;
}

// ===== MOSTRAR RESULTADO DE BÚSQUEDA CON OPCIÓN A IA =====
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
                        Coincidencia: ${Math.min(Math.round((resultado.puntaje / 10) * 100), 100)}%
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
        // No se encontró coincidencia → REDIRIGIR A IA
        Swal.fire({
            title: '🤖 Consulta al Asistente IA',
            html: `
                <div class="text-center">
                    <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-robot text-purple-600 text-3xl"></i>
                    </div>
                    <p class="text-gray-600">No encontré una respuesta exacta en nuestras preguntas frecuentes.</p>
                    <p class="text-gray-600 mt-2">Nuestra <strong>Asistente IA</strong> puede ayudarte con:</p>
                    <div class="flex flex-wrap justify-center gap-2 mt-3">
                        <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">📦 Envíos</span>
                        <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">💳 Pagos</span>
                        <span class="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">🔄 Devoluciones</span>
                        <span class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">👤 Cuenta</span>
                        <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">🛍️ Productos</span>
                    </div>
                    <p class="text-xs text-gray-500 mt-3">La IA está disponible 24/7</p>
                </div>
            `,
            icon: 'info',
            confirmButtonColor: '#7c3aed',
            confirmButtonText: '🤖 Ir al Asistente IA',
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

// ===== FUNCIÓN DE BÚSQUEDA PRINCIPAL =====
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
    
    if (resultado && resultado.puntaje >= 4) {
        mostrarResultadoBusqueda(resultado, query);
    } else {
        // Si el puntaje es bajo o no hay resultado, ir a IA
        localStorage.setItem('consulta_ia', query);
        window.location.href = 'chat.html';
    }
}

// ===== GRABACIÓN DE AUDIO =====
let recognitionSoporte = null;
let transcripcionFinalSoporte = '';
let silencioTimerSoporte = null;
let tiempoGrabacionSoporte = 0;
let intervaloGrabacionSoporte = null;

function iniciarGrabacion() {
    const estadoGrabacion = document.getElementById('estado-grabacion');
    const btnGrabar = document.getElementById('btn-grabar-audio');
    transcripcionFinalSoporte = '';
    tiempoGrabacionSoporte = 0;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        Swal.fire({
            title: '❌ No soportado',
            text: 'Tu navegador no soporta reconocimiento de voz. Usa Chrome o Edge.',
            icon: 'error',
            confirmButtonColor: '#7c3aed'
        });
        return;
    }
    
    recognitionSoporte = new SpeechRecognition();
    recognitionSoporte.lang = 'es-ES';
    recognitionSoporte.interimResults = true;
    recognitionSoporte.continuous = true;
    
    recognitionSoporte.onresult = (event) => {
        if (silencioTimerSoporte) clearTimeout(silencioTimerSoporte);
        
        let interim = '';
        let final = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const result = event.results[i];
            if (result.isFinal) {
                final += result[0].transcript;
            } else {
                interim += result[0].transcript;
            }
        }
        if (final) transcripcionFinalSoporte = final.trim();
        
        const input = document.getElementById('buscador-problema');
        if (input && (interim || final)) {
            input.value = (transcripcionFinalSoporte + ' ' + interim).trim();
            input.style.color = interim ? '#6b7280' : '#1f2937';
            filtrarFAQs();
        }
        
        silencioTimerSoporte = setTimeout(() => {
            if (recognitionSoporte) {
                recognitionSoporte.stop();
                recognitionSoporte = null;
                detenerGrabacionUI();
                procesarAudioTranscripcion();
            }
        }, 2000);
    };
    
    recognitionSoporte.onerror = (event) => {
        console.warn('Error de reconocimiento:', event.error);
        if (event.error === 'not-allowed') {
            Swal.fire({
                title: '❌ Permiso denegado',
                text: 'Debes permitir el acceso al micrófono para grabar audio.',
                icon: 'error',
                confirmButtonColor: '#7c3aed'
            });
            detenerGrabacionUI();
        }
    };
    
    recognitionSoporte.onend = () => {
        if (recognitionSoporte) {
            recognitionSoporte = null;
            detenerGrabacionUI();
            procesarAudioTranscripcion();
        }
    };
    
    recognitionSoporte.start();
    
    btnGrabar.innerHTML = '<i class="fas fa-stop"></i>';
    btnGrabar.classList.add('recording');
    estadoGrabacion.classList.remove('hidden');
    
    intervaloGrabacionSoporte = setInterval(() => {
        tiempoGrabacionSoporte++;
        const minutos = String(Math.floor(tiempoGrabacionSoporte / 60)).padStart(2, '0');
        const segundos = String(tiempoGrabacionSoporte % 60).padStart(2, '0');
        document.getElementById('tiempo-grabacion').textContent = `${minutos}:${segundos}`;
    }, 1000);
}

function detenerGrabacionUI() {
    const btnGrabar = document.getElementById('btn-grabar-audio');
    const estadoGrabacion = document.getElementById('estado-grabacion');
    
    if (btnGrabar) {
        btnGrabar.innerHTML = '<i class="fas fa-microphone"></i>';
        btnGrabar.classList.remove('recording');
    }
    if (estadoGrabacion) estadoGrabacion.classList.add('hidden');
    
    if (intervaloGrabacionSoporte) {
        clearInterval(intervaloGrabacionSoporte);
        intervaloGrabacionSoporte = null;
    }
    if (silencioTimerSoporte) {
        clearTimeout(silencioTimerSoporte);
        silencioTimerSoporte = null;
    }
    if (recognitionSoporte) {
        recognitionSoporte.stop();
        recognitionSoporte = null;
    }
}

function procesarAudioTranscripcion() {
    const input = document.getElementById('buscador-problema');
    const texto = transcripcionFinalSoporte.trim();
    
    if (!texto) {
        Swal.fire({
            title: '🎤 No se detectó voz',
            text: 'No se pudo reconocer lo que dijiste. Intenta de nuevo hablando más claro.',
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
        }
        setTimeout(() => {
            buscarOIrAIChat();
        }, 800);
    }, 800);
}

// ===== AYUDA RÁPIDA =====
function ayudaRapida(tipo) {
    const preguntas = {
        'estado-envio': preguntasEstablecidas[1],
        'devolucion': preguntasEstablecidas[3],
        'pago': preguntasEstablecidas[2],
        'cuenta': preguntasEstablecidas[12]
    };
    
    const resultado = preguntas[tipo];
    if (resultado) {
        mostrarResultadoBusqueda(resultado, resultado.pregunta);
    }
}

// ===== COPIAR EMAIL Y TELÉFONO =====
function copiarEmail() {
    const email = 'soporte@shopverse.com';
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
            mostrarToast('📧 Email copiado', 'El email ha sido copiado al portapapeles', 'success');
        }).catch(() => {
            prompt('Copia el email:', email);
        });
    } else {
        prompt('Copia el email:', email);
    }
}

function copiarTelefono() {
    const telefono = '+56 9 1234 5678';
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(telefono).then(() => {
            mostrarToast('📱 Teléfono copiado', 'El teléfono ha sido copiado al portapapeles', 'success');
        }).catch(() => {
            prompt('Copia el teléfono:', telefono);
        });
    } else {
        prompt('Copia el teléfono:', telefono);
    }
}

// ===== FUNCIONES DE FAQ =====
function toggleFAQ(elemento) {
    if (!elemento) return;
    elemento.classList.toggle('active');
    const icono = elemento.querySelector('.faq-icon');
    if (icono) {
        icono.style.transform = elemento.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
    }
}

// ===== FILTRAR FAQs =====
function filtrarFAQs() {
    const input = document.getElementById('buscador-problema');
    if (!input) return;
    const query = input.value.trim().toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (query.length < 2) {
        faqItems.forEach(item => {
            item.style.display = '';
            item.classList.remove('active');
        });
        const primerFaq = document.querySelector('.faq-item');
        if (primerFaq) primerFaq.classList.add('active');
        return;
    }
    
    let mejorPuntaje = -1;
    let mejorFaq = null;
    
    faqItems.forEach(item => {
        const pregunta = item.querySelector('.faq-pregunta span');
        const respuesta = item.querySelector('.faq-respuesta');
        if (!pregunta) return;
        
        const textoPregunta = pregunta.textContent.toLowerCase();
        const textoRespuesta = respuesta ? respuesta.textContent.toLowerCase() : '';
        const textoCompleto = textoPregunta + ' ' + textoRespuesta;
        
        let puntaje = 0;
        const palabras = query.split(/\s+/);
        
        palabras.forEach(palabra => {
            if (palabra.length < 2) return;
            if (textoPregunta.includes(palabra)) puntaje += 3;
            if (textoRespuesta.includes(palabra)) puntaje += 1;
        });
        
        if (textoCompleto.includes(query)) puntaje += 5;
        
        if (puntaje > 0) {
            item.style.display = '';
            if (puntaje > mejorPuntaje) {
                mejorPuntaje = puntaje;
                mejorFaq = item;
            }
        } else {
            item.style.display = 'none';
        }
        
        if (item !== mejorFaq) {
            item.classList.remove('active');
            const icono = item.querySelector('.faq-icon');
            if (icono) icono.style.transform = 'rotate(0deg)';
        }
    });
    
    if (mejorFaq && mejorPuntaje > 0) {
        mejorFaq.classList.add('active');
        const icono = mejorFaq.querySelector('.faq-icon');
        if (icono) icono.style.transform = 'rotate(180deg)';
        mejorFaq.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// ===== ABRIR CHAT =====
function abrirChat() {
    const input = document.getElementById('buscador-problema');
    if (input && input.value.trim()) {
        localStorage.setItem('consulta_ia', input.value.trim());
    }
    window.location.href = 'chat.html';
}

// ===== MOSTRAR TOAST =====
function mostrarToast(title, text, icon = 'success') {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔧 Sistema de soporte mejorado inicializado');
    console.log(`📚 ${preguntasEstablecidas.length} preguntas frecuentes cargadas`);
    
    const buscadorProblema = document.getElementById('buscador-problema');
    if (buscadorProblema) {
        buscadorProblema.addEventListener('input', filtrarFAQs);
        buscadorProblema.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') buscarOIrAIChat();
        });
    }
    
    const btnGrabar = document.getElementById('btn-grabar-audio');
    if (btnGrabar) {
        btnGrabar.addEventListener('click', function() {
            if (!recognitionSoporte) {
                iniciarGrabacion();
            } else {
                recognitionSoporte.stop();
                recognitionSoporte = null;
                detenerGrabacionUI();
                procesarAudioTranscripcion();
            }
        });
    }
    
    if (typeof tippy !== 'undefined') {
        const elementos = [
            { id: '#btn-categorias', contenido: 'Categorías' },
            { id: '#btn-carrito', contenido: 'Carrito' },
            { id: '#btn-perfil', contenido: 'Mi Perfil' },
            { id: '#btn-info', contenido: 'Centro de Soporte' }
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
});

// ===== EXPORTAR =====
window.toggleFAQ = toggleFAQ;
window.copiarEmail = copiarEmail;
window.copiarTelefono = copiarTelefono;
window.abrirChat = abrirChat;
window.ayudaRapida = ayudaRapida;
window.buscarOIrAIChat = buscarOIrAIChat;
window.filtrarFAQs = filtrarFAQs;
window.mostrarToast = mostrarToast;