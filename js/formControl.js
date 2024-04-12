function checkCreateProduct(el) {
    var name = el.name.value;
    var price = el.price.value;
    var size = el.size.value;
    var description = el.description.value;
    var mass = el.mass.value;

    var fail = "";
    if (name == "" || price == "" || size == "" || description == "" || mass == "") {
        fail = "Заполните все поля";
    }
    else if (name.length <= 2 || name.length >= 25) {
        fail = "Введите корректное название";
    }
    else if (
        name.split(",").length > 1 ||
        name.split(".").length > 1 ||
        name.split(" ").length > 1 ||
        name.split("/").length > 1 ||
        name.split("\\").length > 1 ||
        name.split("|").length > 1 ||
        name.split("+").length > 1 ||
        name.split("-").length > 1 ||
        name.split("(").length > 1 ||
        name.split(")").length > 1 ||
        name.split("&").length > 1 ||
        name.split("?").length > 1 ||
        name.split("!").length > 1 ||
        name.split("`").length > 1
    ){
        fail = "Название содержит недопустимые символы";
    }
    else if(
        price.split(",").length > 1 ||
        price.split(".").length > 1 ||
        price.split(" ").length > 1 ||
        price.split("/").length > 1 ||
        price.split("\\").length > 1 ||
        price.split("|").length > 1 ||
        price.split("+").length > 1 ||
        price.split("-").length > 1 ||
        price.split("(").length > 1 ||
        price.split(")").length > 1 ||
        price.split("&").length > 1 ||
        price.split("?").length > 1 ||
        price.split("!").length > 1 ||
        price.split("a").length > 1 ||
        price.split("b").length > 1 ||
        price.split("c").length > 1 ||
        price.split("d").length > 1 ||
        price.split("e").length > 1 ||
        price.split("f").length > 1 ||
        price.split("g").length > 1 ||
        price.split("h").length > 1 ||
        price.split("i").length > 1 ||
        price.split("j").length > 1 ||
        price.split("k").length > 1 ||
        price.split("l").length > 1 ||
        price.split("m").length > 1 ||
        price.split("n").length > 1 ||
        price.split("o").length > 1 ||
        price.split("p").length > 1 ||
        price.split("q").length > 1 ||
        price.split("r").length > 1 ||
        price.split("x").length > 1 ||
        price.split("y").length > 1 ||
        price.split("z").length > 1
    ){
        fail = "Цена содержит недопустимые символы";
    }
    else if(
        size.split(",").length > 1 ||
        size.split(".").length > 1 ||
        size.split("/").length > 1 ||
        size.split("\\").length > 1 ||
        size.split("|").length > 1 ||
        size.split("+").length > 1 ||
        size.split("-").length > 1 ||
        size.split("(").length > 1 ||
        size.split(")").length > 1 ||
        size.split("&").length > 1 ||
        size.split("?").length > 1 ||
        size.split("!").length > 1 ||
        size.split("a").length > 1 ||
        size.split("b").length > 1 ||
        size.split("c").length > 1 ||
        size.split("d").length > 1 ||
        size.split("e").length > 1 ||
        size.split("f").length > 1 ||
        size.split("g").length > 1 ||
        size.split("h").length > 1 ||
        size.split("i").length > 1 ||
        size.split("j").length > 1 ||
        size.split("k").length > 1 ||
        size.split("l").length > 1 ||
        size.split("m").length > 1 ||
        size.split("n").length > 1 ||
        size.split("o").length > 1 ||
        size.split("p").length > 1 ||
        size.split("q").length > 1 ||
        size.split("r").length > 1 ||
        size.split("x").length > 1 ||
        size.split("y").length > 1 ||
        size.split("z").length > 1
    ){
        fail = "Размер содержит недопустимые символы";
    }
    else if(
        mass.split(",").length > 1 ||
        mass.split(".").length > 1 ||
        mass.split("/").length > 1 ||
        mass.split("\\").length > 1 ||
        mass.split("|").length > 1 ||
        mass.split("+").length > 1 ||
        mass.split("-").length > 1 ||
        mass.split("(").length > 1 ||
        mass.split(")").length > 1 ||
        mass.split("&").length > 1 ||
        mass.split("?").length > 1 ||
        mass.split("!").length > 1 ||
        mass.split("a").length > 1 ||
        mass.split("b").length > 1 ||
        mass.split("c").length > 1 ||
        mass.split("d").length > 1 ||
        mass.split("e").length > 1 ||
        mass.split("f").length > 1 ||
        mass.split("g").length > 1 ||
        mass.split("h").length > 1 ||
        mass.split("i").length > 1 ||
        mass.split("j").length > 1 ||
        mass.split("k").length > 1 ||
        mass.split("l").length > 1 ||
        mass.split("m").length > 1 ||
        mass.split("n").length > 1 ||
        mass.split("o").length > 1 ||
        mass.split("p").length > 1 ||
        mass.split("q").length > 1 ||
        mass.split("r").length > 1 ||
        mass.split("x").length > 1 ||
        mass.split("y").length > 1 ||
        mass.split("z").length > 1
    ){
        fail = "Масса содержит недопустимые символы";
    }

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("данные введены корректно");
        window.location = "http://127.0.0.1:5500/index.html";
    }
    return false;
}


