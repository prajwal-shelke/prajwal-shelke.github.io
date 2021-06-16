const form = document.querySelector(".typing-area");
inputField = form.querySelector(".message");
sendBtn = form.querySelector("button");
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
}

sendBtn.onclick = ()=>{
     //Ajax
     let xhr = new XMLHttpRequest(); //creating XML object
     xhr.open("POST", "php/insert-chat.php", true);
     xhr.onload = ()=>{
         if(xhr.readyState == XMLHttpRequest.DONE){
             if(xhr.status == 200){
                inputField.value = "";
                if(!chatBox.classList.contains("active")){
                    scrollToBottom();
                }
             }
         }
     }
     // Sending data from Ajax to php
     let formData = new FormData(form); //creating new formData
     xhr.send(formData); // sending form data to php
}

setInterval(()=>{
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){
                    scrollToBottom();
                }
            }
        }
    }
    let formData = new FormData(form); //creating new formData
    xhr.send(formData); // sending form data to php
}, 200);

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}

chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

