function add_user_name() {
    const name = document.getElementById("name").value;
    if (name === "") {
        alert("Enter username");
        return;
    }
    localStorage.setItem("username", name);
    window.location.href = "page1.html";
}
const username = document.getElementById("username");

if (username) {
    const savedName = localStorage.getItem("username");

    if (savedName) {
        username.innerText = savedName;
    }
}
function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
}


