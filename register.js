function homeClick() {
    location.href = "./index.html";
}

function signInClick() {
    location.href = "./login.html";
}

function registerClick() {
    const userData = {
        username: inpusername.value,
        emailid: inpemail.value,
        password: inppswd.value,
    };
    console.log(userData);
    if (inpusername.value == "" || inpemail.value == "" || inppswd.value == "") {
        alert("Please fill in all the fields");
    }
    else {
        if (userData.emailid in localStorage) {
            alert("User already exists");
        }
        else {
            localStorage.setItem(userData.emailid, JSON.stringify(userData));
            alert("User details added");
        }
    }
}