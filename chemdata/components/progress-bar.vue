<template>
  <div class="p-2 mt-2 w-56 sm:w-72">
    <span class="flex justify-start not-prose dark:text-zinc-800">{{
      name
    }}</span>
    <div class="flex w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        class="flex space-x-10 bg-violet-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full percentage"
      >
        <span>{{ percentage }}%</span>
        <Tooltip
          v-if="['Deep Learning', 'Full stack'].includes(name)"
          text="Learning Focus"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
});

const teste = computed(() => {
  return `${props.percentage}%`;
});
</script>

<style scoped>
.percentage {
  width: v-bind(teste);
}
</style>
