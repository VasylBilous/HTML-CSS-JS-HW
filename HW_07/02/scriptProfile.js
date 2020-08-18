let log = document.querySelector("#logBtn");
console.log(log)
log.addEventListener('click', ()=>{
    let user = JSON.parse(localStorage.getItem("user"));
    document.querySelector("#name").value = user.name;
    document.querySelector("#email").value = user.email;
    document.querySelector("#login").value = user.login;
    document.querySelector("#password").value = user.passwprd;

    let profile = document.querySelector("#prof")
    profile.style.visibility = "visible";
    profile.style.display = "flex";
    let field = document.querySelector("body");
    field.style.animation = "darker 2s 1";
    field.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
})