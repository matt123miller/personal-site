/* eslint-disable vue/max-attributes-per-line */
<template>
  <!-- Contents of the nav -->
  <!-- The container is already set up in the enclosing block -->

  <div
    id="sidebar"
    class="absolute z-90 top-16 w-full h-full border-b -mb-16 hidden lg:block lg:-mb-0 lg:border-b-0 lg:pt-0 lg:w-1/4 lg:border-0 xl:w-1/5"
  >
    <!-- Why use a nav wrapper? I could just put these classes on the nav really.... -->
    <div
      id="navWrapper"
      class="mt-16 lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent overflow-hidden"
    >
      <nav class="site-nav float-left w-full">
        <div id="nav-content" class="overflow-y-scroll">
          <div class="image-cropper mt-5">
            <a href="/">
              <img
                class="rounded-full w-64 h-64 centred block"
                src="~/assets/images/selfie-cropped.png"
                alt="A picture of myself"
              >
            </a>
          </div>

          <div class="mb-8 ml-8 mt-8">
            <h3 class="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-base lg:text-lg">
              <a class="hover:underline text-grey-darkest" href="/about">About</a>
            </h3>

            <h3 class="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-base lg:text-lg">
              <a href="/blog">Blog</a>
            </h3>
            <ul class="list-none">
              <li>
                <a href="/blog/what-dungeons-and-dragons-has-taught-me">What Dungeons & Dragons has taught me</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="z-50 flex bg-white border-t-2 border-grey-dark fixed pin-b pin-x h-8 items-center lg:hidden"
        >
          <button id="sidebar-close" class="fixed lg:hidden close-arrow" @click="toggleNav">
            <svg
              class="fill-current h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { EventBus, Events } from "./EventBus";

EventBus.$on(Events.TOGGLE_NAV, data => {
  toggleNav();
});

// The button to trigger this is only viewable at certain sizes
// So I don't need to check state before executing.
function toggleNav() {
  const openButton = document.getElementById("sidebar-open");
  const sidebar = document.getElementById("sidebar");
  const closeButton = document.getElementById("sidebar-close");
  const contentContainer = document.getElementById("content-container").parentElement;

  openButton.classList.toggle("hidden");
  openButton.classList.toggle("lg:hidden");
  openButton.classList.toggle("flex");
  sidebar.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");
  contentContainer.classList.toggle("hidden");
}

export default {
  name: "Nav",
  data() {
    return {
      isHidden: "no" // wtf was I doing here?
    };
  },
  methods: {
    toggleNav
  }
};
</script>

<style scoped>
.image-cropper {
  position: relative;
  overflow: hidden;
}

.close-arrow {
  margin-left: 50%;
  margin-right: 50%;
  transform: translate(-50%, 0%);
  transform: rotate(180deg);
}

.close-arrow button path {
  stroke: #c00;
  stroke-width: 0.5;
  fill: none;
}

#nav-content {
  max-height: 75%;
}
</style>
