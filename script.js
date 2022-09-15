const palabrasJuego = ["HOLA", "NUBE", "GATO", "PERRO", "CAMA", "BLANCO", "NEGRO", "AZUL","JAVA","SCRIPT","HTML","XBOX","WINDOWS","ALURA","FRONTEND","BACKEND","INTEL","AHORCADO","SECURITY"];

var aciertos = 0;
var fallos = 0;
var letrasIngresadas = [];

var letrasAcertadas = document.getElementById("letrasAcertadas");
var palabrasEquivocadas = document.getElementById("palabrasEquivocadas");

const palabraNueva = document.getElementById("escribirPalabra");

var palabrita;

function numeroAleatorio() {
    var numberRandom = Math.floor(Math.random() * palabrasJuego.length);
    return numberRandom;
}

function palabraObtenida(numberRandom)
{
    var numeroAleatorio = numberRandom;
    var palabra = palabrasJuego[numeroAleatorio];
    return palabra;
}

function sumarPalabra() {
    insertarPalabraArray(palabraNueva.value.toUpperCase());
    palabraNueva.value = "";
    palabraNueva.focus();
}

function insertarPalabraArray(palabra) {
    palabrasJuego.push(palabra);
}

function empezarJuego()
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("objetoOculto2").style.display = "block";
    iniciarJuego() ;
}

function espacioOculto3() 
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("espacioOculto3").style.display = "block";
}

function pantallaInicio()
{
    document.getElementById("menuPrincipal").style.display = "flex"
    document.getElementById("objetoOculto2").style.display = "none"
    document.getElementById("espacioOculto3").style.display = "none"
}

/*numeros de identificacion 65 a 90 y */
function keyFunction(event)
{
	let spans = document.querySelectorAll("#spanLetras");
	let recibeTecla = event.key;
	let recibeCodigoTecla = event.keyCode;
	let letraMayus = recibeTecla.toUpperCase();

	if(recibeCodigoTecla >=65 && recibeCodigoTecla <= 90)
	{
		if(letrasIngresadas.includes(letraMayus))
		{
			return null;
		}
		else
		{
			letrasIngresadas.push(letraMayus);
		}

		let acerto = false; 
		for(let i = 0; i < palabrita.length; i++)
		{
			if(letraMayus == palabrita[i]){
				spans[i].innerHTML = letraMayus;
				acerto = true; 
				aciertos++;
			}
		}
		if(acerto == false ){
			let palabraEquivocadaDisplay = document.createElement("span");
			palabraEquivocadaDisplay.classList.add("fallos");
			palabraEquivocadaDisplay.innerHTML = letraMayus;
			palabrasEquivocadas.appendChild(palabraEquivocadaDisplay);
			fallos++;
			let imagen = document.getElementById("graficaDibujo");
		}

		switch (fallos) {
			case 1:
				console.log("fallaste")
				document.getElementById("soporte").style.visibility = "visible";
				break;

			case 2:
				console.log("fallaste 2")
				document.getElementById("viga").style.visibility = "visible";
				break;

			case 3:
				console.log("fallaste3")
				document.getElementById("soga").style.visibility = "visible";
				break;

			case 4:
				console.log("fallaste4")
				document.getElementById("cabeza").style.visibility = "visible";
				break;
				
			case 5:
				console.log("fallaste5")
				document.getElementById("torso").style.visibility = "visible";
				break;

			case 6:
				console.log("fallaste6")
				document.getElementById("brazo-derecho").style.visibility = "visible";
				break;
			
			case 7:
				console.log("fallaste7")
				document.getElementById("brazo-izquierdo").style.visibility = "visible";
				break;
			case 8:
				console.log("fallaste8")
				document.getElementById("pierna-derecha").style.visibility = "visible";
				break;

			case 9:
				console.log("fallaste9")
				document.getElementById("pierna-izquierda").style.visibility = "visible";
				break;

			default:
				break;
		}

		if(fallos === 9){
		mensajeDerrota.style.visibility = "visible";
		let palabraCorrecta = palabrita.join('');
		mensajeDerrota.textContent = "Fin Del Juego !! la palabra era "+ palabraCorrecta ;
		window.removeEventListener('keydown', keyFunction);
		}
		else if(aciertos == palabrita.length)
		{
			mensajeGanador.style.visibility = "visible";
			window.removeEventListener('keydown', keyFunction);
		}
	}
}

function iniciarJuego() 
{   

    let recibePalabra = palabraObtenida(numeroAleatorio());
    console.log(recibePalabra);
	drawLines(recibePalabra);
	window.addEventListener('keydown', keyFunction);
}


function reiniciar()
{
	aciertos = 0;
	fallos = 0;
	letrasIngresadas = [];
	graficaDibujo.style.visibility = "visible";
	letrasAcertadas.style.visibility = "visible";
	palabrasEquivocadas.style.visibility = "visible";
	letrasAcertadas.innerHTML = "";
	palabrasEquivocadas.innerHTML = "";
	let recibePalabra = palabraObtenida(numeroAleatorio());
	drawLines(recibePalabra);
	window.addEventListener('keydown', keyFunction);
    console.log(recibePalabra);
	document.getElementById("soporte").style.visibility = "collapse";
	document.getElementById("viga").style.visibility = "collapse";
	document.getElementById("cabeza").style.visibility = "collapse";
	document.getElementById("soga").style.visibility = "collapse";
	document.getElementById("torso").style.visibility = "collapse";
	document.getElementById("brazo-derecho").style.visibility = "collapse";
	document.getElementById("brazo-izquierdo").style.visibility = "collapse";
	document.getElementById("pierna-derecha").style.visibility = "collapse";
	document.getElementById("pierna-izquierda").style.visibility = "collapse";
}


function drawLines(palabra)
{
	palabrita = palabra.split("");

	palabrita.forEach(element => {
		let palabraDisplay = document.createElement("span");
		palabraDisplay.classList.add("aciertos");
		palabraDisplay.setAttribute("id","spanLetras");
		letrasAcertadas.appendChild(palabraDisplay);
	});
}


