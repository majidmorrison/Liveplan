<template>
  <div class="pitchMain">
    <b-container class="title">
        <b-col col="12">
            <h2 class="text-center col-12 mb-0">{{title}}</h2>
            <div class="dropdown-divider"></div>
            <b-row style="height:300px">
                <b-col id="pitch-main_title" col="6" class="text-center">
                    <div v-if="headline.length > 0" id="main_title_true">
                      <h4>{{headline}}</h4>
                    </div>
                    <div v-else id="main_title_true">
                      <i class="fas fa-plus"> </i>
                      <strong> تیتر مورد نظر را ثبت کنید</strong>
                    </div>
                </b-col>
                <b-col col="6">
                    <img class="col-10" :src="logo" alt="">
                    <button class="btn btn-primary mx-auto col-4">ثبت لوگو</button>
                    <button class="btn btn-primary mx-auto col-4 btn-pitch_edit">ویرایش لوگو</button>
                </b-col>
            </b-row>
        </b-col>
    </b-container>  
  </div>
</template>

<script>
export default {
  name: 'PitchMain',
  data(){
    return{
      headline:"",
      title:"",
      logo:"../img/logo.png",

    }
  }
}
</script>
<style>
.title img{
    height:100px;
} 
#pitch-main_title{
  text-align:center;
  align-self:center;
  border:1px solid #ccc;
  height:100%;
  border-radius:10px;
}
#main_title_true{
  top:42%;
  position:relative
}
</style>
