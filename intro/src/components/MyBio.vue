<template>
  <div class="main">
    <h1>Mariano Pierretti</h1>
    <p>Hello I am Mariano and Im using Vue. From Argentina and currently based in Barcelona</p>
    <Birthday/>
    <Location/>
    <Age/>
    <PlaceOfBirth/>
    ----------------------------
    <MyBands/>
  </div>
  
</template>

<script setup>
import Birthday from './Birthday.vue';
import Location from './Location.vue';
import PlaceOfBirth from './PlaceOfBirth.vue';
import Age from './Age.vue';
import MyBands from './MyBands.vue';
</script>

<style scoped>

</style>