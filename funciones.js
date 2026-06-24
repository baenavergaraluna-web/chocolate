let victorias = 0;
let derrotas = 0;

// Eventos de los botones
document.getElementById("kirby").addEventListener("click", function () {
    jugar("kirby");
});

document.getElementById("dedede").addEventListener("click", function () {
    jugar("dedede");
});

document.getElementById("bandana").addEventListener("click", function () {
    jugar("bandana");
});

// Función principal
function jugar(eleccionJugador) {

    const opciones = ["kirby", "dedede", "bandana"];

    const eleccionComputadora =
        opciones[Math.floor(Math.random() * 3)];

    const rutas = {
        kirby: "imagenes/poyo.jfif",
        dedede: "imagenes/dededead.jfif",
        bandana: "imagenes/bandee.jfif"
    };

    document.getElementById("imagenJugador").src =
        rutas[eleccionJugador];

    document.getElementById("imagenComputadora").src =
        rutas[eleccionComputadora];

    let resultado;

    if (eleccionJugador === eleccionComputadora) {
        resultado = "¡Empate!";
    }
    else if (
        (eleccionJugador === "kirby" && eleccionComputadora === "bandana") ||
        (eleccionJugador === "bandana" && eleccionComputadora === "dedede") ||
        (eleccionJugador === "dedede" && eleccionComputadora === "kirby")
    ) {
        resultado = "¡Ganaste!";
        victorias++;
    }
    else {
        resultado = "La computadora ha ganado.";
        derrotas++;
    }

    // Comprobar si alguien llegó a 3 puntos
    if (victorias === 3) {
        resultado = "¡Victoria! Ganaste la partida.";
        victorias = 0;
        derrotas = 0;
    }

    if (derrotas === 3) {
        resultado = "Intenta de nuevo.";
        victorias = 0;
        derrotas = 0;
    }

    document.getElementById("resultado").textContent =
        "La computadora eligió " +
        eleccionComputadora +
        ". " +
        resultado +
        " | Victorias: " +
        victorias +
        " | Derrotas: " +
        derrotas;
}