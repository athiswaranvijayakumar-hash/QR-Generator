function addlist() {
  const input = document.getElementById("input");
  const outputbox = document.getElementById("showlist");

  if (input.value.trim() === "") return;

 
  outputbox.classList.add("show");
  outputbox.style.display = "block";
  const li = document.createElement("li");
  const check = document.createElement("span");
  check.className = "check-circle";
  check.innerHTML = "✓";

  check.onclick = () => {
    check.classList.toggle("checked");
    li.classList.toggle("completed");
  };

  const text = document.createElement("span");
  text.textContent = input.value;

  const del = document.createElement("button");
  del.className = "delete";
  del.textContent = "✖";

  del.onclick = () => {
    li.remove();
    if (outputbox.children.length === 0) {
      outputbox.style.display = "none";
      outputbox.classList.remove("show");
    }
  };

  li.append(check, text, del);
  outputbox.appendChild(li);
  input.value = "";
}
