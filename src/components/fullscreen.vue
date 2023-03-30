<template>
  <div class="parent">
    <fullscreen :fullscreen.sync="fullscreen" @change="change" class="bgc" >
      <div class="button" @click="toggle">Fullscreen</div>
      <div class="child">
        <fullscreen :fullscreen.sync="fullscreen2" @change="childChange" class="bgc" >
          <div class="button" @click="childToggle">child--fullscreen</div>
        </fullscreen>
      </div>
    </fullscreen>
  </div>
</template>
<script>
import { component } from "vue-fullscreen";
export default {
  components: {
    fullscreen: component
  },
  methods: {
    toggle() {
      this.fullscreen = !this.fullscreen;
    },
    childToggle() {
      this.fullscreen2 = !this.fullscreen2;
    },
    change() {
      console.log("parent");
    },
    childChange() {
      console.log("child");
    }
  },
  data() {
    return {
      fullscreen: false,
      fullscreen2: false
    };
  }
};
</script>
<style>
.parent {
  width: 1000px;
  height: 500px;
  position: relative;
  border: 1px solid #ccc;
  padding: 32px;
}
.child {
  width: 500px;
  height: 300px;
  position: relative;
  border: 1px solid #ccc;
}
.button {
  position: absolute;
  right: 30px;
  top: 30px;
  width: 180px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ccc;
}
.bgc {
  background-color: #fff;
}
</style>
