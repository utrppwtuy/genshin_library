<template>
  <div>
    <el-container>
      <el-header>
        <div class="headTitle">{{ headTitle }}</div>
      </el-header>
      <el-main>
        <div class="mainTitle">
          <el-link class="linkType" href="#/anime">{{ mainTitle[0] }}</el-link>
        </div>
      </el-main>
      <el-footer>
        <div class="footerTitle">{{ footerTitle }}</div>
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
      mainTitle: ['XY001 js全自动手书动画'],
      footerTitle:
        "I am not a designer nor a coder. I'm just a guy with a point-of-view and a computer."
    }
  },
  mounted () {}
}
</script>

<style scope>
.el-header {
  background-color: #f38181;
  height: 0% !important;
}

.el-footer {
  background-color: white;
  height: 0% !important;
  color: white;
}
.headTitle {
  color: white;
  font-size: 64px;
  padding-top: 10%;
  padding-bottom: 30px;
  text-align: center;
}
.mainTitle {
  padding-top: 5%;
  text-align: center;
}
.linkType {
   font-size: 32px;
}
.el-link.el-link--default {
    color: #f38181;
}
.el-link.el-link--default:hover {
    color: #fce38a;
}
.el-link.el-link--default:after, .el-link.el-link--primary.is-underline:hover:after, .el-link.el-link--primary:after {
    border-color: #fce38a !important;
}
.footerTitle {
  color: #95e1d3;
  font-size: 24px;
  text-align: center;
  padding-top: 20%;
  padding-bottom: 40px;
}
</style>
