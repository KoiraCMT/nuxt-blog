<template>
  <div class="container">
    <main class="animated bounceInRight">
      <div class="posts">
        <div class="post">
          <div class="banner">
            <a
              href=""
              class="image"
              :style="{
                backgroundImage: `url(http://dev.pano360.cn/ef29a0e839af75d547e05499478b1es.png)`
              }"
            ></a>
          </div>
          <div class="describe">
            <div class="title">
              <a href="">主体使用</a>
            </div>
            <div class="date">
              <span class="fa fa-clock-o"></span>
              <span>2019-10-11</span>
            </div>
            <div class="meta">
              <div class="left">
                <div class="wrap">
                  <span class="fa fa-folder-o"></span>
                  <div class="des">
                    <a href="">Usage</a>
                  </div>
                </div>
                <div class="wrap">
                  <span class="fa fa-folder-o"></span>
                  <div class="des">
                    <a href="">Usage</a>
                  </div>
                </div>
              </div>
              <div class="right"><a href="">Read More</a></div>
            </div>
          </div>
        </div>
        <div class="post">
          <div class="banner">
            <a
              href=""
              class="image"
              :style="{
                backgroundImage: `url(http://dev.pano360.cn/ef29a0e839af75d547e05499478b1es.png)`
              }"
            ></a>
          </div>
          <div class="describe">
            <div class="title">
              <a href="">主体使用</a>
            </div>
            <div class="date">
              <span class="fa fa-clock-o"></span>
              <span>2019-10-11</span>
            </div>
            <div class="meta">
              <div class="left">
                <div class="wrap">
                  <span class="fa fa-folder-o"></span>
                  <div class="des">
                    <a href="">Usage</a>
                  </div>
                </div>
                <div class="wrap">
                  <span class="fa fa-folder-o"></span>
                  <div class="des">
                    <a href="">Usage</a>
                  </div>
                </div>
              </div>
              <div class="right"><a href="">Read More</a></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<style lang="less">
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
    .posts {
      .post {
        display: flex;
        flex-direction: column;
        min-height: 10rem;
        border-radius: 0.3rem;
        margin-bottom: 2rem;
        transition: all 0.3s;
        border: 1px solid #e1e4e8;
        .banner {
          width: 100%;
          height: 20rem;
          overflow: hidden;
          border-bottom: 1px solid #f7f7f7;
          .image {
            width: 100%;
            height: 100%;
            display: inline-block;
            background-size: cover;
            background-position: center center;
            background-color: #fff;
            transition: all 0.3s ease-out;
          }
        }
        .describe {
          flex: 1;
          flex-direction: column;
          padding: 1rem;
          font-size: 0.8rem;
          .title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            a {
              font-size: 1.5rem;
              &:hover {
                color: #1976d2;
              }
            }
          }
          .date {
            color: #7a7a7a;
            margin: 0.7rem 0;
            display: flex;
          }
          .meta {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            .left {
              display: flex;
              flex: 1;
              .wrap {
                display: flex;
                margin: 0.3rem 0.3rem 0.3rem 0;
                .des {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  a {
                    color: #999;
                    padding-right: 0.3rem;
                    &:hover {
                      color: #1976d2;
                    }
                  }
                }
              }
            }
            .right {
              width: 40%;
              display: flex;
              justify-content: flex-end;
              margin: 0.3rem 0;
              a {
                color: #333;
                display: inline-block;
                padding: 0.7rem;
                text-align: center;
                border-radius: 0.7rem;
                font-weight: 600;
                transition: all 0.3s;
                background-color: #fed336;
                &:hover {
                  color: white;
                  transform: scale(1.1, 1.1);
                }
              }
            }
          }
          .fa {
            color: #7a7a7a;
            font-size: 1.2rem;
            margin-top: -1px;
            padding: 0 0.2rem;
          }
        }
      }
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
