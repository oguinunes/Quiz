const questions = [
    {
      question : "Qual é a capital do Brasil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital da Argentina?",
      choices: ["Buenos Aires", "Bariloche", "La Pampa", "Córdoba"],
      answer: "Buenos Aires",
    },
    {
      question: "Qual é a capital da França?",
      choices: ["Marseille", "Mônaco", "Paris", "Nantes"],
      answer: "Paris",
    },
    {
      question: "Qual é a capital da Espanha?",
      choices: ["Sevilla", "Madri", "Barcelona", "Valência"],
      answer: "Madri",
    },
    {
      question: "Qual é a capital da Itália?",
      choices: ["Veneza", "Milão", "Roma", "Nápoles"],
      answer: "Roma",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
  ]

  const questionElement = document.querySelector("#question")
  const choiceElements = document.querySelectorAll(".choices")
  const nextButtom = document.querySelector("#next")                   // Seleção das ID
  const scoreElement = document.querySelector("#score")
  const wrongElement = document.querySelector("#wrong")
  const restartButtom = document.querySelector("#restart")

  let currentQuestion = 0
  let score = 0
  let  wrong = 0
  let answerChosen = false //Verifica se já foi respondido

  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion]
    questionElement.innerText = currentQuestionData.question

    const choices = shuffleArray(currentQuestionData.choices) //foi passada a func aleatória
    for (let i = 0; i < choices.length; i++) {
        choiceElements[i].innerText = choices[i]
    }
    answerChosen = false
}

function shuffleArray(array){
   let currentIndex = array.length
   let temporaryValue
   let randomindex

   while(0 !== currentIndex){
    randomindex = Math.floor(Math.random() * currentIndex) //percorre array
    currentIndex -=1 //retira 1 a cada loop

    temporaryValue  = array[currentIndex]
    array[currentIndex] = array[randomindex]
    array[randomindex] = temporaryValue
   }
   return array;
}

function checkAnswer(e){

    if(answerChosen)return

    answerChosen = true

    if (e.target.innerText === questions[currentQuestion].answer){
        //Pegar evento com innerText, e verify if is right 
        score++
        scoreElement.innerText = `Pontuação: ${score}/8`
       alert("Correto!")
        }else{
            wrong++
            wrongElement.innerText = `Erros: ${wrong}/8`
            alert("A resposta está incorreta")
        }
        
    }
    
choiceElements.forEach((btn)=>{
    btn.addEventListener("click", checkAnswer)
    }) //função que ao receber click dispara a func check

nextButtom.addEventListener("click", ()=>{
    if (!answerChosen){
        alert("Por favor, responda a pergunta.")
    return
    }
    currentQuestion ++ //faz alterar a question

    if (currentQuestion < questions.length)
    loadQuestion()
    })

function reniciar(evento){
    let currentQuestion = 0
    scoreElement.innerText = "Pontuação: 0 "
    wrongElement.innerText = "Errso: 0"
    let answerChosen = false 
        
    loadQuestion()
    }

restartButtom.addEventListener("click", ()=>{
    if(currentQuestion => questions.length){
        reniciar()
    }

})
      
loadQuestion();


