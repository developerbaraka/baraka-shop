<template>
  products

  <div>{{ counter }}</div>
  <div>{{ name }}</div>
  <div>{{ doubleCounter }}</div>
  <button @click="main.increment()">Double counter</button>
  <NuxtLink to="/products/23">Product 23</NuxtLink>

  <!-- <nuxt-img
    src="/images/50103.jpg"
    sizes="sm:100vw md:50vw lg:400px"
    format="webp"
    quality="80"
    fit="cover"
    loading="lazy"
  /> -->
</template>

<script setup>
import { useMainStore } from "@/stores/main";
import { storeToRefs } from "pinia";

const main = useMainStore();
// extract specific store properties
const { counter, doubleCounter, name } = storeToRefs(main);
</script>

<style></style>
