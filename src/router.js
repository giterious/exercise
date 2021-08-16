import Vue from 'vue';
import Router from  'vue-router';

const Home = ()=>import('@/views/Home.vue');
const About = ()=>import('@/views/About.vue');
const Child = ()=>import('@/views/Chird.vue');
Vue.use(Router);

const router = new Router({
  mode:'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'child',
          name:'child',
          component:Child
        }
      ]
    },
    {
      path:'/about',
      name:'about',
      component:About
    }
  ]
});
export default router