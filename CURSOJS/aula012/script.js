function carregar(){
    const msg = window.document.getElementById('msg')
    const foto = window.document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        foto.src = ('manha.png')
        document.body.style.background = 'rgb(33, 165, 165)'
    } else if (hora >= 13 && hora <= 18){
        foto.src = ('tarde.png')
        document.body.style.background = 'rgba(196, 148, 44, 0.99)'
    } else {
        foto.src = ('noite.png')
        document.body.style.background = 'rgb(5, 75, 141)'
    }
}