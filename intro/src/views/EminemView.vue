<script setup>
import { ref } from 'vue';

const fontSize = ref(18);

const increaseSize = () => {
  fontSize.value++;
}
</script>



<template>
  <h1 :style="{fontSize: fontSize + 'px',}" @click="increaseSize">It's so empty without him</h1>
</template>



<style scoped>

</style>