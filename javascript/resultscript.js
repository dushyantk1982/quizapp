
//------------------------------------------- Display the result on result page------------------------

document.getElementById('name').innerHTML=localStorage.getItem('username');
document.getElementById('timeTaken').innerHTML=localStorage.getItem('timeTaken');
document.getElementById('totalQuestion').innerHTML=localStorage.getItem('totalQuestion');
document.getElementById('attempt').innerHTML=localStorage.getItem('attempt');
document.getElementById('correct').innerHTML=localStorage.getItem('correct');
document.getElementById('wrongAnswer').innerHTML=localStorage.getItem('wrongAnswer');
document.getElementById('percentage').innerHTML=localStorage.getItem('percentage');

// ---------------------------------------Function to move back on index page --------------------------
function home(){
    location.replace("index.html");
}

// -------------------------------------- Function to move back on quiz page ---------------------------
function again(){
    let quizName=localStorage.getItem('quizName');
    location.replace(quizName);
}
