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
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
