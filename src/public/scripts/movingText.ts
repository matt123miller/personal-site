const titleCharacters = document.getElementById('name_title')!;

titleCharacters.childNodes.forEach(character => {
    character.addEventListener('pointerenter', toggleCharacters);
});


function toggleCharacters(evt: Event) {
    // Trust me Typescript, it's a html element
    const target = evt.target as HTMLElement;
    target.style.color = getRandomColor();
}

function getRandomColor() {
    const characters = '0123456789ABCDEF';
    // could use array.reduce if I was feeling fancy.
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * 16)];
    }
    return color;
}