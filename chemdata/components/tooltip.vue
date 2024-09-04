<template>
  <div class="relative z-10 flex flex-col items-center">
    <div class="tooltip">
      {{ text }}
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: false,
  },
});

const show = ref(false);
</script>

<style scoped>
.tooltip {
  @apply absolute z-[999] w-max max-w-80 p-2 text-xs text-white bg-black rounded shadow-lg left-16 top-6;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom-color: #000000;
  border-top: 0;
  margin-left: -5px;
  margin-top: -4.5px;
}
</style>
