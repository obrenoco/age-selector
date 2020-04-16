function verify() {

    var data = new Date()
    var esseano = data.getFullYear()
    var ano = document.getElementById('ano')
    var res = document.getElementById('res')

    if ( ano.value.length == 0 || ano.value > esseano ) {
        window.alert('Insira o ano de nascimento')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = esseano - Number(ano.value)
        var img = document.getElementById('img')
        img.setAttribute('id', 'img')
        var genero = ''
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 9) {
                // QUIANÇA
                genero = 'uma quiança'
                img.setAttribute('src', 'img/baby.png')
                
            } else if ( idade < 13 ) {
                // JOVEM
                genero = 'uma quiança velha'
                img.setAttribute('src', 'img/kid-m.png')
            } else if ( idade < 21) {
                // JOVEM
                genero = 'um adolescente chato'
                img.setAttribute('src', 'img/teen-m.png')
            } else if ( idade < 50 ) {
                //ADULTO
                genero = 'um adultinho'
                img.setAttribute('src', 'img/adult-m.png')
            } else if ( idade < 120 ) {
                // IDOSO
                genero = 'um veiote'
                img.setAttribute('src', 'img/old-m.png')
            }
            else {
                // MÚMIA
                genero = 'uma múmia'
                img.setAttribute('src', 'img/mummie.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 9) {
                // QUIANÇA
                genero = 'uma quiança'
                img.setAttribute('src', 'img/baby.png')
            }  else if ( idade < 13 ) {
                // JOVEM
                genero = 'uma quiança velha'
                img.setAttribute('src', 'img/kid-f.png')
            } else if ( idade < 21) {
                // JOVEM
                genero = 'uma adolescente chata'
                img.setAttribute('src', 'img/teen-f.png')
            } else if ( idade < 50 ) {
                //ADULTO
                genero = 'uma adultinha'
                img.setAttribute('src', 'img/adult-f.png')
            } else if ( idade < 120 ) {
                // IDOSO
                genero = 'uma veiota'
                img.setAttribute('src', 'img/old-f.png')
            }
            else {
                // MÚMIA
                genero = 'uma múmia'
                img.setAttribute('src', 'img/mummie.png')
            }
        } else if (fsex[2].checked) {
            genero = 'uma capivara maneira'
            img.setAttribute('src', 'img/capivara.png')
        }
        res.innerHTML = `Você é <strong>${genero}</strong> e tem <strong>${idade} anos</strong>`
        res.appendChild(img)
    }
}
