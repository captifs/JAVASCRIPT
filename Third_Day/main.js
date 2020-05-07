//Ex1 la apasarea butonului cu Titlul Try it , sa afiseze produsul lui 2 cu 2.
function produs(y,z){
   return y * z;
}



btn = document.getElementById("prodBtn")
btn.addEventListener("click",function(){
    document.getElementById("result").innerHTML = produs(2,2)
})

//Ex2 Creati o functie care , la apasarea butonului sa afiseze intr-un paragraf produsul numerelor
//introduse in 2 text inputuri.

function myFunction1() {
    var num1 = document.getElementById("txt1").value;
    var num2 = document.getElementById("txt2").value;
    document.getElementById("demo").innerHTML = produs(num1,num2);
}


//Ex3 Creati o functie care , la apasarea butonului sa afiseze intr-un paragraf produsul numerelor
//introduse in 2 text inputuri , dar daca in casute scrie imediat  daca nu este introdus un numar



var textbox = document.getElementById("textbox-id")
var textbox2 = document.getElementById("textbox-id2")


divAfterTextBox = document.getElementById("divAfterTextBox-id");
textbox.onkeyup = function(){
    if (isNaN(textbox.value)) divAfterTextBox.textContent = "Eroarea 1";
    else divAfterTextBox.textContent = "";
}
textbox2.onkeyup = function(){
    if (isNaN(textbox2.value)) divAfterTextBox.textContent = "Eroarea 2";
    else divAfterTextBox.textContent = "";
}


function myFunction() {
    var textbox = document.getElementById("textbox-id").value;
    var textbox2 = document.getElementById("textbox-id2").value;
    document.getElementById("divAfterTextBox-id").innerHTML = produs(textbox,textbox2);
}
