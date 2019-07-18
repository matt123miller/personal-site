<template>
  <div class="z-50 flex bg-white border-b border-grey-lighter fixed pin-t pin-x h-16 items-center">
    <div class="w-full max-w-screen-xl relative mx-auto px-6">
      <div class="flex items-center mx-6">
        <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
          <div class="flex items-center"/>
        </div>

        <div class="flex flex-grow items-center lg:w-3/4 xl:w-4/5">
          <div class="w-full lg:px-6 lg:w-3/4 xl:px-12">
            <div class="relative">
              <em>Title of the page/post goes here</em>
            </div>
          </div>

          <button @click="toggleNav" id="sidebar-open" class="flex px-6 items-center lg:hidden">
            <svg
              class="fill-current w-4 h-4 cursor-pointer text-grey"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>

          <div id="sidebar-close" class="px-6 items-center hidden">
            <svg
              class="fill-current w-4 h-4 cursor-pointer text-grey"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
              ></path>
            </svg>
          </div>

          <div class="hidden lg:block lg:w-1/4 px-6">
            <div class="flex justify-start items-center text-grey">
              <a
                class="block flex items-center hover:text-grey-darker mr-6"
                href="https://github.com/matt123miller"
              >
                <GithubLogo/>
              </a>
              <a
                class="block flex items-center hover:text-grey-darker mr-6"
                href="https://twitter.com/matt123miller"
              >
                <TwitterLogo/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Events, EventBus } from "./EventBus";
import TwitterLogo from "./twitter/Logo.vue";
import GithubLogo from "./github/Logo.vue";

function toggleNav() {
  EventBus.$emit(`${Events.TOGGLE_SIDEBAR}`, "string message");
}

export default {
  components: { TwitterLogo, GithubLogo },
  methods: {
    toggleNav
  },
  mounted() {}
};
</script>
