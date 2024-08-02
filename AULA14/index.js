function consultar() {

    let data = new Date()
    let ano = data.getFullYear()
    let horario = data.getHours()

    let txtnome = document.querySelector('input#txtnome')
    let txtpais = document.querySelector('input#txtpais')

    let sessao = document.querySelector('secsion#sessao')
    let imagem = document.querySelector('img#imagem')

    let hora = document.querySelector('div#hora')
    let fullano = document.querySelector('div#fullano')
    let foto = document.querySelector('div#foto')
    let horaeano = document.querySelector('div#horaeano')

    // No caso do uso do input radio, usaremos o ByName, por que todos os inputs radio, tem que está com o mesmo nome
    let fsex = document.getElementsByName('radsex')
    let genero = ''

    let numnasc = document.querySelector('input#numnasc')
    let numano = document.querySelector('input#numano')
    let n1 = Number(numnasc.value)
    let n2 = Number(numano.value)

    let soma = n2 - n1

    

    if (txtnome.value.length == 0 || txtpais.value.length == 0 || numnasc.value < 1900 || numano.value > ano) {

           alert('ERRO!!! VERIFICAR OS DADOS DIGITADOS')

    } else {

        alert('TUDO OK')
    }
    
     
}