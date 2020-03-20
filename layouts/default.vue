<template>
  <div class="main">
    <div
      id="search"
      class="animated"
      :class="{ showBounce: showSearch, hiddenBounce: !showSearch, hide: hide }"
    >
      <div class="input-wrap">
        <span class="fa fa-search"></span>
        <input type="text" placeholder="Search" />
        <span class="fa fa-close" @click="operateShowSearch"></span>
      </div>
      <div class="result">
        <div class="meta">
          <span> <b>0 </b>result found </span>
        </div>
        <ul>
          <li>
            <a href="">123</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="menu"
      class="animated"
      :class="{
        showMenuMask: showMenu,
        hiddenMenuMask: !showMenu,
        hide: menuHide
      }"
    >
      <span class="fa fa-close" @click="operateShowMenu"></span>
      <div class="nav">
        <a href="/">首页</a>
      </div>
    </div>
    <div id="header">
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
        <span class="fa fa-bars" @click="operateShowMenu"></span>
        <span class="search" @click="operateShowSearch">
          <span class="fa fa-search"></span>
        </span>
      </div>
    </div>
    <aside class="side animated bounceInLeft" :class="{ active: !isExpand }">
      <div v-show="!isExpand" class="shrink">
        <a
          href="/"
          class="avatar"
          style="background-image: url(http://dev.pano360.cn/decb5ee755ef93acf71cd907b4d2cfegag.jpg)"
        ></a>
        <span class="fa fa-bars" @click="isExpand = true"></span>
        <a class="search" @click="operateShowSearch"
          ><span class="fa fa-search"></span
        ></a>
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
          <a class="search" @click="operateShowSearch"
            ><span class="fa fa-search"></span
          ></a>
        </div>
        <div class="bottom">
          <div class="follow">
            <a href=""><span class="fa fa-github"></span></a>
            <a href=""><span class="fa fa-rss"></span></a>
          </div>
        </div>
      </div>
    </aside>
    <div class="container">
      <main class="animated bounceInRight">
        <nuxt />
      </main>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  display: flex;
  justify-content: center;
  padding: 0.3rem;
  overflow: hidden;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  main {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Default extends Vue {
  private isExpand = true
  private showSearch = false
  private showMenu = false
  private hide = true
  private menuHide = true

  operateShowSearch() {
    this.hide = false
    this.showSearch = !this.showSearch
  }

  operateShowMenu() {
    this.menuHide = false
    this.showMenu = !this.showMenu
  }

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
