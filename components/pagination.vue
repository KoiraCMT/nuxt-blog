<template>
  <div class="paginator">
    <nuxt-link
      v-for="(item, index) in pages"
      :key="index"
      class="page"
      :class="{ active: item === currentPage }"
      :to="formatUrl(item)"
      @click="select(item)"
    >
      {{ item }}
    </nuxt-link>
  </div>
</template>
<script>
import { filterEmpty, serialize } from '../utils/helper'
export default {
  props: {
    // 分页的总数
    total: {
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 1
    }
  },
  computed: {
    pages() {
      const c = this.currentPage
      const t = this.totalPages
      if (t === 1) {
        return []
      } else if (t < 9) {
        const pages = []
        for (let i = 1; i <= t; ++i) {
          pages.push(i)
        }
        return pages
      } else if (t > 9) {
        if (c <= 5) {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, '...', t]
        } else if (c >= t - 4) {
          return [
            1,
            '...',
            t - 8,
            t - 7,
            t - 6,
            t - 5,
            t - 4,
            t - 3,
            t - 2,
            t - 1,
            t
          ]
        } else {
          return [
            1,
            '...',
            c - 3,
            c - 2,
            c - 1,
            c,
            c + 1,
            c + 2,
            c + 3,
            '...',
            t
          ]
        }
      }
      return []
    }
  },
  mounted() {
    this.totalPages = Math.max(1, Math.ceil(this.total / this.pageSize))
    this.currentPage = this.$route.query.page
      ? parseInt(this.$route.query.page)
      : 1
  },
  methods: {
    formatUrl(page) {
      const query = filterEmpty(this.$route.query)
      query.page = page
      return this.$route.path + '?' + serialize(query)
    },
    select(n) {
      if (n === this.currentPage) return
      if (typeof n === 'string') return
      this.currentPage = n
    }
  }
}
</script>
<style scoped lang="less">
.paginator {
  display: flex;
  justify-content: center;
  align-items: center;
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin: 0.3rem;
    font-size: 0.9rem;
    border-radius: 5px;
    border-color: #4373dc;
    color: #0c0907;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    transition: all 0.2s;
    background-color: #f7f7f7;
    &.active {
      background-color: #4373dc;
      color: white;
      border-color: #4373dc;
    }
  }
}
</style>
