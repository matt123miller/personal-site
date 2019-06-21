<template>
  <section class="intro block">
    <h1 id="name_title" @load="attachCharactersEvent">
      <span>H</span>
      <span>i</span>
      <span>,</span>
      <span>I</span>
      <span>'</span>
      <span>m</span>
      <span>&nbsp;</span>
      <span>M</span>
      <span>a</span>
      <span>t</span>
      <span>t</span>
    </h1>
    <h2>I'm a Developer.</h2>
    <h2>Also a Dungeon Master.</h2>
    <h2>I'm currently working on my site, I'm sure you're gonna love it!</h2>
  </section>
</template>

<script>
/**
 * @param {Event} event
 */
function attachCharactersEvent(event) {
  // wtf is going on here vue?!?!
  // console.log(event);
  event.target.childNodes.forEach(character => {
    // character.addEventListener("pointerenter", toggleCharacters);
  });
}

const toggleCharacters = evt => (evt.target.style.color = getRandomColor());

function getRandomColor() {
  const characters = "0123456789ABCDEF";
  // could use array.reduce if I was feeling fancy.
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const msg = "";
export default {
  name: "Introduction",
  data() {
    return {
      msg
    };
  },
  methods: {
    attachCharactersEvent
  }
};
</script>
