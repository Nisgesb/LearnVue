<template>
  <div class="all">
    <div class="title">
      <p class="p" style="font-size: 23px">{{title}}</p>
    </div>
    <div class="author">
      <img :src="src" alt="" style="width: 35px; height: 35px;">
      <div style="margin: 0 20px ">
        <p>{{author}}</p>
        <p style="font-size: 10px; color: rgb(165, 165, 165)">{{time}}</p>
      </div>
    </div>
    <div>
      <p class="p" v-for="item in content" :key="item">{{item}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "联播+｜开班第一课 习近平要求年轻干部发扬这些光荣传统",
      time: "发布时间：03-02  09:40  |  央视国际网络有限公司",
      author: "央视新闻网",
      src: "https://pic.rmb.bdstatic.com/48b73d8732f0b5eb4ace2f99af7d1f34.jpeg",
      content: [
        "联播+3月1日，2021年春季学期中央党校（国家行政学院）中青年干部培训班在中央党校开班，习近平总书记在开班式上发表重要讲话强调，年轻干部是党和国家事业接班人，必须立志做党的光荣传统和优良作风的忠实传人，不断增强意志力、坚忍力、自制力，在新时代全面建设社会主义现代化国家新征程中奋勇争先、建功立业，努力创造无愧于党、无愧于人民、无愧于时代的业绩！",
        "央视网《联播+》为您梳理总书记重要讲话内容，与您一起学习体会。",
        "我们党的显著标志",
        "我们党团结带领人民取得了革命、建设、改革的伟大成就，很重要的一条就是我们党在长期实践中培育并坚持了一整套光荣传统和优良作风。",
        "这些光荣传统和优良作风是我们党性质和宗旨的集中体现，是我们党区别于其他政党的显著标志。"
      ],
      
    }
  },
}
</script>

<style scoped>
 .all{
   border-color: white;
   padding-top: 75px;
   width: 100%;
   height: 700px;
 } 
 .title{
   font-weight: bold;
 }
 .author{
   margin: 20px 18px 0 18px;
   display: flex;
   flex: row;
 }
 .p{
   margin: 20px 18px 0 18px;
   font-size: 17px;
    line-height: 2rem;
    text-align: justify;
 }
</style>
