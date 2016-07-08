

var imagenesApple = [
"img/img-androitor/a1.png",
"img/img-androitor/a2.png",
"img/img-androitor/a3.png"
]

var imagenActualApple;
var imagenRobot = "img/img-androitor/robot.png"
var positionTOPa;
var positionLEFTa;
var apple;
var robot;
var velocitat;
var vidas;
var puntuacio;
var Microsoft;
var	positionTOPm;
var	positionLEFTm;
var estaMicrosoft;

function init() {
	console.log("init");
	apple = document.getElementById("imgApple");
	$("#imgApple").click(canviarPosicioA);
	contenedor = document.getElementById("fotoGrande");
	robot = document.getElementById("imgRobot");
	Microsoft = document.getElementById("imgMircrosoft");
	$("#imgMircrosoft").click(canviarPosicioM);
	imagenActualApple = imagenesApple[Math.floor(Math.random()*3)];
	positionTOPa = Math.floor(Math.random()*90);
	positionLEFTa = Math.floor(Math.random()*90);
	positionTOP = Math.floor(Math.random()*70);
	positionLEFT = Math.floor(Math.random()*70);
	positionTOPm = Math.floor(Math.random()*80);
	positionLEFTm = Math.floor(Math.random()*80);
	apple.style.background = "url("+imagenActualApple+")";
	apple.style.top = positionTOPa + "%";
	apple.style.left = positionLEFTa + "%";
	robot.style.left = positionLEFT + "%";
	robot.style.top = positionTOP + "%";
	Microsoft.style.left = positionLEFTm + "%";
	Microsoft.style.top = positionTOPm + "%";
	velocitat = 2000;
	vidas = 3;
	puntuacio = 0;
	estaMicrosoft = false; 
	Microsoft.style.display="none";
}

function canviarPosicioA(){
	imagenActualApple = imagenesApple[Math.floor(Math.random()*3)];
	apple.style.background = "url("+imagenActualApple+")";
	positionTOPa = Math.floor(Math.random()*90);
	positionLEFTa = Math.floor(Math.random()*90);
	apple.style.top = positionTOPa + "%";
	apple.style.left = positionLEFTa + "%";
	puntuacio += 100;
	velocitat = 2000;
	$("#imgRobot").stop().animate({top: positionTOPa-10 + "%", left: positionLEFTa + "%"},velocitat, function(){
		vidas = vidas - 1;
		if (vidas == 0){
			alert("Game Over. Puntuació: " +puntuacio+ ".");
		}
		else{
			canviarPosicioA();
		}
	});
	m = Math.floor(Math.random()*100);
	if (m < 25){
		if (estaMicrosoft==false) estaMicrosoft = true;
		Microsoft.style.display = "block"

	}
}

function canviarPosicioM(){
	estaMicrosoft = false;
	Microsoft.style.display = "none";
	puntuacio += 200;
	velocitat = 3200;
	positionTOPm = Math.floor(Math.random()*80);
	positionLEFTm = Math.floor(Math.random()*80);
	Microsoft.style.top = positionTOPm + "%";
	Microsoft.style.left = positionLEFTm + "%";
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
