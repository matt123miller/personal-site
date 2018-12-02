"use strict";
var titleCharacters = document.getElementById('name_title');
titleCharacters.childNodes.forEach(function (character) {
    character.addEventListener('pointerenter', toggleCharacters);
});
var toggleCharacters = function (evt) {
    var target = evt.target;
    target.style.color = getRandomColor();
};
function getRandomColor() {
    var characters = '0123456789ABCDEF';
    // could use array.reduce if I was feeling fancy.
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}
