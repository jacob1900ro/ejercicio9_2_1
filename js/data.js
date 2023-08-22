const dat = document.getElementById("data");
const but = document.getElementById("buttonText");

window.addEventListener("DOMContentLoaded", () => {
    let user = localStorage.getItem("userdata");//trae
    if (user){
        dat.textContent = user;
    }else{
        dat.textContent = "No hay data para mostrar."
    }
});