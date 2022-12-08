<template>
  <view :style="theme" class="page">
    <button @click="setTheme('dark')" class="btn">黑夜</button>
    <button @click="setTheme('light')" class="btn">白天</button>
    <button type="default" @click="go" class="btn">
      查看其他页面样式
    </button>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    setTabBarStyle() {
      uni.setTabBarStyle({
        backgroundColor: "#000",
        color: "fff"
      })
    },
    go() {
      uni.navigateTo({
        url: "/pages/other/other"
      })
    },
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
