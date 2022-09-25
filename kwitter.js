function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
function break_firewall(){
    console.log("Checking for viruses");
    document.getElementsByName(access.firewall.code, password.input);
}
function insert_virus(){
    console.log("Virus found, cleaning system")
    document.getRootNode("").nodeValue="0"
    IntersectionObserverEntry="byebye.virus"
}