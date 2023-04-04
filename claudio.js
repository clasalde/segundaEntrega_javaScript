class Alimento {
    constructor(id, nombre, detalle, marca, precio) {
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = 1;
    }
}

class ControladorDeAlimento {
    constructor() {
        this.listaAlimentos = []
    }

    consultaAlimentos() {
        this.listaAlimentos = [
            new Alimento(1, "Euka Doggy Puppy", "Alimento para perros cachorros", "Eukanuba", 12500),
            new Alimento(2, "Euka Doggy Young", "Alimento para perros jovenes", "Eukanuba", 13700),
            new Alimento(3, "Euka Doggy VitalFort", "Alimento para perros adultos", "Eukanuba", 25500),
            new Alimento(4, "ProJoven", "Alimento para perros cachorros", "ProPlan", 8500),
            new Alimento(5, "Adult Max500", "Alimento para perros jovenes", "ProPlan", 9300),
            new Alimento(6, "Adult Max1000", "Alimento para perros adultos", "ProPlan", 11500),
            new Alimento(7, "Euka Cat Puppy", "Alimento para gatos cachorros", "Eukanuba", 10500),
            new Alimento(8, "Euka Cat Young", "Alimento para gatos jovenes", "Eukanuba", 16500),
            new Alimento(9, "Euka Cat VitalFort", "Alimento para gatos adultos", "Eukanuba", 21500),
            new Alimento(10, "NutriCat F250", "Alimento para gatos cachorros", "ProPlan", 5500),
            new Alimento(11, "NutriCat F550", "Alimento para gatos jovenes", "ProPlan", 6800),
            new Alimento(12, "NutriCat F750", "Alimento para gatos adultos", "ProPlan", 9700)
        ]
    }

    mostrarAlimentos() {
        let acumulador = ""
        this.listaAlimentos.forEach(producto => {
            acumulador += "\nID: " + producto.id + "\nNombre: " + producto.nombre + "\nDetalle: " + producto.detalle + "\nMarca: " + producto.marca + "\nPrecio: $" + producto.precio
        })
        return acumulador
    }

    buscarAlimentos(seleccion) {
        return this.listaAlimentos.find(producto => producto.id == seleccion)
    }

    agregarAlimentos(producto) {
        this.listaAlimentos.push(producto)
    }
}

class ControladorCarrito {
    constructor() {
        this.carrito = []
    }

    agregar(producto) {
        this.carrito.push(producto)
    }

    calcularTotal() {
        return this.carrito.reduce((acumulador, producto) => acumulador + producto.precio * producto.cantidad,0)
    }

    montoIva(){
        return this.calcularTotal() * 0.21
    }

    calcularTotalConIva(){
        return this.calcularTotal() + this.montoIva()
    }
}

const controladorAlimentos = new ControladorDeAlimento()
const controladorCarrito = new ControladorCarrito()
controladorAlimentos.consultaAlimentos()

let respuesta = ""

do {
    alert(controladorAlimentos.mostrarAlimentos())

    let seleccion = prompt("Por favor ingrese el 'ID' correspondiente al producto que desea comprar")
    const producto = controladorAlimentos.buscarAlimentos(seleccion)

    if (producto) {
        controladorCarrito.agregar(producto)
    } else {
        alert("El producto seleccionado no existe")
    }

    respuesta = prompt("Escriba 'PAGAR' para finalizar su compra o presione cualquier tecla para continuar agregando alimentos al carrito").toUpperCase()
} while (respuesta != "PAGAR")

alert("El total de la compra sin impuestos es de $: " + controladorCarrito.calcularTotal() + "\nImpuesto IVA: $ " + controladorCarrito.montoIva() + "\n\n================================" + "\nEl importe final de la compra es de $: " + controladorCarrito.calcularTotalConIva())