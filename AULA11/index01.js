function verificar() {

    let meunome = document.getElementById('inome')
    let meupais = document.getElementById('ipais')
    let resposta = document.getElementById('res')

    if(meunome == 'Roberto') {

        resposta.innerHTML = 'YES'
        
    }else {

        resposta.innerHTML = 'No'
    }
}