window.onload = () => {
    const listaProductos = document.getElementById("lista-productos");
    const entradaProducto = document.getElementById("entrada-producto");
    const botonAgregar = document.getElementById("boton-agregar");
    const botonBorrarTodos = document.getElementById("boton-limpiar");

    botonAgregar.addEventListener("click", () => {
        let contenido = entradaProducto.value.trim();
        if (contenido) 
        {
            const li = document.createElement("li");
            const texto = document.createElement("span");
            texto.textContent = contenido;

            const contenedorIconos = document.createElement("span");

            const botonEditar = document.createElement("i");
            botonEditar.textContent = "🖋️";

            const botonEliminar = document.createElement("i");
            botonEliminar.textContent = "🗑️";

            contenedorIconos.appendChild(botonEditar);
            contenedorIconos.appendChild(botonEliminar);

            li.appendChild(texto);
            li.appendChild(contenedorIconos);
            listaProductos.appendChild(li);

            entradaProducto.value = "";

            botonEditar.addEventListener("click", () => editarContenido(li, texto));
            botonEliminar.addEventListener("click", () => eliminarElemento(li));
        }
    });

    entradaProducto.addEventListener("keydown", (e) => {
        if (e.key === "Enter") 
        {
            botonAgregar.click();
        }
    });

    botonBorrarTodos.addEventListener("click", () => {
        listaProductos.innerHTML = "";
    });

    function editarContenido(elementoLista, textoSpan) {
        const nuevoTexto = prompt("Editar producto:");
        if (nuevoTexto) 
        {
            textoSpan.textContent = nuevoTexto;
        }
    }

    function eliminarElemento(elementoLista) 
    {
        listaProductos.removeChild(elementoLista);
    }
};
