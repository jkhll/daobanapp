<template>
  <div>
    <div class="header">
      <p @click="returnBack">关闭</p>
      <input
        type="search"
        v-model.trim.lazy="search"
        @keyup.enter="goSearch"
      >
    </div>
    <ul class="has-header">
      <li>
        <div>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(35, 132, 232);">电影</strong>
            <span>影院热映</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(230, 70, 126);">同城</strong>
            <span>周末活动</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(159, 120, 96);">阅读</strong>
            <span>电子书</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(225, 100, 77);">东西</strong>
            <span>心爱之物</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(122, 106, 219);">电视</strong>
            <span>正在热播</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(42, 184, 204);">小组</strong>
            <span>志趣相投</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(87, 116, 197);">游戏</strong>
            <span>虚拟世界</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(64, 207, 169);">FM</strong>
            <span>红心歌单</span>
          </a>
        </div>
      </li>
      <li>
        <div>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(159, 120, 96);">图书</strong>
            <span>畅销排行</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(244, 143, 46);">音乐</strong>
            <span>新碟榜</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(89, 108, 221);">应用</strong>
            <span>玩手机</span>
          </a>
          <a
            href="#"
            target="_blank"
          >
            <strong style="color: rgb(66, 189, 86);">市集</strong>
            <span>购买原创</span>
          </a>
        </div>
      </li>
    </ul>
    <div class="login">
      <ul class="logincard">
        <li @click="goToLogin">注册账号</li>
        <li>登陆账号</li>
        <li>使用桌面版</li>
        <li>使用豆瓣App</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      a: 1,
      search: ''
    }
  },
  methods: {
    returnBack () {
      this.$router.back()
    },
    goToLogin () {
      this.$router.push('/login')
    },
    goSearch () {
      this.$router.push({ path: '/search', query: { q: this.search } })
      this.search = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  z-index: 9999;
  width: 100%;
  top: 0;
  bottom: 0px;
  font-size: 20px;
  display: flex;
  align-items: center;
  height: 70px;
  line-height: 70px;
  background: #fff;
  color: greenyellow;
  border-bottom: 1px solid #f3f3f3;
  input {
    height: 30px;
    flex: 1;
    border: 0px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==)
      no-repeat 50% #f3f3f3;
    margin-right: 25px;
    border-radius: 0.3rem;
    background-size: 1.5rem;
  }
  input:focus {
    background: #f3f3f3;
  }
  p {
    padding: 0 10px;
  }
}

.has-header {
  display: flex;
  justify-content: space-around;
  li {
    width: 33.3%;
    div {
      a {
        strong {
          margin-top: 1.1rem;
          text-align: center;
          font-size: 1.5rem;
          display: block;
          font-weight: 600;
        }
        span {
          text-align: center;
          font-size: 0.8rem;
          display: block;
        }
      }
    }
  }
}

.logincard {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  li {
    padding: 10px 0px;
    box-sizing: border-box;
    border: 1px solid #f3f3f3;
    color: #42bd56;
    text-align: center;
    font-size: 1.1rem;
    width: 50%;
  }
}
</style>
