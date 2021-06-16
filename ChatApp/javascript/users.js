const searchBar = document.querySelector(".users .search input");
searchBtn = document.querySelector(".users .search button");
usersList = document.querySelector(".users .users-list");


searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");
    searchBtn.classList.toggle("active");
    searchBar.focus();
    searchBar.value = "";
}

searchBar.onkeyup = ()=>{
    let inputSearch = searchBar.value;
    // console.log(inputSearch);
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("POST", "php/search.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                usersList.innerHTML = data;
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("inputSearch=" + inputSearch);
}

setInterval(()=>{
    let xhr = new XMLHttpRequest(); //creating XML object
    xhr.open("GET", "php/users.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response;
                if(!searchBar.classList.contains("active")){
                    usersList.innerHTML = data;
                }
            }
        }
    }
    xhr.send();
    
}, 500); 
//this function will run frequently after 500ms
// let xhr = new XMLHttpRequest(); //creating XML object
//     xhr.open("GET", "php/users.php", true);
//     xhr.onload = ()=>{
//         if(xhr.readyState == XMLHttpRequest.DONE){
//             if(xhr.status == 200){
//                 let data = xhr.response;
//                 usersList.innerHTML = data;
//             }
//         }
//     }
//     xhr.send(); // this updates only one time