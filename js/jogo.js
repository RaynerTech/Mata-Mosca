//escopo global
var altura = 0
var largura = 0
var lifes = 1
var time = 11

function telaDoJogo(){//escopo da função

     altura = window.innerHeight//sendo o escopo da função nao recebera a palavra resevada (var)
     largura = window.innerWidth
//altura e largura da minha tela
    console.log(largura, altura)
}


telaDoJogo()

var stopwatch = setInterval(function(){
    time = time - 1

    if(time < 0){
        clearInterval(stopwatch)//Limpar essa função da memoria
        clearInterval(createMosca) 
        alert('Vitoria')
    }else{
    document.getElementById('stopwatch').innerHTML = time
    }
}, 1000)


//posição Randomica do personagem 

function positionRandom(){//função Criada com o Obejetivo de corrigir o erro de precedencia do html entre o script e o body sendo chamado com o document.body 

    //Remover a mosca anterior (caso exista)
    if(document.getElementById('mosca')){ // com esse teste o java script tera inteligencia e reconhecer que é true
    document.getElementById('mosca').remove()
//console.log('Elemento selecionado Foi: v' +  lifes)
if(lifes > 3){
    

    window.location.href = 'fim_jogo.html'
}else{
document.getElementById('l' + lifes).src="imagens/coracao_vazio.png"

    lifes++ 
//incrementando mais uma unidade na variavel vidas para deixar o elemento html dinamico
}

}

    var positionX = Math.floor(Math.random() * largura) - 90//Decrementado o valor para a imagem n ultrapassar o tamanho da tela n criar a barra de rolagem
    var positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionY < 0 ? 0 : positionX //Evitando que a posição seja menor que zero 0 da imagem deviso ao decremento - 90
    positionY = positionX < 0 ? 0 : positionY

    console.log(positionX,positionY)

//criando o elemento html utilizando o Dom

    var mosca = document.createElement('img')//criando elementos 
    mosca.src = 'imagens/mosca.png'//incluindo a imagem de forma progamatica
    mosca.className = tamAleatorio() + ' ' + ladoAlado()//Chamando a função como complemento para a classe
    mosca.style.left = positionX + 'px'
    mosca.style.top = positionY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove()
//usando a função remove terei que idicar o elemento que será removido então podemos usar o -
//Operador this pq ele faz referencia ao proprio elemento html(mosca) que executa a função
    }

    document.body.appendChild(mosca)//acessando o bady da pagina e adcionado um filho


}

function tamAleatorio(){
    var classe = Math.floor(Math.random() * 3)// resultado sera entre 0 e proximo de 3
    

    if(classe == 0){
        return 'mosca1'// não precisa do break pois o retun é a ultimo intrução da função quando o intepretador ler a intrução o processamento da funçao sera interompida 
    }

    if(classe == 1){
        return 'mosca2'
    }

    if(classe == 2){
        return 'mosca3'
    }
}

function ladoAlado(){
    var classe = Math.floor(Math.random() * 2)
    

    if(classe == 0){
        return 'ladoA'
    }

    if(classe == 1){
        return 'ladoB'
    }


}