let btn = document.getElementById("btn");
let count = 0;
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");

btn.onclick = () => {
    if (count == 0) {
        first.style.backgroundColor = "gray"
        second.style.backgroundColor = "orange"
        third.style.backgroundColor = "gray"
        count++;
    } else if (count == 1) {
        first.style.backgroundColor = "gray"
        second.style.backgroundColor = "gray"
        third.style.backgroundColor = "red"
        count++;
    } else if (count == 2) {
        first.style.backgroundColor = "green"
        second.style.backgroundColor = "gray"
        third.style.backgroundColor = "gray"
        count = 0;
    }
}