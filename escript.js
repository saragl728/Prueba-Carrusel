const intervalo = 3.2; //constante que se usa para que cuando se quiera cambiar la frecuencia no haya que buscar en todas las ocurrencias, está en segundos

//tienen el mismo formato de nombre, así que usaré un bucle
//si no tuvieran el mismo formato de nombre, tendría que poner los nombres a mano
var imagenes = [];
for (let i = 0; i <= 30; i++) {
  imagenes.push(`Pngs/img${i}.jpg`);
}

var indx = -1; //variable para rotar en order, lo pongo a -1 para que cuando empiece a rotar en orden no se salte la 1ª imagen

var rotando = false; //usaremos esto para la rotación

switch (navigator.language) {
  case "es-ES":
  case "es-AR":
  default:
    document
      .getElementById("imagen")
      .setAttribute("alt", "Fondo de pantalla incluido en Windows 7");
    document.getElementById("tit").innerHTML = "Imagen cambiante";
    document.getElementById("para").title = "Para";
    document.getElementById("sigue").title = "Continúa";
    document.getElementById("mas").innerHTML =
      "Haz doble click en la imagen para detener o continuar el pase de imágenes";
    break;
  case "en-EN":
  case "en-US":
    document
      .getElementById("imagen")
      .setAttribute("alt", "Wallpaper included in Windows 7");
    document.getElementById("tit").innerHTML = "Changing image";
    document.getElementById("para").title = "Stop";
    document.getElementById("sigue").title = "Continue";
    document.getElementById("mas").innerHTML =
      "Double click the imagen to stop or continue images slide";
    break;
}
