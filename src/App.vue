<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <router-link to="/home">Home</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <a class="wenjuan-logo" href="https://www.wenjuan.com/" target="_blank"></a>
    <HelloWorld msg="Welcome here！The project is created by wenjuan-cli！"/>
  </div>
</template>

<script>
import HelloWorld from 'components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created: function() {
  }
}
</script>

<style>
html, body, h1, h2, h3, h4, h5, h6,
p, div, span, strong, a {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wenjuan-logo {
  display: inline-block;
  background: url('../src/assets/img/wenjuan-logo.png');
  background-size: cover;
  margin-top: 10px;
}

a {
  text-decoration: none;
  color: #2672ff;
  font-size: 18px;
}

a:last-of-type {
  margin-left: 5px;
}

@media screen and (max-width: 414px) {
  .wenjuan-logo {
    width: 50%;
    height: 0;
    padding-bottom: 50%;
  }
}

@media screen and (min-width: 415px) {
  .wenjuan-logo {
    width: 180px;
    height: 180px;
  }
}

@media screen and (max-width: 414px) {
  #app {
    margin-top: 21.6%;
  }
}

@media screen and (min-width: 415px) {
  #app {
    margin-top: 100px;
  }
}
</style>
