function carregar() {

    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let sec = document.getElementById('sec')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12) {

        img.src = './img/manha.png'

    } else if (hora >= 12 && hora <= 18) {

        img.src ='./img/tarde.png'
        sec.style.backgroundImage = 'linear-gradient( blue, yellow)'

    } else {

        img.src = './img/noite.png'
    }
}