<template>
  <div class="pitch">
    <PitchSecondNav msg="resre"></PitchSecondNav>
    <PitchMain headline="درسا" title="درسا" logo="../img/logo.png"></PitchMain>
  </div>
</template>

<script>
// @ is an alias to /src
import PitchSecondNav from '@/components/Pitch/PitchSecondNav.vue'
import PitchMain from '@/components/Pitch/PitchMain.vue'

export default {
  name: 'pitch',
  components: {
    PitchSecondNav,
    PitchMain,
  }
}
</script>
