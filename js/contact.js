// document.write("This is our Javascript class");


function validateForm() {
    var name = document.forms["myForm"]["name"];
    var email = document.forms["myForm"]["email"];
    var message = document.forms["myForm"]["message"];

    if (name.value == "") {
        document.getElementById("errorname").innerHTML = "plx enter valid name";
        name.focus();
        return false;
    } else {
        document.getElementById("errorname").innerHTML = "";
    }

    if (email.value == "") {
        document.getElementById("erroremail").innerHTML = "plz valid email";
        email.focus();
        return false;
    } else {
        document.getElementById("erroremail").innerHTML = "";
    }
    if (email.value.indexOf("@", 0) < 0) {
        document.getElementById("erroremail").innerHTML = "vaild email plz2";
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0) {
        document.getElementById("erroremail").innerHTML = "vaild plz 3 "
        email.focus();
        return false;

    }

    if (message.value == "") {
        document.getElementById("errormsg").innerHTML = "valid message";
        message.focus();
        return false;
    } else {
        document.getElementById("errormsg").innerHTML = "";
    }
    return true;
}