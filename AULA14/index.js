function consultar() {

    let nome = document.getElementById('inome')
    let pais = document.getElementById('ipais')
    let nasc = document.getElementById('inasc')
    let anoatual = documtent.getElementById('ianoatual')

    let sessao = document.getElementById('sessao')
    let horaatual = document.getElementById('hora')
    let imagem = document.getElementById('imagem')
    let ano = document.getElementById('ano')

    let n1 = Number(nasc.value)
    let n2 = Number(anoatual.value)

    let soma = n1 - n2

    if (nome == 0 || pais == 0 || nasc == 0 || anoatual == 0) {

        alert('ERRO! PREENCHA OS TODOS OS CAMPOS!')
    }
}