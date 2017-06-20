"use strict";

var keyCode = Object.freeze({
    'SPACE': 32,
    'ENTER': 13,
    'DOWN': 40
});

function setEventListeners(menubar) {
    // var element = menubar.firstElementChild;
    //
    // while (element) {
    //     var menuItem = element.firstElementChild;
    //
    //     console.log('Menuitemi: ' + menuItem.innetHTML);
    //
    //     if (menuItem.tagName === 'span') {
    //         menuItem.addEventListener('keyDown', handleKeyDown(event, menuItem));
    //         menuItem.addEventListener('click', handleClick(event, menuItem));
    //         menuItem.addEventListener('mouseover', openPopupMenu(menuItem));
    //         menuItem.addEventListener('mouseout', closePopupMenu(menuItem));
    //
    //     }
    //
    //     element = element.firstElementChild;
    // }
    //
    // console.log('All event listeners has set');
}

function closeAll(menubar) {
    var element = menubar.firstElementChild;
    
    while (element) {
        var menuItem = element.firstElementChild;
            console.log('Lisätään eventlistenerit');
            menuItem.addEventListener('keydown', function(event) {
                console.log(menuItem);
                handleKeydown(event, menuItem);
            });
            menuItem.addEventListener('click', handleClick(event, menuItem));
            menuItem.addEventListener('mouseover', openPopupMenu(menuItem));
            menuItem.addEventListener('mouseout', closePopupMenu(menuItem));
            
            closePopupMenu(menuItem);
        
        element = element.nextElementSibling;
    }
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

function handleKeydown(event, menuItem) {
    console.log(event.keyCode + 'menuitem ' +menuItem);
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

function handleClick(event, menuItem) {
    if (menuItem.getAttribute('aria-expanded' === 'false')) {
        openPopupMenu(menuItem);
    } else {
        closePopupMenu(menuItem);
    }
    
}

