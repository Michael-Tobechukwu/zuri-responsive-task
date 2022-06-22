//Error Messages Variables

var firstnameerror = document.getElementById('firstnameerror');

var lastnameerror = document.getElementById('lastnameerror');

var emailError = document.getElementById('emailError');

var passworderror = document.getElementById('passworderror');

//Input value check variables

var namefirst = document.getElementById('firstname').value;

var namelast = document.getElementById('Lastname').value;

var emailCheck = document.getElementById('email').value;

var emailValue = document.getElementsByClassName('email').value;

var passwordCheck = document.getElementById('password').value;

//Error icon variables

var firstNameImg = document.getElementById('firstNameImg').value;

var lastNameImg = document.getElementById ('lastNameImg').value;

var emailImg = document.getElementById('emailImg').value;

var passwordImg = document.getElementById ('passwordImg').value;

//submit button click function

function validateData(){
//First name check

    if (namefirst.length == 0){ firstnameerror.innerText = 'First Name cannot be empty'; 
}  

//Last name check
if (namelast.length == 0){
    lastnameerror.innerText = 'Last Name cannot be empty';
}

//Email check

if (!emailCheck.match ('@')){
    emailError.innerText = 'Looks like this is not an email';
}


//Password check

if (passwordCheck.length == 0){
    passworderror.innerText = 'Password cannot be empty';
}


}

