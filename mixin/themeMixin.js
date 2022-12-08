import {
  mapState,
  mapGetters
} from 'vuex'
export default {
  install(Vue) {
    Vue.mixin({
      computed: {
        ...mapState({
          themeName: 'themeName'
        }),
        ...mapGetters({
          theme: "theme"
        })
      }
    })
  }
}
