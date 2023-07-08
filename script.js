

let cname=document.querySelector('input[type="text"]');
let email=document.querySelector('input[type="email"]');
let password=document.querySelector('input[type="password"]');
let submit=document.querySelector('input[type="submit"]');
let nameerror=document.getElementById('nameerror');
let emailerror=document.getElementById('emailerror');
let passerror=document.getElementById('passerror');

submit.addEventListener('click',(e)=>{
 if(validatename() && validateemail() && validatepassword()){
  // e.defaultPrevented();
  alert("form submitted");
  // defaultPrevented();
 }
 defaultPrevented();
})

const validatename=() => {
 if(cname.value==""){
  // e.preventdefault();
  nameerror.innerHTML="Name is Required";
  return false;

 }
 nameerror.innerHTML="";
return true;



}
const validateemail=()=>{
  if(email.value==""){
    // e.preventdefault();
    emailerror.innerHTML="Email is Required";
      // e.preventdefault();
   return false;
   }
   emailerror.innerHTML="";
   return true;
}
const validatepassword=()=>{
  if(password.value==""){
    // e.preventdefault();
    passerror.innerHTML="Password is Required";
      // e.preventdefault();
   return false;
   }
   passerror.innerHTML="";
   return true;
}