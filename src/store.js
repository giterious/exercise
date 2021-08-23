import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[
      {id:1,name:"张三",sex:"男",address:"上海市普陀区金沙江路 1519 弄"},
      {id:2,name:"李四",sex:"男",address:"上海市普陀区金沙江路 1519 弄"},
      {id:3,name:"王二麻子",sex:"男",address:"上海市普陀区金沙江路 1519 弄"},
      {id:4,name:"初花",sex:"女",address:"上海市普陀区金沙江路 1519 弄"},
      {id:5,name:"夏欣",sex:"女",address:"上海市普陀区金沙江路 1519 弄"},
      {id:6,name:"彼妨",sex:"女",address:"上海市普陀区金沙江路 1519 弄"}
    ]
  },
  getters:{
    filterSex:function(state){
      return function(sex){
        if(sex!='全部'){
          return state.list.filter(item=>{
            return  item.sex==sex;
          })
        }else{
          return  state.list;
        }
      }
    },
    filterIdList:state=>id=>state.list.filter(item=>item.id === Number(id))
  },
  mutations: {
    initList(state){
      state.list =  [
        {id:1,name:"张三",sex:"男",address:"上海市普陀区金沙江路 1519 弄"},
        {id:2,name:"李四",sex:"男",address:"上海市普陀区金沙江路 1519 弄"},
        {id:3,name:"王二麻子",sex:"男",address:"上海市普陀区金沙江路 1519 弄"},
        {id:4,name:"初花",sex:"女",address:"上海市普陀区金沙江路 1519 弄"},
        {id:5,name:"夏欣",sex:"女",address:"上海市普陀区金沙江路 1519 弄"},
        {id:6,name:"彼妨",sex:"女",address:"上海市普陀区金沙江路 1519 弄"}
      ]
    },
    changeList(state,payload){
      state.list = payload.changeList
    }
  },
  actions: {

  }
})
