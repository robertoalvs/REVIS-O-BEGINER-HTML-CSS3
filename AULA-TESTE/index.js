

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
    let estrangeiro = document.querySelector('div#estrangeiro')
    let sessao2 = document.getElementById('sessao2')

    let nn = String(caixanome.value)
    let np = String(caixapais.value)
    let est = String(estrangeiro.value)

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

        if(np != 'Brasil' && np != 'brasil') {

            estrangeiro.innerHTML = 'ESTRANGEIRO'

        } else {
            estrangeiro.innerHTML = 'BRASILEIRO'
        }

    }  if ( somas < 12 ) {

        fotos.src = '../AULA-TESTE/img copy/bebe-homem.png'

        resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

        mascfem.innerHTML = `<strong>${gender}</strong>`

        sessao2.style.backgroundImage = 'linear-gradient(to bottom, pink, gray, white)'
        sessao2.style.boxShadow = '2px 2px 5px black'

    } else if (somas >= 12 && somas < 18 ) {

        fotos.src = '../AULA-TESTE/img copy/crianca-homem.png'

        resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

        mascfem.innerHTML = `<strong>${gender}`

    } else if (somas >= 18 && somas < 60) {

        fotos.src = '../AULA-TESTE/img copy/homem-adulto.png'

        resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

        mascfem.innerHTML = `<strong>${gender}`

    } else {

        fotos.src = '../AULA-TESTE/img copy/idosa-homem.png'

        resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

        mascfem.innerHTML = `<strong>${gender}`



// CODIGO FEMININO



    }  if (sexo[1].checked ){
        
        gender = 'FEMININO'

        if(np != 'Brasil' && np != 'brasil') {

            estrangeiro.innerHTML = 'ESTRANGEIRA'

        } else {
            estrangeiro.innerHTML = 'BRASILEIRA'
        }

        if ( somas < 12 ) {

            fotos.src = '../AULA-TESTE/img copy/bebe-mulher.png'

            resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

            mascfem.innerHTML = `<strong>${gender}</strong>`
    
        } else if (somas >= 12 && somas < 18 ) {
    
            fotos.src = '../AULA-TESTE/img copy/crianca-mulher.png'

            resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

            mascfem.innerHTML = `<strong>${gender}`
    
        } else if (somas >= 18 && somas < 60) {
    
            fotos.src = '../AULA-TESTE/img copy/mulher-adulto.png'

            resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

            mascfem.innerHTML = `<strong>${gender}`
    
        } else {
    
            fotos.src = '../AULA-TESTE/img copy/idosa-mulher.png'

            resposta.innerHTML = `<p>&rarr;	Seu nome é: <strong>${nn}</strong></p><p>&rarr; Você tem: <strong>${somas} anos</strong></p> <p>&rarr; Você está no <strong>${np}</strong></p> `

            mascfem.innerHTML = `<strong>${gender}`
    
        }  

    } 
    

    
}