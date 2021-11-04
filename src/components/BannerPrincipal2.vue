<template lang="pug">
.banner-principal
  .container.tarjeta(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.fondo-contenido2
      img.fondo-contenido(:src="globalData.fondoContenido")
      .col-lg-10.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0.ps-5(v-html="globalData.componenteFormativo")
        .col-lg-8
          .banner-principal__descripcion
            p.mb-0.ps-5(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        .contenedor-imagenes
          .imagen_flotante.imagen_flotante_2: img(src="@/assets/curso/limpiador.svg")
          .imagen_flotante.imagen_flotante_3: img(src="@/assets/curso/banner-avion.svg")
          .imagen_flotante.imagen_flotante_4: img(src="@/assets/curso/covid1.svg")
          .imagen_flotante.imagen_flotante_5: img(src="@/assets/curso/covid1.svg")
          .imagen_flotante.imagen_flotante_6: img(src="@/assets/curso/covid1.svg")
          .imagen_flotante.imagen_flotante_7: img(src="@/assets/curso/covid1.svg")
          .imagen_flotante.imagen_flotante_8: img(src="@/assets/curso/covid1.svg")

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  z-index: 3


.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  .tarjeta
    background-color: $color-banner-fondo
    background-size: cover
    background-position: center

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important


.contenedor-imagenes
  position: relative
.imagen_flotante
  &_3
    animation: avion 18s infinite
    position: absolute
    top: 25px
    left: -10%
  &_1
    animation: camion 5s infinite
    position: absolute
    width: 425px
    top: 250px
    left: -140%
  &_2
    animation: bus 10s alternate infinite
    position: absolute
    width: 360px
    bottom: 0
    left: -140%

  &_4
    animation: covid1 8s infinite
    position: absolute
    width: 70px
    top: 280px
    left: 80%
    opacity: 1
  &_5
    animation: covid1 9s infinite
    position: absolute
    width: 60px
    top: 200px
    left: 60%
    opacity: 1
  &_6
    animation: covid1 7s infinite
    position: absolute
    width: 80px
    top: 260px
    left: 0%
    opacity: 1
  &_7
    animation: covid1 7s infinite
    position: absolute
    width: 60px
    top: 180px
    left: 35%
    opacity: 1
  &_8
    animation: covid1 7s infinite
    position: absolute
    width: 70px
    top: 280px
    left: -35%
    opacity: 1

@keyframes covid1
  from
    top: -20px
    opacity: 0
    width: 40px
@keyframes camion
	from
    left: 15%
@keyframes avion
	from
    left: 110%
@keyframes bus
  0%
    left: 20%
  20%
    left: -10%
  40%
    left: -20%
  50%
    left: -10%
  100%
    left: 20%



@media (min-width: $bp-min-xxl)
  .imagen_flotante
    &_1
      top: 285px
      left: -140%
    &_2
      top: 190px
      left: -140%
@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-image: url(../assets/curso/banner-contenido2.png)
    background-repeat: no-repeat
    background-size: cover
</style>
