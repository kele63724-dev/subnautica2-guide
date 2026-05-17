<template>
  <div class="ad-layout-wrapper">
    <AdLeft />
    <AdRight />
    <Layout />
    <!-- 移动端底部横幅 -->
    <div class="ad-bottom-banner">
      <span class="ad-label">广告</span>
      <div class="ad-bottom-slot">
        <script type="text/javascript">
    aclib.runAutoTag({
        zoneId: 'rwbhyqu8tc',
    });
</script>
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
