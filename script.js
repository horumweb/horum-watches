let carrito = [];

function agregarCarrito(nombre, precio) {
    carrito.push({
        nombre: nombre,
        precio: precio
    });

    actualizarCarrito();
    alert(nombre + " fue agregado al carrito.");
}

function actualizarCarrito() {
    document.getElementById("contador").textContent = carrito.length;

    const lista = document.getElementById("productosCarrito");
    const totalElemento = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;

        const item = document.createElement("div");

        item.className = "item-carrito";

        item.innerHTML = `
            <span>${producto.nombre}</span>
            <span>
                $${producto.precio} MXN
                <button onclick="eliminarProducto(${index})">X</button>
            </span>
        `;

        lista.appendChild(item);
    });

    totalElemento.textContent = total;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function abrirCarrito() {
    document.getElementById("carrito").style.display = "flex";
}

function cerrarCarrito() {
    document.getElementById("carrito").style.display = "none";
}

function realizarPedido() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    alert("¡Tu pedido está listo! Después conectaremos WhatsApp y el sistema de pago.");
}