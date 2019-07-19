function Validate()
{ var UserName=document.getElementById("UserName").value;
var Password=document.getElementById("Password").value;
if(UserName=="Admin" && Password=="Admin")
window.location.replace("Booksview/CRUD Screen.html");
else 
  document.getElementById("msg").innerHTML="Incorrect username or password";

}
