
function relogio() {

    let hora = new Date()
    let relo = hora.getHours()
    let anoatual = hora.getFullYear()

    let divhora = document.getElementById('hora')
    let ano = document.querySelector('div#ano')

    divhora.innerHTML = `Agora são <strong>${relo}</strong> Horas`
    ano.innerHTML = `Estamos em <strong>${anoatual}</strong>`
    
}

function calcular() {

    let nome = document.getElementById('inome')
    let 
}