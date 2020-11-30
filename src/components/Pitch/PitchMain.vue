<template>
  <div class="pitchMain">
    <b-container class="bv-example-row">
        <b-col col="12">
            <h2 class="text-center col-12 mb-0">{{title}}</h2>
            <div class="dropdown-divider"></div>
            <b-row class="row" style="height:300px">
                <b-col col="6">
                    <h4>{{headline}}</h4>
                    <button class="btn btn-primary mx-auto col-4">ثبت تیتر اول</button>
                    <button class="btn btn-primary mx-auto col-4 btn-pitch_edit">ویرایش تیتر اول</button>
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
  props: {
    title: String,
    headline: String,
    logo: String,
  }
}
</script>

