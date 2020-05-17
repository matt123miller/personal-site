<template>
  <div class="mb-3 lg:mb-2">
    <h1 class="title">
      Hi!
    </h1>
    <h2 class="subtitle">
      My name is Matt
    </h2>
    <p>
      I've been a professional developer for 3 years now. I started with games and iOS development but I've been
      focusing on web development for most of my career. Sort of full stack, but between you and me I prefer the backend.
    </p>
    <p>
      I want my website and blog to document my journey from graduate developer to wherever I end up. A lot of the
      skills and knowledge I have now I picked up the hard way. I've been lucky to work with some brilliant
      teams that have coached and moulded me, helping fill the gaps in my knowledge, and I want to pass some of that
      onto others where I can.
    </p>
    <!-- <img src="" alt="An image of me working with my current team at SimpleClick" srcset=""> -->
    <p>
      Outside of work I paint, listen to a lot of podcasts and play in a variety of Dungeons & Dragons.
      Keep an eye on my blog for hobby content!
    </p>
    <img
      class="h-64 mt-3 object-cover"
      src="~/assets/images/dice-box.jpeg"
      alt="A rectangular wooden box containing 7 dice for Dungeons & Dragons"
      srcset=""
    >
    <SocialLinks />
  </div>
</template>

<script>
import SocialLinks from "~/components/SocialLinks.vue";
export default {
  name: "About",
  components: {
    SocialLinks
  }
};
</script>
