//Creez un obiect cu mai multe atribute, avand si un  atribut fullName care concateneaza First Name si Last Name.
var user = {
    firstName: "Pierre",
    lastName: "Bourne",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
    console.log(user.fullName);
    
//Afiseaza paragraful cu id-ul demo intr-o variabila.
var personal = document.getElementById("demo")
console.log(personal);

//Afiseaza primul element cu clasa - 'clasa' .
var clasa = document.getElementsByClassName("clasa");
console.log(clasa[0]);

//Afiseaza toate elementele din body cu clasa 'clasa'
var sel = document.querySelectorAll("body .clasa");
console.log(sel);

// La apasarea butonului sa apara mesajul Thanks.

function handler() {
    alert( 'Thanks!' );
}
elem.addEventListener("click", handler);

// O alternativa de afisare a mesajului la apasarea butonului.
elem.onclick = function() {
    alert('Thank you 2 ');
};
