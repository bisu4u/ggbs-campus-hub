// ===== LOGIN PROTECTION =====

if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

// ===== WELCOME MESSAGE =====

const roll = localStorage.getItem("studentRoll");

document.getElementById("welcomeText").innerText =
"Welcome " + roll + " 👋";

// ===== LOGOUT FUNCTION =====

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}
