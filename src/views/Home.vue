<template>
  <div class="home">
    <router-link to="/home/child">查看eleemtui介绍</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      
    }
  },
  components: {
  },
  methods:{
    goChild(){
      this.$router.push('/home/child')
    }
  }
}
</script>
