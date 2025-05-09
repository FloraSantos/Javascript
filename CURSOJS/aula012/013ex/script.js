function verificar() {
 
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('textano')
    const resul = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
     window.alert('ERRO! Verifique as informações adicionadas.')
    } else {
        const fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','Hbebe.png' )
            }
            else if (idade <21){
                //jovem
                img.setAttribute('src','Hjovem.png' )
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src','Hadulto.png' )
            }
            else {
                //idoso
                img.setAttribute('src','Hidoso.png' )
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src','Hbebe.png' )
            }
            else if (idade <21){
                //jovem
                img.setAttribute('src','Mjovem.png' )
            }
            else if (idade < 50){
                //adulto
                img.setAttribute('src','Madulta.png' )
            }
            else {
                //idoso
                img.setAttribute('src','Midosa.png' )
            }

        }
        resul.style.textAlign ='center'
        resul.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        resul.appendChild(img)
    }
 
    
 
 
 }