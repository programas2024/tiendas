// ==================== SISTEMA DE SOPORTE MEJORADO ====================

// ===== BASE DE CONOCIMIENTO CON PALABRAS CLAVE =====
const preguntasEstablecidas = [
    {
        id: 1,
        pregunta: "¿Cómo puedo realizar un pedido?",
        respuesta: "Para realizar un pedido, simplemente navega por nuestro catálogo de productos, selecciona los artículos que deseas, agrégalos al carrito de compras y sigue los pasos de pago. Puedes pagar con tarjeta de crédito, débito o transferencia bancaria.",
        palabrasClave: ['pedido', 'comprar', 'carrito', 'producto', 'seleccionar', 'pagar', 'orden'],
        contexto: 'compra'
    },
    {
        id: 2,
        pregunta: "¿Cuánto tarda el envío y cómo lo rastreo?",
        respuesta: "Los envíos tardan de 3 a 5 días hábiles. Al ser despachado, recibirás un correo con el número de seguimiento. También puedes ver este estado en tiempo real ingresando a 'Mis compras' desde tu perfil.",
        palabrasClave: ['envío', 'envio', 'tarda', 'demora', 'rastrear', 'seguimiento', 'tracking', 'correo', 'despacho'],
        contexto: 'envio'
    },
    {
        id: 3,
        pregunta: "¿Qué métodos de pago aceptan?",
        respuesta: "Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), tarjetas de débito, transferencias bancarias y pagos a través de WebPay. Todos los pagos son 100% seguros.",
        palabrasClave: ['pago', 'pagar', 'tarjeta', 'crédito', 'debito', 'webpay', 'transferencia', 'método', 'forma'],
        contexto: 'pago'
    },
    {
        id: 4,
        pregunta: "¿Cómo puedo devolver un producto?",
        respuesta: "Si no estás satisfecho con tu compra, puedes devolver el producto en un plazo de 30 días desde la fecha de compra. El producto debe estar en su empaque original y en perfectas condiciones. Contáctanos para iniciar el proceso de devolución.",
        palabrasClave: ['devolver', 'devolución', 'devolucion', 'cambiar', 'cambio', 'reembolso', 'garantía', 'insatisfecho'],
        contexto: 'devolucion'
    },
    {
        id: 5,
        pregunta: "¿No me llegó mi paquete qué hago?",
        respuesta: "Si tu paquete no ha llegado en el tiempo estimado (3-5 días hábiles), por favor verifica el número de seguimiento en 'Mis compras'. Si pasaron más de 7 días, contáctanos para iniciar una investigación con la empresa de mensajería.",
        palabrasClave: ['paquete', 'llego', 'llegó', 'no llega', 'no llegó', 'extraviado', 'perdido', 'investigación'],
        contexto: 'envio'
    },
    {
        id: 6,
        pregunta: "¿Puedo cambiar mi dirección de envío?",
        respuesta: "Sí, puedes cambiar tu dirección de envío siempre que el pedido no haya sido despachado. Ve a 'Mis compras', selecciona el pedido y busca la opción 'Modificar dirección'. Si ya fue despachado, contacta al servicio de mensajería con tu número de seguimiento.",
        palabrasClave: ['dirección', 'cambiar', 'modificar', 'envío', 'pedido', 'domicilio', 'ubicación'],
        contexto: 'envio'
    },
    {
        id: 7,
        pregunta: "Mi producto llegó dañado ¿qué hago?",
        respuesta: "Lamento mucho que tu producto haya llegado dañado. Por favor, toma fotos del producto, del empaque y de la caja. Luego contáctanos a soporte@shopverse.com con las fotos y tu número de pedido. Te ofreceremos un reemplazo o reembolso completo.",
        palabrasClave: ['dañado', 'roto', 'quebrado', 'maltratado', 'golpeado', 'defectuoso', 'problema', 'llegó dañado'],
        contexto: 'devolucion'
    },
    {
        id: 8,
        pregunta: "¿Cómo contacto con servicio al cliente?",
        respuesta: "Puedes contactarnos por email a soporte@shopverse.com, por teléfono al +56 9 1234 5678 (Lun-Vie 9:00-18:00), o usando nuestro chat en vivo disponible en la página de soporte.",
        palabrasClave: ['contactar', 'contacto', 'servicio', 'cliente', 'atención', 'ayuda', 'hablar', 'comunicar'],
        contexto: 'soporte'
    }
];

