console.log('connected');

const quizeData =  [
    {
        question: 'What is the day today',
    a:'mon',
    b:'tue',
    c:'wed',
    d:'thu',
    correct: 'c'
   },{
       question:'Which is the best programming language?',
       a:'java',
       b:'c++',
       c:'python',
       d:'javascript',
       correct:'d'
   },{
       question:'Who is the PM of india?',
       a:'Rahul Gandhi',
       b:'Modi',
       c:'Arvind Kejriwal',
       d:'yogi Aditynath',
       correct:'b'
   }
   
   
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEle = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('sub');

let currentQuiz =0;
let score =0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizeData[currentQuiz];
    questionEle.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected(){
   
    let answer = undefined;
    answerEls.forEach((answerEl) =>{
        if(answerEl.checked){
           answer =  answerEl.id;
        } 
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
    });


}



submitBtn.addEventListener('click',() =>{
    //to validate
    const answer = getSelected();

    if(answer){
        if(currentQuiz === quizeData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
         if(currentQuiz < quizeData.length){
           loadQuiz();
         }
         else{
    
             //show results
             quiz.innerHTML = `<h2> you answered correctly at ${score}/${quizeData.length} question.</h2>
             
             <button onclick= "location.reload()">Reload</button>`;
         } 
    }
    
});