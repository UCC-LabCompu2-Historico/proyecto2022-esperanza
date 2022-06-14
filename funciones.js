let INDEX_PREGUNTA = 0;
let n_pregunta = 1;
let puntaje = 0;

cargarPregunta(INDEX_PREGUNTA);


function cargarPregunta(index){
    objetoPregunta = preguntas[index]
    opciones = [...objetoPregunta.falsas]
    opciones.push(objetoPregunta.respuesta)
    opciones.sort(() => Math.random() - 0.5);


    document.getElementById("numero").innerHTML = "Pregunta " + n_pregunta;

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta



    if (objetoPregunta.imagen) {
        document.getElementById("imagen").src = objetoPregunta.imagen;
        document.getElementById("imagen").style.display = "";
      } else {
        document.getElementById("imagen").style.display = "none";
      }
    

    document.getElementById("boton1").innerHTML = opciones[0]
    document.getElementById("boton2").innerHTML = opciones[1]
    document.getElementById("boton3").innerHTML = opciones[2]
    document.getElementById("boton4").innerHTML = opciones[3]
}

async function seleccionarOpcion(index){
    let validezRespuesta = opciones[index] == objetoPregunta.respuesta
    if (validezRespuesta) {
        await Swal.fire({
            title:"Respuesta correcta",
            text:"La respuesta ha sido correcta",
            icon: "success",
            confirmButtonText: 'Siguiente!'
        });
        puntaje++;
    } else {
        await Swal.fire({
            title: "Respuesta Incorrecta",
            text: `La respuesta correcta es ${objetoPregunta.respuesta}`, 
            icon: "error",
            confirmButtonText: 'Siguiente!'
        });
    }

    INDEX_PREGUNTA++;
    n_pregunta++;

  if (INDEX_PREGUNTA >= preguntas.length) {
    await Swal.fire({
      title: "Juego terminado",
      text: `Tu puntaje fue de: ${puntaje}/${preguntas.length}`,
    });
    INDEX_PREGUNTA = 0;
    puntaje = 0;
  }
  cargarPregunta(INDEX_PREGUNTA);
}

function dibujarSigno() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  var yMax = canvas.height;

  ctx.fillRect(85, yMax-40, 30, 30);

  ctx.fillRect(85, yMax-50, 30, -70);

  ctx.fillRect(110, yMax-120, 50, 30);

  ctx.fillRect(130, yMax-180, 30, 60);

  ctx.fillRect(80, yMax-180, 50, 30);

}