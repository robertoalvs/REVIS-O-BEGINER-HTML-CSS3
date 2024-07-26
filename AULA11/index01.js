function clicar() {

    let nome = document.getElementById('inome')
    let pais = document.getElementById('ipais')
    let num = document.getElementById('inasc')
    let num1 = document.getElementById('iano')

    let n = Number(num.value)
    let n1 = Number(num1.value)

    let soma = n1 - n

    let res = document.getElementById('res')

    if (nome != 'Brasil' || 'brasil') {

        res.innerHTML = `Seu nome e: ${nome}`
        res.innerHTML += `Você está no ${pais}`
        res.innerHTML += `Você tem ${soma} de idade`

    } else {

        res.innerHTML = `Vocé é ESTRANGEIRO!`
    }
}