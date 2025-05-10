function contar(){
let inicio = document.getElementById('ini')
let final = document.getElementById('fin')
let passo = document.getElementById('pass')
let result = document.getElementById('res')

if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
    window.alert('ERRO! Dados incorretos.')
} else{
    i = Number(inicio.value)
    f = Number(final.value)
    p = Number(passo.value)
    if (i < f) {
        for (let c = i; c <= f; c+= p) {
            result.innerHTML += `${c}  `
        } 
    } else { 
        for (let c = i; c >= f; c-= p) {
            result.innerHTML += `${c} \u{1F920}	 `
        
    } 
    
    
    
    }

}

}
