import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';

const routes = [
  {
    path: '/',
    component: LoginPage,
    name: 'LoginPage'
  },

  /*{
    path: '/movie-list',
    component: MovieList,
    name: 'MovieList'
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;