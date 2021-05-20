console.log('\nCRONÔMETRO\n')

const horas = prompt('Hora(s)')
const minutos = prompt('Minuto(s)')
const segundos = prompt('Segundo(s)')

let contHora = 0
let contMinuto = 0
let contSegundo = 0

var loop = setInterval(
  function () {
    if (horas == contHora && minutos == contMinuto && segundos == contSegundo) {
      clearInterval(loop)
    }

    if (contSegundo == 60) {
      contMinuto++
      contSegundo = 0
    }
    if (contMinuto == 60) {
      contHora++
      contMinuto = 0
    }

    console.log(`${contHora}h ${contMinuto}m ${contSegundo}s até | ${horas}h ${minutos}m ${segundos}s |`)

    contSegundo++
  }, 1000)
s
