<template>
  <view class="person-detail-page" :style="theme">
    <view class="avatar-item">
      <text>头像</text>
      <image src="@/static/logo.png" class="avatar"></image>
    </view>
    <view class="info-list">
      <view class="baseInfo">
        <view class="item">
          <text class="label">姓名</text>
          <text class="value">1</text>
        </view>
        <view class="item">
          <text class="label">昵称</text>
          <text class="value">2</text>
        </view>
        <view class="item">
          <text class="label">手机号</text>
          <text class="value">3</text>
        </view>
        <view class="item">
          <text class="label">黑夜模式</text>
          <evan-switch
            v-model="themeColor"
            @change="setTheme"
          ></evan-switch>
        </view>
        <view class="item" @click="showPickerColor = true">
          <text class="label">文字色彩</text>
        </view>
        <helang-pickerColor
          :isShow="showPickerColor"
          :bottom="0"
          @callback="colorConfirm"
        />
        <button @click="go">查看其他页面样式</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      showPickerColor: false,
      themeColor: "",
    };
  },
  methods: {
    go() {
      uni.navigateTo({
        url: "/pages/other/other",
      });
    },
    colorConfirm(color) {
      this.showPickerColor = false;
      this.$store.commit("setCustomTheme", color);
    },
    setTheme(bool) {
      this.$store.commit("setTheme", bool ? "dark" : "light");
    },
  },
};
</script>

<style lang="scss" scoped>
.person-detail-page {
  background-color: $theme-bg;
  color: $theme-color;
  height: 100%;
}

.avatar-item {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 100%;
  }
}

.info-list {
  .baseInfo {
    padding: 0rpx 15px;

    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 35rpx 0rpx;
      border-bottom: 1px solid #e8e8e8;
      .label {
        flex-shrink: 0;
        margin-right: 50rpx;
      }
      .value {
        word-break: break-all;
        text-align: right;
        flex: 1;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
      }
    }
  }
}
</style>
