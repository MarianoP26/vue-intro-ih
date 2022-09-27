<script setup>
import { ref } from 'vue';

const counter = ref(0);
</script>

<template>
  <div class="main">
    <h1>Count: {{counter}}</h1>
    <button @click="counter++">Increase</button>
    <button @click="counter--">Decrease</button>
    <template v-if="counter > 10">
      <h2>Wow what a high number dude stop clicking</h2>
      <h2>Thats not good for you</h2>
      <h2>Stop it</h2>
    </template>
    <template v-else-if="counter < 10">
      <h2>Needles</h2>
      <h2>Spiders</h2>
      <h2>Sugar</h2>
    </template>
    <template v-else>
      <h2>10 is a special numver</h2>
      <h2>Very special</h2>
      <h2>...</h2>
    </template>
  </div>
</template>

<style scoped>
button {
  margin: 1rem;
  padding: 1rem;
}
h1 {
  color:darkturquoise;
}
h2{
  color: bisque;
}
</style>