let username = localStorage.getItem("USERNAME");
console.log(username);

function homeClick() {
    location.href = "./index.html";
}

function signUpClick() {
    location.href = "./register.html";
}

function loginClick() {
    emailid = inpemail.value;
    password = inppswd.value;

    if (emailid === "" || password === "") {
        alert("Please fill in all the fields");
    }
    else if (emailid in localStorage) {
        let accountDetails = JSON.parse(localStorage.getItem(emailid));

        if (password == accountDetails.password) {
            alert("Login successful");
            localStorage.setItem("CURRENT-USER", JSON.stringify(accountDetails));
            window.location = "./budgetcalc.html";
        } else {
            alert("Incorrect password");
        }
    }
    else {
        alert("User is not registered");
    }
}