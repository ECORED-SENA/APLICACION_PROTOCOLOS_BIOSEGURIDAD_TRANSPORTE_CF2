<template lang="pug">
.scroll.h-100
  .scroll-horizontal-container.position-relative(@mouseover="indicadorScroll = false")
    .indicador--scroll(v-if='indicadorScroll')
    .screen.m-5
      img(src='@/assets/curso/s1.svg' )
    .screen.m-5
      img(src='@/assets/curso/s2.svg' )
    .screen.m-5
      img(src='@/assets/curso/s3.svg' )
    .screen.m-5
      img(src='@/assets/curso/s4.svg' )
    .screen.m-5
      img(src='@/assets/curso/s5.svg' )
    .screen.m-5
      img(src='@/assets/curso/s6.svg' )
    .screen.m-5
      img(src='@/assets/curso/s7.svg' )
    .screen.m-5
      img(src='@/assets/curso/s8.svg' )
  
</template>

<script>
export default {
  name: 'Scroll',
  data() {
    return {
      indicadorScroll: true,
    }
  },
  mounted() {
    ;(function() {
      let element = document.querySelector('.scroll-horizontal-container')
      element.addEventListener('wheel', e => {
        if (e.deltaY !== 0) {
          e.preventDefault()
          window.requestAnimationFrame(() => {
            element.scrollLeft += e.deltaY
          })
        }
      })
    })()
  },
}
</script>

<style lang="sass">

.scroll-horizontal-container
    display: flex
    align-items: center
    width: 100%
    height: 100%
    overflow-x: scroll
    scroll-snap-type: x mandatory
    &::-webkit-scrollbar
      display: none
.screen
    width: 80%
    flex: 0 0 auto
    display: flex
    justify-content: center
    align-items: center
.indicador
  &__container
    position: relative
    z-index: 1001
  &--scroll
    width: 100%
    position: absolute
    top: 50%
    left: 40%
    pointer-events: none
    z-index: 1001
    &:after
      content: ''
      display: block
      position: absolute
      width: 100px
      height: 100px
      z-index: 1001
      background-image: url('../assets/curso/scroll.svg')
</style>
