<template>
    <b-container>
      <div id="app">

        <Navbar title="لایوپلن" logoSrc="../img/logo.png"></Navbar>
        <div id="nav">
          <ul>
            <li v-for="(item,index) in links" :key="index"><router-link :to="item.link"><i :class="item.icon"> </i> {{item.title}}</router-link></li>
          </ul>
        </div>
        
        <router-view/>
      </div>
      </b-container>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
 export default{
     data(){
       return{
         links:[
           {title:"گام",link:"/pitch",icon:"fas fa-desktop"},
           {title:"نقشه",link:"/plan",icon:"fas fa-solar-panel"},
           {title:"پیش‌بینی",link:"/forcast",icon:"fas fa-window-restore"},
           {title:"معیار",link:"/benchmark",icon:"fas fa-chart-line"},
           {title:"برنامه",link:"/schedule",icon:"fas fa-clipboard-list"},
           {title:"داشبورد",link:"/dashboard",icon:"fas fa-tachometer-alt"}
         ]
       }
     },
    components:{
      Navbar // register component
    }
  }

</script>
<style>
#nav{
  background:#3F484B;
  color:white;
  border-radius:3px;
  direction:rtl;
  text-align:right;
  padding:3px;
  height:51px;
}
#nav a{
  color:white;
  margin-right: 10px;
}
#nav ul{
  list-style:none;
  height:100%;
  padding:0;
  margin:0;
}
#nav li{
  display: inline;
    height: 100%;
    vertical-align: -webkit-baseline-middle;
    font-size: 16px;
    margin: 0px 10px;
}

</style>
