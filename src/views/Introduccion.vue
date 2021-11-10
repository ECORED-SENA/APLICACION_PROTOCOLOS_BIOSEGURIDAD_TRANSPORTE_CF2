<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    p.mb-5 El transporte se reconoce como un sector de gran importancia en la economía y la sociedad, siendo indispensable para el día a día de muchas personas al facilitar su movilidad, y es un factor determinante en la competitividad de los productos o servicios que el país ofrece al mercado internacional, así como un gran generador de empleo. Esta coyuntura global que se está viviendo en todo el mundo ha permitido reconocer la importancia de la actividad del sector transportista frente a la sociedad y la economía, al hacer evidente su propósito: abastecer a todo el país, aún en momentos tan difíciles como en el que nos encontramos.
      br
      br
      |Le invitamos a ver el siguiente video, que informa sobre los aspectos más relevantes que están presentes en la contingencia sanitaria que el mundo está viviendo, y la aplicación de protocolos de seguridad necesarios para que el sector del transporte mitigue los riesgos ocasionados por la misma.
    h5.mb-4 ¡Todos somos responsables de la bioseguridad!
    .tarjeta-videos.p-5
      .row.mb-5.justify-content-center
        .col-lg-10
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Para la elaboración de este componente, se abordaron varios autores conocidos en <b>protocolos de bioseguridad</b>, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de los <b>protocolos de bioseguridad para el sector transporte</b>.
    

</template>

<script>
import BannerInterno from '../components/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
