let btn = document.querySelector("#sign");
let hidden = document.querySelector("#hidden");
let ref = document.querySelector("#ref");

btn.addEventListener("click", () => {
    if (btn.value == "Sign Up") {
        btn.value = "Sign In";
        hidden.style.visibility = "visible";
        hidden.style.display = "flex";
    } else if (btn.value == "Sign In") {
        btn.value = "Sign Up";
        hidden.style.visibility = "hidden";
        hidden.style.display = "none";
    }
})

ref.addEventListener('click', () => {
    let login = document.querySelector("#login");
    let password = document.querySelector("#password");
    let email = document.querySelector("#email");
    let name = document.querySelector("#name");

    let inputs = [name,
        password, email,
        login
    ];

    let ok = true;
    inputs.forEach(input => {
        let res = CheckOnEmpty(input);
        if (ok)
            ok = res;
    });

    if (ok) {
        ref.href = "profile.html";
        let user = {
            name: name.value,
            email: email.value,
            password: password.value,
            login: login.value
        };
        let serUser = JSON.stringify(user);
        try {
            localStorage.setItem("user", serUser);
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('Превышен лимит');
            }
        }
    } else
        ref.href = "";
})

function CheckOnEmpty(input) {
    let text = Array.from(input.value);
    if (text.length == 0) {
        input.style.border = "2px solid red";
        return false;
    }
    input.style.border = "none";
    return true;
}