var palabrasJuego = ["hola", "nube", "gato", "perro", "cama"];
var aciertos = 0;
var fallos = 0;
var nuevaPalabra = document.getElementById("escribirPalabra");


function palabraRandom() {
    
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

function iniciarJuego() 
{
    console.log("Hola");
}

function sumarPalabra(palabrita) {
    palabrasJuego.push(palabrita);
}

function reiniciar()
{
    iniciarJuego();
}

document.addEventListener("keydown", mostrarTeclado);

function mostrarTeclado(evento){
    console.log(evento.keyCode);
    /*numeros de identificacion 65 a 90 y */ 
}