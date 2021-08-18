<template>
  <div>
    <el-row>
      <el-button v-for="(item,index) in list" :key="index" @click="goPath(index,item.path)" :type="currentIndex==index ? 'primary' : ''">{{item.name}}</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'navigation',
    data(){
        return {
            currentIndex:0
        }
    },
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
        console.log(this.list);
    },
    methods:{
        goPath(index,path){
            console.log(index,"index");
            this.$router.push(path);
            this.currentIndex = index;
            console.log(this.$route,"routes");
            console.log(this.$router.path,"routes");
        }
    }
};
</script>

<style>
</style>