$(document).ready(function(){

    $("header nav a").each(function(index) {
        $(this).attr("id", index);
        $(this).click(function(eventInformation) {
            displayArticle(index);
            eventInformation.preventDefault();
        });
    });
});

function displayArticle(index) {
    $("article").addClass("hidden");
    $("article:eq(" + index + ")").removeClass("hidden");
}





function avaa() {
    document.getElementById("kotimenu-sisalto").classList.toggle("show");
}



