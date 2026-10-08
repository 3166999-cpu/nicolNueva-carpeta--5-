window.calificar = function () {

    const respuestasCorrectas = {
        pregunta1: "a",
        pregunta2: "b",
        pregunta3: "b",
        pregunta4: "a",
        pregunta5: "a",
        pregunta6: "a",
        pregunta7: "a",
        pregunta8: "a",
        pregunta9: "a",
        pregunta10: "a"
    };


    let correctas = 0;


    for (let pregunta in respuestasCorrectas) {

        const seleccionada =
            document.querySelector(
                `input[name="${pregunta}"]:checked`
            );


        if (seleccionada &&
            seleccionada.value === respuestasCorrectas[pregunta]) {

            correctas++;

        }

    }


    const total = 10;

    const porcentaje = (correctas / total) * 100;


    let mensaje = "";

    if (porcentaje === 100) {

        mensaje = "¡Excelente! Dominas muy bien los temas.";

    } else if (porcentaje >= 80) {

        mensaje = "¡Muy bien! Tienes un buen dominio de los contenidos.";

    } else if (porcentaje >= 60) {

        mensaje = "Buen trabajo. Puedes repasar algunos temas.";

    } else {

        mensaje = "Puedes volver a revisar las investigaciones e intentarlo nuevamente.";

    }


    const resultado =
        document.getElementById("resultado");


    resultado.innerHTML = `

        <div class="resultado-icono">

            <i class="bi bi-award"></i>

        </div>

        <h2>
            ${correctas} de ${total} correctas
        </h2>

        <div class="porcentaje-resultado">

            ${porcentaje}%

        </div>

        <p>

            ${mensaje}

        </p>

        <button
            class="btn btn-nicole mt-3"
            onclick="location.reload()">

            <i class="bi bi-arrow-repeat"></i>

            Intentar nuevamente

        </button>

    `;


    resultado.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

};