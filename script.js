document.addEventListener("DOMContentLoaded", function () {
    let inputElement = document.getElementById("inputElement");
    let signInTextElement = document.getElementById("signInTextElement");

    window.signIn = function () {
        let inputValue = inputElement.value;
        let verifyText = "Hi " + inputValue + ", verifying your account...";
        signInTextElement.textContent = verifyText;
    };
});
