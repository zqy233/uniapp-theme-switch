import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    themeName: "light",
    themeStyle: {
      "light": `
			--nav-bg:#42b983;
			--nav-color:#ffffff;
		`,
      "dark": `
			--nav-bg:#000;
			--nav-color:#ffffff;
		`
    }
  },
  getters: {
    theme(state) {
      return state.themeStyle[state.themeName]
    }
  },
  mutations: {
    setTheme(state, themeName = "light") {
      state.themeName = themeName
    }
  }
})

export default store
