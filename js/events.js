// ===== LOGIN PROTECTION =====

if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

// ===== SAMPLE EVENTS DATA =====

const events = [

{
title:"Tech Fest 2026",
date:"March 15, 2026",
img:"https://scontent.fbbi2-2.fna.fbcdn.net/v/t39.30808-6/627232497_122124845685055023_125811066242853556_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=J4oodS_mmVQQ7kNvwHjI6tO&_nc_oc=AdkeaUtuuqkqu7U5ETsSRQEubEkOmcxNQPaimTv4Df4jL8jExUU4dA1_mBnGmzerpeKn7x3UJwx4730LtNurCNPY&_nc_zt=23&_nc_ht=scontent.fbbi2-2.fna&_nc_gid=oMi8sXs4l2rpPEVRaFNLqg&oh=00_Aftp2MzEMsWBIQTCheQZQOaXzgb-Pw3OuURtgKeebbyL8w&oe=69920852"
},

{
title:"Business Seminar",
date:"April 2, 2026",
img:"https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/581960858_122111503221055023_6736021379227347958_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t7CzR1QgFWkQ7kNvwFjxgNI&_nc_oc=AdnnNjKTMBJ8xIHlw4R28LfW-gi5OdTiUBWVZCUyZOIIaoA7YFqUziFCkQIpDbXYiRL4A21TJRvObBZzi7rRC6aG&_nc_zt=23&_nc_ht=scontent.fbbi2-1.fna&_nc_gid=sw3XGctQiyCIoM2rAioiQA&oh=00_AfvbHdR_VPCeIwE4S76Sf6gbC6eLAw5Pl4fOQTnuK2eb3w&oe=6991DBC5"
},

{
title:"Picnic Day",
date:"May 10, 2026",
img:"https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/597528004_122115868125055023_7386724866611479059_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=f3f_NLUv6aEQ7kNvwGTqZMl&_nc_oc=AdmorfD3DUHOOue_xjYSXBHaDMlaVGwcQLMesc2dGCFKmpTEV2do1A9WHxUISX3ejHNKHQk0HyjWC8GxCKycXm-n&_nc_zt=23&_nc_ht=scontent.fbbi2-1.fna&_nc_gid=zVE2HfjSw8BiRaAWFzjqvw&oh=00_Afs5DTEqxCv0qKXZqwahlFPMbXba-KSzEex5q9ty9u0oNg&oe=69920672"
},
{title:"Cultural Fest", 
date:"June 20, 2026", 
img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQTeCyCI8LSeyLjEPA563s0frr1b8uVubmL9B_fJclWRu9KU7LZySU2RYMA293CiLuPQEHfFr2Fpk8R-UqSaSTAAzqKfTccV5ZFj-2dyiqjp80xudl6guvCAtghqeDZ_MmIo2xrNgcqS9-05=w600-h321-p-k-no"
},
{title:"Sports Meet",
date:"July 5, 2026",
img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQTeCyCI8LSeyLjEPA563s0frr1b8uVubmL9B_fJclWRu9KU7LZySU2RYMA293CiLuPQEHfFr2Fpk8R-UqSaSTAAzqKfTccV5ZFj-2dyiqjp80xudl6guvCAtghqeDZ_MmIo2xrNgcqS9-05=w600-h321-p-k-no"
},
{title:"Alumni Meet",
date:"August 15, 2026",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp1CrIsvyl7l40_jmoe1qQ5AzHnzTmPTFQUQ&s"
},
{title:"Tech Workshop",
date:"September 10, 2026",
img:"https://images.stockcake.com/public/a/c/a/acab564e-09d8-4aef-8f1e-499156d0ca20_large/tech-workshop-interior-stockcake.jpg"
},
{title:"Entrepreneurship Summit",
date:"October 5, 2026",
img:"https://s3.amazonaws.com/industryevents/events/logo/1962303/original/World_Entrepreneur_Summit_Event.jpg?1721205475"
},
{title:"Art Exhibition",
date:"November 20, 2026",
img:"https://www.shutterstock.com/image-vector/art-gallery-logo-artistic-pencil-260nw-1120528202.jpg"
},
{title:"Music Concert",
date:"December 10, 2026",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxlWPQWgk1KslD2Ft-aHq6aUZqkliQXlkVw&s"
},
{title:"Drama Festival",
date:"January 15, 2027",
img:"https://media.assettype.com/sentinelassam-english%2F2026-01-06%2Fd6nd6h54%2Fdrama-festival.avif?w=480&dpr=2&auto=format%2Ccompress&fit=max&q=85"
},
{title:"Literary Fest",
date:"February 5, 2027",
img:"https://whatson.guide/wp-content/uploads/2023/12/5-Most-Popular-Literary-Festivals-of-India-in-2024.jpg"
},
{title:"Environmental Drive",
date:"March 30, 2027",
img:"https://thumbs.dreamstime.com/b/modern-environmental-logo-green-plant-leaves-sky-clouds-400574750.jpg"
},
{title:"Photography Contest",
date:"April 25, 2027",
img:"https://st2.depositphotos.com/3391779/8427/v/950/depositphotos_84270416-stock-illustration-vector-photography-logo-design-template.jpg"
}
];

const container = document.getElementById("eventsContainer");

// ===== DISPLAY EVENTS =====

events.forEach(event => {

container.innerHTML += `
<div class="event-card">
    <img src="${event.img}">
    <div class="content">
        <h3>${event.title}</h3>
        <p>${event.date}</p>
        <button onclick="registerEvent('${event.title}')">
        Register
        </button>
    </div>
</div>
`;

});

// ===== REGISTER EVENT =====

function registerEvent(eventName){
    alert("Successfully Registered for " + eventName);
}

// ===== LOGOUT =====

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}
