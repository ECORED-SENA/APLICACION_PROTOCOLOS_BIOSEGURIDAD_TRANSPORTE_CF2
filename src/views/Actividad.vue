<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Complete los espacios en blanco
        p.mb-4 La siguiente actividad tiene como propósito comprender la importancia de las medidas de bioseguridad ante el riesgo por Covid-19.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 De acuerdo con el banco de palabras dispuesto, complete los espacios en blanco según la información vista en este componente formativo.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad-1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/completar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Encuentra el cumplimiento.
        p.mb-4 Orientar al aprendiz sobre un conocimiento generalizado de los protocolos de bioseguridad sobre Covid-19.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0  Estimado aprendiz, favor marcar con un circulo las actividades, o conductas que estén cumpliendo los protocolos de bioseguridad en el transporte, de acuerdo a la normativa implementada para atender la contingencia sanitaria del COVID 19. 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad-2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
