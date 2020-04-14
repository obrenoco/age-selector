function carregar() {
    var title = document.getElementById('title')
    var msg = document.getElementById('text')
    var img = document.getElementById('img')

    var date = new Date()
    var horas = date.getHours()
    var minutos = date.getMinutes()

    var horas = 23

    msg.innerHTML = `Agora são <strong>${horas} horas </strong> e <strong>${minutos} minutos</strong>`

    

    if ( horas >= 0 && horas < 12 ) {
        // BOM DIA
        title.innerHTML = `BOM DIA`
        img.src = 'img/bomdia.png'
        document.body.style.background = '#FFF218'
    } else if (  horas >= 12 && horas <= 18  ) {
        // BOA TARDE
        title.innerHTML = `BOA TARDE`
        img.src = 'img/boatarde.png'
        document.body.style.background = '#FF810E'
    } else if ( horas >= 19 && horas <= 24 ) {
        //BOA NOITE
        title.innerHTML = `BOA NOITE`
        img.src = 'img/boanoite.png'
        document.body.style.background = 'black'
    } else {
        title.innerHTML = `NOT VALID`
    }

}
    