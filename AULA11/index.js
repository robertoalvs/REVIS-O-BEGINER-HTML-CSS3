function clicar() {

    let pais = document.getElementById('inum')
    let n = Number(pais.value)

    let res = document.getElementById('res')

    if (n > 60) {

        res.innerHTML =  `SUA VELOCIDADE É <strong>${n}km/h</strong> MULTADO!!! `

    } else {

        res.innerHTML= `SIGA EM FRETE SUA VELOCIADE FOI ${n}km/h.`
    }
}