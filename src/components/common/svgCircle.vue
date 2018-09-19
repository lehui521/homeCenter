<template>
  <van-circle :rate="parseInt(proNum.split('%')[0])" :clockwise="true" v-model="num" color="#FC124F" :speed="100" :text="text" class="circleStyle" size="1rem" layer-color="#FFE4E1" :stroke-width="90" />
</template>
<script>
export default {
  props: ["proNum"],
  data: function() {
    return {
      options: {
        r: 0
      },
      num: 100,
      text: "已抢" + this.proNum
    };
  },
  created: function() {
    this.getFontSize();
  },
  methods: {
    getFontSize: function() {
      let size = document.body.clientWidth / 10;
      this.options.r = size / 1.6;
    }
  }
};
</script>

<style lang="scss" scoped>
.circleStyle {
  font-size: 0.22rem;
  color: #fc124f;
  height: 100% !important;
}
</style>

