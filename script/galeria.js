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
var vidas;
var miniaturas;
var marcador;

function init() {
	console.log("init");
	imagenActual = 0;
	miniaturaActual = 0;
	marcador = 0;
	contenedor = document.getElementById("fotoGrande");
	miniaturas = document.getElementsByClassName("miniatura");
	miniaturas[0].style.opacity = 1;
}

function fotoIzquierda() {
	if (imagenActual > 0) {
		miniaturas[imagenActual].style.opacity = 0.5;
		--imagenActual;
		contenedor.style.backgroundImage = "url("+imagenes[imagenActual]+")";
		miniaturas[imagenActual].style.opacity = 1;
	}
}

function fotoDerecha() {
	if (imagenActual < 19) {
		miniaturas[imagenActual].style.opacity = 0.5;
		++imagenActual;
		contenedor.style.backgroundImage = "url("+imagenes[imagenActual]+")";
		miniaturas[imagenActual].style.opacity = 1;
	}
}

function tiraIzquierda() {
	if (marcador > 0) {
		console.log("tiraIzquierda---")
		--marcador;
		miniaturas[marcador].style.display = "inline";
	}
}

function tiraDerecha() {
	console.log()
	if (marcador < 15) {
		console.log("tiraDerecha--");
		miniaturas[marcador].style.display = "none";
		++marcador;
	}
}

function fotoMiniatura(i) {
	miniaturas[imagenActual].style.opacity = 0.5;
	imagenActual = i;
	miniaturas[i].style.opacity = 1;
	contenedor.style.backgroundImage = "url("+imagenes[i]+")";
}


window.onload = init;
