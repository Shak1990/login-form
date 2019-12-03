function validateLoginForm() {
    var eml = document.LoginForm.eml.value;
    var pwd = document.LoginForm.pwd.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!(eml.match(mailformat))) {
        alert("Invalid email");
        return false;
    }

    if (pwd.length < 6 || pwd.length > 12) {
        alert("Password must be 6 to 12 characters");
        return false;
    }
}
