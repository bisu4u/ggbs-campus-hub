// Sample Student Login Data

const students = [
    {roll:"23BCA001", dob:"2005-01-10"},
    {roll:"23BBA002", dob:"2004-05-01"},
    {roll:"23BSC003", dob:"2005-03-05"}
];

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const roll = document.getElementById("roll").value;
    const dob = document.getElementById("dob").value;

    const validUser = students.find(student =>
        student.roll === roll && student.dob === dob
    );

    if(validUser){

        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("studentRoll", roll);

        window.location.href = "dashboard.html";

    }
    else{
        document.getElementById("errorMsg").innerText =
        "Invalid Roll Number or DOB";
    }
    if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

});
