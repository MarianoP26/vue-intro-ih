<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyBio from '../src/components/MyBio.vue';
</script>

<template>
  <div class="main">
    <header>
      <div class="wrapper">
        <HelloWorld msg="My Short Bands " />
      </div>
      <div class="routerlinks">
      <router-link class="navlink pages" to="/">Home</router-link>
      <router-link class="navlink pages" to="/about">About</router-link>
      <router-link class="navlink" to="/soad">Soad</router-link>
      <router-link class="navlink" to="/eminem">Eminem</router-link>
      <router-link class="navlink" to="/gardel">Gardelsito</router-link>
      <router-link class="navlink" to="/eminem">Eminem</router-link>
      <router-link class="navlink conditional" to="/conditional">Conditional</router-link>
      <router-link class="navlink iteration" to="/iteration">Iteration</router-link>
    </div>
    </header>
    <div class="bio">
      <!-- <MyBio/> -->
    </div>

    <div class="view">
      -----------------------------------------------------------------
      <router-view />
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
.navlink {
    margin: 1rem;
    font-size: 30px;
    color:coral;
}

.pages {
  color: white;
}

.conditional {
  color: rebeccapurple;
}

.iteration {
  color: rgb(0, 11, 160);
}

@media (min-width: 1024px) {
  .navlink {
    margin: 1rem;
  }

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
