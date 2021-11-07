<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Transporte
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        p El transporte es fundamental en la dinámica económica e industrial de cualquier país, permitiendo el flujo de productos. Normalmente, se define como el desplazamiento de individuos y/o de carga, y, por lo general, <b>se hace por medio de tres vías: aérea, terrestre, o fluvial/marítima.</b> Estas tres son de uso mayor en el territorio colombiano.
      .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/0.png')
    Separador 
    #t_1_1.titulo-segundo.color-acento-botones(data-aos='fade-right')
      h2 1.1. Clasificación 
    p.mb-5 Como ya se ha indicado, el transporte puede hacerse de manera terrestre, aérea o fluvial/marítima. A continuación, se establecen las características principales de cada una de estas formas, de acuerdo con el elemento transportado:
    .row.mb-5.justify-content-between.mx-5
      .col-lg-4(data-aos='fade-right')
        .tarjeta.bg--1-claro.p-4.hover.rounded-2
          .tarjeta__titulo.color-acento-contenido.d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/1.png' style='width: 97px')
            h5.mb-0.ms-5 Transporte de pasajeros
      .col-lg-4(data-aos='fade-right')
        .tarjeta.bg--1-claro.p-4.hover.rounded-2
          .tarjeta__titulo.color-acento-contenido.d-flex.justify-content-center.align-items-center
            img(src='@/assets/curso/2.png' style='width: 97px')
            h5.mb-0.ms-5 Transporte de carga
    p.mb-5 Observe en detalle este tipo de clasificación:
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        .tarjeta.tarjeta-slyder.bg--3-claro.p-4.h-100
          SlyderE(indicadores="centro")
            div.p-5
              img.mb-3(src='@/assets/curso/3.jpg', alt='Texto que describa la imagen')
              h4 Transporte de pasajeros 
              .listado.d-flex.align-items-center.mb-2
                img(src='@/assets/curso/1.png' style='width: 32px')
                h5.mb-0.ms-3 Vía terrestre
              .listado.d-flex.align-items-center.mb-2
                img(src='@/assets/curso/1.png' style='width: 32px')
                h5.mb-0.ms-3 Vía aérea
              p El objetivo principal del transporte de pasajeros es brindar un traslado eficiente, rápido, cómodo y seguro de personas entre distintos lugares.

            div.p-5
              img.mb-3(src='@/assets/curso/4.jpg', alt='Texto que describa la imagen')
              h4 Vía terrestre
              p Durante la pandemia, ha resultado indispensable la prestación del servicio público de pasajeros, debido a su carácter esencial. Sin embargo, al inicio de la contingencia sanitaria, en el año 2020, el transporte de pasajeros se redujo al mínimo, evidenciando un pequeño número de personas en circulación. Este escenario cambió para el año 2021, indicando la recuperación que ha tenido el sector.
            div.p-5
              img.mb-3(src='@/assets/curso/5.jpg', alt='Texto que describa la imagen')
              h4 Vía aérea
              p Según la Organización de Aviación Civil Internacional (ICAO), para el caso de pasajeros por líneas aéreas, se evidenció una disminución del 53,5 % en marzo de 2020, en comparación con el año anterior. Sin embargo, al igual que el transporte de pasajeros por vía terrestre, la reactivación del transporte aéreo ha avanzado de manera positiva para este año (2021), según lo indican las cifras del Ministerio de Transporte.
      .col-lg-6(data-aos='fade-right')
        .tarjeta.tarjeta-slyder.bg--3-claro.p-4.h-100
          SlyderE(indicadores="centro")
            div.p-5
              img.mb-3(src='@/assets/curso/6.jpg', alt='Texto que describa la imagen')
              h4 Transporte de carga
              p Es un factor vital en la economía del país, pues permite la movilización de todos los productos de una región a otra. Desde el inicio de la pandemia, el transporte de carga no se ha detenido, asegurando el abastecimiento de todo tipo de productos en las diferentes regiones del país. 
            div.p-5
              img.mb-3(src='@/assets/curso/7.jpg', alt='Texto que describa la imagen')
              h4 Transporte de carga
              p En mayo de 2020, el volumen del comercio mundial de bienes cayó 17,7 %, respecto al mismo mes del año 2019.
                br
                br
                | A nivel marítimo, las caídas en el tráfico de contenedores se vieron especialmente en los meses de abril y mayo de 2020; asimismo, el transporte de carga terrestre presentó una reducción de 8,1 % en el volumen movilizado. No obstante, de la misma forma que el transporte de pasajeros, el transporte de carga presentó una tendencia positiva para este año (2021). 
            div.p-5
              img.mb-3(src='@/assets/curso/7.jpg', alt='Texto que describa la imagen')
              h4 Transporte de carga
              p En mayo de 2020, el volumen del comercio mundial de bienes cayó 17,7 %, respecto al mismo mes del año 2019.
                br
                br
                | A nivel marítimo, las caídas en el tráfico de contenedores se vieron especialmente en los meses de abril y mayo de 2020; asimismo, el transporte de carga terrestre presentó una reducción de 8,1 % en el volumen movilizado. No obstante, de la misma forma que el transporte de pasajeros, el transporte de carga presentó una tendencia positiva para este año (2021).  
    Separador
    #t_1_2.titulo-segundo.color-acento-botones.mb-5(data-aos='fade-right')
      h2 1.2 Modalidades
    p.mb-5 Existen diferentes formas de mover físicamente un elemento (mercancías o personas) de un lugar a otro, pero en la mayoría de los casos las modalidades de transporte se concretan en las siguientes:
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1. 
      spam.fw-normal Modalidades de transporte\
    SlyderD.mb-5(:datos="datosSlyder")
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon-adorno.color-secundario.p-5
          h5.mb-0.mx-4 En todos los modos de transporte, deben implementarse las medidas sanitarias para la atención de la Covid-19, dirigidas a: conductores, propietarios de vehículos, empresas de transporte de carga, pasajeros y operadores de sistemas de transporte.
    p.mb-5 Con el fin de ampliar la dimensión del concepto de contagio, se invita a ver el video <b>“Riesgo exponencial en el contagio del COVID-19”</b>, que explica cómo una persona infectada puede, de manera exponencial, afectar a una gran porción de la población, y que puede encontrar en el material complementario.
    
        
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Terrestre ',
        texto:
          'La principal ventaja del transporte terrestre es que permite la utilización de la infraestructura vial a nivel global, además, presenta gran versatilidad, ya que permite el uso de vehículos pequeños hasta camiones de gran tonelaje. Adicionalmente, admite tener productos al alcance del consumidor final.',
        imagen: require('@/assets/curso/9.jpg'),
      },
      {
        titulo: 'Aéreo',
        texto:
          'En América Latina, el transporte aéreo hace una gran contribución a la economía y posibilita la conectividad entre personas y territorios, se considera un servicio público esencial, generando mayor importancia al desarrollo económico de los países. <br><br> En Colombia, esta modalidad de transporte ha tenido cambios importantes. Entre la apertura económica de 1990 y la crisis económica nacional de 1999, el PIB del transporte aéreo creció a una tasa anual promedio de 2.7 % en términos reales, posteriormente a la crisis, se desaceleró en un 1.3 % (entre 1999 y 2002). Posteriormente, de nuevo incrementó hasta un 4.1 %, sugiriendo con esto que la demanda de este transporte aumentó con la economía del país. Así mismo sucede con el transporte de pasajeros, que muestra un crecimiento anual del 8 % y hasta un 10.1 % a nivel de movilidad internacional, y comparándolo con el de carga, representa el 82 % de la actividad del sector.',
        imagen: require('@/assets/curso/10.jpg'),
      },
      {
        titulo: 'Marítimo',
        texto:
          'Se dice que el transporte marítimo es la columna vertebral del comercio, debido a que es el modo por el que se moviliza cerca del 84 % del volumen comercializado mundialmente. <br><br> Esta particularidad se ve en el contexto internacional, por el ofrecimiento de transportar grandes volúmenes de mercancías, de naturaleza variada, a un bajo costo y entre puntos generalmente muy alejados entre sí, trayendo consigo ahorro en el precio final del producto transportado. ',
        imagen: require('@/assets/curso/11.jpg'),
      },
      {
        titulo: 'Fluvial',
        texto:
          'Ha sido un medio importante para el traslado de pasajeros y productos, realizando intercambio comercial a través de ríos. Actualmente, este sistema de transporte se utiliza en el suroriente y suroccidente del país, donde es más difícil la malla vial. <br><br> Nuestro país tiene ríos importantes que cruzan el territorio nacional, como el río Magdalena, que une 11 departamentos de sur a norte, en los cuales vive el 80 % de la población colombiana y se produce el 85 % del PIB nacional; o el río Cauca, que en su recorrido pasa por más de 180 municipios de 7  diferentes departamentos, lugares donde se desarrollan  actividades productivas, como la industria azucarera, cultivo de café, generación de electricidad, explotación minera y agrícola, entre otras. ',
        imagen: require('@/assets/curso/12.jpg'),
      },
    ],
  }),
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
