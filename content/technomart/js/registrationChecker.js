function fieldsCheck(event) {
    event.preventDefault();
    var i;
    var isEmpty = false;
    var isWrongEmail = false;
    var p = /@/;
    for(i = 0; i < registrationForm.elements.length; i++){
        if(registrationForm.elements[i].value === ""
            && registrationForm.elements[i] !== registrationForm.elements.registrationLastName
            && registrationForm.elements[i] !== registrationForm.elements.registrationTel){
            registrationForm.elements[i].setAttribute('style', 'border:1px solid red;');
            isEmpty = true;
        }else if(!p.test(registrationForm.elements.registrationEmail.value)){
            isWrongEmail = true;
            registrationForm.elements.registrationEmail.style.border = "1px solid red";
        }else{
            registrationForm.elements[i].removeAttribute('style');
            }
    }
    if(isEmpty){
        regTextFields.setAttribute("style", "display:block");
    }else if(isWrongEmail){
        regTextFields.removeAttribute("style");
        regTextEmail.setAttribute('style', 'display:block');
    }else{
       regTextEmail.removeAttribute('style');
       regTextFields.removeAttribute("style");
       passwordCheck();
   }
}
function passwordCheck() {
    event.preventDefault();
    var flag = false;
    if(registrationForm.elements['registrationPassword'].value !== registrationForm.elements['registrationPasswordRepeat'].value){
        registrationForm.elements['registrationPassword'].style.border = "1px solid red";
        registrationForm.elements['registrationPasswordRepeat'].style.border = "1px solid red";
        flag = true;
    }
    if(flag){
        regTextPassword.setAttribute("style", "display:block");
    }
    else{
        regTextPassword.removeAttribute("style");
        registrationForm.submit();
    }
}

var registrationForm = document.forms.registration;
var regSubmit = registrationForm.elements["registrationSubmit"];
var regTextPassword = document.querySelector(".registration__text_checker-password");
var regTextFields = document.querySelector(".registration__text_checker-fields");
var regTextEmail = document.querySelector(".registration__text_checker-email");

regSubmit.addEventListener('click', fieldsCheck);


