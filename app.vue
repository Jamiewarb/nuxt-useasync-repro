<template>
  <div>
    Test
  </div>
</template>

<script setup lang="ts">
import { useTestDoesntWork } from '~/composables/useTest';

await useTestDoesntWork();
// await useTestWorks();

/* Putting the non-working function directly into the script tag allows it to work again. */
// await fn();
// await useAsyncData(async () => {});
</script>
