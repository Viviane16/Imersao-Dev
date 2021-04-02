let cartaMulherMaravilha = {
    nome: "Mulher Maravilha",
    imagem: "https://www.einerd.com.br/wp-content/uploads/2017/05/Mulher-Maravilha-890x466.jpg",
    atributos: {
        poder: 90,
        veloc: 87, 
        cura: 80
    }
}

let cartaSupergirl = {
    nome: "Supergirl",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_795466-MLB27432393839_052018-O.jpg",
    atributos: {
        poder: 100,
        veloc: 100,
        cura: 95
    }
}

let cartaSuperman = {
    nome: "Superman",
    imagem: "https://terraverso.com.br/wp-content/uploads/2017/09/Man-of-Steel-800x445.jpg",
    atributos: {
        poder: 97,
        veloc: 100,
        cura: 90
    }
}

let cartaArqueiroVerde = {
    nome: "Arqueiro Verde",
    imagem: "https://www.jornadageek.com.br/wp-content/uploads/2018/08/arrow-6-temporada-e1535412419337.jpg",
    atributos: {
        poder: 65,
        veloc: 29,
        cura: 20
    }
}

let cartaMulherGato = {
    nome: "Mulher Gato",
    imagem: "https://quadrinheiros.files.wordpress.com/2019/04/film_review_dark_knight_rises-085d2-4549.jpg?w=415&h=269",
    atributos: {
        poder: 65,
        veloc: 25,
        cura: 17
    }
}

let cartaBatman = {
    nome: "Batman",
    imagem: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2020/08/21/batman-ben-affleck-justice-league.jpg",
    atributos: {
        poder: 70,
        veloc: 30,
        cura: 15
    }
}

let cartaFlash = {
    nome: "Flash",
    imagem: "https://img.ibxk.com.br//ms/images/highlights/000/052/597/49548.jpg?w=1200&h=675&mode=crop&scale=both",
    atributos: {
        poder: 91,
        veloc: 100,
        cura: 99
    }
}

let cartaLanternaVerde = {
    nome: "Lanterna Verde",
    imagem: "https://www.ospaparazzi.com/imagem/201108/19103526.jpg",
    atributos: {
        poder: 79,
        veloc: 69,
        cura: 85
    }
}

let cartaAquaman = {
    nome: "Aquaman",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvz3LPNe0DBUSOKjirpD83Z13wZ1FdASKu6A&usqp=CAU",
    atributos: {
        poder: 80,
        veloc: 69,
        cura: 87
    }
}

let cartas = [cartaMulherMaravilha, cartaSupergirl, cartaSuperman, cartaArqueiroVerde, cartaMulherGato, cartaBatman, cartaFlash, cartaLanternaVerde, cartaAquaman]
let cartaMaquina;
let cartaJogador;

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 9)
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = parseInt(Math.random() * 9)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 9)
    }
    cartaJogador = cartas[numeroCartaJogador]

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    let divCartaJogador = document.getElementById('carta-jogador')
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`
    let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    let opcoesTexto = ""

    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    let html = '<div id="opcoes" class="carta-status">'
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    let radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    let divResultado = document.getElementById('resultado')
    let atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
    }
    else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
    }
    else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
}

function exibeCartaMaquina() {
    let divCartaMaquina = document.getElementById('carta-maquina')
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png"style=" width: inherit; height: inherit; position: absolute;">'

    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    let opcoesTexto = ""

    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    let html = '<div id="opcoes" class="carta-status">'

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}
