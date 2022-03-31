// document.write("This is our Javascript class");


function validateForm() {
    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];

    if (name.value == "") {
        document.getElementById("errorname").innerHTML = "plz Enter valid Name";
        name.focus();
        return false;
    } else {
        document.getElementById("errorname").innerHTML = "";
    }

    if (email.value == "") {
        document.getElementById("erroremail").innerHTML = "plz Enter valid email";
        email.focus();
        return false;
    } else {
        document.getElementById("erroremail").innerHTML = "";
    }
    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById("erroremail").innerHTML = "plz vaild Enter email";
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById("erroremail").innerHTML = "vaild plz "
        email.focus();
        return false;

    }

    if (message.value == "") {
        document.getElementById("errormsg").innerHTML = "plz-Enter valid message";
        message.focus();
        return false;
    } else {
        document.getElementById("errormsg").innerHTML = "";
    }
    return true;
}