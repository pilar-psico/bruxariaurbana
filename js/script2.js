const elementoResposta = document.querySelector("#resposta")

const inputPergunta = document.querySelector("#inputPergunta")

const respostas = [
    "Sim",
    "Provavelmente",
    "Não",
    "Talvez",
    "Certeza!",
    "Não conte com isso",
    "Sim, definitivamente",
    "Minha resposta é não",
    "Melhor não responder agora",
    "Perspectiva é boa",
    "Concentre-se na pergunta novamente",
    "Sinais apontam que sim",
]

function fazerPergunta() {
   if(inputPergunta.value == "") {
    alert ("Digite sua pergunta")
    return
   }
    const pergunta = "<div>" + inputPergunta.value + "</div>" 

    const totalRespostas = respostas.length

    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  
    setTimeout(function(){
        elementoResposta.style.opacity = 0;
    }, 3000)
} 
