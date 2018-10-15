<template>
  <div id="app">
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import tab from '@/components/tab'

export default {
  name: 'App',
  components: {
    tab
  }
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
}

ul {
  display: block;
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media screen and (max-width: 320px){
  #app {
    display: block;
    width: 320px;
  }
}
@media screen and (min-width: 600px){
  #app {
    display: block;
    width: 600px;
  }
}
</style>
