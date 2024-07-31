const questionTab=document.getElementById('questionTab');
        const optionBox=document.querySelector('.option');
        const nextBtn=document.getElementById('nextBtn');
        let getScore=0;
        let totalQuestion=1;
        let attemptQuestion=0;
        let correctAnswer=0;
        let wrongAnswer=0;
        let resultPercent=0;
        let timeTaken=0;

        //-------------------------------------Function to manage timer--------------------------------------
        let timeDisplay=document.getElementById('timer');
        let countDown;
        function startQuiz(){
            let time=100;
            timeDisplay.textContent=time;
            countDown=setInterval(()=>{
                time--;
                timeTaken++;
                timeDisplay.textContent=time;
                if(time<=0)
                {   
                    clearInterval(countDown);
                    result();
                    
                }
            },1000)
        }window.onload=function (){
            startQuiz();
        }

        //---------------------- Array of Objects to store questions and answers---------------------------
        let dsaQuiz=[{
                        question:"Which of the following is a linear data structure?",
                        option:["Array","AVL Trees","Bunary Trees","Graphs"],
                        answer:"Array"
                    },
                    {
                        question:"Which of the following is not the type of queue?",
                        option:["Priority queue","Single-ended queue","Circule queue","Ordinary queue"],
                        answer:"Single-ended queue"
                    },
                    {
                        question:"When a pop() operation is called on an empty queue, what is the condition called?",
                        option:["Overflow","Underflow","Syntax Error","Garbage Value"],
                        answer:"Underflow"
                    },
                    {
                        question:"Which of the following data structures can be used to implement queues?",
                        option:["Stack","Arrays","LinkedList","All of the above"],
                        answer:"All of the above"
                    },
                    {
                        question:"Which of the following data structures find its use in recursion?",
                        option:["Stack","Arrays","LinkedList","Queues"],
                        answer:"Stack"
                    },
                    {
                        question:"Which of the following data structures allow insertion and deletion from both ends?",
                        option:["Stack","Deque","Queue","String"],
                        answer:"Deque"
                    },
                    {
                        question:"Which of the following sorting algorithms provide the best time complexity in the worst-case scenario?",
                        option:["Merge Sort","Quick Sort","Bubble Sort","Selection Sort"],
                        answer:"Merge Sort"
                    },
                    {
                        question:"Which of the following is a Divide and Conquer algorithm?",
                        option:["Bubble Sort","Selection Sort","Heap Sort","Merge Sort"],
                        answer:"Merge Sort"
                    },
                    {
                        question:"Which of the following algorithms are used for string and pattern matching problems?",
                        option:["Z Algorithm","Rabin Karp Algorithm","KMP Algorithm","All of the above"],
                        answer:"All of the above"
                    },
                    {
                        question:"In a graph of n nodes and n edges, how many cycles will be present?",
                        option:["Exactly 1","At most 1","At most 2","Depends on the graph"],
                        answer:"Exactly 1"
                    }
                ];
        
        //-------------------------------------  Function to show question on page ---------------------------
        let currentQuestionNo=0;
        function showQuestion(){
            let questionDetail=dsaQuiz[currentQuestionNo];
            document.getElementById('que_no').innerHTML=(totalQuestion);
            document.getElementById("questionTab").innerHTML=questionDetail.question;
            // -------------- Make a loop to fatch and display options from array in the object -------------
            optionBox.textContent="";
            for(let i=0; i<questionDetail.option.length; i++)
            {
                let currentOption=questionDetail.option[i];
                
                const optionBtn=document.createElement('button');
                optionBtn.textContent=currentOption;
                optionBox.appendChild(optionBtn);
                //-------------------------------  To get selected option --------------------------------
                optionBtn.addEventListener('click', ()=>{
                    console.log(optionBtn);
                    if(optionBtn.classList.contains('selected')){
                        optionBtn.classList.remove('selected');
                        attemptQuestion--;
                    }
                    else{
                        optionBtn.classList.add('selected');
                        attemptQuestion++;
                    }
                    
                });
                
            }
            totalQuestion++;
            
        }

        //---------------------------------- Function to Check Answer-----------------------------------
        function checkAnswer(){
            const selectedOption=document.querySelector('.option .selected');
           
            if(selectedOption.textContent === dsaQuiz[currentQuestionNo].answer){
                getScore++;
                correctAnswer++;
                document.getElementById('get_score').innerHTML=getScore;

            }
            else{
                wrongAnswer++;
            }
            // ----- Check question index to display next question on click on next button ----------------
            currentQuestionNo++;
            if(currentQuestionNo < dsaQuiz.length){
                
                showQuestion();
                
            }
            else{
                result();
                
                
            }
        }

        //------------------------ Function create and display result on result page --------------------------
        function result(){
            calculatePercent();
            
                 localStorage.setItem("timeTaken", timer);
                localStorage.setItem("totalQuestion", dsaQuiz.length);
                localStorage.setItem("attempt", attemptQuestion);
                localStorage.setItem("correct", correctAnswer);
                localStorage.setItem("wrongAnswer", wrongAnswer);
                localStorage.setItem("percentage", resultPercent);
                localStorage.setItem("timeTaken", timeTaken);
                localStorage.setItem("quizName", "dsaquiz.html");
                location.replace("result.html");
        }

        //------------------------------------ Function oo Calculate percentage-------------------------
        function calculatePercent(){
            resultPercent=correctAnswer/0.1;
            console.log(resultPercent);
        }

        //---------------------------- To make an Event on click on Next button-------------------------
        showQuestion();
        nextBtn.addEventListener('click', ()=>{
            checkAnswer();
        });