
function afis(ceva){
    alert("Apasat pe " + ceva);
}


document.getElementById("f").addEventListener("click",function(ev){
    afis("form")
    ev.stopPropagation();
})

document.getElementById("d").addEventListener("click",function(ev){
    afis("div")
    ev.stopPropagation();

})
document.getElementById("p").addEventListener("click",function(ev){
    afis("p")
    ev.stopPropagation();
})




