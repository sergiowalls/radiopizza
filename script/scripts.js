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


var imagenesApple = [
"img/img-androitor/a1.png",
"img/img-androitor/a2.png",
"img/img-androitor/a3.png"
]

var imagenActualApple;
var imagenRobot = "img/img-androitor/robot.png"
var imagenActual;
var miniaturaActual;
var contenedor;
var positionTOPa;
var positionLEFTa;
var apple;
var robot;
var velocitat;
var vidas;
var puntuacio;
var miniaturas;
var marcador;

function init() {
	console.log("init");
	apple = document.getElementById("imgApple");
	$("#imgApple").click(canviarPosicioA);
	contenedor = document.getElementById("fotoGrande")
	robot = document.getElementById("imgRobot")
	imagenActual = 0;
	miniaturaActual = 0;;
	imagenActualApple = imagenesApple[Math.floor(Math.random()*3)];
	positionTOPa = Math.floor(Math.random()*90);
	positionLEFTa = Math.floor(Math.random()*90);
	positionTOP = Math.floor(Math.random()*70);
	positionLEFT = Math.floor(Math.random()*70);
	apple.style.background = "url("+imagenActualApple+")";
	apple.style.top = positionTOPa + "%";
	apple.style.left = positionLEFTa + "%";
	robot.style.left = positionLEFT + "%";
	robot.style.top = positionTOP + "%";
	velocitat = 2000;
	vidas = 3;
	puntuacio = 0;
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

}

function canviarPosicioA(){
	imagenActualApple = imagenesApple[Math.floor(Math.random()*3)];
	apple.style.background = "url("+imagenActualApple+")";
	positionTOPa = Math.floor(Math.random()*90);
	positionLEFTa = Math.floor(Math.random()*90);
	apple.style.top = positionTOPa + "%";
	apple.style.left = positionLEFTa + "%";
	puntuacio += 100;
	$("#imgRobot").stop().animate({top: positionTOPa-10 + "%", left: positionLEFTa + "%"},velocitat, function(){
		vidas = vidas - 1;
		if (vidas == 0){
			alert("Game Over. Puntuació: " +puntuacio+ ".");
		}
		else{
			canviarPosicioA();
		}
	});
}

window.onload = init;
