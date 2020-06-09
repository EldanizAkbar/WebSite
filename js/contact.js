document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sem").addEventListener('click', e => {
        e.preventDefault();
        checkInputs();
    });
});
function checkInputs() {
    let name = document.getElementById('fname');
    let surname = document.getElementById('lname');
    let email = document.getElementById('email');
    let comment = document.getElementById("comment");
    let nameValue = document.getElementById('fname').value.trim();
    let SurnameValue = document.getElementById('lname').value.trim();
    let emailValue = document.getElementById('email').value.trim();
    let commentValue = document.getElementById('comment').value.trim();

    if (nameValue == '') {
        setErrorFor(name, 'Name cannot be blank');
    } 
    else if(nameValue.length<=2){
        setErrorFor(name, 'Name must be consist of min 3 letters');
    } 
    else if(nameValue.length>=16){
        setErrorFor(name, 'Name must be consist of max 16 letters');
    } 
    else {
        setSuccessFor(name);
    }
    if (SurnameValue == '') {
        setErrorFor(surname, 'Surname cannot be blank');
    } 
    else if(SurnameValue.length<=2){
        setErrorFor(surname, 'Surmame must be consist of min 3 letters');
    } 
    else if(SurnameValue.length>=16){
        setErrorFor(surname, 'Surname must be consist of max 16 letters');
    } else {
        setSuccessFor(surname);
    }

    if (emailValue == '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (commentValue == '') {
        setErrorFor(comment, 'Comment cannot be blank');
    } else {
        setSuccessFor(comment);
    }
}

function setErrorFor(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-group success';
 
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
setTimeout(function(){
    $('.loader_bg').fadeToggle();
  }, 1000);