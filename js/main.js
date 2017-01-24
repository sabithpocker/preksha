window.onload = function() {
    rotateKattadi();
}

function rotateKattadi() {
    var tween = TweenMax.to("#kattadi", 5, {
        rotation: 1780,
        repeat: -1,
        yoyo: true,
        onRepeat: function() {
            tween.vars.rotation = Math.random() * (3000 - 10) + 10;
        }
    })
}