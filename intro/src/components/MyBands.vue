<template>
  <div class="main">
    <ul>
      <li @click="alertText">
        {{soad}}
      </li>
      <li v-text="madonna" :id="listItem">
      </li>
      <li v-html="eminem"></li>
      <li :class="redText">
        {{others[0]}}
      </li>
      <li :disabled="isShow">
        {{others[1]}}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const soad = ref('SOAD');
const madonna = ref('Madonna');
const eminem = ref('<p>Eminem</p>');
const others = ref(['Black eyed peas', 'Green day']);

const isShow = ref(false);
const redText = ref('red-text');
const listItem = ref('listItem');

function alertText () {
  alert('amen');
}

</script>

<style scoped>
.red-text {
  color: red;
}

#listItem {
  list-style: none;
}
</style>