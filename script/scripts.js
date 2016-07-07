var imagenes = [
"img/pizza1.jpg",
"img/pizza2.jpg",
"img/pizza3.jpg",
"img/pizza4.jpg",
"img/pizza5.jpg",
"img/pizza6.jpg",
"img/pizza7.jpg",
"img/pizza8.jpg",
"img/pizza9.jpg",
"img/pizza10.jpg",
"img/pizza11.jpg",
"img/pizza12.jpg",
"img/pizza13.jpg",
"img/pizza14.jpg",
"img/pizza15.jpg",
"img/pizza16.jpg",
"img/pizza17.jpg",
"img/pizza18.jpg",
"img/pizza19.jpg",
"img/pizza20.jpg"
];

var imagenActual;
var miniaturaActual;
var contenedor;

function init() {
	console.log("init");
	imagenActual = 0;
	miniaturaActual = 0;
	contenedor = document.getElementById("fotoGrande");
}

function fotoIzquierda() {
	if (imagenActual > 0) {
		--imagenActual;
		contenedor.style.backgroundImage = "url("+imagenes[imagenActual]+")";
	}
}

function fotoDerecha() {
	if (imagenActual < 19) {
		++imagenActual;
		contenedor.style.backgroundImage = "url("+imagenes[imagenActual]+")";
	}
}

function tiraIzquierda() {
	if (imagenActual > 0) {
		--imagenActual;
		contenedor.style.backgroundImage = "url("+imagenes[imagenActual]+")";
	}
}

function tiraDerecha() {
	if (imagenActual < 7) {
		++imagenActual;
		contenedor.style.backgroundImage = "url("+imagenes[imagenActual]+")";
	}
}

function fotoMiniatura(i) {

}

window.onload = init;