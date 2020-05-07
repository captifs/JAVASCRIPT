//Fiecare h3 din div-ul cu clasa main content sa aiba culoarea rosie.
var toDo = document.querySelectorAll("div.main-container .main-content h3")
for(var i = 0; i< toDo.length; i++) {
    toDo[i].style.color = "red";
}


// Sa aiba background-color blue 
var toDo2 = document.querySelectorAll("div.main-container .main-content h3")
for(var i = 0; i< toDo2.length; i++) {
    toDo[i].style.backgroundColor = "blue";
}

