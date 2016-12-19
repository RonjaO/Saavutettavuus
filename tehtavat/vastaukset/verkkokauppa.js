$(document).ready(function(){

    $(".alimenulinkki").each(function(index) {
        $(this).attr("id", index);
        $(this).click(function(eventInformation) {
            showDropdown(index);
            eventInformation.preventDefault();
        });
    });
});

function showDropdown(index) {
    $(".alimenu-sisalto").addClass("hidden");
    $(".alimenu-sisalto:eq(" + index + ")").removeClass("hidden");
}





//function avaa() {
//    document.getElementById("kotimenu-sisalto").classList.toggle("show");
//}



