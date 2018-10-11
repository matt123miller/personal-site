const titleCharacters = document.getElementById('name_title');

titleCharacters.childNodes.forEach(character => {
    character.addEventListener('pointerenter', toggleCharacters);
});

/**
 * 
 * @param {Node} node 
 */
function toggleCharacters(node) {
    node.originalTarget.style.color = getRandomColor();
}

function getRandomColor() {
    var characters = '0123456789ABCDEF';
    // could use array.reduce if I was feeling fancy.
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}