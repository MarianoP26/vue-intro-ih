<script setup>
import { ref } from 'vue';

const isBest = ref(true);

const toggleBest = () => {
  isBest.value = !isBest.value;
}
</script>


<template>
  <h1 @click="toggleBest" :class="isBest ? 'best' : 'not-best'">SOAD</h1>
</template>



<style scoped>
.best{
  color:green;
}
.not-best {
  color:red;
}
</style>