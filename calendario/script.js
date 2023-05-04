const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const months = ['Jan', 'Fev', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Ago', 'Sep', 'Out', 'Nov', 'Dez']

function render() {
    let  output = ''
    // qual o mês?
    const thisMonth = months[new Date().getMonth()]

    for (let month of months) {
        const active = thisMonth == month ? 'active' : ''
        output += `<div class="${active}">${month}</div>`
    }
    return output
}

function nextYear() {
    app.querySelector('header span').innerHTML = new Date().getFullYear() + 1;
}

// limitado
function prevYear() {
    app.querySelector('header span').innerHTML = new Date().getFullYear() - 1;
}

app.querySelector('main').innerHTML = render()
app.querySelector('header span').innerHTML = new Date().getFullYear()