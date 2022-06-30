const num = document.querySelector('input#txtn')
const vet = document.querySelector('select#selVet')
const res = document.querySelector('div#res')
const valores = []

function verificadorN(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function verificadorL(n, l) {
    if (l.indexOf(Number(n)) !== -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (verificadorN(num.value) && !verificadorL(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        vet.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já computado.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length === 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores cadastrados é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores cadastrados é ${media}.</p>`
    }
}