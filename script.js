const palabrasJuego = ["HOLA", "NUBE", "GATO", "PERRO", "CAMA", "BLANCO", "NEGRO", "AZUL","JAVA","SCRIPT","HTML","XBOX","WINDOWS","AHORCADO"];

var mensajeGanador = document.getElementById("mensajeGanador");
var mensajeDeDerrota = document.getElementById("mensajeDeDerrota");

var aciertos = 0;
var fallos = 0;
var letrasIngresadas = [];

var letrasAcertadas = document.getElementById("letrasAcertadas");
var palabrasErradas = document.getElementById("palabrasErradas");

const palabraNueva = document.getElementById("escribirPalabra");

var palabrita;

function iniciarJuego()
{
	aciertos = 0;
	fallos = 0;
	mensajeGanador.style.visibility = "collapse";
	mensajeDeDerrota.style.visibility = "collapse";
	letrasIngresadas = [];
	graficaDibujo.style.visibility = "visible";
	letrasAcertadas.style.visibility = "visible";
	palabrasErradas.style.visibility = "visible";
	letrasAcertadas.innerHTML = "";
	palabrasErradas.innerHTML = "";
	let recibePalabra = palabraObtenida(numeroAleatorio());
	drawLines(recibePalabra);
	window.addEventListener("keydown", funcionTeclado);

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

function numeroAleatorio() 
{
    var randomNumber = Math.floor(Math.random() * palabrasJuego.length);
    return randomNumber;
}

function palabraObtenida(randomNumber)
{
    var numeroAleatorio = randomNumber;
    var palabra = palabrasJuego[numeroAleatorio];
    return palabra;
}

function sumarPalabra() 
{
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
	document.getElementById("menuNuevaPalabra").style.display = "none";
    document.getElementById("menuJuego").style.display = "block";
    iniciarJuego();
}

function menuNuevaPalabra() 
{
    document.getElementById("menuPrincipal").style.display = "none";
    document.getElementById("menuNuevaPalabra").style.display = "block";
	palabraNueva.focus();
}

function pantallaInicio()
{
    document.getElementById("menuPrincipal").style.display = "flex"
    document.getElementById("menuJuego").style.display = "none"
    document.getElementById("menuNuevaPalabra").style.display = "none"
}

/*numeros de identificacion 65 a 90 y */
function funcionTeclado(event)
{
	let spans = document.querySelectorAll("#span");
	let teclaEvento = event.key;
	let recibeCodigoTecla = event.keyCode;
	let conversorMayuscula = teclaEvento.toUpperCase();

	if(recibeCodigoTecla >=65 && recibeCodigoTecla <= 90)
	{
		if(letrasIngresadas.includes(conversorMayuscula))
		{
			return null;
		}

		else
		{
			letrasIngresadas.push(conversorMayuscula);
		}

		let acerto = false; 

		for(let index = 0; index < palabrita.length; index++)
		{
			if(conversorMayuscula == palabrita[index]){
				spans[index].innerHTML = conversorMayuscula;
				acerto = true; 
				aciertos++;
			}
		}

		if(acerto == false ){
			let palabraEquivocadaDisplay = document.createElement("span");
			palabraEquivocadaDisplay.classList.add("fallos");
			palabraEquivocadaDisplay.innerHTML = conversorMayuscula;
			palabrasErradas.appendChild(palabraEquivocadaDisplay);
			fallos++;
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

		if(fallos === 9)
		{
		window.removeEventListener("keydown", funcionTeclado);

		mensajeDeDerrota.style.visibility = "visible";
		let palabraCorrecta = palabrita.join('');
		document.getElementById("palabraFinal").textContent = palabraCorrecta; /*Se usan n para saltos de linea, en alert */ 
		}

		else if(aciertos == palabrita.length)
		{
			window.removeEventListener("keydown", funcionTeclado);
			mensajeGanador.style.visibility = "visible";
		}
	}
}

function drawLines(palabra)
{
	palabrita = palabra.split("");

	palabrita.forEach(element => {
		let palabraDisplay = document.createElement("span");
		palabraDisplay.classList.add("aciertos");
		palabraDisplay.setAttribute("id","span");
		letrasAcertadas.appendChild(palabraDisplay);
	});
}

palabraNueva.addEventListener("keydown", function(event) 
{
        if (event.code === "Enter")
        {
            sumarPalabra();
        }
});
