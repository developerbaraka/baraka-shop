<template>
  <div>
    <!-- notification toast goes here using teleport -->

    <!-- sections division for dashboard look -->
    <div class="h-screen w-full flex">
      <SideNav />
      <main class="overflow-y-scroll px-6 w-full flex-1">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import SideNav from "~~/components/global/SideNav.vue";
</script>
