//Get the button
var mybutton;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
    if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
    ) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}
window.onload = function() {
    //Get the button
    mybutton = document.getElementById("btn-back-to-top");
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
}


function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function checkPasswordStrength() {

}

function submitHandler(e) {

    e.preventDefault();
    let email = document.getElementById('email');
    let firstName =document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    let month = document.getElementById('month');
    let year = document.getElementById('year');
    let day = document.getElementById('day');

    let chkMale = document.getElementById('male');
    let chkFemale = document.getElementById('female');

    if(firstName.value == "") {
        alert("Please enter First Name!");
        return false;
    }

    if(lastName.value == "") {
        alert("Please enter Last Name!");
        return false;
    }

    if(!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email.value)) {
        alert('Email address is not valid or empty!');
        return false;
    }

    if(password1.value == "") {
        alert("Please enter password!");
        return false;
    }

    if(password2.value == "") {
        alert("Please enter confirm password!");
        return false;
    }

    if(month.value == "") {
        alert("Please choose Month!");
        return false;
    }

    if(year.value == "") {
        alert("Please choose Year!");
        return false;
    }

    if(day.value == "") {
        alert("Please choose Day!");
        return false;
    }

    if(!chkMale.checked && !chkFemale.checked) {
        alert('Please choose gender!');
        return false;
    }

    

    return false;
}

// Login page validation

function validateLogin(e) {
    e.preventDefault();
    let email = document.getElementById('email');
    let pass = document.getElementById('password');
    if(!(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email.value))) {
        alert('Email address is empty or not valid!');
        return false;
    }

    if(pass.value == "") {
        alert('Please enter password!');
        return false;
    }
    return true;
}