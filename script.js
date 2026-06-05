let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInTextElement");

function signIn() {
    let inputValue = inputElement.value;
    let verifyText = "Hi " + inputValue + ", verifying your account...";
    signInTextElement.textContent = verifyText;
}
