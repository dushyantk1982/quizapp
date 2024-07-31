
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
        let wordQuiz=[{
                        question:"Microsoft word is ____ software.",
                        option:["Application","Compiler","System","Programming"],
                        answer:"Application"
                    },
                    {
                        question:"Which is not in MS Word?",
                        option:["Italic","Magic tool","Font","Bold"],
                        answer:"Magic tool"
                    },
                    {
                        question:"Which cannot be used to work in MS Office?",
                        option:["Joystick","Scanner","Light Pen","Mouse"],
                        answer:"Joystick"
                    },
                    {
                        question:"Which is not an edition of MS Word?",
                        option:["MS Word 2003","MS Word 2007","MS Word 2010","MS Word 1020"],
                        answer:"MS Word 1020"
                    },
                    {
                        question:"What is the blank space outside the printing area on a page?",
                        option:["Clipart","Margins","Header","Footer"],
                        answer:"Margins"
                    },
                    {
                        question:"Which of the following is an example of page orientation?",
                        option:["Landscape","Subscript","Superscript","A4"],
                        answer:"Landscape"
                    },
                    {
                        question:"Which of the following software is used for making a resume?",
                        option:["MS Excel","MS Word","Dev C","Java"],
                        answer:"MS Word"
                    },
                    {
                        question:"Which enables us to send the same letter to different people?",
                        option:["Macros","Template","Mail merge","None of above"],
                        answer:"Mail merge"
                    },
                    {
                        question:"Which can be used for quick access to commonly used commands and tools?",
                        option:["Status bar","Toolbar","Menu bar","Title bar"],
                        answer:"Toolbar"
                    },
                    {
                        question:"Which bar shows the current position as far as the text goes?",
                        option:["Title bar","Menu bar","Scroll bar","Status bar"],
                        answer:"Status bar"
                    }
                ];
        
        //-------------------------------------  Function to show question on page ---------------------------
        let currentQuestionNo=0;
        function showQuestion(){
            let questionDetail=wordQuiz[currentQuestionNo];
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
           
            if(selectedOption.textContent === wordQuiz[currentQuestionNo].answer){
                getScore++;
                correctAnswer++;
                document.getElementById('get_score').innerHTML=getScore;

            }
            else{
                wrongAnswer++;
            }
            // ----- Check question index to display next question on click on next button ----------------
            currentQuestionNo++;
            if(currentQuestionNo < wordQuiz.length){
                
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
                localStorage.setItem("totalQuestion", wordQuiz.length);
                localStorage.setItem("attempt", attemptQuestion);
                localStorage.setItem("correct", correctAnswer);
                localStorage.setItem("wrongAnswer", wrongAnswer);
                localStorage.setItem("percentage", resultPercent);
                localStorage.setItem("timeTaken", timeTaken);
                localStorage.setItem("quizName", "wordquiz.html");
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