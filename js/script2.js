const elementoResposta = document.querySelector("#resposta")

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
    
    const totalRespostas = respostas.length

    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    console.log(respostas[numeroAleatorio])
  
} 
