<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="wenjuan-guide">
      <a href="https://www.npmjs.com/package/wenjuan-cli" target="_blank">Documentation</a>
      <a href="https://github.com/cghbh/wenjuan-cli" target="_blank">Github</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello h1 {
  margin: 10px 0 30px 0;
}
.wenjuan-guide a {
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid #2672ff;
  font-size: 18px;
  border-radius: 4px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}

.wenjuan-guide a:last-of-type {
  margin-left: 12px;
}
</style>
