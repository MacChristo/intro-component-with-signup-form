const firstName = document.getElementById("First-Name");
const lastName = document.getElementById("Last-Name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorIcon = document.getElementsByClassName("error-icon");
const errorText = document.getElementsByClassName("error-text");
const inputs = document.getElementsByClassName("input");
const form = document.getElementById("myForm");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const firstNameIcon = document.getElementById("first-name-icon");
const lastNameIcon = document.getElementById("last-name-icon");
const emailIcon = document.getElementById("email-icon");
const passwordIcon = document.getElementById("password-icon");

firstName.addEventListener("input", function(event) {
    //Each time the user types something, check if the form fields are valid//
    if (firstName.validity.valid) {
        // In case there is an error message, if the field is valid, we remove the message
        firstNameError.textContent = ""; // reset the content of the error message
        firstNameError.style.display = "none"; // hides the the error text
        firstNameError.className = "error-text"; // Restores the visual state of the error message
        firstNameIcon.style.display = "none"; //Removes the error icon if the email is valid
        firstName.style.marginBottom = "1em"; //Addittion styles 
        firstName.style.border = "1px solid var(--Grayish-Blue--)"; // Addittion styles   
    } else {
        // If there is still an error, display the correct error message
        showError();
    }
})

lastName.addEventListener("input", function(event) {
    //Each time the user types something, check if the form fields are valid//
    if (lastName.validity.valid) {
        // In case there is an error message, if the field is valid, we remove the message
        lastNameError.textContent = ""; // reset the content of the error message
        lastNameError.style.display = "none"; // hides the the error text
        lastNameError.className = "error-text"; // Restores the visual state of the error message
        lastNameIcon.style.display = "none"; //Removes the error icon if the email is valid
        lastName.style.marginBottom = "1em"; // Addittion styles   
        lastName.style.border = "1px solid var(--Grayish-Blue--)";  // Addittion styles          
    } else {
        // If there is still an error, display the correct error message
        showError();
    }
})

email.addEventListener("input", function(event) {
    //Each time the user types something, check if the form fields are valid//
    if (email.validity.valid) {
        // In case there is an error message, if the field is valid, we remove the message
        emailError.textContent = ""; // reset the content of the error message
        emailError.style.display = "none"; // hides the the error text
        emailError.className = "error-text"; // Restores the visual state of the error message
        emailIcon.style.display = "none"; //Removes the error icon if the email is valid
        email.style.marginBottom = "1em";
        email.style.border = "1px solid var(--Grayish-Blue--)";
        
        
    } else {
        // If there is still an error, display the correct error message
        showError();
    }
})

password.addEventListener("input", function(event) {
    //Each time the user types something, check if the form fields are valid//
    if (password.validity.valid) {
        // In case there is an error message, if the field is valid, we remove the message
        passwordError.textContent = ""; // reset the content of the error message
        passwordError.style.display = "none"; // hides the the error text
        passwordError.className = "error-text"; // Restores the visual state of the error message
        passwordIcon.style.display = "none"; //Removes the error icon if the email is valid
        password.style.marginBottom = "1em";
        password.style.border = "1px solid var(--Grayish-Blue--)";
        
    } else {
        // If there is still an error, display the correct error message
        showError();
    }
})

form.addEventListener("submit", function (event) {
    // If the filed is valid, we let the form submit it. If isn't, we display the correct error message
    if (!firstName.validity.valid) {
        showError();
        //and prevent the form from submitting it
        event.preventDefault();
    }
    if (!lastName.validity.valid) {
        showError();
        //and prevent the form from submitting it
        event.preventDefault();
    }
    if (!email.validity.valid) {
        showError();
        //and prevent the form from submitting it
        event.preventDefault();
    }
    if (!password.validity.valid) {
        showError();
        //and prevent the form from submitting it
        event.preventDefault();
    }

    if (!firstName.validity.valid || !lastName.validity.valid || !email.validity.valid || !password.validity.valid) {
        //In case one or two of the field is invalid, 
        //send an alert that tells the user to fill the fields properly and then show the errors and prevent the form from been submitted.
        showError();
        event.preventDefault();
        alert("Make sure all fields have been properly filled.");
    }
})


function showError() {
    // Appropriate errors for each instance of invalidity
    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "First Name cannot be empty";
        firstNameError.style.display = "block";
        firstNameIcon.style.display = "block";
        firstName.style.margin = "0";
        firstName.style.border = "1.5px solid red";
    }
    if (lastName.validity.valueMissing) {
        lastNameError.textContent = "Last Name cannot be empty";
        lastNameError.style.display = "block";
        lastNameIcon.style.display = "block";
        lastName.style.margin = "0";
        lastName.style.border = "1.5px solid red";
    }
    if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; You entered ${email.value.length} characters.`
        emailError.style.display = "block";
        emailIcon.style.display = "block";
        email.style.margin = "0";
        email.style.border = "1.5px solid red";
    } else if (email.validity.valueMissing) {
        emailError.textContent = "Looks like this is not an email";
        emailError.style.display = "block";
        emailIcon.style.display = "block";
        email.style.margin = "0";
        email.style.border = "1.5px solid red";
    } else if (email.validity.patternMismatch) {
        emailError.textContent = "Please email should be in form example123@gmail"
        emailError.style.display = "block";
        emailIcon.style.display = "block";
        email.style.margin = "0";
        email.style.border = "1.5px solid red";
    }
    if (password.validity.valueMissing) {
        passwordError.textContent = "Password cannot be empty";
        passwordError.style.display = "block";
        passwordIcon.style.display = "block";
        password.style.margin = "0";
        password.style.border = "1.5px solid red";
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters; You entered ${password.value.length} characters.`
        passwordError.style.display = "block";
        passwordIcon.style.display = "block";
        password.style.margin = "0";
        password.style.border = "1.5px solid red";
    }
}