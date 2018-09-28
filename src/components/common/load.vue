<template>
  <div class="scrollContent" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  data: function() {
    return {
      options: {
        click: true,
        scrollY: true,
        scrollX: false,
        pullUpLoad: {
          threshold: 50
        },
        click: true,
        tap: true
      },
      num: 1
    };
  },
  mounted: function() {
    this.scroll = new Bscroll(this.$refs.wrapper, this.options);
    this.handlePullLoad();
    this.scroll.refresh();
  },
  methods: {
    handlePullLoad: function() {
      this.scroll.on("pullingUp", () => {
        this.num += 1;
        this.$emit("scrollEnd", this.num);
        this.scroll.refresh();
        this.scroll.finishPullUp();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.scrollContent {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>


