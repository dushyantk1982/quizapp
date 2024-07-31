
//-----------------------------------Function to store User name in local Storage-------------------------------
function display_user(){
    let user_name = document.getElementById("uname").value;
    localStorage.setItem("username", user_name);
}

//-------------------------------------------Functions to open Quiz page---------------------------------------
function wordquiz(){
    location.replace("wordquiz.html");
}
function cssquiz(){
    location.replace("cssquiz.html");
}
function jsquiz(){
    location.replace("jsquiz.html");
}
function dsaquiz(){
    location.replace("dsaquiz.html");
}