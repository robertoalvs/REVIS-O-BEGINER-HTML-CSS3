function verificar() {


    let relogio = document.getElementById('relogio')
    let foto = document.getElementById('foto')
    let imagem = document.getElementById('imagem')
    let  = anoatual = document.getElementById('ano')
    let sessao = document.getElementById('sessao')

    let data = new Date()
    let hora = data.getHours()
    let ano = data.getFullYear()

    relogio.innerHTML = `Agora são: ${hora} Horas`
    anoatual.innerHTML = `Estamos no ano de: ${ano} `


        if (hora >= 0 && hora <= 11) {

            imagem.src = './img/manha.png'

            sessao.style.backgroundImage = 'linear-gradient(to top, blue, yellow, white)'

        } else if (hora >= 12 && hora < 18) {

            imagem.src = './img/tarde.png'

            sessao.style.backgroundImage = 'linear-gradient(to top, orange, yellow, white)'

        } else {

            imagem.src = './img/noite.png'
            sessao.style.backgroundImage = 'linear-gradient(to top, orange, black, white)'
        }
}