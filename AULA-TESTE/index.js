

function tempo() {

    let data = new Date()
    let relogio = data.getHours()
    let atualano =  data.getFullYear()
    
    let ampm = document.querySelector('div#horas-atual')
    let anoyear = document.querySelector('div#ano-atual') 

    ampm.innerHTML = `AGORA SÃO: <strong>${relogio}</strong> HORAS`
    anoyear.innerHTML = `ESTAMOS EM <strong>${atualano}</strong>`

}

function clicar() {

    let caixanome = document.querySelector('input#itxtn')
    let caixapais = document.querySelector('input#itxtp')
    let caixanascimento = document.querySelector('input#inum')
    let caixaano = document.querySelector('input#inum1')

    let nn = String(caixanome.value)
    let np = String(caixapais.value)

    let n1 = Number(caixanascimento.value)
    let n2 = Number(caixaano.value)

    let somas = n2 -n1

    let resposta = document.querySelector('div#res')
    let mascfem = document.querySelector('div#genero-masc-fem')

    let sexo = document.getElementsByName('idsex')
    gender = ''

    if(caixanome.value == 0 || caixapais.value == 0 || caixanascimento.value <= 1899 || caixaano.value > 2024 || caixaano.value == 0) {

        alert('ERRO! VERIFICAR OS DADOS DIGITADOS')

    } else if (sexo[0].checked ){
        
        gender = 'MASCULINO'
        
    }  if ( somas < 12) {

        fotos.src = '../AULA-TESTE/img copy/bebe-homem.png'
        resposta.innerHTML = `SEU NOME É: ${nn} VOCÊ TEM: ${somas} ANOS`
        mascfem.innerHTML = `<strong>${gender}`

    } else if (somas >= 12 && somas < 18 ) {

        fotos.src = '../AULA-TESTE/img copy/crianca-homem.png'
        resposta.innerHTML = `Seu nome é: <strong>${nn}</strong> Você tem: <strong>${somas}</strong> anos`
        mascfem.innerHTML = `<strong>${gender}`
    }
}