// ===== FUNCIÓN DE BÚSQUEDA INTELIGENTE MEJORADA =====
function buscarPreguntaInteligente(consulta) {
    const consultaLower = consulta.toLowerCase().trim();
    const palabras = consultaLower.split(' ');
    let mejoresResultados = [];
    
    // Filtrar palabras vacías y cortas
    const palabrasFiltradas = palabras.filter(p => p.length > 2);
    
    preguntasEstablecidas.forEach(item => {
        let puntaje = 0;
        let coincidenciasExactas = 0;
        
        // 1. Verificar coincidencia exacta de palabras clave
        item.palabrasClave.forEach(palabraClave => {
            if (consultaLower.includes(palabraClave)) {
                puntaje += 3;
                coincidenciasExactas++;
            }
        });
        
        // 2. Verificar cada palabra de la consulta
        palabrasFiltradas.forEach(palabra => {
            // Buscar en la pregunta
            if (item.pregunta.toLowerCase().includes(palabra)) {
                puntaje += 1;
            }
            // Buscar en palabras clave
            if (item.palabrasClave.some(pc => pc.includes(palabra) || palabra.includes(pc))) {
                puntaje += 2;
            }
        });
        
        // 3. Penalizar si la consulta es sobre un contexto diferente
        // Por ejemplo: si pregunta por "producto dañado" y la pregunta es sobre "pagos"
        if (consultaLower.includes('dañado') || consultaLower.includes('roto') || consultaLower.includes('problema')) {
            if (item.contexto !== 'devolucion') {
                puntaje -= 5; // Penalización fuerte
            }
        }
        
        if (consultaLower.includes('pago') || consultaLower.includes('tarjeta') || consultaLower.includes('webpay')) {
            if (item.contexto !== 'pago') {
                puntaje -= 3;
            }
        }
        
        if (consultaLower.includes('envío') || consultaLower.includes('envio') || consultaLower.includes('llegó')) {
            if (item.contexto === 'pago') {
                puntaje -= 4;
            }
        }
        
        if (puntaje > 0) {
            mejoresResultados.push({
                ...item,
                puntaje: puntaje,
                coincidencias: coincidenciasExactas
            });
        }
    });
    
    // Ordenar por puntaje (mayor a menor)
    mejoresResultados.sort((a, b) => b.puntaje - a.puntaje);
    
    // Verificar que el mejor resultado tenga un puntaje mínimo
    if (mejoresResultados.length > 0 && mejoresResultados[0].puntaje >= 3) {
        return mejoresResultados[0];
    }
    
    return null; // No hay coincidencia suficiente
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
        // No se encontró coincidencia, ofrecer IA
        Swal.fire({
            title: '❓ No encontré una respuesta exacta',
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

// ===== FUNCIÓN DE BÚSQUEDA =====
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

// ===== GRABACIÓN DE AUDIO CON AUTO-ENVÍO =====
let mediaRecorder = null;
let audioChunks = [];
let tiempoGrabacion = 0;
let intervaloGrabacion = null;
let tiempoSilencio = 0;
let detectorSilencio = null;

function iniciarGrabacion() {
    const estadoGrabacion = document.getElementById('estado-grabacion');
    const btnGrabar = document.getElementById('btn-grabar-audio');
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            tiempoGrabacion = 0;
            tiempoSilencio = 0;
            
            // Crear analizador de audio para detectar silencio
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const source = audioContext.createMediaStreamSource(stream);
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 512;
            analyser.smoothingTimeConstant = 0.3;
            source.connect(analyser);
            
            const dataArray = new Uint8Array(analyser.fftSize);
            
            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };
            
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                procesarAudio(audioBlob);
                detenerGrabacionUI();
                if (audioContext.state !== 'closed') {
                    audioContext.close();
                }
            };
            
            mediaRecorder.start();
            
            btnGrabar.innerHTML = '<i class="fas fa-stop"></i>';
            btnGrabar.classList.add('recording');
            estadoGrabacion.classList.remove('hidden');
            
            // Contador de tiempo
            intervaloGrabacion = setInterval(() => {
                tiempoGrabacion++;
                const minutos = String(Math.floor(tiempoGrabacion / 60)).padStart(2, '0');
                const segundos = String(tiempoGrabacion % 60).padStart(2, '0');
                document.getElementById('tiempo-grabacion').textContent = `${minutos}:${segundos}`;
            }, 1000);
            
            // Detector de silencio
            detectorSilencio = setInterval(() => {
                analyser.getByteTimeDomainData(dataArray);
                let sum = 0;
                for (let i = 0; i < dataArray.length; i++) {
                    const value = (dataArray[i] - 128) / 128;
                    sum += value * value;
                }
                const rms = Math.sqrt(sum / dataArray.length);
                const db = 20 * Math.log10(rms);
                
                // Si el volumen es muy bajo (silencio)
                if (db < -40) {
                    tiempoSilencio++;
                    // Después de 1 segundo de silencio (10 iteraciones de 100ms)
                    if (tiempoSilencio >= 10) {
                        // Detener grabación automáticamente
                        if (mediaRecorder && mediaRecorder.state === 'recording') {
                            mediaRecorder.stop();
                            mediaRecorder.stream.getTracks().forEach(track => track.stop());
                            detenerGrabacionUI();
                            if (audioContext.state !== 'closed') {
                                audioContext.close();
                            }
                            clearInterval(detectorSilencio);
                        }
                    }
                } else {
                    // Reiniciar contador de silencio si hay sonido
                    tiempoSilencio = 0;
                }
            }, 100);
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
    if (detectorSilencio) {
        clearInterval(detectorSilencio);
        detectorSilencio = null;
    }
}

function procesarAudio(audioBlob) {
    // Simulación de procesamiento de audio a texto
    // En producción usarías: Google Speech-to-Text, Whisper API, etc.
    const ejemplos = [
        'Mi producto llegó dañado',
        'No me llegó mi paquete',
        'Cómo puedo devolver un producto',
        'Problema con el pago',
        'Dónde está mi envío',
        'Producto llegó roto'
    ];
    const textoAleatorio = ejemplos[Math.floor(Math.random() * ejemplos.length)];
    
    Swal.fire({
        title: '🎤 Audio procesado',
        text: `"${textoAleatorio}"`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
    
    setTimeout(() => {
        const input = document.getElementById('buscador-problema');
        input.value = textoAleatorio;
        // Auto-enviar después de 1 segundo
        setTimeout(() => {
            buscarOIrAIChat();
        }, 1000);
    }, 1000);
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
                if (detectorSilencio) {
                    clearInterval(detectorSilencio);
                    detectorSilencio = null;
                }
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