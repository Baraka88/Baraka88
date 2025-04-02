document.getElementById("my-form").addEventListener("submit",function(event){
    event.preventDefault();
    let valid=true;
    let name=document.getElementById("name").value.trim();
    let nameerror=document.getElementById("nameerror");
    if (name==="Munyemana Alexis" ){
    alert("your password is SOD09B");            
    }
    else if (name==="") {
        nameerror.textContent="Name is requide";
        valid=false;
    }
    else {
        nameerror.textContent="";  
    }
    let email=document.getElementById("email").value.trim();
    let emailerror=document.getElementById("emailerror");
    let emailPattern=/^[a-zA-Z0-9 @ +] @ + [a-zA-Z] \d {2,3} $/;
    if (!emailPattern.test(email)){
   emailerror.textContent="email is requide please";
   valid=false;
    }
    else {
        emailerror.style.visibility="hidden"; 
    }
    let password=document.getElementById("password").value.trim();
    let passworderror=document.getElementById("passworderror");        
    if (password.length<6){
   passworderror.textContent="password must be at least 6 character";
   valid=false;
    }
    else {
        passworderror.textContent="";  
    }
    if (valid){
           alert("your is submitted");         
        event.target.submit();
    }
  })