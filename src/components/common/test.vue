<template lang="html">
  <div class="yo-scroll"
  :class="{'down':(state===0),'up':(state==1),refresh:(state===2),touch:touching}"
  @touchstart="touchStart($event)"
  @touchmove="touchMove($event)"
  @touchend="touchEnd($event)"
  @scroll="(onInfinite || infiniteLoading) ? onScroll($event) : undefined">
    <section class="inner" :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }">
      <header class="pull-refresh">
        <slot name="pull-refresh">
           <span class="down-tip"></span> <!--下拉更新-->
           <span class="up-tip"></span><!--松开更新-->
           <span class="refresh-tip"></span><!--更新中-->
        </slot>
      </header>
      <slot></slot>
      <footer class="load-more">
        <slot name="load-more">
          <span></span>
        </slot>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 40
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    }
  },
  data() {
    return {
      top: 0,
      state: 0,
      startY: 0,
      touching: false,
      infiniteLoading: false
    };
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY;
      this.startScroll = this.$el.scrollTop || 0;
      this.touching = true;
    },
    touchMove(e) {
      if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
        return;
      }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
      if (diff > 0) e.preventDefault();
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0);

      if (this.state === 2) {
        // in refreshing
        return;
      }
      if (this.top >= this.offset) {
        this.state = 1;
      } else {
        this.state = 0;
      }
    },
    touchEnd(e) {
      if (!this.enableRefresh) return;
      this.touching = false;
      if (this.state === 2) {
        // in refreshing
        this.state = 2;
        this.top = this.offset;
        return;
      }
      if (this.top >= this.offset) {
        // do refresh
        this.refresh();
      } else {
        // cancel refresh
        this.state = 0;
        this.top = 0;
      }
    },
    refresh() {
      this.state = 2;
      this.top = this.offset;
      this.onRefresh(this.refreshDone);
      this.infiniteLoading = false;
    },
    refreshDone() {
      this.state = 0;
      this.top = 0;
    },

    infinite() {
      this.infiniteLoading = true;
      this.onInfinite(this.infiniteDone);
    },

    infiniteDone() {
      this.infiniteLoading = false;
    },

    onScroll(e) {
      if (!this.enableInfinite || this.infiniteLoading) {
        return;
      }
      let outerHeight = this.$el.clientHeight;
      let innerHeight = this.$el.querySelector(".inner").clientHeight;
      let scrollTop = this.$el.scrollTop;
      let ptrHeight = this.onRefresh
        ? this.$el.querySelector(".pull-refresh").clientHeight
        : 0;
      let infiniteHeight =
        this.$el.querySelector(".load-more").clientHeight + 10;
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight;
      if (bottom < infiniteHeight) this.infinite();
    }
  }
};
</script>
<style lang="scss" scoped>
.yo-scroll {
  position: absolute;
  top: 1.8rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #f2f2f2;
  border-top: 1px solid #e2e3e3;
}
.yo-scroll .inner {
  position: absolute;
  top: pxTorem(-44);
  width: 100%;
  transition-duration: 300ms;
  margin-bottom: pxTorem(10);
  height: 100%;
}
.yo-scroll .pull-refresh {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: pxTorem(44);
  line-height: pxTorem(44);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  span {
    color: #666;
  }
}
.yo-scroll.touch .inner {
  transition-duration: 0ms;
}
.yo-scroll.down .down-tip {
  display: block;
}
.yo-scroll.up .up-tip {
  display: block;
}
.yo-scroll.refresh .refresh-tip {
  display: block;
}
.yo-scroll .down-tip,
.yo-scroll .refresh-tip,
.yo-scroll .up-tip {
  display: none;
}
.yo-scroll .load-more {
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  text-align: center;
  span {
    color: #999;
  }
}
</style>