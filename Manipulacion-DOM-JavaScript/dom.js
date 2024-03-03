import { Pedido } from "./Pedido.js";

const $contenedor = document.getElementById('container');
const $pedidos = document.getElementById('pedidos');
const nombre = 'Pepe';
// La peor forma
$contenedor.innerHTML = `<h1>${nombre}</h1>`;

// Forma buena
const h2 = document.createElement('h2');
const h3 = document.createElement('h3');
const img = document.createElement('img');
img.src = 'mi-imagen.jpg';
img.alt = 'Texto alternativo';
// Para meter texto -> textContent
// Para meter HTML -> innerHTML
h2.textContent = '<p>Hola Mundo</p>';
h2.id = 'h2';
h3.innerHTML = '<p>HOLA MUNDO</p>';
// Adjuntar h2 al DOM
$contenedor.appendChild(h2);
$contenedor.appendChild(h3);

// Forma pro
const fragment = document.createDocumentFragment();
for (let i = 1; i <= 10000; i++) {
    fragment.appendChild(
        new Pedido(
            `Pedido ${i}`,
            30 + i,
            'Calle Pepe'
        ).getPedido()
    );
}

$pedidos.appendChild(fragment);