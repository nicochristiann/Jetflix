var form = document.getElementById('form');
var username = document.getElementById('name');
var password = document.getElementById('password');
var confirmpassword = document.getElementById('confirmpassword');
var date = document.getElementById('date');
var month = document.getElementById('month');
var year = document.getElementById('year');
var male = document.getElementById('male');
var female = document.getElementById('female');
var agreement = document.getElementById('agreement');

function checkInput(){

    if (username.value == ""){

        alert("Name cannot be empty!");

    } else if (password.value == ""){

        alert("Password cannot be empty!");

    } else if (!checkAlphaNum(password.value) && password.value.length < 8){

        alert("Password must be more than 7 characters and alpha numeric!");

    } else if (confirmpassword.value != password.value){

        alert("Confirm password must be the same as the original password!");

    } else if (date.value < 1 || date.value > 31){

        alert("Invalid Birth Date!");

    } else if (month.value < 1 || month.value > 12){

        alert("Invalid Birth Date!");
        
    } else if (year.value < 1 || year.value > 2023){

        alert("Invalid Birth Date!");
    
    } else if (!checkDate(date.value, month.value, year.value)){

        alert("Your age must be more than or equal to 18 to make an account!");

    } else if (!male.checked && !female.checked){

        alert("Please Select a Gender!");

    } else if (!agreement.checked){

        alert("You have to agree with the terms & condition first!");

    } else {

        let text = "You have successfully created a Jetflix account!";

        if (confirm(text) == true){

            passValues();
            location.replace("/code/Home/Login/login.html");
        }
    }
}

function passValues(){

    var names = document.getElementById("name").value;
    localStorage.setItem("nameValue", names);
    return false;
}

function checkAlphaNum(password){

    var isNum = false;
    var isAlpha = false;

    for (var i=0; i<password.length; i++){

        if (isNaN(password[i])){

            isAlpha = true;

        } else {

            isNum = true;
        }

        if (isAlpha && isNum){

            return true;
        }
    }
}

function checkDate(date, month, year){

    const todayDate = new Date();

    let d = todayDate.getDate();
    let m = todayDate.getMonth()+1;
    let y = todayDate.getFullYear();

    if (y-year > 18){

        return true;

    } else if (y-year == 18 && m-month == 0 && d-date >= 0){

        return true;

    } else if (y-year == 18 && m-month > 0){
        
        return true;

    } else {

        return false;
    }
}
