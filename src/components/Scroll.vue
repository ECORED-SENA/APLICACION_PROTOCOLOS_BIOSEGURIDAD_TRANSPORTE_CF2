<template lang="pug">
.scroll.h-100
  .scroll-horizontal-container
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
    return {}
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
</style>
