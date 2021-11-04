<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Bioseguridad
    .row.mb-5.align-items-center
      .col-lg-6(data-aos='fade-right')
        .cajon-b.color-acento-contenido.p-3.mb-5.abajo-derecha
          p La bioseguridad brinda un enfoque estratégico mediante la implementación de técnicas, principios y prácticas con el fin de prevenir la exposición a agentes como el virus por Covid-19 y, finalmente, establecer un proceso para reconocer, evaluar y mitigar los riesgos.
      .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/13.png')
    Separador
    #t_2_1_.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.1 Concepto
    .row.mb-5.align-items-center.g-0
      .col-xl-2: img(src='@/assets/curso/14.png' style='height:284px').d-none.d-xl-block
      .col-xl-10
        .bg--1-claro.p-4(style='min-height:284px')
          p La bioseguridad está directamente relacionada con el control, minimización o eliminación de riesgos, con el objetivo de preservar la salud humana, animal o del medio ambiente. En este caso en particular, se basa en la necesidad de proteger a toda la población de los riesgos asociados a la Covid -19, que pueden poner en peligro la salud.
            br
            br
            |Puede lograrse a través de actitudes y conductas que disminuyan el riesgo del trabajador de adquirir el virus en el entorno laboral o en el desempeño de sus funciones.
            br
            |El principal objetivo de la bioseguridad es promover la salud de los trabajadores, a través de medidas enfocadas en su protección, creación de barreras, prevenir la exposición al riesgo, así como la implementación y desarrollo de las normas de aislamiento. 
    h3(data-aos='fade-right') Principios
    p.mb-5 La bioseguridad se constituye de principios básicos o medidas preventivas que permiten la contención adecuada de cualquier agente biológico, físico o químico; de esta forma, posibilita la prevención del impacto nocivo sobre la salud humana y la seguridad de los actores involucrados. 
      br
      br
      |Las prácticas, procedimientos o principios alrededor de la bioseguridad se sustentan sobre cuatro bases específicas, las cuales son:
    .tarjeta.tarjeta-slyder.bg--3-claro.p-4.mb-5
      SlyderE(indicadores="centro").p-5
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h4 Autocuidado
            p Cada persona es responsable de tomar decisiones que promuevan el cuidado de sí mismos, de los seres queridos y de la sociedad en general. Para ello, es necesario adoptar medidas que garanticen su protección, considerando su entorno y condiciones de vida.
              br
              br
              |Este principio se refiere a las prácticas cotidianas y a las decisiones sobre ellas que realiza una persona expuesta para cuidar de su salud; para ello, cumple con las normas de bioseguridad, realiza uso adecuado de equipos y elementos que se proveen para su protección, priorizando tanto su cuidado como el del cuidador.
          .col-md-6
            figure
              img(src='@/assets/curso/15.svg', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h4 Universalidad
            p Este principio surge de la potencialidad, es decir, de la posibilidad que hay de que toda persona expuesta al virus, independiente de su condición social, etnia, sexo, credo, etc., debe tener precauciones universales.
              br
              br
              |Es decir que las medidas deben involucrar a todas las personas, las cuales deben cumplir las precauciones estándar de forma diaria, con el fin de prevenir la exposición que pueda dar origen a la enfermedad por Covid-19 y teniendo en cuenta que cualquier persona es susceptible de portar este virus.
          .col-md-6
            figure
              img(src='@/assets/curso/16.svg', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h4 Barreras de protección
            p Se trata de evitar la exposición directa a la Covid-19 mediante el uso de elementos adecuados que impidan el contacto directo con el virus. La utilización de estas barreras disminuye el posible contagio.
              br
              br
              |Se suelen dividir en tres grupos:
            ul.lista-ul--color
              li 
                i.fas.fa-check
                p
                  b Inmunización: 
                  | corresponde a las vacunas.
              li 
                i.fas.fa-check
                p
                  b Barreras primarias: 
                  | corresponden a los equipos de seguridad: guantes, trajes o mascarillas.
              li 
                i.fas.fa-check
                p
                  b Barreras secundarias: 
                  |  corresponden a las áreas de trabajo aisladas, lavamanos o sistemas de ventilación. 
          .col-md-6
            figure
              img(src='@/assets/curso/17.svg', alt='Texto que describa la imagen')
        .row.mx-5.align-items-center
          .col-md-6.mb-4.mb-md-0
            h4 Eliminación de residuos
            p Mediante este principio, se establece la manera correcta de descartar los residuos peligrosos y no peligrosos generados en el desarrollo de la actividad laboral.
          .col-md-6
            figure
              img(src='@/assets/curso/18.svg', alt='Texto que describa la imagen')
    h3(data-aos='fade-right') Medidas de bioseguridad
    p.mb-5 La empresa debe proteger la salud de todos sus trabajadores, garantizando que las condiciones de trabajo no sean una amenaza significativa, lo cual solo podrá conseguirse por medio de la actividad preventiva.
      br
      br
      |Todas las empresas deben cumplir con medidas de autocuidado y protección que mitiguen y eviten el contagio del Covid -19, a través de las siguientes medidas de bioseguridad:
    .row.mb-5.justify-content-center(data-aos='zoom-in-up')
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/19.jpg', alt='Texto que describa la imagen')
            .col-md-7
              h4 Lavado de manos (30-40 seg.)
              p Es la acción más eficaz para evitar o disminuir la transmisión del coronavirus. Es recomendable realizar un lavado de manos con agua y jabón de manera constante, principalmente después de haber tenido contacto con cualquier superficie que pueda estar infectada, al intercambiar objetos o en las ocasiones que se considere necesario.
          .row.justify-content-center
            .col-md-7
              h4 Uso de tapabocas 
              p Es un elemento que se emplea como barrera de protección y su uso es obligatorio en el desarrollo de cualquier labor en cualquier sector económico. 
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/20.jpg', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/21.jpg', alt='Texto que describa la imagen')
            .col-md-7
              h4 Limpieza y desinfección
              p Se realiza para remover organismos y suciedad de los sitios en los cuales los usuarios o trabajadores han estado en contacto con elementos como taquillas, pasamanos o sillas. En el caso del uso de desinfectantes, se deben seguir las recomendaciones de las fichas técnicas del producto.
          .row.justify-content-center
            .col-md-7
              h4 Distanciamiento
              p Según la normativa, el distanciamiento físico debe ser de mínimo un metro para todas las actividades de los diferentes sectores económicos. Se deben evitar las aglomeraciones, definiendo estrategias que garanticen el distanciamiento físico, por ejemplo, turnos de trabajo.  
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/22.jpg', alt='Texto que describa la imagen')
          .row.justify-content-center
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/23.jpg', alt='Texto que describa la imagen')
            .col-md-7
              h4 Ventilación
              p La ventilación adecuada con aire del exterior puede contribuir a minimizar la concentración de contaminantes como el virus por Covid-19, debido a que puede diluir el aire contaminado dentro del espacio más rápidamente.
    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 2.2 Protocolos 
    p.mb-5 Un protocolo de bioseguridad tiene el objetivo de prevenir, mitigar y contener la propagación de la Covid-19 en el desarrollo de cualquier actividad. Este debe incluir los lineamientos que permitan la orientación y las medidas que se requieren para mitigar la transmisión de virus.
    .bg--1-claro.p-5.position-relative.mb-5
      .col-xl-7
        p.mb-0 Para la reactivación del transporte, ha sido fundamental desarrollar estrategias y protocolos acordes con las necesidades de cada empresa, con el fin de brindar un servicio con condiciones de bioseguridad, estos han sido de gran importancia para la apertura gradual de los sectores económicos en el país. Las medidas que aquí se indican pueden complementarse con las medidas que todas las empresas consideren necesarias para su quehacer diario.
      img.position-absolute(src='@/assets/curso/24.svg')(style="bottom: -5%; right: 10%; width: 294px").d-none.d-xl-block
    p.mb-5 Es importante tener en cuenta que la implementación de los protocolos de bioseguridad en el sector requiere un análisis de la actividad de cada empresa, con el fin de establecer las medidas necesarias, teniendo en cuenta:
    .row.mb-5.justify-content-center
      .col-lg-2
        .tarjeta.bg--1-claro.p-4
          img(src='@/assets/curso/25.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto
          h5.text-center Trabajo en casa
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
