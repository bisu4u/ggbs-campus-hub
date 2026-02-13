// ===== LOGIN PROTECTION =====

if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

// ===== SAMPLE NOTES DATA =====

let notes = [

    {title:"DBMS Notes", subject:"Database", dept:"BCA"},
    {title:"Marketing Basics", subject:"Marketing", dept:"BBA"},
    {title:"Python Programming", subject:"Programming", dept:"BSC"},
    {title:"Operating System", subject:"OS", dept:"BCA"},
    {title:"Financial Management", subject:"Finance", dept:"BBA"},
    {title:"Data Science", subject:"Data Analysis", dept:"BSC"},
    {title:"Web Development", subject:"Frontend & Backend", dept:"BCA"},
    {title:"Business Strategy", subject:"Strategy & Planning", dept:"BBA"},
    {title:"Machine Learning", subject:"AI & ML", dept:"BSC"},
    {title:"Software Engineering", subject:"Software Development", dept:"BCA"},
    {title:"Digital Marketing", subject:"Online Marketing", dept:"BBA"},
    {title:"Cloud Computing", subject:"Cloud Technologies", dept:"BSC"},
    {title:"Data Structures", subject:"Programming", dept:"BCA"},
    {title:"Organizational Behavior", subject:"HR & Management", dept:"BBA"},
    {title:"Cybersecurity", subject:"Security & Networks", dept:"BSC"},
    {title:"Computer Networks", subject:"Networking", dept:"BCA"},
    {title:"Entrepreneurship", subject:"Startup & Innovation", dept:"BBA"},
    {title:"Big Data Analytics", subject:"Data Analysis", dept:"BSC"},
    {title:"Mobile App Development", subject:"App Development", dept:"BCA"},
    {title:"Financial Accounting", subject:"Accounting Principles", dept:"BBA"},
    {title:"Artificial Intelligence", subject:"AI Concepts", dept:"BSC"},
    {title:"Software Testing", subject:"Testing Methodologies", dept:"BCA"},
    {title:"Supply Chain Management", subject:"Logistics & Operations", dept:"BBA"},
    {title:"Data Visualization", subject:"Data Analysis", dept:"BSC"},
    {title:"Computer Architecture", subject:"Hardware & Architecture", dept:"BCA"}

];

const container = document.getElementById("notesContainer");

// ===== DISPLAY NOTES =====

function displayNotes(list){

    container.innerHTML = "";

    list.forEach(note => {

        container.innerHTML += `
        <div class="note-card">
            <h3>${note.title}</h3>
            <p>${note.subject}</p>
            <p>${note.dept}</p>
            <button onclick="downloadNote()">Download</button>
        </div>
        `;
    });

}

displayNotes(notes);

// ===== FILTER FUNCTION =====

function filterResources(){

    const dept = document.getElementById("deptFilter").value;

    if(dept === "All"){
        displayNotes(notes);
    }
    else{
        const filtered = notes.filter(n => n.dept === dept);
        displayNotes(filtered);
    }
}

// ===== DOWNLOAD SIMULATION =====

function downloadNote(){
    alert("Download Started (Simulation)");
}

// ===== UPLOAD NOTES =====

const form = document.getElementById("uploadForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const dept = document.getElementById("uploadDept").value;

    notes.push({title, subject, dept});

    displayNotes(notes);

    alert("Notes Uploaded Successfully");

    form.reset();

});

// ===== LOGOUT =====

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}
