import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [{
  path: '',
  name: '',
  component: HomeView,
},
{
  path: '/about',
  name: "About",
  component: () => import("../views/AboutView.vue"),
},
{
  path: '/eminem',
  name: "eminem",
  component: () => import("../views/EminemView.vue"),
},
{
  path: '/soad',
  name: "soad",
  component: () => import("../views/SOADView.vue"),
},
{
  path: '/gardel',
  name: "About",
  component: () => import("../views/GardelView.vue"),
},
{
  path: '/conditional',
  name: "conditionals",
  component: () => import("../views/ConditionalVue.vue"),
},
{
  path: '/iteration',
  name: "iteration",
  component: () => import("../views/IterationVue.vue"),
}
];


const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router;