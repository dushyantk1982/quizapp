
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
        let cssQuiz=[{
                        question:"How can we change the background color of an element?",
                        option:["background-color","color","Both A and B","None of the above"],
                        answer:"background-color"
                    },
                    {
                        question:"In how many ways can CSS be written in?",
                        option:["1","3","2","4"],
                        answer:"3"
                    },
                    {
                        question:"What type of CSS is generally recommended for designing large web pages?",
                        option:["Inline","Internal","External","None of the above"],
                        answer:"External"
                    },
                    {
                        question:"Can negative values be allowed in padding property?",
                        option:["Yes","No","Depends on property","None of the above"],
                        answer:"No"
                    },
                    {
                        question:"The CSS property used to specify the transparency of an element is?",
                        option:["Opacity","Visibility","Filter","No of the above"],
                        answer:"Opacity"
                    },
                    {
                        question:"How can we specify the spacing between each letter in a text in CSS?",
                        option:["alpha-spacing","letter-spacing","Character-spacing","None of the above"],
                        answer:"Landscape"
                    },
                    {
                        question:"Which of the following are valid ways to represent a colour in CSS?",
                        option:["A valid color name","RGB value","HEX Value","All of the above"],
                        answer:"All of the above"
                    },
                    {
                        question:"We can make rounded borders around elements using which CSS element?",
                        option:["border-collapse","border-round","border-radius","None of above"],
                        answer:"border-radius"
                    },
                    {
                        question:"How can we set the maximum width of the elements content box using CSS?",
                        option:["height property","max-height property","max-width property","None of the above"],
                        answer:"max-width property"
                    },
                    {
                        question:"Which CSS property is used to specify different border styles?",
                        option:["border-style","border","Both A and B","None of the above"],
                        answer:"border-style"
                    }
                ];
        
        //-------------------------------------  Function to show question on page ---------------------------
        let currentQuestionNo=0;
        function showQuestion(){
            let questionDetail=cssQuiz[currentQuestionNo];
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
           
            if(selectedOption.textContent === cssQuiz[currentQuestionNo].answer){
                getScore++;
                correctAnswer++;
                document.getElementById('get_score').innerHTML=getScore;

            }
            else{
                wrongAnswer++;
            }
            // ----- Check question index to display next question on click on next button ----------------
            currentQuestionNo++;
            if(currentQuestionNo < cssQuiz.length){
                
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
                localStorage.setItem("totalQuestion", cssQuiz.length);
                localStorage.setItem("attempt", attemptQuestion);
                localStorage.setItem("correct", correctAnswer);
                localStorage.setItem("wrongAnswer", wrongAnswer);
                localStorage.setItem("percentage", resultPercent);
                localStorage.setItem("timeTaken", timeTaken);
                localStorage.setItem("quizName", "cssquiz.html");
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