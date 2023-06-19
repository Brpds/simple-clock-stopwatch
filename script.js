let runningClock = () => {
    let relogio = new Date()
    let horas = relogio.getHours()
    let minutos = relogio.getMinutes()
    let segundos = relogio.getSeconds()
    if(horas < 10){
        horas = `0${relogio.getHours()}`
    }
    if(segundos < 10){
        segundos = `0${relogio.getSeconds()}`
    }
    if(minutos < 10){
        minutos = `0${relogio.getMinutes()}`
    }
    document.getElementById('clock').innerHTML = `${horas}:${minutos}:${segundos}`
}

setInterval(runningClock,1000)



//Convertendo para dias, horas, anos e minutos
/*const minute = 1000 * 60
const hour = minute * 60
const day = hour * 24
const year = day * 365
*/


//document.getElementById('stopWatch').innerHTML = `00:00:00:000`
document.getElementById('stopWatch2').innerHTML = `00:00:00:000`

// let sWMiliseconds = 0
// let sWSeconds = 55
// let sWMinutes = 59
// let sWHours = 0
// let runStopWatch = () => {
//     let startButton = setInterval(() => {
//         document.getElementById('stopWatch').innerHTML = `${sWHours}:${sWMinutes}:${sWSeconds}:${sWMiliseconds +=1}`
//         if(sWMiliseconds > 99){
//             sWMiliseconds = 0
//             sWSeconds +=1
//         }
//         if(sWSeconds > 59){
//             sWSeconds = 0
//             sWMinutes += 1
//         }
//         if(sWMinutes > 59){
//             sWMinutes = 0
//             sWHours +=1
//         }
//     }, 10);
    
// }

let sWMiliseconds = 0
let sWSeconds = 0
let sWMinutes = 0
let sWHours = 0
let intervalId
runStopWatch2 = () => {
    let data1 = new Date()
    intervalId = setInterval(() => {
        let result = (Date.now() - data1)
        document.getElementById('stopWatch2').innerHTML = result
    }, 10);
}

let lapPrinter = document.getElementById('lapPrinter')
lapPrinter.innerHTML = ''
let lapNumber = 1
let laps = []
let lastLap = 0
orderedLaps = (a,b) => a - b

recordLap2 = () => {
    let newLap = parseInt(document.getElementById('stopWatch2').innerHTML - lastLap)
    lastLap = parseInt(document.getElementById('stopWatch2').innerHTML)
    let line = lapPrinter.insertRow()
    line.insertCell(0).innerHTML = lapNumber
    line.insertCell(1).innerHTML = parseInt(document.getElementById('stopWatch2').innerHTML)
    laps.push(newLap)
    laps.sort(orderedLaps)
    /*logs time from the fastest lap, needs further updating
    for later laps */
    line.insertCell(2).innerHTML = (newLap - laps[0])
    line.insertCell(3).innerHTML = newLap
    lapNumber +=1
}

stopStopWatch2 = () => clearInterval(intervalId)

resetStopWatch2 = () => {
    document.getElementById('stopWatch2').innerHTML = `00:00:00:000`
    lapPrinter.innerHTML = ''
    laps = []
    lapNumber = 1
}