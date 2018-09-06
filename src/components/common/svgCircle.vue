<template>
  <van-circle :rate="proNum" :clockwise="true" v-model="num" color="#FC124F" :speed="100" :text="text" class="circleStyle" size="1rem" layer-color="#FFE4E1" :stroke-width="90" />
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
      text: "已领取30%"
    };
  },
  created: function() {
    this.getFontSize();
  },
  methods: {
    getFontSize: function() {
      let size = document.body.clientWidth / 10;
      this.options.r = size / 1.5;
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

