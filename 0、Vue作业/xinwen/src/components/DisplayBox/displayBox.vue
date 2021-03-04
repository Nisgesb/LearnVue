<template>
  <div class="border" @click="enter()">
    <div class="adorn"></div>
    <div class="circle"></div>
    <div class="content"><slot name="content"></slot></div>
    <div class="hr"></div>
    <div class="date"><slot name="date"></slot></div>
  </div>
</template>

<script>
export default {
  methods: {
    enter() {
      this.$router.replace('/news')
    }
  },
}
</script>

<style scoped>
  .adorn{
    position: absolute;
    border-radius: 7px 0 0 7px;
    background-color: rgb(255, 214, 33);
    height: 110px;
    width: 6px;
  }
  .circle{
    position: absolute;
    margin-left: 20px;
    margin-top: 7px;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #ffc107;
  }
  .border{
    margin: 20px 10px 0px 10px;
    height: 110px;
    background-color: rgb(255, 255, 255);
    border-radius: 7px;
    box-shadow: 0 2px 2px rgba(59, 59, 59, 0.123);
  }
  .content{
    padding-top: 25px;
    margin: 0px 20px 0 20px;
  }
  .hr{
    width: 100%;
    height: 1px;
    background-color: rgb(238, 238, 238);
    margin-top: 10px;
  }
  .date{
    padding-top: 7px;
    margin: 0px 20px 0 25px;
    font-size: 12px;
    color: rgb(165, 165, 165);
  }
</style>