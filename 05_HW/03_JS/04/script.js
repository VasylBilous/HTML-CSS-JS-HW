let myol = document.querySelector("#my-ol");
var lis = myol.getElementsByTagName("li");

myol.addEventListener('mousedown', (e) => {
    e.target.style.backgroundColor = "red";
    
    for (let i in lis){
        if (lis[i] != e.target)
        lis[i].style.backgroundColor = "white"
    }
})