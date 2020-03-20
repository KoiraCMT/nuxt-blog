<template>
  <div class="main">
    <div class="header">
      <div class="info">
        <a
          href="/"
          class="avatar"
          style="background-image: url(http://dev.pano360.cn/decb5ee755ef93acf71cd907b4d2cfegag.jpg)"
        ></a>
        <div class="author">
          Echo
        </div>
      </div>
      <div class="nav">
        <span class="fa fa-bars"></span>
        <a href="" class="search"><span class="fa fa-search"></span></a>
      </div>
    </div>
    <aside class="side animated bounceInLeft" :class="{ active: !isExpand }">
      <div v-show="!isExpand" class="shrink">
        <a
          href="/"
          class="avatar"
          style="background-image: url(http://dev.pano360.cn/decb5ee755ef93acf71cd907b4d2cfegag.jpg)"
        ></a>
        <span class="fa fa-bars"></span>
        <a href="" class="search"><span class="fa fa-search"></span></a>
      </div>
      <div v-show="isExpand" class="expand">
        <div class="about">
          <p class="author">Utone</p>
          <a
            href="/"
            class="avatar"
            style="background-image: url(http://dev.pano360.cn/decb5ee755ef93acf71cd907b4d2cfegag.jpg)"
          ></a>
        </div>
        <div class="nav">
          <a href="/" class="current">首页</a>
          <a href="/">归档</a>
          <a class="search"><span class="fa fa-search"></span></a>
        </div>
        <div class="bottom">
          <div class="follow">
            <a href=""><span class="fa fa-github"></span></a>
            <a href=""><span class="fa fa-rss"></span></a>
          </div>
        </div>
      </div>
    </aside>
    <nuxt />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Default extends Vue {
  private isExpand = true
  mounted() {
    this.$nextTick(() => {
      const doc: HTMLDocument = document
      doc.onwheel = (e) => {
        this.isExpand = !(e.deltaY > 0)
      }
    })
  }
}
</script>
<style>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
</style>
