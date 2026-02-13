// ===== LOGIN PROTECTION =====

if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

// ===== CLUB DATA =====

const clubs = [

{
name:"Programming Club",
desc:"Coding & Development Activities",
img:"https://www.amity.edu/aiit/club/Programming/images/background.jpg"
},

{
name:"Business Club",
desc:"Entrepreneurship & Marketing",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRL2_T_NuR2E4kMPjVwyQ6cRBvO16u2UuPCw&s"
},

{
name:"Cultural Club",
desc:"Dance, Music & Events",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oRCByV841RykD208qnvk7BPY3jfEfIiGTA&s"
},
{
name:"Sports Club",
desc:"Football, Cricket & Athletics",
img:"https://www.shutterstock.com/shutterstock/photos/619454717/display_1500/stock-vector-vector-sport-club-with-sports-ball-and-equipment-619454717.jpg"
},
{
name:"Art Club",
desc:"Painting, Sketching & Crafts",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_9RvROrc70CxBY1Nv4a8w3sA-LG8BEkFag&s"
},
{name:"Tech Club",
desc:"AI, Robotics & Innovation",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47AknDmMGe8Zhcqd-coyDBsqFyCmjk169Ww&s"
},
{name:"Literary Club",
desc:"Writing, Debates & Poetry",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mXA0TKvRpr6drzIS5rzp6JbVoOFRGnMovQ&s"
},
{name:"Environmental Club",
desc:"Sustainability & Awareness",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYUvKYQu8xEgTrEAG-rDmfhGM4Eh9kBjivQ&s"
},
{name:"Photography Club",
desc:"Photo Walks & Exhibitions",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMFE9ZdLgCAlwt7ToCiX14WWwqROPtYNcrQ&s"
},
{name:"Drama Club",
desc:"Theatre & Performances",
img:"https://upload.wikimedia.org/wikipedia/en/b/b3/DramaClubLogo.png"
},
{name:"Music Club",
desc:"Instrumental & Vocal Music",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWT5nQqf7LAg1mUqq1YomwTHi1uJ8w60HHBA&s"
},
{name:"Dance Club",
desc:"Classical & Contemporary Dance",
img:"https://img.freepik.com/premium-vector/vector-logo-dance-club-that-says-dance-club_1107171-3823.jpg?semt=ais_hybrid&w=740&q=80"
}

];

// ===== OPPORTUNITY DATA =====

const opportunities = [

{
title:"TCS Internship",
type:"Software Development Internship"
},

{
title:"Startup Hackathon",
type:"Innovation Challenge"
},

{
title:"Scholarship Program",
type:"Academic Excellence Scholarship"
},
{
title:"Tech Conference",
type:"Industry Networking Event"
},
{title:"Coding Bootcamp",
type:"Intensive Programming Course"
},
{title:"Business Plan Competition",
type:"Entrepreneurship Contest"
},
{title:"Cultural Fest",
type:"College-wide Cultural Event"
},
{title:"Sports Tournament",
type:"Inter-college Sports Competition"
},
{title:"Art Exhibition",
type:"Showcase of Student Artwork"
},
{title:"Literary Magazine",
type:"Publication of Student Writing"
},
{title:"Environmental Drive",
type:"Campus Clean-up & Awareness"
},
{title:"Photography Contest",
type:"Photo Competition with Prizes"
},
{title:"Drama Festival",
type:"Theatre Performances & Awards"
},
{title:"Music Concert",
type:"Live Music Event Featuring Student Bands"
},
{title:"Dance Workshop",
type:"Dance Training Sessions with Professionals"
},
{title:"AI Symposium",
type:"Conference on Artificial Intelligence"
},
{title:"Robotics Workshop",
type:"Hands-on Robotics Training"
},
{title:"Entrepreneurship Summit",
type:"Event for Aspiring Entrepreneurs"
},
{title:"Sustainability Forum",
type:"Discussion on Environmental Issues"
},
{title:"Photography Exhibition",
type:"Display of Student Photography"
},
{title:"Drama Competition",
type:"Theatre Contest with Awards"
},
{title:"Music Festival",
type:"Multi-day Music Event with Performances"
},
{title:"Dance Competition",
type:"Dance Contest with Prizes"
}
];

const clubContainer = document.getElementById("clubContainer");
const opContainer = document.getElementById("opportunityContainer");

// ===== DISPLAY CLUBS =====

clubs.forEach(club => {

clubContainer.innerHTML += `
<div class="club-card">
    <img src="${club.img}">
    <h3>${club.name}</h3>
    <p>${club.desc}</p>
    <button onclick="joinClub('${club.name}')">Join Club</button>
</div>
`;

});

// ===== DISPLAY OPPORTUNITIES =====

opportunities.forEach(op => {

opContainer.innerHTML += `
<div class="op-card">
    <h3>${op.title}</h3>
    <p>${op.type}</p>
    <button onclick="applyOpportunity('${op.title}')">
    Apply
    </button>
</div>
`;

});

// ===== JOIN CLUB =====

function joinClub(name){
    alert("Successfully Joined " + name);
}

// ===== APPLY OPPORTUNITY =====

function applyOpportunity(title){
    alert("Application Sent for " + title);
}

// ===== LOGOUT =====

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}
