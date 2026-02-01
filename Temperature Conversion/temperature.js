function generatetemp(){
var choice = document.querySelector('input[name="choice"]:checked').value;
var input =Number(document.getElementById("numberbox").value);
var output = document.getElementById("output");
if (choice === "fahrenheit"){
  answer = (9/5) * input + 32;
  answer = answer.toFixed(2);
}
else{
  answer = (input-32)/1.8;
 answer = answer.toFixed(2);
}
output.style.display = "block";
 output.textContent = answer;

 
}