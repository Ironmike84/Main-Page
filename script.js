let sendButton = document.getElementById("send");

sendButton.addEventListener("click", function(){
let form = document.getElementById("contactForm")    
let comments = document.getElementById("comments").value
    let eMail = JSON.stringify(comments)
    .form
    postMessage = eMail 

console.log(comments)




function checkInput(e){
    
inputs = document.querySelectorAll('input').value

if (inputs !== null){
console.log("Empty")
console.log(e)
}else if(inputs === null){
    console.log("full")
    console.log(e)
}else{
console.log("failed")
}
}
checkInput()

})




