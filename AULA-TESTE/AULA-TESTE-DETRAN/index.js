
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
    let iano = document.getElementById('iano')
    let iano1 = document.getElementById('iano1')
    let ivel = document.getElementById('ivel')
    let foto = document.getElementById('foto-detran')

    let n = String(nome.value)
    let nano = Number(iano.value)
    let nano1 = Number(iano1.value)
    let nivel = Number(ivel.value) 

    let genero = document.getElementsByName('sexo')
    sexo = ''

    let resposta = document.getElementById('resposta')

    let idade = nano - nano1



    if (nome.value.length == 0 || iano.value.length == 0 || iano.value <= 1899 || iano.value >= 2025 || ivel.value.length == 0) {

        alert('[ERRO!] VERIFIQUE OS DADOS DIGITADOS!')

    } else if (genero[0].checked) {

            sexo = 'MASCULINO'

        } if (idade <= 11 || ivel <= 49) {

                foto.src = '../AULA-TESTE-DETRAN/img/reprovado.png'
                foto.style.width = '200px'


                resposta.innerHTML = `<p> <span>[REPROVADO]!</span> </p> <p>Você tem <strong>${idade}</strong> anos.</p>`
                resposta.innerHTML += `<p>Sua velocidade atual foi: <strong>${nivel} KM/h</strong></p>`
                resposta.innerHTML += `<p>Seu genero é: <strong>${sexo}</strong></p>`
    
            } else if (idade >=12 || ivel >= 50){
    
                foto.src = '../AULA-TESTE-DETRAN/img/aprovado.png'
                resposta.innerHTML = `<p>[APROVADO]!</p> <p>Você tem <strong>${idade}</strong> anos.</p>`
                resposta.innerHTML += `<p>Sua velocidade atual foi: <strong>${nivel} KM/h</strong></p>`
                resposta.innerHTML += `<p>Seu genero é: <strong>${sexo}</strong></p>`
            }

    
}


