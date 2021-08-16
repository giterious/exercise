import Vue from 'vue';
import Router from  'vue-router';


const Home = ()=>import('@/src/views/Home.vue');
const About = ()=>import('@/src/views/About.vue');
Vue.use(Router);

const router = new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:Home
    },
    {
      path:'/home',
      name:'home',
      components:Home
    },
    {
      path:'/about',
      name:'about',
      components:About
    }
  ]
});
export default router;