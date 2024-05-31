// Generar número aleatorio
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Determinar tipo jugada
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = 'Piedra 🪨'
    } else if (jugada == 2) {
        resultado = 'Papel 📑'    
    } else if ( jugada == 3) {
        resultado = 'Tijera ✂'
    } else {
        resultado = 'Opción inválida ❌'
    }
    return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3 ) {
    pc = aleatorio(1,3)
    jugador = prompt('Elige: 1. Piedra, 2. Papel y 3. Tijera')

    alert('Tú eliges ' + eleccion(jugador))
    alert('PC elige ' + eleccion(pc))

    // Combate
    if(pc == jugador) {
        alert('¡Empate!')
    } else if(jugador == 1 && pc == 3) {
        alert('¡Ganaste! 🥳')
        triunfos++
    } else if(jugador == 2 && pc == 1) {
        alert('¡Ganaste! 🥳')
        triunfos++
    } else if(jugador == 3 && pc == 2) {
        alert('¡Ganaste! 🥳')
        triunfos++
    } else {
        alert('¡Perdiste! 😔')
        perdidas++
    }
}

alert('Ganaste ' + triunfos + ' veces. \nPerdiste ' + perdidas + ' veces.')
