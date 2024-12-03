const intervalo = 3.2; //constante que se usa para que cuando se quiera cambiar la frecuencia no haya que buscar en todas las ocurrencias, está en segundos

//tienen el mismo formato de nombre, así que usaré un bucle
//si no tuvieran el mismo formato de nombre, tendría que poner los nombres a mano
var imagenes = [];
for (let i = 0; i <= 30; i++) {
  imagenes.push(`Pngs/img${i}.jpg`);
}

var indx = -1; //variable para rotar en order, lo pongo a -1 para que cuando empiece a rotar en orden no se salte la 1ª imagen

var rotando = false; //usaremos esto para la rotación

//elementos html
var cuerpo = document.getElementsByTagName("body")[0];
var imag = document.getElementById("imagen");
var estad = document.getElementById("estado");
var titulo = document.getElementById("tit");
var deten = document.getElementById("para");
var conti = document.getElementById("sigue");
var maas = document.getElementById("mas");

switch (navigator.language) {
  case "es-ES":
  case "es-AR":
  default:
    imag.setAttribute("alt", "Fondo de pantalla incluido en Windows 7");
    titulo.innerHTML = "Imagen cambiante";
    deten.title = "Para";
    conti.title = "Continúa";
    maas.innerHTML =
      "Haz doble click en la imagen para detener o continuar el pase de imágenes";
    break;
  case "en-EN":
  case "en-US":
    imag.setAttribute("alt", "Wallpaper included in Windows 7");
    titulo.innerHTML = "Changing image";
    deten.title = "Stop";
    conti.title = "Continue";
    maas.innerHTML = "Double click the imagen to stop or continue images slide";
    break;
}

//funciones
function estableceImagen(fuente) {
  imag.src = fuente;
}

function mensajeRotando() {
  switch (navigator.language) {
    case "es-ES":
    case "es-AR":
    default:
      estad.textContent = "Rotando...";
      break;
    case "en-EN":
    case "en-US":
      estad.textContent = "Rotating...";
      break;
  }
}

function rotaAlAzar() {
  let ind = Math.floor(Math.random() * imagenes.length); //esta variable es para obtener el índice del array

  estableceImagen(imagenes[ind]); //le damos la fuente a la imagen

  mensajeRotando();

  if (!rotando) rotando = true;
  //se cambia el estilo para que quede claro que está activo
  if (estad.className != "activo") estad.className = "activo";
}

//asignación de eventos
