var myForm =document.getElementById("myForm");


myForm.addEventListener('submit', function(e){
    var tel =document.getElementById("phone");
    var mail =document.getElementById("mail");

    if(tel.value.trim()=="" || mail.value.trim()==""){
        var error=document.getElementById("error");
        error.innerHTML="Il manque quelque chose !";
        error.style.color='red';
        e.preventDefault();
    }
})