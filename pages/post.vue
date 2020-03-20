<template>
  <div class="post-detail">
    <div class="header">
      <div class="title">
        123
      </div>
      <div class="meta">
        <div class="item">
          <span class="fa fa-clock-o"></span>
          <span>2019-10-11</span>
        </div>
        <div class="item">
          <span class="fa fa-clock-o"></span>
          <span>2019-10-11</span>
        </div>
        <div class="item">
          <span class="fa fa-clock-o"></span>
          <span>2019-10-11</span>
        </div>
        <div class="item">
          <span class="fa fa-clock-o"></span>
          <span>2019-10-11</span>
        </div>
      </div>
    </div>
    <div class="thumb">
      <img src="http://dev.pano360.cn/ef29a0e839af75d547e05499478b1es.png" />
    </div>
  </div>
</template>
<style scoped lang="less">
.post-detail {
  width: 100%;
  height: 100%;
  padding: 0.675rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .header {
    margin-bottom: 1rem;
    .title {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .meta {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 0.75rem;
      color: #898989;
      .item {
        display: flex;
        width: 50%;
        margin-bottom: 1rem;
        .fa {
          color: #787878;
          margin-top: -1px;
          font-size: 1rem !important;
          padding: 0 0.2rem;
        }
      }
    }
  }
  .thumb {
    img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0.5rem 0;
      box-sizing: border-box;
      border-radius: 0.3rem;
      border: 1px solid #e6e6e6;
    }
  }
}
</style>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Post extends Vue {
  private post = true
}
</script>
