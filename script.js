//Creamos el arreglo para almacenar los productos disponibles en nuestra tienda para mascotas

const productos = [
    { nombre: "Alimento para perros", precio: 10 },
    { nombre: "Alimento para gatos", precio: 8 },
    { nombre: "Snacks para perros", precio: 5 },
    { nombre: "Snacks para gatos", precio: 4 }
];

// Creamos una funcion para mostrar los productos en DOM

function mostrarProductos() {
    const listaProductos = document.getElementById("lista-productos");

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        const li = document.createElement("li");
        li.innerText = producto.nombre + " - $" + producto.precio;

        const boton = document.createElement("button");
        boton.innerText = "Agregar al carrito";
        boton.onclick = () => agregarAlCarrito(producto);

        li.appendChild(boton);
        listaProductos.appendChild(li);
    }
}

// Creamos la funcion para agregar al carrito

let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    alert("Producto agregado al carrito.");
}

// Funcion para el detalle de la compra y total

function mostrarDetalleCompra() {
    let detalleCompra = "";

    for (let i = 0; i < carrito.length; i++) {
        const producto = carrito[i];

        detalleCompra += producto.nombre + " - $" + producto.precio + "\n";
    }

    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

    alert("Detalle de la compra:\n\n" + detalleCompra + "\nTotal: $" + total);
}
