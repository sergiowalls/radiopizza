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
"img/pizza15.jpg"
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

}

function fotoIzquierda() {
	if (imagenActual > 0) {
		--imagenActual;
		contenedor.style.backgroundImage = "url("+imagenes[imagenActual]+")";
	}
}

function fotoDerecha() {
	if (imagenActual < 7) {
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
