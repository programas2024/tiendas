document.addEventListener("DOMContentLoaded", () => {
    const inputBuscar = document.getElementById("buscar-compra");
    const filtroFecha = document.getElementById("filtro-fecha");
    const filtroCategoria = document.getElementById("filtro-categoria-compra");
    const contenedorCompras = document.getElementById("lista-compras-contenedor");

    // Función principal para aplicar ambos filtros y la búsqueda en conjunto
    function filtrarCompras() {
        const query = inputBuscar.value.toLowerCase();
        const categoriaSeleccionada = filtroCategoria.value;
        const fechaSeleccionada = filtroFecha.value;
        const items = contenedorCompras.children;

        const ahora = new Date();

        for (let item of items) {
            // 1. Validar por Búsqueda (Lupa)
            const titulo = item.querySelector("h3").textContent.toLowerCase();
            const coincideBusqueda = titulo.includes(query);

            // 2. Validar por Categoría
            const catItem = item.getAttribute("data-categoria");
            const coincideCategoria = (categoriaSeleccionada === "todas" || catItem === categoriaSeleccionada);

            // 3. Validar por Fecha (Simulación basada en texto o atributo)
            // Para producción real usarías un atributo data-fecha="2026-07-10"
            const fechaTexto = item.querySelector(".text-gray-400").textContent;
            let coincideFecha = true;

            // Extraemos el año o calculamos según tu backend, aquí una simulación lógica:
            if (fechaSeleccionada === "30-dias" && !fechaTexto.includes("hoy") && !fechaTexto.includes("Julio")) {
                coincideFecha = false;
            } else if (fechaSeleccionada === "3-meses" && (!fechaTexto.includes("2026-07") && !fechaTexto.includes("2026-05"))) {
                coincideFecha = false;
            } else if (fechaSeleccionada === "ano" && !fechaTexto.includes("2026")) {
                coincideFecha = false;
            }

            // Mostrar u ocultar el producto si cumple absolutamente TODAS las condiciones
            if (coincideBusqueda && coincideCategoria && coincideFecha) {
                item.classList.remove("hidden");
                item.classList.add("flex");
            } else {
                item.classList.remove("flex");
                item.classList.add("hidden");
            }
        }
    }

    // Escuchadores de eventos (Listeners)
    inputBuscar.addEventListener("input", filtrarCompras);
    filtroCategoria.addEventListener("change", filtrarCompras);
    filtroFecha.addEventListener("change", filtrarCompras);
});