<template>
  <div class="scroll" ref="scroll">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    this._initscroll()
  },
  methods: {
    _initscroll () {
      this.scroll = new BScroll(this.$refs.scroll, {
        click: this.click,
        probeType: 2,
        pullUpLoad: {
          threshold: 10
        }
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('load')
        this.scroll.finishPullUp()
      })
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
