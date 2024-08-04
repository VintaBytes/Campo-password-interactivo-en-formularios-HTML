function borrar() {
    document.getElementById("password").value = "";
}

let flag = true;
function pass() {
    if (flag) {
        document.getElementById("password").type = "password";
        document.getElementById("pass-icon").src = "imagenes/close.png";
        flag = false;
    } else {
        document.getElementById("password").type = "text";
        document.getElementById("pass-icon").src = "imagenes/open.png";
        flag = true;
    }
}



