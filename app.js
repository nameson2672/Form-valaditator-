const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_2 = document.getElementById("password_2");
const submit = document.getElementById("submit");

const userinfo = {
    name: username,
    email: email,
    password: password
}


// Error showing
function showError(input,messages) {
    const parent = input.parentNode;
    parent.classList.add("error");
    const small = parent.querySelector("small");
    small.innerText = messages;
  
}

// Remove error
function removeError(input) {
     const parent = input.parentNode;
    parent.classList.remove("error");
    const small = parent.querySelector("small");
    small.innerText = '';
  
};

// Check for fileds
function fieldChecker(input,message) {
    const value = input.value;
    if ((value.trim()) =='') {
        return showError(input,message);
    } else if ((value.trim()) !== '') {
       return removeError(input);
    }
}

// validate the user input email 
function emailValidator(input) {
    const value = input.value;
    if (!(value.trim())) {
        return fieldChecker(input,"Please enter email")
    }
        
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(re.test(value))) {
        
        showError(input, 'The email should contain num and letters');
    } else if ((re.test(value))){
        removeError(input);
    }
}

// Password checker
function passwordValidator(input, message) {
    const value = input.value;
    if (!(value.trim())) {
        return fieldChecker(input, message);
    }
    if (value.length <= 5) {
        return showError(input, message);
    } else {
        return removeError(input);
    }
}

// Match password
function matchPassword(input1,input2,message) {
    const pass1 = input1.value;
    const pass2 = input2.value;
    if (pass2.length === 0) {
        return showError(input2, 'Please conform a password');
    }
    console.log(!(pass1 === pass2) || (pass1.length === 0))
    if (!(pass1 === pass2) || (pass1.length === 0)) {
        return showError(input2, message);
    } else {
        return removeError(input2)
    }

};


submit.addEventListener("click", (e) => {
    e.preventDefault();
    fieldChecker(username, 'Please provide your name');
    emailValidator(email);
    passwordValidator(password, 'Please enter a password with least 6 character');
    passwordValidator(password_2, 'Please Conform password');
    matchPassword(password, password_2, 'Password do not match');



});