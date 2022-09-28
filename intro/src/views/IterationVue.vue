<script setup>
import { ref } from 'vue';
const foodArray = ref(['Asado', 'EmpanadaJyQ', 'Nachos', 'Pizza', 'Chicken Vindaloo', 'Cheeseburger','Sushi']);
const foodArrayObject = ref([{
  name: 'Asado',
  region: 'Argentina',
},
{
  name: 'EmpanadaJyQ',
  region: 'Argentina',
},
{
  name: 'Nachos',
  region: 'Mexico',
},
{
  name: 'Pizza',
  region: 'Italy',
},
{
  name: 'Asado',
  region: 'Argentina',
},
{
  name: 'Chicken Vindaloo',
  region: 'Indian',
},
{
  name: 'Cheeseburger',
  region: 'USA',
},
{
  name: 'Sushi',
  region: 'Asian',
},
]);
const foodArrayObjectNested  = ref([
{
  name: 'Asado',
  region: 'Argentina',
  ingredients: ['Meat','Chimichurri'],
},
{
  name: 'EmpanadaJyQ',
  region: 'Argentina',
  ingredients: ['Ham','Cheese'],
},
{
  name: 'Nachos',
  region: 'Mexico',
  ingredients: ['Jalapeño huevon','Crema agria wey'],
},
{
  name: 'Pizza',
  region: 'Italy',
  ingredients: ['Prosciutto','Rucula'],
},
{
  name: 'Chicken Vindaloo',
  region: 'Indian',
  ingredients: ['Chicken','Rice'],
},
{
  name: 'Cheeseburger',
  region: 'USA',
  ingredients: ['Meat','Cheese','Bacon'],
},
{
  name: 'Sushi',
  region: 'Asian',
  ingredients: ['Raw Fish','Soy Sauce'],
},
]);
const myInfo = ref ({name: 'Mariano', date: '28/03/1995', location: 'Sitges', favFood: 'Supremas de pollo', favArtist: 'Serj Tankian'});

const isShow1 = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const isShow4 = ref(false);


const stringLabf = () => {
  return 'test';
}

</script>

<template>
  <div class="main">
    <button @click="isShow1 = !isShow1" :class="isShow1 && 'active'">Array</button>
    <button @click="isShow2 = !isShow2" :class="isShow2 && 'active'">Array Object</button>
    <button @click="isShow3 = !isShow3" :class="isShow3 && 'active'">Array Object Nested Array</button>
    <button @click="isShow4 = !isShow4" :class="isShow4 && 'active'">Object</button>
    <div class="container">
      <div class="first">
        <ul v-show="isShow1">
          <li v-for="food, index in foodArray" :key="index">
            {{food}}
          </li>
        </ul>
      </div>
      <div class="second">
        <ul v-show="isShow2">
          <li v-for="foodInfo, index in foodArrayObject" :key="index">
            <h2>{{foodInfo.name}} - {{foodInfo.region}}</h2>
          </li>
        </ul>
      </div>
      <div class="third">
        <ul v-show="isShow3">
          <li v-for="foodInfo, index in foodArrayObjectNested" :key="index">
            <h2>{{foodInfo.name}} - {{foodInfo.region}}</h2>
            <p v-for="ingredient, index in foodInfo.ingredients" :key="index">
              {{ingredient}}
            </p>
          </li>
        </ul>
      </div>
      <div class="fourth">
        <ul v-show="isShow4">
          <li v-for="info, key, index in myInfo" :key="index">
            {{index + 1}}. {{key}}: {{info}}
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="lab">
      <h1>{{stringLabf()}}</h1>
      <h1>{{2+2}}</h1>
    </div> -->
  </div>
</template>

<style scoped>
.container {
  margin: 1rem;
  padding:1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
}
button {
  padding: 1rem;
  margin: 1rem 3rem;
  border-radius: 20px;
  background-color: crimson;
  color:wheat;
  font-size: 28px;
}
button:hover{
  cursor:pointer;
}
li {
  margin: 1rem;
  padding: 0.5rem;
  list-style: none;
  font-size: 28px;
  color:darkgoldenrod;
}
p{
  color:azure;
}
.active {
  transform: scale(1.3);
  background-color: forestgreen;
}
</style>