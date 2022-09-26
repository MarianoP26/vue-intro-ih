<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyBio from '../src/components/MyBio.vue';
</script>

<template>
  <div class="main">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
      <div class="wrapper">
        <HelloWorld msg="My Short Bio" />
      </div>
    </header>
    <div class="bio">
      <MyBio/>
    </div>
  </div>
  


</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
