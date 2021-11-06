const userName = document.querySelector("#user-name");
const password = document.querySelector("#password");
const signinStatus = document.querySelector(".signin-status");
const passwordMsg = document.querySelector(".password-msg");
const usernameMsg = document.querySelector(".user-name-msg");
const signinButton = document.querySelector(".signin-btn");

signinButton.addEventListener("click", signIn);


function signIn(e) {
    e.preventDefault();

    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    let userNameValue = userName.value;
    let passwordValue = password.value;
    let ifSendData = true;

    if ((userNameValue.length === 0) || (userNameValue.indexOf("@") === -1) || (userNameValue.indexOf(".") === -1)) {
        usernameMsg.innerText = "Please enter a valid Email address";
        ifSendData = false;
    }
    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please enter your password";
        ifSendData = false;

    } else if (passwordValue.length < 8) {
        passwordMsg.innerText = "Your password is to short";
        ifSendData = false;

    }
    
    if (ifSendData) {
        const body = JSON.stringify({
            userName: userNameValue,
            password: passwordValue,

        })
        const headers = {
            "Content-type": "application/json; charset=UTF-8",
        }
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: body,
            headers: headers,
        })
            // .then((response) => response.json())
            .then((response) => {

                if (response.ok) {
                    signinStatus.innerText = "Signed In successfully"
                }
                console.log(userNameValue)
                console.log(passwordValue)
            })

    }

}