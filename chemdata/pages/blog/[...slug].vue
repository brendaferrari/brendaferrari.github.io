<template>
  <div class="h-screen">
    <article
      class="prose dark:prose-invert max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
    >
      <ContentDoc>
        <template #not-found>
          <h1>Document not found (404)</h1>
          <p>This blog post could not be found</p>
        </template>
        <template v-slot="{ doc }">
          <div class="grid grid-cols-6 gap-24">
            <div
              :class="{
                'col-span-6 md:col-span-4': doc.toc,
                'col-span-6': !doc.toc,
              }"
            >
              <ContentRenderer :value="doc" />
            </div>
            <div class="md:col-span-2 md:block not-prose" v-if="doc.toc">
              <aside
                class="sticky mt-24 top-8 p-2 rounded-lg dark:shadow-[0px_5px_15px_rgb(237,233,254,0.35)] shadow-[0px_5px_15px_rgb(109,40,217,0.35)] bg-violet-100 dark:bg-violet-900"
              >
                <div class="font-semibold mb-2">Table of Contents</div>
                <nav>
                  <TocLinks :links="doc.body.toc.links" :active-id="activeId" />
                </nav>
              </aside>
            </div>
          </div>
        </template>
      </ContentDoc>
    </article>
  </div>
</template>

<script setup>
const activeId = ref(null);

onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });
  const elements = document.querySelectorAll("h2, h3");

  for (const element of elements) {
    observer.observe(element);
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});

useSeoMeta({
  title: "Blog Posts",
  ogTitle: "Blog Posts",
  description: "List of blog posts",
  ogDescription: "List of blog postss",
});
</script>
