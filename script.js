var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('subject-error');
var messageError=document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
       nameError.innerHTML = 'write full name';
       return false;
    }
    nameError.innerHTML = '<i class="bi bi-patch-check-fill"></i>';
    return true;
}
function validateEmail(){
    var email =document.getElementById('contact-email').value;
    if(email.length == 0)
    {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="bi bi-patch-check-fill"></i>';
    return true;

}
function validateSubject(){
    var subject = document.getElementById('contact-subject').value;
    var required =10;
    if(subject.length == 0)
    {
        subjectError.innerHTML = 'subject is required';
        return false;
    }
    var left =required - subject.length;
    if(left>0){
        subjectError.innerHTML = left + 'more character required';
        return false;
    }
    subjectError.innerHTML = '<i class="bi bi-patch-check-fill"></i>';
    return true;


}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required =30;
   
    if(message.length == 0){
      messageError.innerHTML = 'message is requireds';
    }
    var left =required - message.length;
    if(left>0){
        messageError.innerHTML = left + 'more character required';
        return false;
    }
    messageError.innerHTML = '<i class="bi bi-patch-check-fill"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validateEmail() || !validateSubject() || !validateMessage() ){
        submitError.style.display='block';
     submitError.innerHTML = 'Please fix error to submit';
       setTimeout(function(){submitError.style.display='none'},3000);
        return false;
    }
}







