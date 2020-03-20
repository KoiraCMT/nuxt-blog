<template>
  <div class="m-pagesBox">
    <nuxt-link
      class="prev"
      :disabled="currentPage <= 1"
      tag="button"
      :to="{ path: '/', query: { page: currentPage - 1 } }"
    >
      <i class="iconfont myhr-backward"></i>
    </nuxt-link>
    <div v-if="count <= 11" class="pages">
      <nuxt-link
        v-for="item in count"
        :key="item"
        :class="currentPage === item ? 'active' : ''"
        :to="{ path: '/', query: { page: item } }"
        >{{ item }}</nuxt-link
      >
    </div>
    <div v-else class="pages">
      <template v-if="currentPage <= 6">
        <nuxt-link
          v-for="item in 10"
          :key="item"
          :class="currentPage === item ? 'active' : ''"
          :to="{ path: '/', query: { page: item } }"
          >{{ item }}</nuxt-link
        >
        <nuxt-link
          :to="{
            path: '/',
            query: {
              page: currentPage + 9 > count ? count : currentPage + 9
            }
          }"
          >...</nuxt-link
        >
        <nuxt-link
          v-if="count > 11"
          :to="{ path: '/', query: { page: count } }"
          >{{ count }}</nuxt-link
        >
      </template>
      <template v-else>
        <nuxt-link :to="{ path: '/', query: { page: '1' } }">1</nuxt-link>
        <nuxt-link
          :to="{
            path: '/',
            query: {
              page: currentPage - 9 < 1 ? 1 : currentPage - 9
            }
          }"
          >...</nuxt-link
        >
        <template v-if="currentPage + 5 < count">
          <nuxt-link
            v-for="item in getArr(currentPage - 4, currentPage)"
            :key="item"
            :to="{ path: '/', query: { page: item } }"
            >{{ item }}</nuxt-link
          >
          <nuxt-link
            v-for="item in getArr(currentPage + 1, currentPage + 4)"
            :key="item"
            :class="currentPage === item ? 'active' : ''"
            :to="{ path: '/', query: { page: item } }"
            >{{ item }}</nuxt-link
          >
          <nuxt-link
            :to="{
              path: '/',
              query: {
                page: currentPage + 9 > count ? count : currentPage + 9
              }
            }"
            >...</nuxt-link
          >
          <nuxt-link :to="{ path: '/', query: { page: count } }">{{
            count
          }}</nuxt-link>
        </template>
        <template v-else>
          <nuxt-link
            v-for="item in getArr(count - 9, count)"
            :key="item"
            :class="currentPage === item ? 'active' : ''"
            :to="{ path: '/', query: { page: item } }"
            >{{ item }}</nuxt-link
          >
        </template>
      </template>
    </div>
    <nuxt-link
      class="next"
      :disabled="currentPage === count"
      tag="button"
      :to="{ path: '/', query: { page: currentPage + 1 } }"
    >
      <i class="iconfont myhr-forward"></i>
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Pagination',
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    total: {
      type: Number
    }
  },
  computed: {
    count() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    getArr(firstNum: number, lastNum: number) {
      const arr = []
      for (let i = firstNum; i <= lastNum; i++) {
        arr.push(i)
      }
      return arr
    }
  }
})
</script>

<style lang="less" scoped>
@textColor: #963fb1;
@fontSize: 13px;
#btnStyle() {
  display: inline-block;
  min-width: 35.5px;
  height: 28px;
  line-height: 28px;
  background: #fff;
  border: none;
  color: #303133;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.m-pagesBox {
  .prev,
  .next {
    outline: none;
    padding: 0 6px;
    #btnStyle;
    i {
      font-size: 12px;
    }
    &:hover {
      cursor: pointer;
      color: @textColor;
    }
    &:disabled {
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .pages {
    display: inline-block;
    a {
      margin: 0;
      padding: 0 4px;
      font-size: @fontSize;
      text-align: center;
      font-weight: bold;
      #btnStyle;
      &:hover,
      &.active {
        cursor: pointer;
        color: @textColor;
      }
    }
  }
}
</style>
