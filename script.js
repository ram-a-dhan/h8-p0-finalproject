var key = {
    left: 37,
    up: 38,
    right: 39,
};

var position = {
    left: 50,
    mid: 200,
    right: 350,
};

var distance = 150;

function playerMovement(action) {
    
    if (!action) {action = window.event;};
    var keyCode = action.keyCode || action.which;

    var carPos = document.getElementById('player').style.left;
    
}

window.addEventListener('keydown',document,playerMovement());