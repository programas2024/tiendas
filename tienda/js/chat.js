// ==================== CHAT DE INTELIGENCIA ARTIFICIAL ====================

function enviarMensajeUsuario(event) {
    event.preventDefault();
    
    const input = document.getElementById('input-mensaje');
    const textoMensaje = input.value.trim();
    
    if (textoMensaje === "") return;
    
    // 1. Renderizar mensaje del usuario
    agregarBurbuja(textoMensaje, true);
    input.value = ""; // Limpiar campo
    
    // 2. Mostrar indicador de que la IA está "escribiendo"
    const idIndicador = mostrarIndicadorEscribiendo();
    
    // 3. Evaluar respuesta lógica simulada de la IA
    setTimeout(() => {
        removerIndicadorEscribiendo(idIndicador);
        const respuestaIA = procesarIntencionIA(textoMensaje);
        agregarBurbuja(respuestaIA, false);
    }, 1200); // 1.2 segundos de demora para realismo
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
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight; // Auto-scroll abajo
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

// ===== MOTOR LOGÍSICO DE RESPUESTAS (PROCESADOR NLP SIMULADO) =====
function procesarIntencionIA(entrada) {
    const frase = entrada.toLowerCase();
    
    if (frase.includes('hola') || frase.includes('buenos dias') || frase.includes('buenas tardes')) {
        return "¡Hola de nuevo! Cuéntame detalladamente qué inconveniente o duda tienes con tu compra en la tienda.";
    }
    if (frase.includes('pedido') || frase.includes('no llega') || frase.includes('seguimiento') || frase.includes('rastrear') || frase.includes('envio')) {
        return "Para revisar el estado exacto, por favor verifica el código enviado a tu correo o ve a la sección <b>'Mis Compras'</b> de tu perfil de usuario. Los despachos demoran de 3 a 5 días hábiles. Si tu pedido excede este tiempo, indícame tu número de orden.";
    }
    if (frase.includes('devolucion') || frase.includes('reembolso') || frase.includes('cambiar') || frase.includes('devolver')) {
        return "Nuestra política te permite realizar devoluciones hasta por 30 días continuos a partir de la recepción del paquete. El artículo debe estar sin uso y sellado en su caja original. ¿Quieres que te comunique con un ejecutivo humano para emitir tu etiqueta de retorno?";
    }
    if (frase.includes('pago') || frase.includes('tarjeta') || frase.includes('webpay') || frase.includes('cobro') || frase.includes('transferencia')) {
        return "Aceptamos tarjetas de débito, crédito y transferencias vía WebPay. Si visualizas un cobro duplicado o tu transacción falló pero el saldo fue descontado, por favor envíanos el comprobante a soporte@shopverse.com para validarlo en administración inmediatamente.";
    }
    if (frase.includes('gracias') || frase.includes('entendido') || frase.includes('ok')) {
        return "¡De nada! Ha sido un placer asistirte. Quedo atento por si necesitas resolver algo más en ShopVerse.";
    }

    // Respuesta por defecto si el bot no entiende la situación compleja
    return "Entiendo lo que comentas y lamento las dificultades. He escalado tu reporte con prioridad. En breve un agente de carne y hueso se unirá a este mismo chat o te contactará por correo para darte una solución definitiva.";
}

// Cargar consulta automática desde el centro de soporte
document.addEventListener('DOMContentLoaded', () => {
    const consultaGuardada = localStorage.getItem('consulta_ia');
    if (consultaGuardada) {
        // Limpiamos el almacenamiento para que no se repita al recargar
        localStorage.removeItem('consulta_ia'); 
        
        // Simulamos que el usuario envía el texto
        const input = document.getElementById('input-mensaje');
        if (input) {
            input.value = consultaGuardada;
            // Creamos un evento fantasma para activar la función
            const mockEvent = { preventDefault: () => {} };
            enviarMensajeUsuario(mockEvent);
        }
    }
});