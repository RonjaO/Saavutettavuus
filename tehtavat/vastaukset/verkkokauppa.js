$(document).ready(function(){

    // Etsitään kaikki elementit, joilla on luokka 'alimenulinkki'
    // lisätään niille indeksin mukainen id sekä tapahtumankuuntelija
    $(".alimenulinkki").each(function(index) {
        $(this).attr("id", index);
        $(this).click(function(eventInformation) {
            showDropdown(index);
            eventInformation.preventDefault();
        });
    });
});

function showDropdown(index) {
    // Index on alimenun avaavan linkin id.
    // Haetaan sivulta kaikki elementit, joiden luokka on 'alimenu-sisalto'
    // Poistetaan ensin kaikilta luokka 'show'
    // Etsitään indexillä oikea alimenu-sisalto ja lisätään sille luokka 'show'
    $(".alimenu-sisalto").removeClass("show");
    $(".alimenu-sisalto:eq(" + index + ")").addClass("show");
}

// Jos käyttäjä klikkaa jotain muuta kohdetta näytöllä, piilotetaan alimenut
window.onclick = function(event) {
    if (!event.target.matches('.alimenulinkki')) {
       $(".alimenu-sisalto").removeClass("show");
    }
}




//function avaa() {
//    document.getElementById("kotimenu-sisalto").classList.toggle("show");
//}



