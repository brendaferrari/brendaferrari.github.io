<template>
  <div class="flex space-x-2 items-center">
    <button @click="toggleMode">
      <!-- <span v-if="nextMode === 'system'"
        ><WrenchScrewdriverIcon
          class="h-12 w-12 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 hidden md:flex"
      /></span> -->
      <span v-if="nextMode === 'light'"
        ><SunIcon
          class="h-12 w-12 p-1 hover:bg-gray-200 rounded dark:hover:bg-gray-800 md:flex"
      /></span>
      <span v-if="nextMode === 'dark'"
        ><MoonIcon
          class="h-12 w-12 p-1 hover:bg-gray-200 rounded dark:hover:bg-gray-800 md:flex"
      /></span>
    </button>
  </div>
</template>

<script setup>
import { MoonIcon } from "@heroicons/vue/24/outline";
import { SunIcon } from "@heroicons/vue/24/outline";
import { WrenchScrewdriverIcon } from "@heroicons/vue/24/outline";

const showNextModeLabel = ref(false);
const colorMode = useColorMode();

// const modes = ["system", "light", "dark"];
const modes = ["light", "dark"];

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex = null;

  if (currentModeIndex + 1 == modes.length) {
    nextModeIndex = 0;
  } else {
    nextModeIndex = currentModeIndex + 1;
  }

  return modes[nextModeIndex];
});

const toggleMode = () => (colorMode.preference = nextMode.value);
</script>
