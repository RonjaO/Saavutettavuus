"use strict";

var keyCode = Object.freeze({
    'SPACE': 32,
    'ENTER': 13,
    'DOWN': 40
});


function setup(menubar) {
    var element = menubar.firstElementChild;
    
    while (element) {
        var menuItem = element.firstElementChild;
            
        setEventListeners(menuItem);
        closePopupMenu(menuItem);
        
        element = element.nextElementSibling;
    }
}

function setEventListeners(menuItem) {
    menuItem.addEventListener('keydown', handleKeydown);
    menuItem.addEventListener('click', handleClick);
    menuItem.addEventListener('mouseover', function() {
        openPopupMenu(event.target);
    });
    menuItem.addEventListener('mouseout', function() {
        closePopupMenu(event.target);
    });
}

function closePopupMenu(menuItem) {
    var popupMenu = menuItem.nextElementSibling;

    popupMenu.style.display = 'none';
    
    menuItem.setAttribute('aria-expanded', 'false');
    
}

function openPopupMenu(menuItem) {
    console.log('Avataan ' + menuItem);
    var popupMenu = menuItem.nextElementSibling;
    
    popupMenu.style.display = 'block';
    popupMenu.style.position = 'absolute';
    popupMenu.style.zIndex = 100;
    
    menuItem.setAttribute('aria-expanded', 'true');
}

function handleKeydown(event) {
    var menuItem = event.target;
    console.log(event.keyCode);
    switch(event.keyCode) {
        case keyCode.SPACE:
        case keyCode.ENTER:
        case keyCode.DOWN:

            var expanded = menuItem.getAttribute('aria-expanded');
            console.log("expanded", expanded, typeof expanded);
            if (expanded === 'false') {
                console.log('painettu avaavaa näppäintä');
                openPopupMenu(menuItem);
            } else {
                console.log('suljetaan');
                closePopupMenu(menuItem);
            }
            break;
        
        default:
            break;
    }
    
}

function handleClick(event) {
    console.log('Klikattiin!', event.target);
    var menuItem = event.target;
    if (menuItem.getAttribute('aria-expanded') === 'false') {
        openPopupMenu(menuItem);
    } else {
        closePopupMenu(menuItem);
    }
    
}

