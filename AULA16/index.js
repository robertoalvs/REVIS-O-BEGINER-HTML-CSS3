function tempo() {

    let relogio = new Date()
    let hours = relogio.getHours()
    let divhora = document.getElementById('hora')

    divhora.innerHTML = `Agora são exatamente <span>${hours}</span> horas`
    divhora.style.textAlign = 'center'
}


function contar() {

    let ini = document.querySelector('input#inum')
    let fim = document.querySelector('input#inum1')
    let passo = document.querySelector('input#inum2')

    let n = Number(ini.value)
    let n1 = Number(fim.value)
    let n2 = Number(passo.value)

    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        alert('[ERRO!] Verifique os dados digitados')
         
        res.innerHTML = 'IMPOSSÍVEL CONTAR...'

    } else {

        res.innerHTML = 'CONTANDO:'

        if (n2 <= 0) {

            alert('Passo inválido! Vamos considerar PASSO 1')

            n2 = 1
        }
            if (n < n2) {

                for(let c = n; c <= n1; c += n2) {

                    res.innerHTML += ` ${c} \u{1F449}`
                }

            } else {

                for(let c = n; c >= n1; c -= n2) {

                    res.innerHTML += `${c} \u{1F449}` 
                }
            }
            res.innerHTML += `\u{1F3C1}`
    }
}
