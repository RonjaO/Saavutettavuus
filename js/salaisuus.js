
$(document).ready(function() {
    $("#painike").bind("touchstart click", function(event) {
        $("body").append("<p>Lisätty teksti</p>");
        alert("fooo");
    });
});


// function salaisuus() {
//     alert("foo");
//     var div = document.getElementById("salaisuus");
//     div.style.removeProperty("position")
//     div.style.removeProperty("left");
//     div.style.removeProperty("top");
//     div.style.removeProperty("width");
//     div.style.removeProperty("height");
//     div.style.removeProperty("overflow");
//
//     div.style.backgroundColor = "#90EE90";
//
//     alert(div.style.position);
// }

