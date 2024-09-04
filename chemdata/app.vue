<template>
  <div>
    <NuxtLoadingIndicator :height="5" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}
</style>
