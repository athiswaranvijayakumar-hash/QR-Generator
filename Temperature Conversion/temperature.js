function generatetemp(){
var choice = document.querySelector('input[name="choice"]:checked').value;
var input =Number(document.getElementById("numberbox").value);
var output = document.getElementById("output");
if (choice === "fahrenheit"){
  answer = (9/5) * input + 32;
  
}
else{
  answer = (input-32)/1.8;
 
}
output.style.display = "block";
 output.textContent = answer;

 
}