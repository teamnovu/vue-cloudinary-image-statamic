// Import vue component
import component from '@/AppImage.vue'

export default {
  install: (app, options) => {
    app.component('AppImage', component)
  },
}
