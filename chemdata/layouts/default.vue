<template>
  <div class="container mx-auto max-w-6xl">
    <header
      class="flex space-x-20 justify-center items-center my-2 bg-default dark:bg-dark lg:space-x-72 md:space-x-48"
    >
      <div class="flex">
        <div class="block">
          <NuxtLink
            to="/"
            class="flex p-2 hover:bg-gray-200 rounded dark:hover:bg-gray-800"
          >
            <img
              src="~/assets/images/icon.svg"
              class="flex h-12 w-12 hover:bg-gray-200 dark:hover:bg-gray-800"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="justify-center block">
        <Menu />
      </div>
      <div class="">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </div>
    </header>

    <main class="">
      <slot />
    </main>

    <div
      class="flex flex-col justify-between w-full bottom-0 size-80 p-4 bg-default dark:bg-dark"
    >
      <hr class="border-gray-400" />
      <Footer />
    </div>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - ChemData",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto";
}
body {
  @apply bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
