$(document).ready(function(){

    $(".alimenu").each(function(index) {
        $(this).attr("id", index);
        $(this).click(function(eventInformation) {
            showChildDropdown(index);
            eventInformation.preventDefault();
        });
    });
});

function showChildDropdown(index) {
    $("div.alimenu > div").addClass("hidden");
    $("div#" + index + " > div").removeClass("hidden");
}





//function avaa() {
//    document.getElementById("kotimenu-sisalto").classList.toggle("show");
//}



