<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStyleStore } from "@/stores/style.js";
import { gradientBgDark } from "@/colors.js";
import SectionMain from "@/components/SectionMain.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";

const styleStore = useStyleStore();
const router = useRouter();

const sendTo = (route) => {
  styleStore.setDarkMode(true);
  styleStore.setStyle("basic");
  router.push(route);
};

onMounted(() => {
  setTimeout(() => sendTo('login'), 2500)
})
</script>

<template>
   <LayoutGuest>
    <div
      :class="gradientBgDark"
      class="flex min-h-screen items-center justify-center"
    >
      <SectionMain>
        <h2 class="animate-pulse text-xl md:text-xl text-center text-white mb-12">
          Loading please wait . . .
        </h2>
      </SectionMain>
    </div>
  </LayoutGuest>
</template>