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
        <div class="image-cropper mt-5">
          <img
            class="rounded-full w-64 h-64 centred block"
            src="~/assets/images/selfie-cropped.png"
            alt="A picture of myself"
          />
        </div>

        <div class="mb-8 ml-8 mt-8">
          <p class="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-sm lg:text-xs">Blog</p>

          <ul class="list-none">
            <li>It's coming...</li>
            <!-- <li class="mb-3 lg:mb-2">
              <a class="hover:underline text-grey-darkest" href="#">post 1</a>
            </li>
            <li class="mb-3 lg:mb-2">
              <a class="hover:underline text-grey-darkest" href="#">post 2</a>
            </li>
            <li class="mb-3 lg:mb-2">
              <a class="hover:underline text-grey-darkest" href="#">post 3</a>
            </li>-->
          </ul>
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

// visit this link https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax

function toggleNav() {
  const openButton = document.getElementById("sidebar-open");
  const sidebar = document.getElementById("sidebar");
  const closeButton = document.getElementById("sidebar-close");
  const contentContainer = document.getElementById("content-container").parentElement;

  openButton.classList.toggle('hidden');
  openButton.classList.toggle('lg:hidden');
  openButton.classList.toggle('flex');
  sidebar.classList.toggle('hidden');
  closeButton.classList.toggle('hidden');
  contentContainer.classList.toggle('hidden');
}

export default {
  name: "Nav",
  data() {
    return {
      isHidden: "no"
    };
  }
};
</script>

<style  scoped>
.image-cropper {
  position: relative;
  overflow: hidden;
}
</style>
