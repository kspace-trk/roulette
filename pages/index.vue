<template>
  <div class="container">
    <div class="title">幹事決めルーレット</div>
    <div class="circle">
      <div class="point">
        <svg xmlns="http://www.w3.org/2000/svg" width="65.142" height="66.835" viewBox="0 0 65.142 66.835">
          <path id="Icon_awesome-arrow-down" data-name="Icon awesome-arrow-down" d="M61.176,30.667l3.312,3.312a3.565,3.565,0,0,1,0,5.057l-28.983,29a3.565,3.565,0,0,1-5.057,0l-29-29a3.565,3.565,0,0,1,0-5.057L4.76,30.667a3.584,3.584,0,0,1,5.116.06L27,48.7V5.83a3.571,3.571,0,0,1,3.58-3.58h4.773a3.571,3.571,0,0,1,3.58,3.58V48.7L56.06,30.726a3.558,3.558,0,0,1,5.116-.06Z" transform="translate(-0.397 -2.25)"/>
        </svg>
      </div>
      <img :class="{rotate: rotate}" src="img/circle.png" alt="">
    </div>
    <div class="result" v-if="result" >🎉🎉🎉ぴきちゃん🎉🎉🎉</div>
    <button @click="start()">ルーレットスタート！！！！</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      rotate: false,
      result: false
    }
  },
  methods:{
    start() {
      this.rotate = true
      setTimeout(this.stop, 1500)
    },
    stop() {
      this.rotate = false
      this.result = true
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.title {
  font-size: 3rem;
}
.circle {
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
.point {
  position: absolute;
  top: -40px;
}
.point svg {
  width: 30px;
}
path {
  fill: red;
}
.circle img {
  max-width: 600px;
}
button {
  cursor: pointer;
}
.rotate {
  animation:3s linear infinite rotation;
}
@keyframes rotation{
  0%{ transform:rotateY(0);}
  100%{ transform:rotateY(3600deg); }
}
.result {
  font-size: 4rem;
}
</style>
