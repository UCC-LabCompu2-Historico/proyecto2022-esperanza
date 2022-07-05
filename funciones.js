let INDEX_PREGUNTA = 0;
let n_pregunta = 1;
let puntaje = 0;

cargarPregunta(INDEX_PREGUNTA);

/*
    Esta funcion busca las preguntas y respuestas de la base
    de datos ubicada en preguntas.js para despues mostrarlas
    en pantalla correctamente.
    @method cargarPregunta
*/

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

/*
    Esta funcion es la que verifica que la respuesta sea
    correcta o incorrecta para sumar o restar al puntaje del usuario.
    @method seleccionarOpcion
*/

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
      text:  `Tu puntaje fue de: ${puntaje}/${preguntas.length}`,
    });
    INDEX_PREGUNTA = 0;
    n_pregunta = 1;
    puntaje = 0;
  }
  cargarPregunta(INDEX_PREGUNTA);
}

/*
    Esta funcion permite ingresar el nombre
    del usuario para empezar el juego.
    @method ingresarNombre
*/

function ingresarNombre(){
   const {value: text} = Swal.fire({
    title: "Bienvenido!",
    text: "Ingresa tu nombre para empezar:",
    icon: "question",
    confirmButtonText: "Empezar",

    input: "text",
    inputPlaceholder: "Nombre",
    inputValue: "",
  });

}
