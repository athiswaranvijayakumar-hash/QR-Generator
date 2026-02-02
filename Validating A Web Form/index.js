const form = document.getElementById("myForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("ph");

form.addEventListener("submit", function (event) {
  event.preventDefault();
 if((name.value).length <= 0){
  alert("Please Fill The All Details");
}
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!re.test(email.value)) {
    alert("Invalid email address");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
   
  const re = /^[0-9]+$/;

  if (!(re.test(number.value)) || (number.value).length !== 10) {
       alert("Please Enter 10 Digit Number.");
  }
});

