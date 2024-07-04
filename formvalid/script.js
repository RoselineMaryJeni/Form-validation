
var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');
var submit = document.getElementById('submitbtn');
//show input error message
function showError(input,message){
    var formControl = input.parentElement;
    formControl.className = 'form-control error';
    var small = formControl.querySelector('small');
    small.innerText = message;

}
//show success outline
function showSuccess(input){
    var formControl = input.parentElement;
    formControl.className = 'form-control success';

}
//check email is valid
function checkEmail(input) {
    var re = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)(.[a-z]+)?$/;
       if (re.test(input.value.trim()))
        {
            showSuccess(input);
         }
     else{
            showError(input,'Email is not valid');
       }
}
   

//check required fields
function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input){
        if (input.value.trim() === ''){
            showError(input,`${getFieldName(input)}is required `);
            isRequired = true;
        }
        else{
            showSuccess(input);
        }
        });
        return isRequired;
    }

//check input length
function checkLength(input,min,max) {
    if(input.value.length < min){
        showError(input,`${getFieldName(input)}must be at least ${min}characters`);
    }
    else if(input.value.length > max){
         showError(input,`${getFieldName(input)}must be less than  ${max}characters`);
    }
    else{
        showSuccess(input);
    }
}
//check password match
function checkPasswordsMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'passwords do not match');
    }
}
//get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//event listeners
form.addEventListener('submit',function(event){
    event.preventDefault();
    if(checkRequired([username,email,password,password2])){
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password,password2);
    }
});
submit.addEventListener("click",getinput());