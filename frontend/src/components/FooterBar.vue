<script setup>
import { containerMaxW } from "@/config.js";
import BaseLevel from "@/components/BaseLevel.vue";
import JustboilLogo from "@/components/JustboilLogo.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <BaseLevel>
      <div class="text-center md:text-left">
        <b>&copy; {{ year }} - </b>
        <slot />
      </div>
      <div class="md:py-2">
        <span class="font-mono font-semibold text-1xl text-black hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100">
          //.<span class="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600 ml-1">$</span><span id="cursor" class="ml-2 animate-ping">_</span>
        </span>
      </div>
    </BaseLevel>
  </footer>
</template>