<template>
  <div class="page">
    <scroll class="scroll" :data="list.events" @load="load">
      <div>
        <div class="card">
          <ul class="quick">
            <li><router-link to="/movies">影院热评</router-link></li>
            <li><router-link to="/">最受关注图书</router-link></li>
            <li><router-link to="/">豆瓣时间</router-link></li>
            <li><router-link to="/">使用豆瓣App</router-link></li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li @click=selectItem(index) v-for="(item, index) in list.events" :key="item.id" class="container">
              <div class="left">
                <h3>{{item.title}}</h3>
                <p class="content">{{item.content | subStr}}</p>
                <p>{{item.category_name}}</p>
              </div>
              <div class="right">
                <img :src="item.image">
              </div>
            </li>
          </ul>
        </div>
        <loading></loading>
      </div>
    </scroll>
    <router-view :content='list.events'></router-view>
  </div>
</template>

<script>
import scroll from '@/base/scroll'
import { getList } from '@/api/home.js'
import loading from '@/base/Loading'
let count = 4
let start = 0
export default {
  mounted () {
    this.$nextTick(
      this._getList()
    )
  },
  data () {
    return {
      list: {}
    }
  },
  components: {
    scroll,
    loading
  },
  methods: {
    _getList () {
      getList(count, start).then((data) => {
        this.list = data
        // console.log(data.events)
      })
    },
    selectItem (index) {
      this.$router.push({
        path: `home/${index}`
      })
    },
    load () {
      start += 4
      getList(count, start).then((data) => {
        // this.list = data
        this.list.events = this.list.events.concat(data.events)
        // console.log(data.events)
        // console.log(this.list.events)
      })
    }
  },
  filters: {
    subStr (value) {
      let newval = value.replace(/<.*?>/g, '')
      newval = newval.replace(/[a-zA-z]+:\/\/[^\s]*/g, '')
      return newval.slice(0, 60)
    }
  }
}

</script>

<style lang="scss" scoped>
.page {
  min-width: 320px;
  top: 44px;
  position: fixed;
  width: 100%;
  bottom: 0;
  .scroll {
  height: 100%;
  overflow: hidden;
  }
  .card {
    padding: 0 18px;
    height: 100%;
    overflow: hidden;
    .quick {
      margin: 20px 0 0;
      padding-top: 6px;
      li {
        display: block;
        float: left;
        width: 50%;
        padding: 3px;
        font-size: 15px;
        box-sizing: border-box;
        a {
          background-color: #f6f6f6;
          color: #494949;
          display: block;
          text-align: center;
          line-height: 20px;
          height: 20px;
          padding: 12px 0;
          border-radius: 5px;
        }
      }
    }
  }
  .list {
    .container {
      text-align: justify;
      border-bottom: 1px solid #f3f3f3;
      display: flex;
      justify-content: space-between;
      padding: 25px 1px 25px 0;
      margin-left: 18px;
      &:last-child {
        border-bottom: none;
      }
      .right {
        width: 25.6%;
        padding-left: 10%;
        img {
          width: 80%;
          // height: 80%;
        }
      }
      .left {
        flex: 1;
        h3 {
          font-weight: 500;
          font-size: 17px;
          line-height: 1.41em;
          color: #494949;
          margin-bottom: 16px;
        }
        p {
          font-size: 12px;
          color: #aaa;
        }
        .content {
          display: -webkit-box;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-align: justify;
          line-height: 1.5em;
          margin-bottom: 15px;
        }
      }
    }
  }
}
@media screen and (min-width: 600px){
  .page {
    max-width: 600px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
}
</style>
