<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        class="column group hover:text-violet-400 dark:hover:text-violet-500"
        :class="{
          'ml-4': level,
          'text-violet-400 dark:text-violet-500': activeId === link.id,
        }"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        :links="link.children"
        :level="level + 1"
        :active-id="activeId"
      />
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0,
  },
  activeId: {
    type: String,
    default: null,
  },
});
</script>
