<template>
  <div class="ad-layout-wrapper">
    <AdLeft />
    <AdRight />
    <Layout />
    <!-- 移动端底部横幅 -->
    <div class="ad-bottom-banner">
      <span class="ad-label">广告</span>
      <div class="ad-bottom-slot">
        <!-- ====== 替换为真实广告代码 ====== -->
        <div class="ad-bottom-placeholder">
          📢  Google AdSense  ·  320 × 100  ·  替换为广告代码
        </div>
        <!-- ====== 广告代码结束 ====== -->
      </div>
    </div>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import AdLeft from './AdLeft.vue'
import AdRight from './AdRight.vue'

const { Layout } = DefaultTheme
</script>
