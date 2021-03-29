<template>
  <div>
    <el-container>
      <el-header>
        {{ headTitle }}</el-header>
      <el-main> 1</el-main>
      <el-footer>
        {{ footerTitle }}
      </el-footer>
    </el-container>
  </div>
</template>
<script>
// import anime from 'animejs/lib/anime.es.js'
export default {
  data () {
    return {
      headTitle: '希月genshin试验场',
      footerTitle:
        "I am not a designer nor a coder. I'm just a guy with a point-of-view and a computer."
    }
  },
  mounted () {}
}
</script>

<style>
.el-header {
  background-color: #f38181;
  height: 240px !important;
  font-size: 48px;
  color: white;
  text-align: center;
}
.el-footer {
  background-color: #95e1d3;
  height: 120px !important;
  font-size: 24px;
  color: white;
  text-align: center;
}

</style>
