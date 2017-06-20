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
        console.log('MenuItem: ' + menuItem.innerHTML);
        closePopupMenu(menuItem);
            console.log('Lisätään eventlistenerit');
            menuItem.addEventListener('keydown', function(event) {
                handleKeydown(event, menuItem);
            });
            menuItem.addEventListener('click', handleClick(event, menuItem));
            menuItem.addEventListener('mouseover', openPopupMenu(menuItem));
            menuItem.addEventListener('mouseout', closePopupMenu(menuItem));
            
        
        element = element.nextElementSibling;
    }
}

function closePopupMenu(menuItem) {
    var popupMenu = menuItem.nextElementSibling;

    popupMenu.style.display = 'none';
    
    menuItem.setAttribute('aria-expanded', 'false');
    
}

function openPopupMenu(menuItem) {
    var popupMenu = menuItem.nextElementSibling;
    
    popupMenu.style.display = 'block';
    popupMenu.style.position = 'absolute';
    popupMenu.style.top = (rect.height - 1) + 'px';
    popupMenu.style.zIndex = 100;
    
    menuItem.setAttribute('aria-expanded', 'true');
}

function handleKeydown(event, menuItem) {
    console.log(event);
    switch(event.keyCode) {
        case keyCode.SPACE:
        case keyCode.ENTER:
        case keyCode.DOWN:
            if (menuItem.getAttribute('aria-expanded' === 'false')) {
                openPopupMenu(menuItem);
            } else {
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

