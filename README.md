## 主题切换/换肤

> 思路来源：https://ext.dcloud.net.cn/plugin?id=6215

思路：

1. 页面通过`style='--theme-color: #fff";'`这种写法，样式绑定var变量字符串，主题切换就更改变量值
2. 研究发现，可以在page选择器中定义var变量，但不能做到更改，所以最终只能每个页面都绑定var变量字符串，再基于`vuex`和`mixin`简化写法
3. 使用scss简化var变量写法（可选）
4. 页面中使用scss变量或者var变量
5. 原理示例：

```vue
<template>
  <view class="content" :style="style">
    <view @click="change">改变</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      style: "--theme-color: #fff"
    }
  },
  methods: {
    change() {
      this.style =
        this.style === "--theme-color: #fff"
          ? "--theme-color: #000"
          : "--theme-color: #fff"
    }
  }
}
</script>

<style lang="scss">
.content {
  background: var(--theme-color);
  color: pink;
  height: 100vh;
}
</style>
```

### 什么是var变量

> https://juejin.cn/post/6937530846471520287

### 1.新建store/index.js

设置主题后，获取相应主题的var变量字符串

```js
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
```

### 2.使用mixin

每个页面都需要获取相应主题的var变量字符串，使用mixin进行简化写法

```js
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
```

### 3.main.js中导入store

```js
import Vue from 'vue'
import App from './App'
import store from './store'
import mixin from '@/mixin/themeMixin.js'
Vue.use(mixin)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  ...App
})
app.$mount()
```

### 4.使用scss简化var变量写法（可选）

uni.scss加入代码

```scss
$nav-bg: var(--nav-bg);
$nav-color: var(--nav-color);
```

页面中使用var变量的写法

```scss
<style lang="scss">
.btn {
  background-color: var(--nav-bg) !important;
  color: var(--nav-color) !important;
}
</style>
```

页面中使用scss变量的写法

```scss
<style lang="scss">
.btn {
  background-color: $nav-color !important;
  color: $nav-bg !important;
}
</style>
```

### 5.切换主题

```vue
<template>
  <view :style="theme" class="page">
    <button @click="setTheme('dark')" class="btn">黑夜</button>
    <button @click="setTheme('light')" class="btn">白天</button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    setTheme(theme) {
      this.$store.commit("setTheme", theme)
    }
  }
}
</script>

<style lang="scss">
.page {
  background-color: $nav-bg;
  height: 100vh;
}

.btn {
  background-color: $nav-color !important;
  color: $nav-bg !important;
}
</style>
```

### 注意点：不能使用page选择器

下方这种写法不能正确切换主题，因为绑定的var变量字符串是绑定在页面最外层元素上的，而page层是页面最外层元素的祖先级（目前没找到办法，更改page层的var变量值）

```css
<template>
  <view :style="theme">
  </view>
</template>

<style lang="scss">
page {
  background-color: $nav-bg;
}
</style>
```

只能使用这种写法

```css
<template>
  <view :style="theme" class="page">
  </view>
</template>

<style lang="scss">
.page {
  background-color: $nav-bg;
}
</style>
```

### 黑白主题

```css
page {
  filter: grayscale(100%);
}
```

## 