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
      uni.navigateBack();
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  background-color: $theme-bg;
  color: $theme-color;
  height: 100vh;
}
.center {
  text-align: center;
  padding: 10px;
}
</style>
