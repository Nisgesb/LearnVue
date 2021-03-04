<template>
  <div class="body">
    <display-box>
      <div slot="content">联播+ | 开班第一课 习近平要求年轻干部发扬这些光荣传统</div>
      <div slot="date">2021.03.01</div>
    </display-box>
    <display-box>
      <div slot="content">AI看两会 | 8年46次“下团组”总书记都说了哪些高频词</div>
      <div slot="date">2021.03.01</div>
    </display-box>
    <display-box>
      <div slot="content">联播+ | 如何完善覆盖全名的社保体系？学习习近平科学部署</div>
      <div slot="date">2021.03.01</div>
    </display-box>
  </div>
</template>

<script>
import displayBox from '../../DisplayBox/displayBox.vue'

export default {
  components: { displayBox },
  
}
</script>

<style scoped>
  .body{
    background-color: #f5f5f5;
    padding-top: 75px;
    width: 100%;
    height: 700px;
  }
</style>
