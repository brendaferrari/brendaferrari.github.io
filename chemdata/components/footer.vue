<template>
  <div class="flex justify-evenly">
    <div class="flex flex-col items-center">
      <MapPinIcon class="flex h-20 w-20 p-2 hover:animate-pulse" />
      <span class="flex">WHERE TO FIND ME?</span>
      <span class="flex">Nanoscience Center </span>
      <span class="flex">University of Jyväskylä</span>
      <span class="flex">Jyväskylä, Finland</span>
    </div>
    <div class="flex flex-col items-center">
      <EnvelopeIcon class="flex h-20 w-20 p-2 hover:animate-pulse" />
      <span class="flex">EMAIL ME</span>
      <span class="flex">brendafferrari@gmail.com</span>
      <span class="flex">brenda.d.desouzaferrari@jyu.com</span>
    </div>
  </div>
  <hr class="border-gray-400" />

  <div class="flex justify-between">
    <div class="flex">© Copyright ChemData 2024 | Design by Brenda Ferrari</div>
    <div class="flex space-x-3">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
      />
      <a href="https://github.com/brendaferrari" target="_blank">
        <button class="">
          <i class="fab fa-github mr-1 fa-lg"></i>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/brenda-ferrari-b04bb2b4/"
        target="_blank"
      >
        <button class="">
          <i class="fab fa-linkedin mr-1 fa-lg"></i>
        </button>
      </a>
      <a href="https://orcid.org/0000-0001-5609-0947" target="_blank">
        <button class="">
          <i class="fab fa-orcid mr-1 fa-lg"></i>
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
import { MapPinIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon } from "@heroicons/vue/24/solid";
</script>
