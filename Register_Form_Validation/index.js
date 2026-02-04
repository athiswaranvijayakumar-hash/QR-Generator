function validateForm(){

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;
  let confirm  = document.getElementById("confirm").value;
  let email    = document.getElementById("email").value;
  let mobile   = document.getElementById("mobile").value;
  let msg = document.getElementById("msg");

  msg.innerHTML = "";
  if(username === ""){
    msg.innerHTML = "Username should not be empty";
    return false;
  }
  if(password.length < 6){
    msg.innerHTML = "Password must be at least 6 characters";
    return false;
  }
  if(password !== confirm){
    msg.innerHTML = "Passwords do not match";
    return false;
  }
  if(email.indexOf("@") === -1 || email.indexOf(".") === -1){
    msg.innerHTML = "Invalid Email format";
    return false;
  }
  if(mobile.length !== 10 || isNaN(mobile)){
    msg.innerHTML = "Mobile number must be exactly 10 digits";
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}
