// ===== LOGIN PROTECTION =====

if(localStorage.getItem("loggedIn") !== "true"){
    window.location.href = "login.html";
}

// ===== SAMPLE STUDENT DATA =====

const students = [

    {name:"Shreedhar Lenka", dept:"BCA", skill:"Web Developer", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQQ_XzsXISTtab2OzIOKi2HwDKPO91OakGKdeZXuPYvNxIf8w4EIrDUq9IoMODzUQmT8Q_GKj_7tasyf3wVTxpSwrPY4RcZcmSO9ic7Jb1myUDJY3cRVDgXRAlzdS8VtCk3qas8emKs-cH2d=w600-h988-p-k-no"},
    {name:"Badal sahu", dept:"BBA", skill:"Marketing", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQTPbzt8kJpE_mNlAtk68LfgysVqh3CQDP4bCLNoDu_BLNKSvRw34LGq5Ykqgqgt-8l-sWU8pA7bGOpSOFwROwC8qp2pJqOiO4uwv6zajkt25TBNtUDl_Z_kYVFlbb92HeLIsG_MllJG-gE=w600-h988-p-k-no"},
    {name:"Biswajit Jena", dept:"BSC", skill:"Python", img:"https://lh3.googleusercontent.com/p/AF1QipNhM61jJEf9lz3OH5kolob9maIfNzGKSw7BD4tF=s680-w680-h510-rw"},
    {name:"J. Subham Achary", dept:"BCA", skill:"UI Designer", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQTbeIy3YVVKbaxJAhJF0n2gVoib6z9zm2bBCRnT4Xz9i9Q5y6_xaePNg5knO1i06bZtc00dpWVBU1uWoJtbCBQ_LgbCQ11i5o7xQxMwFRcLrQSDOc8CPTV7fJrqTj3Ntt8VPzFEkVYP_tF-=w600-h485-p-k-no"},
    {name:"Amrut Panda", dept:"BBA", skill:"Finance", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQT_AGpCPAgbjSu0O5YT87kyswWWU1LvNnXy2jfQnoBQdr4FpioixPDoZql4KeuhLTyArGWldGVQCKWIElczjD1qV-7K4TiaX4qaRf4SesNWeFGvY1z8JYapEupRkiCRc77qRlckcaraXVCT=w600-h988-p-k-no"},
    {name:"Y. Sai", dept:"BSC", skill:"Data Science", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQQf5Ax-tenL6gxMKcxocydkgeyz4VUT2V-xWowEXnznBkcF3D27De7ag3AMJSkpxSBbULUrdjgqKAhEyyXN6ULlMX6OQgQldpwvAGxv9tQHLJxbQSxQJlqvlZyjEb94OOhItX5kKK8b7ml8=w600-h485-p-k-no"},
    {name:"Prajwalika Pal", dept:"BCA", skill:"Mobile App Developer", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQSxRS_5XVUU2bnihH_4l5okT3eER-qUArrxoWqkJNu0TswmcpkYdfcEzFQ7zLQrz9Ht47xQg2D69kNS3J4JveRXDHQlSyUb-GxGSKCpdQK9h1S3xOMOyM3W19NWwL6UlSX47ZKVZOYCAeMr=w600-h988-p-k-no"},
    {name:"Chandra Sekhar Sahu", dept:"BBA", skill:"Entrepreneurship", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQS_WhjnER7O3eN754PHavacTXuxNpZvx-elbOAtU0j7QKSZ93dq2NZRJE5IxfxgmXis25UEgTyePG8h-dvOVzOXYvkUkRS_34Tucw1PpxBp8ZWNKsCwnHpsbZNCww72MKEGfNzaP353GCFd=w600-h988-p-k-no"},
    {name:"Chandan Kumar Sahu", dept:"BSC", skill:"AI & ML", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQQEdTx3_kaGfQIFx_kRjBJIhIo7g3SKYwzoKV6Mwn2KgQegCXq2J4rDSDLPHBODfybnDAXPpRTeIcT7BgdEPpNmCBkzcnfjFUI8DyV_UBm7tqA5zC_jdbE6G4mVBRiQmW12iR18S_R6AqbN=w600-h988-p-k-no"},
    {name:"G. Subhashri Dora", dept:"BCA", skill:"Cybersecurity", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQT-gmmiRMZevqd6pzZr7bB5u4VTAlLxkw6ZKUo7V9gvnE3bqfzIOrHodSEsF5mDzGy8g8uRKOJO-G6YJ9inZEY_IRUo_xtwRNBFXW0aiPEo9641lWCGvdMAyGUtCYBKQ5dSQuNV8PDm9yJO=w600-h988-p-k-no"},
    {name:"Aditya Sabat", dept:"BCA", skill:"AI Operator", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQT_2WK059U6nmttEFa4RKsK9H2TVwVQSyBGcA7Fjq8Ci1OSDY1I0PH3H49RM3V6G6HvnhSj7GmXKMQa-97DD-zaSQ-DfBgyz0U7daEQjp-yeYKnVbsPqNUTNpRKzuiTX97pdOCAiEuOxJf8=w600-h988-p-k-no"},
    {name:"Sourav Bisoyi", dept:"BCA", skill:"Video Editor", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQQhvmLymkQ6T-Uy2_WjvE27MRsZeA0CfvNPs0GMc-dL41I1jxQx-DUhyokq91Vyhu0axNqOZB7zbyMtCb6AwHhHkl_0mJyJIe-MOOpK68iC-TcURncL8K-lUhCKtR4LEPst_7gNWOKjsXXX=w600-h988-p-k-no"},
    {name:"B. Durga Prasad rao", dept:"BBA", skill:"HR & Operations", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQQVQatA-1LfHg8ZuEKL_MaKsx6qNEkk7dZ8eN5NTeG3nAq4OY7UDmKC8LkREfFJk6eWFPhS0A1LpgimhlJyCUPN6Q2rrFBo6vQHv2lbeeEwMTrBlLp0bjRWaFrBD0U9fCGYdXUk5MuQ84BX=w600-h485-p-k-no"},
    {name:"Jiten Kumar Nahak", dept:"BCA", skill:"Game Developer", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQRqDkJ4I-MK2Sas2VZkepkWdSGaPGLwlRepF5JEqcX_rSDKuM_A2E1huJHr43SvIzZAyNMqEdMFiGD-E9B1ChNr72IosuC8rpJF3s0Wo-JxIlY_H7-WXiSJ7cHCIJpRMtNT1cnPdwDIs2YQ=w600-h988-p-k-no"},
    {name:"Rajeswar Maharana", dept:"BCA", skill:"Cloud Computing", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQTJJuEtqUt8wmyUXXXvNAHKylEbHEodKzVCDeVHkNNCTcTgtgYpJ_Jes2FAkP_VHHa_AF9QNdYeCfzr-tgpvQasPlZtrMN2JlWfgi7joBH-bAqGPDpxFGspHAy94d15dbgyKyoEH55PNQA=w600-h988-p-k-no"},
    {name:"Situn Kumar lenka", dept:"BCA", skill:"Blockchain Developer", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQQuFOrLfvvDo2fGWE0dVrkLlktp1UCdNPIkwah5QnxXciaseOIgFxUcX_adYJPtOH_tu62E8pA0BdE7D01psUvi3tdA5dY2YVVAooaU1Innn7hH3N0q8pL-dEQb4twG_gu-Dtra5_GplXQa=w600-h988-p-k-no"},
    {name:"J. Sumeet Achary", dept:"BCA", skill:"AI Researcher", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQSOskaGxpZuFKMCJJfRGFRWAdHc_edvYtOte1dgQS1iiNig1VYUi80uk5VIhMIwMMcXWnMS2ayAoF2exZISHaznVydZbgibIzdy1MlXrJqOOv7JMAyXY_3hlQsPswYy_98WCV-KTitlTqt_=w600-h988-p-k-no"},
    {name:"Surya Narayan Rath", dept:"BCA", skill:"Data Analyst", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQRUsm5UexB_BygLd8RUmYT3ftVhuYIa-ogOYwoSnqD3WzrjqjopI4sJd1Ug7XLdizSVWNYweJtoHxUvSlbUGAtdpKnRBaXI4PVG0vdeU7VwEEBwMBP1nFfsLMr1YSlmEFgdKI1Lh9CFQdY=w600-h988-p-k-no"},
    {name:"Sairas Adhikari", dept:"BCA", skill:"UI/UX Designer", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQSDUvoeHDyVivL3EZuzCQx42A3yuInmrACpy7-VcxBIm5IxpfDT1nsROvmXfDG031_JHF0Bz7MU9_S7ZJFYb4emMYwe7wfyISmUIZT2Ps3SF6X_dXgLpX_Y82TFS0LNcE-gu-H5LgRLt0XP=w600-h650-p-k-no"},
    {name:"Swapneswar Gouda", dept:"BCA", skill:"Full Stack Developer", img:"https://lh3.googleusercontent.com/gps-cs/AOGcYQRrLW4izdnWbz2dnl-RaLOK8FcBqfs-2thRjPejRSPt-sTBH42RxCk7IJa3Di0K_J4u7THjrfOcMxB7lYJmOsRcSCIjX3bTQE94Gq37r5OnJ1y8Td9an0fTVKFAEA09RJzZQjIoM-j3lyU=w600-h650-p-k-no"}
];

const container = document.getElementById("studentContainer");

// ===== DISPLAY STUDENTS =====

function displayStudents(list){

    container.innerHTML = "";

    list.forEach(student => {

        container.innerHTML += `
        <div class="student-card">
            <img src="${student.img}">
            <h3>${student.name}</h3>
            <p>${student.dept}</p>
            <p>${student.skill}</p>
        </div>
        `;
    });

}

displayStudents(students);

// ===== FILTER FUNCTION =====

function filterStudents(){

    const search = document.getElementById("searchInput").value.toLowerCase();
    const dept = document.getElementById("deptFilter").value;

    const filtered = students.filter(student => {

        return (
            student.name.toLowerCase().includes(search) &&
            (dept === "All" || student.dept === dept)
        );

    });

    displayStudents(filtered);
}

// ===== LOGOUT =====

function logout(){
    localStorage.clear();
    window.location.href = "login.html";
}
