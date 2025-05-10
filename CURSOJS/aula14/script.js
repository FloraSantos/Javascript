function Calcular() {
    let n = document.getElementById('num')
    let tab = document.getElementById('tab')
    
    if (n.value.length == 0){
        window.alert('Número inválido!')
    } else{
        let nn = Number(n.value)
        tab.innerHTML = ''
    
        for (let c = 1 ; c <= 10 ; c++) {
            let item = window.document.createElement('option')
            item.text = `${nn} x ${c} = ${nn*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            } 
    }
}