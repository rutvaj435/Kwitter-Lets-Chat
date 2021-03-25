var localStorageUserName = document.getElementById("userName").value;

function login() {
    localStorage.setItem("Username", localStorageUserName);
    window.location = "kwitter_room.html";
        
}