<template>
  <!-- Contents of the nav -->
  <!-- The container is already set up in the enclosing block -->

  <div
    id="sidebar"
    class="hidden absolute z-90 top-16 w-full border-b -mb-16 lg:-mb-0 lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5"
  >
    <div
      id="navWrapper"
      class="lg:block lg:relative lg:sticky lg:top-16 bg-white lg:bg-transparent overflow-hidden"
    >
      <nav class="site-nav float-left">
        <img src="images/selfie.jpeg" alt>

        <div class="mb-8 ml-8 mt-16">
          <p class="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-sm lg:text-xs">Blog</p>

          <ul class="list-none">
            {# Recent posts header here #} {# List/loop some recent
            blog posts #}
            <li class="mb-3 lg:mb-2">
              <a class="hover:underline text-grey-darkest" href="#">post 1</a>
            </li>
            <li class="mb-3 lg:mb-2">
              <a class="hover:underline text-grey-darkest" href="#">post 2</a>
            </li>
            <li class="mb-3 lg:mb-2">
              <a class="hover:underline text-grey-darkest" href="#">post 3</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
