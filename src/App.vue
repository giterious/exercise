<template>
  <div id="app">
    <navigation :list="list"></navigation>
    <router-view/>
  </div>
</template>
<script>
  import navigation from '@/components/navigation.vue';
  export default{
    name:'App',
    data(){
      return {
        list:[
          {name:"Home",path:'/home'},
          {name:"Layout",path:'/layout'},
          {name:"Container",path:'/container'},
          {name:"Color",path:'/color'}
        ]
      }
    },
    components:{
      navigation
    }
  }
</script>
<style>
  @import url('static/css/initialize.css');
  @import url('static/css/common.css');
  #app{
    padding: 20px;
  }
</style>
