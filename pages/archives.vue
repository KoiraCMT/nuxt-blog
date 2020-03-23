<template>
  <div class="archives">
    <div class="title">归档</div>
    <div class="wrap">
      <div class="meta">
        <span>2019</span>
      </div>
      <div class="posts">
        <a href="" class="item">
          <span>2019-10-01</span>
          <span>I have a dream. That is a joker.</span>
        </a>
        <a href="" class="item">
          <span>2019-10-01</span>
          <span>I have a dream. That is a joker.</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Archives'
}
</script>
<style scoped lang="less">
.archives {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  padding: 2rem;
  .title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .wrap {
    margin-bottom: 1rem;
    .meta {
      > span {
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 0.3rem;
        background-color: #bbdefb;
      }
    }
    .posts {
      margin: 1rem 0 0 1rem;
      .item {
        display: flex;
        padding: 0.2rem 0.3rem;
        align-items: center;
        span {
          &:nth-child(1) {
            color: #898989;
            font-size: 0.8rem;
            margin-right: 2rem;
          }
          &:nth-child(2) {
            font-size: 1rem;
            padding: 0.2rem 0.3rem;
            &:hover {
              background-color: #e3f2fd;
            }
          }
        }
      }
    }
  }
}
</style>
