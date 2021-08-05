<script>
import Vue from 'vue'
import AppImage from '@/AppImage.vue'

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AppImage,
  },

  data () {
    return {
      asset: {
        permalink: '/sample.jpg',
        alt: 'my alt',
        focus: '100-100',
        width: 864,
        height: 576,
      },
    }
  },
})
</script>

<template>
  <div id="app">
    <AppImage
      :src="asset"
      crop="fill"
      :width="200"
      :aspect-ratio="1"
    />
  </div>
</template>
