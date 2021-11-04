<template lang="pug">
.slyder-b
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-b__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .row
        .col-lg-8.order-lg-2.mb-4.mb-lg-0
          figure.slyder-b__img
            img(:src='item.imagen', :alt='item.leyendaImagen')
            figcaption(v-if="item.leyendaImagen") {{item.leyendaImagen}}

        .col-lg-4.order-lg-1
          .h3 Imagen vectorial
          p.mb-3 Una imagen vectorial es aquella realizada por medio de vectores, objetos definidos a partir de puntos unidos por líneas que forman figuras geométricas, para realizar dibujos, ilustraciones, logotipos, etc.
          .slyder__action
            .slyder__pagination {{index+1}}/{{datos.length}}
            a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
              i.fas.fa-angle-left
            a.slyder__btn.style-left(
              v-if="index != datos.length -1"
              @click="selected = getId(index +1)"
              @mouseover="mostrarIndicador = false"
            )
              i.fas.fa-angle-right
                .indicador--click.indicador--sm
</template>

<script>
import slyderMixins from '../../node_modules/ecored-base-pkg/src/mixins/slyderMixins'
import ScrollHorizontal from '../../node_modules/ecored-base-pkg/src/components/plantilla/ScrollHorizontal.vue'
export default {
  name: 'SlyderG',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>

<style lang="sass">
.style-left
  background-color: red
</style>
