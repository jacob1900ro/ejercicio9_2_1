const but = document.getElementById("buttonText");

but.addEventListener('click',() => {
    let inp = document.getElementById("inputText").value;
    localStorage.setItem("userdata", inp);//lleva
});