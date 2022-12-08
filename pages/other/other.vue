<template>
  <view :style="theme" class="page">
    <view class="center">当前主题{{ themeName }}</view>
    <button type="default" @click="back" class="btn">返回</button>
  </view>
</template>

<script>
export default {
  methods: {
    back() {
      uni.navigateBack()
    }
  }
}
</script>

<style lang="scss">
.page {
  background-color: $nav-bg;
  height: 100vh;
}

.center {
  text-align: center;
  color: pink;
  padding: 10px;
}

.btn {
  background-color: $nav-color !important;
  color: $nav-bg !important;
}
</style>
