<template>
  <div>
    
    <tabber></tabber>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript">
  import tabber from './components/tabber'
  //注册成自己的组件
  export default{
    data(){
      return {
        
      }
    },

    computed:{

    },

    methods:{

    },

    components:{
      tabber
    },

    watch:{
      
    }

  }
</script>
<style type="text/css">
  *{
    margin: 0px;
    padding: 0px;
  }

  html,body{
    height: 100%;
  }

  li{
    list-style: none;
  }
    .wzqbht{
    color: hotpink;
  }

</style>