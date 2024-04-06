function regCheckForm(el){
    var name = el.name.value;
    var email = el.email.value;
    var pass = el.pass.value;
    var repass = el.repass.value;

    var fail = "";
    if (name == "" || email == "" || pass == "" || repass == "") {
        fail = "Заполните все поля";
    }
    else if (name.length <= 2 || name.length >= 25) {
        fail = "Введите корректное имя";
    }
    else if(email.split("@") < 1 || email.split("@") >= 2){
        fail = "Email введен некорректно";
    }
    else if (pass != repass) {
        fail = "Пароль должен совпадать";
    }
    else if (pass.split("&").length > 1 || pass.split(" ").length > 1) {
        fail = "Недопустимый сивмол в пароле";
    }

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("данные введены корректно");
        window.location = "http://127.0.0.1:5500/index.html";
    }
    return false;
}


function loginCheckForm(el){
    var name = el.name.value;
    var pass = el.pass.value;

    var fail = ""
    if (name == "" || pass == "") {
        fail = "Заполните все поля";
    }

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else{
        alert("данные введены корректно");
        window.location = "http://127.0.0.1:5500/index.html";
    }
    return false;
}