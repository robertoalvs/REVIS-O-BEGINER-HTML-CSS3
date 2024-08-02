function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {

        alert('ERRO!')


    } else {

        alert('TUDO OK')
    }
}