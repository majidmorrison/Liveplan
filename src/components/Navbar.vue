<template>
<div id="first-navbar">
<b-container class="bv-example-row">
  <b-row>
   <b-col cols="12" class="nav col-12">
  <b-navbar class="w-100" toggleable="lg">
    <b-navbar-brand href="#"><img :src="logoSrc" alt=""> {{title}} </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="ماشروم" right>
          <b-dropdown-item href="#">تست</b-dropdown-item>
          <b-dropdown-item href="#">تست</b-dropdown-item>
          <b-dropdown-item href="#">تست</b-dropdown-item>
          <b-dropdown-item href="#">تست</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="تست" right>
          <b-dropdown-item href="#">تست</b-dropdown-item>
          <b-dropdown-item href="#">تست</b-dropdown-item>
          <b-dropdown-item href="#">تست</b-dropdown-item>
          <b-dropdown-item href="#">تست</b-dropdown-item>
        </b-nav-item-dropdown>
        
      

      </b-navbar-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item-dropdown left>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>کاربر</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</b-col>
  </b-row>
</b-container>
</div>
</template>
<script>
export default{
  name:"first-navbar",
  props:{
    title:String,
    logoSrc: String
  }
}
</script>
<style>
.navbar-brand{
  margin-right:0;
}
.navbar {
  padding-right:0;
  padding-left: 0;
  height:42px;
}
</style>