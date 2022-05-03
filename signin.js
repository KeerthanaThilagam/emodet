const inputs = document.querySelectorAll(".form-control");

function AddClass(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function RemoveClass(){
   let parent = this.parentNode.parentNode;
   if(this.value == ''){
	   parent.classList.remove("focus");
   }
}

inputs.forEach(input => {
   input.addEventListener("focus", AddClass);
   input.addEventListener("blur", RemoveClass);
});

function alertfn(){
   var pwd2=document.myform.pwd2.value;  

 if(pwd2.length<6){  
   alert("Password must be at least 6 characters long."); 
   window.open("signin.html"); 
 }else{
   alert("Login Sucessful");
   window.open("det.html");
 }}  