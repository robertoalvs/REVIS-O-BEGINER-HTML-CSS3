
function tempo() {

    let data = new Date()
    let ano = data.getFullYear()
    let horario = data.getHours()

    let hora = document.querySelector('div#hora')
    let fullano = document.querySelector('div#fullano')
    let foto = document.querySelector('div#foto')

    hora.innerHTML = `Agora são: ${horario} horas`
    fullano.innerHTML = `Estamos em ${ano}`
}



function consultar() {

    let txtnome = document.getElementById('txtnome')
    let txtpais = document.getElementById('txtpais')

    let sessao = document.querySelector('secsion#sessao')
    let imagem = document.querySelector('img#imagem')
    let resultado = document.querySelector('div#resultado')
    let res = document.querySelector('div#res')
    

    // No caso do uso do input radio, usaremos o ByName, por que todos os inputs radio, tem que está com o mesmo nome
    let fsex = document.getElementsByName('radsex')
    let genero = ''

    let numnasc = document.querySelector('input#numnasc')
    let numano = document.querySelector('input#numano')
    let n1 = Number(numnasc.value)
    let n2 = Number(numano.value)

    let soma = n2 - n1


    if (txtnome.value.length == 0 || txtpais.value.length == 0 || numnasc.value < 1900 || numano.value > 2024 ) {

           alert('ERRO!!! VERIFICAR OS DADOS DIGITADOS')

    } else if (fsex[0].checked) {

        genero = 'HOMEM'

    }else  if (soma < 12 ) {

        imagem.src  = './img/bebe-homem.png'

        resultado.innerHTML = `Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>`

        res.innerHTML = ` ${genero} com ${soma} anos `

    } else if (soma >= 12 && soma < 18) {

        imagem.src  = './img/crianca-homem.png'

        resultado.innerHTML = `Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>`

        res.innerHTML = ` ${genero} com ${soma} anos`

    } else if (soma >= 18 && soma < 60){

        imagem.src  = './img/mulher-adulto.png'

        resultado.innerHTML = `Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>`

        res.innerHTML = ` ${genero} com ${soma} anos`

    } else if( soma >= 60){

        imagem.src  = './img/idosa-homem.png'

        resultado.innerHTML = `Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>`

        res.innerHTML = ` ${genero} com ${soma} anos`


        /* ============== MULHER ======== */

    }  else if (fsex[1].checked  = 'MULHER') {

        genero = 'MULHER'

    } if (soma < 12) {

        imagem.src  = './img/bebe-mulher.png'

        resultado.innerHTML = `Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>`

        res.innerHTML = ` ${genero} com ${soma} anos `

    } else if (soma >= 12 && soma < 18) {

        imagem.src  = './img/crianca-mulher.png'

        resultado.innerHTML = `Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>`

        res.innerHTML = ` ${genero} com ${soma} anos`

    } else if (soma >=18 && soma < 60) {

        imagem.src = './img/mulher-adulto.png'

        resultado.innerHTML = ` Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>
        `
        res.innerHTML = `${genero} com ${soma} anos`

    } else {

        imagem.src  = './img/idosa-mulher.png'

        resultado.innerHTML = `Seu nome é: <strong>${txtnome}</strong> você está em <strong>${txtpais}</strong>`

        res.innerHTML = ` ${genero} com ${soma} anos`

    }
     
}