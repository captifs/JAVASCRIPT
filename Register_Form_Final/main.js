var currentTab = 0; // acesta este tabul curent
showTab(currentTab); // apelez functia de display a tabului curent

function showTab(n) {
// iau tab-ul specific din formular
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
// fixez butonul de next

    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // mai departe afisez stepul corect
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
// adaug clasa activa la stepul curent
    x[n].className += " active";

}





function nextPrev(n) {
// functia va sti ce sa afisezer
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    //validarea fomului
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].querySelectorAll("input, #city, #judet");
    req = x[currentTab].getElementsByClassName("reqs");
    for (i = 0; i < req.length; i++) {
        if (req[i].value === "") {
            req[i].className += " invalid";
            valid = false;
        }
    }

    return valid; // return the valid status
}



function check() {
    if (document.getElementById('password').value ===
        document.getElementById('confirm_password').value) {
        document.getElementById('message').innerHTML = "match";

    } else if (document.getElementById('password').value !==
        document.getElementById('confirm_password').value && document.getElementById('password').value && document.getElementById('confirm_password').value ) {
        document.getElementById('message').innerHTML = "no match";
        document.getElementById('password').value = "";
        document.getElementById('confirm_password').value = "";

    }
}

function nextStep() {
    var allFields = document.getElementsByTagName("input");
    //console.log(allFields);
    for (var index in allFields) {
        console.log('name : '+allFields[index].name);
        if (allFields[index].type == "text") { // you can change condition by name instead of type
            if (allFields.hasOwnProperty(index)) {
                var attr = allFields[index];
                console.log(attr.value);
            }
        }
    }
}


var el_down = document.getElementById("geeks");

/* Function to generate combination of password */
function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (i = 1; i <= 9; i++) {
        var char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }

    return pass;
}

function gfg_Run() {
    el_down.innerHTML = generateP();
}