function checkCreateStorageHouse(el) {
    var address = el.address.value;

    var fail = "";
    if (address == "") {
        fail = "Заполните все поля";
    }
    else if(
        address.split("/").length > 1 ||
        address.split("\\").length > 1 ||
        address.split("|").length > 1 ||
        address.split("+").length > 1 ||
        address.split("-").length > 1 ||
        address.split("(").length > 1 ||
        address.split(")").length > 1 ||
        address.split("&").length > 1 ||
        address.split("?").length > 1 ||
        address.split("!").length > 1 ||
        address.split("a").length > 1 ||
        address.split("b").length > 1 ||
        address.split("c").length > 1 ||
        address.split("d").length > 1 ||
        address.split("e").length > 1 ||
        address.split("f").length > 1 ||
        address.split("g").length > 1 ||
        address.split("h").length > 1 ||
        address.split("i").length > 1 ||
        address.split("j").length > 1 ||
        address.split("k").length > 1 ||
        address.split("l").length > 1 ||
        address.split("m").length > 1 ||
        address.split("n").length > 1 ||
        address.split("o").length > 1 ||
        address.split("p").length > 1 ||
        address.split("q").length > 1 ||
        address.split("r").length > 1 ||
        address.split("x").length > 1 ||
        address.split("y").length > 1 ||
        address.split("z").length > 1
    ){
        fail = "Введите корректный адрес";
    }
    
    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("данные введены корректно");
        window.location = "http://127.0.0.1:5500/index.html";
    }
    return false;
}

function checkCreateRoads(el){
    var idLocalityA = el.idLocalityA.value;
    var idLocalityB = el.idLocalityB.value;
    var price = el.price.value;
    var time = el.time.value;
    var distance = el.distance.value;
    
    var fail = "";
    if(price == "" || time == "" || distance == ""){
        fail = "Заполните все поля";
    }
    else if(idLocalityA == idLocalityB){
        fail = "Выбранные города совпадают";
    }
    else if (
        price.split("/").length > 1 ||
        price.split("\\").length > 1 ||
        price.split("|").length > 1 ||
        price.split("+").length > 1 ||
        price.split("-").length > 1 ||
        price.split("(").length > 1 ||
        price.split(")").length > 1 ||
        price.split("&").length > 1 ||
        price.split("?").length > 1 ||
        price.split("!").length > 1 ||
        price.split("a").length > 1 ||
        price.split("b").length > 1 ||
        price.split("c").length > 1 ||
        price.split("d").length > 1 ||
        price.split("e").length > 1 ||
        price.split("f").length > 1 ||
        price.split("g").length > 1 ||
        price.split("h").length > 1 ||
        price.split("i").length > 1 ||
        price.split("j").length > 1 ||
        price.split("k").length > 1 ||
        price.split("l").length > 1 ||
        price.split("m").length > 1 ||
        price.split("n").length > 1 ||
        price.split("o").length > 1 ||
        price.split("p").length > 1 ||
        price.split("q").length > 1 ||
        price.split("r").length > 1 ||
        price.split("x").length > 1 ||
        price.split("y").length > 1 ||
        price.split("z").length > 1
    ){
        fail = "Стоимость содержит недопустимые символы";
    }
    else if (
        time.split("/").length > 1 ||
        time.split("\\").length > 1 ||
        time.split("|").length > 1 ||
        time.split("+").length > 1 ||
        time.split("-").length > 1 ||
        time.split("(").length > 1 ||
        time.split(")").length > 1 ||
        time.split("&").length > 1 ||
        time.split("?").length > 1 ||
        time.split("!").length > 1 ||
        time.split("a").length > 1 ||
        time.split("b").length > 1 ||
        time.split("c").length > 1 ||
        time.split("d").length > 1 ||
        time.split("e").length > 1 ||
        time.split("f").length > 1 ||
        time.split("g").length > 1 ||
        time.split("h").length > 1 ||
        time.split("i").length > 1 ||
        time.split("j").length > 1 ||
        time.split("k").length > 1 ||
        time.split("l").length > 1 ||
        time.split("m").length > 1 ||
        time.split("n").length > 1 ||
        time.split("o").length > 1 ||
        time.split("p").length > 1 ||
        time.split("q").length > 1 ||
        time.split("r").length > 1 ||
        time.split("x").length > 1 ||
        time.split("y").length > 1 ||
        time.split("z").length > 1
    ){
        fail = "Время содержит недопустимые символы";
    }
    else if (
        distance.split("/").length > 1 ||
        distance.split("\\").length > 1 ||
        distance.split("|").length > 1 ||
        distance.split("+").length > 1 ||
        distance.split("-").length > 1 ||
        distance.split("(").length > 1 ||
        distance.split(")").length > 1 ||
        distance.split("&").length > 1 ||
        distance.split("?").length > 1 ||
        distance.split("!").length > 1 ||
        distance.split("a").length > 1 ||
        distance.split("b").length > 1 ||
        distance.split("c").length > 1 ||
        distance.split("d").length > 1 ||
        distance.split("e").length > 1 ||
        distance.split("f").length > 1 ||
        distance.split("g").length > 1 ||
        distance.split("h").length > 1 ||
        distance.split("i").length > 1 ||
        distance.split("j").length > 1 ||
        distance.split("k").length > 1 ||
        distance.split("l").length > 1 ||
        distance.split("m").length > 1 ||
        distance.split("n").length > 1 ||
        distance.split("o").length > 1 ||
        distance.split("p").length > 1 ||
        distance.split("q").length > 1 ||
        distance.split("r").length > 1 ||
        distance.split("x").length > 1 ||
        distance.split("y").length > 1 ||
        distance.split("z").length > 1
    ){
        fail = "Расстояние содержит недопустимые символы";
    }

    if (fail != "") {
        document.getElementById('error').innerHTML = fail;
    } else {
        alert("данные введены корректно");
        window.location = "http://127.0.0.1:5500/index.html";
    }
    return false;
}