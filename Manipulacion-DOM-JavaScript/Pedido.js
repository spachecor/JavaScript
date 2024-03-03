export class Pedido {
    constructor(nombrePedido, precio, direccion) {
        // Declaraciones o creaciones
        this.article = document.createElement('article');
        const nombrePedidoH1 = document.createElement('h1');
        const detallesPedidoDiv = document.createElement('div');
        const contenedorPrecioP = document.createElement('p');
        const precioProductoTextoSpan = document.createElement('span');
        const precioProductoSpan = document.createElement('span');
        const direccionP = document.createElement('p');
        
        // Asignación de propiedades
        this.article.classList.add('pedido');
        nombrePedidoH1.textContent = nombrePedido;
        detallesPedidoDiv.classList.add('detalles__pedido');
        precioProductoTextoSpan.textContent = 'Precio: ';
        precioProductoSpan.id = 'precio-producto';
        precioProductoSpan.textContent = precio;
        direccionP.classList.add('direccion');
        direccionP.textContent = direccion;

        // Adjuntar a la etiqueta que se devuelve
        this.article.appendChild(nombrePedidoH1);
        contenedorPrecioP.appendChild(precioProductoTextoSpan);
        contenedorPrecioP.appendChild(precioProductoSpan);
        detallesPedidoDiv.appendChild(contenedorPrecioP);
        detallesPedidoDiv.appendChild(direccionP);
        this.article.appendChild(detallesPedidoDiv);
    }

    getPedido() {
        return this.article;
    }
}