let stopBtn = document.getElementsByClassName("stop");
let startBtn = document.getElementsByClassName("start");
let arr = document.getElementsByClassName('circle');

function btnShow(i) {
    stopBtn[i].style.display = "unset";
    for (var i = 0; i < startBtn.length; i++) {
        startBtn[i].setAttribute("disabled", "disabled");
    }
}
function btnHide(i) {
    stopBtn[i].style.display = "none";
    for (var i = 0; i < startBtn.length; i++) {
        startBtn[i].removeAttribute("disabled", "disabled");
    }
}
//Start
function Click1() {
    btnShow(0);
    setInt1 = setInterval(function () {
        if (arr[0].style.fill == "red") {
            ColorChange("yellow", "red");
        }
        else {
            ColorChange("red", "yellow");
        }
    }, 350);
}

function ColorChange(col1, col2) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i].style.fill = col1;
        }
        else {
            arr[i].style.fill = col2;
        }
    }
}

function Click2() {
    btnShow(1);
    number = 0;
    setInt2 = setInterval(function () {
        for (var i = 0; i < arr.length; i++) {
            if (number == 0) {
                arr[number].style.fill = "yellow";
                arr[arr.length - 1].style.fill = "red";
            }
            else {
                arr[number].style.fill = "yellow";
                arr[number - 1].style.fill = "red";
            }
        }
        number++;
        if (number == arr.length) {
            number = 0;
        }
    }, 300);
}
function makeColor(color) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.fill = color;
    }
}

function makeBlue() {
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.fill = "blue";
    }
}

function Click3() {
    btnShow(2);
    let color;
    setInt3 = setInterval(function () {
        if (arr[0].style.fill == "red") {
            color = "yellow";
        }
        else {
            color = "red";
        }
        makeColor(color);
    }, 400);
}

function Click4() {
    btnShow(3);
    document.getElementById("santa").style.marginLeft = "-10px";
}

//Stop
function btnStop(i) {
    btnHide(i);
    makeColor("red");
}

function ClickStop1() {
    clearInterval(setInt1);
    btnStop(0);
}

function ClickStop2() {
    clearInterval(setInt2);
    btnStop(1);
}

function ClickStop3() {
    clearInterval(setInt3);
    btnStop(2);
}
function ClickStop4() {
    document.getElementById("santa").style.marginLeft = "-55px";
    btnStop(3);
}