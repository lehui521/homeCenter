<template>
  <svg xmlns="http://www.w3.org/200/svg" height="100%" width="100%">
    <circle cx="50%" cy="50%" :r="options.r" fill="none" stroke="#FFE4E1" stroke-width="4" stroke-linecap="round" style="transform-origin: center;" />
    <circle class="circleProgress" id="progress_bar" cx="50%" cy="50%" :r="options.r" fill="none" stroke="#FC124F" stroke-width="5" :stroke-dasharray="proNum+',10000'" />
  </svg>
</template>
<script>
export default {
  props: ["proNum"],
  data: function() {
    return {
      options: {
        r: 0
      }
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
.circleProgress {
  transform-origin: center;
  transform: rotate(90deg);
}
</style>

