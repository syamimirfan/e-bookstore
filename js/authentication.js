const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    document.querySelector('.popup').classList.add("active");
    document.querySelector('#okay').addEventListener("click", function() {
        document.querySelector('.popup').classList.remove("active");
        container.classList.add("sign-up-mode");
    });

});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");

});

function registration() {
    var username = document.getElementById("username-register").value;
    var email = document.getElementById("email-register").value;
    var password = document.getElementById("password-register").value;
    var phone = document.getElementById("phone-register").value;

    var register_success = document.querySelector('.popup_register_success');
    var register_success_okay = document.querySelector('#register_success_okay');

    var register_unsuccess = document.querySelector('.popup_register_unsuccess');
    var register_unsuccess_okay = document.querySelector('#register_unsuccess_okay');

    if (username !== "" && email !== "" && password !== "" && phone !== "") {

        //storing data in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("phone", phone);

        register_success.classList.add("active");
        register_success_okay.addEventListener("click", function() {
            register_success.classList.remove("active");
            container.classList.remove("sign-up-mode");
        });

    } else {
        register_unsuccess.classList.add("active");
        register_unsuccess_okay.addEventListener("click", function() {
            register_unsuccess.classList.remove("active");
        });
    }
}



function login() {
    var email = document.getElementById("email-login").value;
    var password = document.getElementById("password-login").value;

    var mail = localStorage.getItem("email", email);
    var pass = localStorage.getItem("password", password);

    var popup_login = document.querySelector('.popup_login');
    var login_okay = document.querySelector('#login_okay');

    var popup_login_error1 = document.querySelector('.popup_login_error1');
    var login_error1_okay = document.querySelector('#login_error1_okay');

    var popup_login_error2 = document.querySelector('.popup_login_error2');
    var login_error2_okay = document.querySelector('#login_error2_okay');

    if (mail === email && pass === password) {

        popup_login.classList.add("active");

        login_okay.addEventListener("click", function() {
            popup_login.classList.remove("active");
            location.href = "index.html";
        });

    } else if (mail === email && pass !== password) {
        popup_login_error1.classList.add("active");

        login_error1_okay.addEventListener("click", function() {
            popup_login_error1.classList.remove("active");
        });


    } else {
        popup_login_error2.classList.add("active");

        login_error2_okay.addEventListener("click", function() {
            popup_login_error2.classList.remove("active");

        });

    }

}

const signInForm = document.querySelector('.sign-in-form');
signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    login();
});