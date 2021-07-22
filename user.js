var user = document.getElementById("signupUsername")
var btn = document.getElementById("assignee").addEventListener("click",removeToDb)
var count = document.getElementById("numberofusers")
document.getElementById("username").addEventListener("click",addToDb)
var data = []
function addToDb(){
    data.push(user)
    count.innerHTML = data.length
}
function removeToDb(){
    data.pop()
    count.innerHTML = data.length
}
