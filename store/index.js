import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themeName: "light",
    themeStyle: {
      light: {
        '--theme-bg': '#ffffff',
        '--theme-color': '#000000'
      },
      dark: {
        '--theme-bg': '#000000',
        '--theme-color': '#ffffff',
      },
      // customTheme: {
      //   '--theme-bg': '',
      //   '--theme-color': '#ffffff',
      // },
    }
  },
  getters: {
    theme(state) {
      const obj = state.themeStyle[state.themeName]
      let themeStyleStr = ""
      for (let key in obj) {
        themeStyleStr += `${key}:${obj[key]};`
      }
      return themeStyleStr
    }
  },
  mutations: {
    setTheme(state, themeName = "light") {
      state.themeName = themeName
    },
    setCustomTheme(state, customTheme) {
      state.themeStyle[state.themeName]["--theme-color"] = customTheme
    }
  }
})

export default store
