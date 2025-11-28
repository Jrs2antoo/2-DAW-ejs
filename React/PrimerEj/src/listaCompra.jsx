export function agregarProducto(
  entrada,
  setEntrada,
  productos,
  setProductos
) {
  const contenido = entrada.trim();
  if (!contenido) return;

  const nuevo = {
    id: Date.now(),
    texto: contenido,
  };

  setProductos([...productos, nuevo]);
  setEntrada("");
}

export function editarProducto(id, setProductos) {
  const nuevoTexto = prompt("Editar producto:");
  if (!nuevoTexto) return;

  setProductos((productosAnteriores) =>
  productosAnteriores.map((p) => {
    if (p.id === id) {
      return { ...p, texto: nuevoTexto };
    } else {
      return p;
    }
  })
);

}

export function eliminarProducto(id, setProductos) {
  setProductos((productosAnteriores) =>
    productosAnteriores.filter((p) => p.id !== id)
  );
}

export function borrarTodos(setProductos) {
  setProductos([]);
}
