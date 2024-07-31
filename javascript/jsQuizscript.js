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
        let jsQuiz=[{
                        question:"When an operator’s value is NULL, the typeof returned by the unary operator is:",
                        option:["Boolean","Undefined","Object","Integer"],
                        answer:"Object"
                    },
                    {
                        question:"Which function is used to serialize an object into a JSON string in javascript",
                        option:["stringify","parse","convert","None of the above"],
                        answer:"stringify"
                    },
                    {
                        question:"Which of the following are closures in Javascript?",
                        option:["Variables","Functions","Objects","All of the above"],
                        answer:"All of the above"
                    },
                    {
                        question:"Which of the following are not server-side Javascript objects?",
                        option:["Date","FileUpload","Function","All of the above"],
                        answer:"All of the above"
                    },
                    {
                        question:"Which of the following is not a Javascript framework?",
                        option:["Node","Vue","React","Cassandra"],
                        answer:"Cassandra"
                    },
                    {
                        question:"Which of the following keywords is used to define a variable in Javascript?",
                        option:["var","let","Both A and B","None of the above"],
                        answer:"Both A and B"
                    },
                    {
                        question:"How can a datatype be declared to be a constant type?",
                        option:["const","var","let","constant"],
                        answer:"const"
                    },
                    {
                        question:"How to stop an interval timer in Javascript?",
                        option:["clearinterval","clearTimer","intervalOver","None of above"],
                        answer:"clearinterval"
                    },
                    {
                        question:"Javascript is an _______ language?",
                        option:["Object-Oriented","Object-Based","Procedural","None of the above"],
                        answer:"Object-Oriented"
                    },
                    {
                        question:"The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?",
                        option:["Object Serialization","Object Encapsulation","Object Inheritance","None of the above"],
                        answer:"Object Serialization"
                    }
                ];
        
        //-------------------------------------  Function to show question on page ---------------------------
        let currentQuestionNo=0;
        function showQuestion(){
            let questionDetail=jsQuiz[currentQuestionNo];
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
           
            if(selectedOption.textContent === jsQuiz[currentQuestionNo].answer){
                getScore++;
                correctAnswer++;
                document.getElementById('get_score').innerHTML=getScore;

            }
            else{
                wrongAnswer++;
            }
            // ----- Check question index to display next question on click on next button ----------------
            currentQuestionNo++;
            if(currentQuestionNo < jsQuiz.length){
                
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
                localStorage.setItem("totalQuestion", jsQuiz.length);
                localStorage.setItem("attempt", attemptQuestion);
                localStorage.setItem("correct", correctAnswer);
                localStorage.setItem("wrongAnswer", wrongAnswer);
                localStorage.setItem("percentage", resultPercent);
                localStorage.setItem("timeTaken", timeTaken);
                localStorage.setItem("quizName", "jsquiz.html");
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