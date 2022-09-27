<script setup>
import { ref } from 'vue';
const isAlive = ref(false);
const isUnCrack = ref(true);
</script>




<template>
  <div class="main">
    <h1 :class="[isAlive && 'dead', isUnCrack && 'size']">Gardelsito</h1>
    <p>Gardelsito is currently {{isAlive ? 'dead' : 'alive'}} and he is {{isUnCrack ? 'un crack' : 'not that crack.'}}</p>
    <button @click="isAlive = !isAlive">Revive Gardelsito</button>
    <button @click="isUnCrack = !isUnCrack">Make him not that crack</button>
  </div>
  
</template>



<style scoped>
h1{
  color:green;
}
.dead {
  color: red;
}
.size {
  font-size: 70px;
}
button {
  margin: 2rem;
  padding:0.8rem;
}
</style>