const x = document.getElementById("dropdownClick")
const logoEl = document.getElementById("logo")

logoEl.style.display = "block";

function dropdownMenu() {
    console.log("Dropdown button got clicked !!");
    
    if(logoEl.style.display === "none") {
        logoEl.style.display = "block";
    } else {
        logoEl.style.display = "none";
    }

    // logoEl.style.display = "none";
    if (x.className === "navbar") {
        x.className += " responsive";                   //changes navbar to navbar.responsive
    } else {
        x.className = "navbar";
    }
}


// x.addEventListener("click", dropdownMenu)




