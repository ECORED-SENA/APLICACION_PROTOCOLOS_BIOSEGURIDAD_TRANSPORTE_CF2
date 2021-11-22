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
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
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
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Protocolos 
    p.mb-5 Un protocolo de bioseguridad tiene el objetivo de prevenir, mitigar y contener la propagación de la Covid-19 en el desarrollo de cualquier actividad. Este debe incluir los lineamientos que permitan la orientación y las medidas que se requieren para mitigar la transmisión de virus.
    .bg--1-claro.p-5.position-relative.mb-5
      .col-xl-7
        p.mb-0 Para la reactivación del transporte, ha sido fundamental desarrollar estrategias y protocolos acordes con las necesidades de cada empresa, con el fin de brindar un servicio con condiciones de bioseguridad, estos han sido de gran importancia para la apertura gradual de los sectores económicos en el país. Las medidas que aquí se indican pueden complementarse con las medidas que todas las empresas consideren necesarias para su quehacer diario.
      img.position-absolute(src='@/assets/curso/24.svg')(style="bottom: -5%; right: 10%; width: 294px").d-none.d-xl-block
    p.mb-5 Es importante tener en cuenta que la implementación de los protocolos de bioseguridad en el sector requiere un análisis de la actividad de cada empresa, con el fin de establecer las medidas necesarias, teniendo en cuenta:
    .row.mb-5.justify-content-center
      .col-xl-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/25.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center Trabajo en casa
      .col-xl-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/26.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center Medidas locativas
      .col-xl-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/27.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center Capital humano 
      .col-xl-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/28.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center  Plan de comunicaciones
      .col-xl-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/29.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center Manejo de situaciones de riesgo de contagio
    .row.mb-5.justify-content-center(data-aos='zoom-in-up')
      .col-lg-8
        .cajon-adorno.color-secundario.p-5
          h5.mb-0.mx-4 La metodología descrita a continuación, para definir el protocolo de bioseguridad por Covid-19 de cualquier empresa del sector transporte, se basa en la Resolución 777 del 2 de junio de 2021, emitida por el Ministerio de Salud y Protección Social, y se trata de la medida más reciente para atender la pandemia.
    p.mb-5 Y es responsabilidad de los empleadores y trabajadores acatar las siguientes disposiciones para dar cumplimiento al protocolo de bioseguridad adoptado. Observe:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta border-bottom")
      div.p-4(titulo="El empleador debe:")
        ul.lista-ul--color
          li 
            i.fas.fa-angle-right
            | Actualizar el protocolo de bioseguridad dependiendo de su sector económico y siguiendo los lineamientos establecidos por el Gobierno Nacional para la Covid-19.
          li
            i.fas.fa-angle-right
            |Dar a conocer a trabajadores y contratistas el nuevo protocolo de bioseguridad. Implementar acciones con el fin de garantizar la continuidad de sus actividades y la protección integral de los empleados.
          li
            i.fas.fa-angle-right
            | Implementar acciones con el fin de garantizar la continuidad de sus actividades y la protección integral de los empleados.
      div.p-4(titulo="El trabajador debe:")
        ul.lista-ul--color
          li 
            i.fas.fa-check.color--4
            | Aplicar medidas de autocuidado durante el cumplimiento de sus funciones.

          li 
            i.fas.fa-check.color--4
            | Promover el cuidado mutuo orientado al cumplimiento de las medidas de bioseguridad.

          li 
            i.fas.fa-check.color--4
            | Cumplir el protocolo de bioseguridad que se adopta por parte de su empleador o contratante.

          li 
            i.fas.fa-check.color--4
            | Reportar al empleador o contratante cualquier caso de contagio que se llegue a presentar en el trabajo o en el hogar.

          li 
            i.fas.fa-check.color--4
            | Reportar al empleador o al contratante las alteraciones de salud que pueda presentar, especialmente, con síntomas asociados a Covid-19.

          li 
            i.fas.fa-check.color--4
            |  Reportar al empleador o contratante cualquier situación de riesgo en el lugar de trabajo que ponga en riesgo el cumplimiento de los protocolos de bioseguridad.
    p.mb-5 Las disposiciones generales son medidas que pueden ser adaptadas de acuerdo con las necesidades o disposiciones de cada empresa, además, deben hacerse visibles en el medio de trabajo y realizar inspecciones periódicas para verificar su cumplimiento. Estas son:
    .row.mb-5
      .col-lg-4.mb-3
        .tarjeta-hover-imagen
          .tarjeta-hover-imagen__img: img(src='@/assets/curso/30.jpg')(alt='Texto que describa la imagen' style='width: 100%').m-auto.mb-3
          .tarjeta-hover-imagen__titulo.bg--3.text-white.p-3
            h5.text-center.mb-0 Lavado de manos
      .col-lg-4.mb-3
        .tarjeta-hover-imagen
          .tarjeta-hover-imagen__img: img(src='@/assets/curso/31.jpg')(alt='Texto que describa la imagen' style='width: 100%').m-auto.mb-3
          .tarjeta-hover-imagen__titulo.bg--3.text-white.p-3
            h5.text-center.mb-0 Distanciamiento físico
      .col-lg-4.mb-3
        .tarjeta-hover-imagen
          .tarjeta-hover-imagen__img: img(src='@/assets/curso/32.jpg')(alt='Texto que describa la imagen' style='width: 100%').m-auto.mb-3
          .tarjeta-hover-imagen__titulo.bg--3.text-white.p-3
            h5.text-center.mb-0 Uso de tapabocas
      .col-lg-4.mb-3
        .tarjeta-hover-imagen
          .tarjeta-hover-imagen__img: img(src='@/assets/curso/33.jpg')(alt='Texto que describa la imagen' style='width: 100%').m-auto.mb-3
          .tarjeta-hover-imagen__titulo.bg--3.text-white.p-3
            h5.text-center.mb-0 Ventilación
      .col-lg-4.mb-3
        .tarjeta-hover-imagen
          .tarjeta-hover-imagen__img: img(src='@/assets/curso/34.jpg')(alt='Texto que describa la imagen' style='width: 100%').m-auto.mb-3
          .tarjeta-hover-imagen__titulo.bg--3.text-white.p-3
            h5.text-center.mb-0 Limpieza y desinfección
      .col-lg-4.mb-3
        .tarjeta-hover-imagen
          .tarjeta-hover-imagen__img: img(src='@/assets/curso/35.jpg')(alt='Texto que describa la imagen' style='width: 100%').m-auto.mb-3
          .tarjeta-hover-imagen__titulo.bg--3.text-white.p-3
            h5.text-center.mb-0 Manejo de residuos
    p.mb-5 A continuación, se describirá cada una de estas, de acuerdo con los protocolos establecidos en las medidas de bioseguridad, posibilitando de esta forma la disminución del contagio del Covid-19, iniciando por <b>el lavado de manos</b>, el cual debe durar mínimo 20 a 30 segundos, y realizarse:
    .row.mb-.g-0
      .col-lg-5.bg--1-claro.p-0.mb-3
        Scroll
          

      .col-lg-7
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/36.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Después de entrar en contacto con superficies que puedan estar contaminadas: <b>pasamanos, cerraduras, manijas</b>.
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/37.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Antes y después de ir al baño. 
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/38.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Antes y después de comer.
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/39.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Cuando las manos estén visiblemente sucias. 
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/40.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Después de estornudar o toser.
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/41.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Antes y después de usar tapabocas.
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/42.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Antes de tocarse la cara, tocar o acariciar animales, recoger sus excretas o realizar el manejo de sus alimentos.
        .row.align-items-center.mb-2
          .col-4: img(src='@/assets/curso/43.svg')(alt='Texto que describa la imagen' ).m-auto.mb-3
          .col-8
            p.mb-0 Después de usar equipos para la toma de la huella dactilar. 
    p.mb-5 Otras disposiciones son:
    .row.mb-5
      .col-sm-6.col-xl-4.mb-3
        .tarjeta-flip.color-primario(style='min-height: 206px')(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/44.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center
              h5.text-center.mb-0 La higiene de manos con alcohol debe realizarse cuando las manos se encuentren limpias.   
      .col-sm-6.col-xl-4.mb-3
        .tarjeta-flip.color-primario(style='min-height: 206px')
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/45.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center
              h5.text-center.mb-0  Se deben disponer insumos para realizar la higiene de manos, como son: agua, jabón y toallas de un solo uso.  
      .col-sm-6.col-xl-4.mb-3
        .tarjeta-flip.color-primario(style='min-height: 206px')
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/46.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center
              h5.text-center.mb-0 Disponer de alcohol glicerinado en lugares de fácil acceso por parte de los trabajadores. 
      .col-sm-6.col-xl-4.mb-3
        .tarjeta-flip.color-primario(style='min-height: 206px')
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/47.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center
              h5.text-center.mb-0  Disponer de puntos para el lavado de manos en el lugar de trabajo. 
      .col-sm-6.col-xl-4.mb-3
        .tarjeta-flip.color-primario
          .tarjeta-flip__contenedor(style='min-height: 206px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/48.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center
              h5.text-center.mb-0  Instalar recordatorios de la técnica de lavado de manos. 
      .col-sm-6.col-xl-4.mb-3
        .tarjeta-flip.color-primario
          .tarjeta-flip__contenedor(style='min-height: 206px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/49.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.d-flex.align-items-center
              h5.text-center.mb-0  Limpiar y desinfectar los recipientes que almacenan el alcohol glicerinado.
    p.mb-5 En cuanto al distanciamiento físico entre las personas que se encuentran en el lugar de trabajo o en el entorno, debe ser mínimo de 1 metro, por lo tanto, se requiere: 
    .bg--2-claro.p-5.mb-5
      .row.align-items-center
        .col-lg-6(data-aos='fade-right')
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span.fw-900.text-big a
              | Insistir en la importancia de mantener el distanciamiento físico en los lugares donde se pueda mantener contacto con otras personas.
            li 
              .lista-ol--cuadro__vineta
                span.fw-900.text-big b
              | Evitar aglomeraciones en las áreas donde se desarrollan actividades, estableciendo estrategias de distanciamiento, por ejemplo: horarios de atención, turnos de operación, sistemas de reservas.
            li 
              .lista-ol--cuadro__vineta
                span.fw-900.text-big c
              | Mantenerse informado sobre las condiciones de uso, acceso y aforo de los distintos ambientes de trabajo.
              
        .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/50.svg')(alt='Texto que describa la imagen' )
    p.mb-5 El uso del <b>tapabocas</b> es una de las medidas más adecuadas para evitar el contagio, tanto por las gotículas que pueden expelerse al hablar, como por las que pueden recibirse en la interacción con otros. No se debe olvidar que su uso es obligatorio en el lugar de trabajo y se regula mediante el siguiente protocolo: 
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/51.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario.p-3(x="25%" y="10%" numero="")
        p En espacios cerrados, como medios de transporte masivos, es recomendable usar tapabocas quirúrgico.
      .tarjeta.color-primario.p-3(x="35%" y="7%" numero="")
        p El uso correcto del tapabocas es: cubriendo nariz y boca, y es importante retirarlo evitando el contacto con zonas contaminadas.
      .tarjeta.color-primario.p-3(x="26%" y="33%" numero="")
        p El tapabocas debe quitarse solamente para comer o beber. 
      .tarjeta.color-primario.p-3(x="38%" y="34%" numero="")
        p Se debe mantener en áreas visibles información alusiva a las técnicas de uso y disposición de este EPP.
      .tarjeta.color-primario.p-3(x="17%" y="50%" numero="")
        p No tocar el tapabocas durante su uso. Si debe hacerlo, lávese las manos antes y después de su manipulación.
      .tarjeta.color-primario.p-3(x="33%" y="53%" numero="")
        p El tapabocas se puede usar durante 8 horas, de manera continua.
      .tarjeta.color-primario.p-3(x="10%" y="56%" numero="")
        p Para retirar el tapabocas, se debe hacer desde las cintas o elásticos, no se debe tocar la parte externa.
      .tarjeta.color-primario.p-3(x="45%" y="56%" numero="")
        p Una vez se ha retirado el tapabocas, se debe doblar con la cara externa hacia adentro y depositarlo en la bolsa negra disponible para tal fin.
      .tarjeta.color-primario.p-3(x="20%" y="63%" numero="")
        p El tapabocas se debe mantener en su empaque original, no es recomendable guardarlos sin empaques.
    p.mb-5 Asimismo, la ventilación requiere de una serie de medidas de cuidado que deben estar presentes en los espacios cerrados:
    .bg--pasos.p-5.mb-5
      .row.justify-content-center
        .col-lg-8
          PasosA.color-acento-contenido.mb-5(tipo="n")
            div
              h4 Ventilación
              p Mantener puertas y ventanas abiertas para lograr intercambio de aire natural.
            div
              p Realizar las adaptaciones necesarias para garantizar una adecuada ventilación y evitar que haya grupos de personas en lugares de baja ventilación.
            div
              p Realizar la evaluación y adecuación de las condiciones de ventilación y aforo máximo de los lugares, con el fin de minimizar el riesgo de contagio.
            div
              p Mantener los grupos de trabajo separados en tiempo y lugar, favoreciendo el distanciamiento físico entre trabajadores de distintas áreas. 
            div
              p Realizar todas las actividades de bienestar que sean posibles en espacios abiertos y asegurando el distanciamiento físico. 
            div
              p Propiciar lugares de descanso al aire libre, como terrazas, patios abiertos o jardines. 
            div
              p En los lugares cerrados, se deben tener en cuenta las siguientes condiciones de ventilación y distanciamiento:
              ul.lista-ul--color
                li 
                  i.window-icon
                  | En lugares cálidos, además de la ventilación natural, deben usarse  ventiladores de   recirculación de aire.
                li 
                  i.window-icon
                  | En los entornos cerrados, con aire acondicionado, se debe revisar si existe recirculación de    aire y se puede complementar la ventilación existente con purificadores de aire portátiles, que incluyan sistemas de filtración mecánica para capturar las microgotículas en el aire.
            div
              p Garantizar la correcta circulación de aire. En caso de requerir sistema de ventilación artificial, se recomienda que el sistema trabaje en el modo de máxima renovación de aire y mínima recirculación.
            div
              p Tomar medidas para favorecer la circulación y recambio de aire en espacios cerrados o con escasa ventilación. 
            div
              p No es recomendable permanecer por largos periodos de tiempo en espacios cerrados, sin adecuada ventilación.
    p.mb-5 La <b>limpieza y desinfección</b> de los espacios compartidos es de especial cuidado, pues no se debe olvidar que las superficies son receptoras de gérmenes y, hasta el momento, no se ha descartado que el virus del Covid-19 pueda tener un periodo de vida prolongado sobre estas. Por esta razón, es necesario desarrollar o implementar un protocolo de limpieza en los lugares de trabajo, en el lugar dispuesto para la atención al público, recibo de proveedores y demás áreas que se requieran para el desarrollo de las actividades, definiendo el procedimiento, la frecuencia, los insumos y el personal responsable.
      br
      br
      |Se establecen las siguientes disposiciones:
    .tarjeta.tarjeta-slyder.bg--3-claro.p-4.mb-5
      SlyderE(indicadores="centro").p-5
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p Realizar limpieza y desinfección de manera frecuente de pisos, paredes, puertas, ventanas, divisiones, muebles, sillas, ascensores, y todos los elementos y espacios con los cuales las personas tienen contacto directo.
          .col-md-6
            figure
              img(src='@/assets/curso/52.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p Garantizar que el proceso de limpieza y desinfección se realice de manera segura y con los elementos necesarios, dependiendo de las áreas o de las zonas de desplazamiento y trabajo.
          .col-md-6
            figure
              img(src='@/assets/curso/53.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p Disponer de paños y uso de desinfectante que permitan la limpieza o desinfección de las áreas de contacto, por ejemplo, panel de control, equipos o elementos de uso general, como botones de ascensor o manijas. Es posible designar a una persona para encargarse de su manipulación entre cada persona que los utiliza.
          .col-md-6
            figure
              img(src='@/assets/curso/54.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p Desinfección de los medios de transporte antes y después de cada servicio/operación.
          .col-md-6
            figure
              img(src='@/assets/curso/55.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p Las áreas como pisos, baños, cocinas se deben lavar mínimo una vez al día, con detergente común, para luego desinfectar con productos recomendables, como hipoclorito de uso doméstico. Además, deben revisarse las recomendaciones de cada fabricante para realizar un proceso adecuado de limpieza.
          .col-md-6
            figure
              img(src='@/assets/curso/56.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-12.mb-4.mb-md-0
            p Realizar actividades de seguimiento y monitoreo a través de registros e inspecciones. 
            figure
              img(src='@/assets/curso/tabla.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p Realizar capacitación al personal de aseo y limpieza en relación con el protocolo de limpieza y desinfección definido.
          .col-md-6
            figure
              img(src='@/assets/curso/57.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p En el caso de contratar empresas especializadas para la limpieza y desinfección, estas deberán contar con un concepto sanitario favorable expedido por las secretarías de salud o quienes hagan sus veces. 
          .col-md-6
            figure
              img(src='@/assets/curso/58.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            p Realizar la limpieza y desinfección de equipos biométricos después de cada uso.
          .col-md-6
            figure
              img(src='@/assets/curso/59.png', alt='Texto que describa la imagen')
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-center.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/29.svg" alt="Adornos flotantes" style="width: 150px ; left: 5% ; top: -90% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-8
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-0 A continuación, en el siguiente enlace podrá visualizar el video "Limpieza y desinfección en domicilios", para conocer algunas recomendaciones de limpieza y desinfección diaria en las superficies que más se tocan:
                .col-sm-auto

                  a.boton.color-acento-contenido(href='https://www.youtube.com/watch?v=RUkbdiB8_10&feature=emb_title' target='_blank')
                    span.text-white Enlace
                    i.fas.fa-link.text-white
    //- figure.mb-5
    //-   .video
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/RUkbdiB8_10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    h3(data-aos='fade-right') Protocolo limpieza y desinfección 
    p.mb-5 La limpieza y desinfección de los espacios se realiza de la siguiente manera:
    figure.mb-5(data-aos='zoom-in-up')
      img(src='@/assets/curso/60.svg')
    p.mb-5 Por último, en cuanto al <b>manejo de residuos</b>, la aplicación del protocolo de bioseguridad ha establecido las siguientes disposiciones:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/61.svg', alt='Texto que describa la imagen')
      .tarjeta.color-secundario.p-3(x="25%" y="28%" numero="")
        p Se deben informar a los trabajadores las medidas correctas para la separación de residuos producto de la implementación de los protocolos de bioseguridad. 
      .tarjeta.color-secundario.p-3(x="38%" y="14%" numero="")
        p Ubicar contenedores y bolsas suficientes para la separación de residuos. 
      .tarjeta.color-secundario.p-3(x="50%" y="24%" numero="")
        p Efectuar la recolección permanente de residuos y garantizar su almacenamiento. 
      .tarjeta.color-secundario.p-3(x="60%" y="20%" numero="")
        p Realizar la limpieza y desinfección de contenedores. 
      .tarjeta.color-secundario.p-3(x="70%" y="18%" numero="")
        p Garantizar los EPP al personal que realiza esta actividad. 
      .tarjeta.color-secundario.p-3(x="67%" y="30%" numero="")
        p Realizar la limpieza y desinfección de los elementos de protección personal e insumos utilizados para el manejo de residuos. 
      .tarjeta.color-secundario.p-3(x="18%" y="60%" numero="")
        p Siempre que el personal a cargo de las labores de limpieza y desinfección termine sus labores, deberá realizar el procedimiento de higiene de manos.
      .tarjeta.color-secundario.p-3(x="78%" y="30%" numero="")
        p Los tapabocas y guantes deben ir separados en doble bolsa color negro, la cual no debe ser abierta por el personal que realiza el reciclaje de oficio. Además, deben ir separados de los residuos aprovechables, los cuales van en bolsa blanca.
    p.mb-5 Es comprensible que quiera conocer más sobre el protocolo de bioseguridad establecido para atender la contingencia sanitaria debida al Covid-19, por esta razón, se le invita a consultar los siguientes videos, que serán de ayuda y explicación, y se encuentran en el material complementario:
    h5.mb-4 “La higiene de manos”.
    .tarjeta-videos.p-5
      .row.mb-5.justify-content-center
        .col-lg-10
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/NMmAj1EKdVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 La ventilación es una de las medidas más prácticas y al alcance de todos, permite generar ambientes sanos y libres de virus. Esta información está a su disposición en el video <b>“Ventilación contra el COVID-19”</b>. 
    .tarjeta-videos.p-5
      .row.mb-5.justify-content-center
        .col-lg-10
          figure.mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/5wT5Pcq9IBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 A continuación, se encuentran las medidas que garantizan el cumplimiento de los protocolos de bioseguridad en el sector del transporte por parte de: 
    .row.mb-5.justify-content-center
      .col-lg-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/62.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center El usuario
      .col-lg-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/63.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center El vehículo
      .col-lg-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/64.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center Los paraderos
      .col-lg-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/65.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center Los conductores
      .col-lg-2.mb-3
        .tarjeta.bg--1-claro.p-4.h-100.hover-morado
          img(src='@/assets/curso/66.svg')(alt='Texto que describa la imagen' style='width: 101px').m-auto.mb-3
          h6.text-center La empresa
    p.mb-5 Estas medidas son adicionales a las disposiciones generales, las cuales se deben cumplir en todo momento.
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--1-acordeon")
      .row.p-4(titulo="Usuario")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Evitar interactuar con el conductor y demás pasajeros y evitar compartir objetos o elementos.
            li 
              i.fas.fa-angle-right
              | Cubrirse la nariz con el antebrazo o un pañuelo al estornudar o toser.
            li 
              i.fas.fa-angle-right
              | Evitar tocarse la cara cuando se encuentre a bordo de cualquier medio de transporte.

            li 
              i.fas.fa-angle-right
              | Tener un kit personal de desinfección.
            li 
              i.fas.fa-angle-right
              | Evitar consumir alimentos durante el viaje.
            li 
              i.fas.fa-angle-right
              | En caso de presentar síntomas relacionados con la Covid-19, procurar no salir de casa y llamar a la línea de atención de la EPS y seguir las recomendaciones. 
        .col-md-4
          figure
            img(src='@/assets/curso/66.jpg', alt='Texto que describa la imagen')
      .row.p-4(titulo="Medio de transporte")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Realizar desinfección y limpieza del vehículo antes y al final de la jornada de trabajo.  
            li 
              i.fas.fa-angle-right
              | Mantener las ventanas de los vehículos abiertas para la circulación de aire.  
            li 
              i.fas.fa-angle-right
              | Disponer de una papelera para residuos con bolsa negra.
            li 
              i.fas.fa-angle-right
              | Informar a las autoridades competentes el incumplimiento de alguna medida.
        .col-md-4
          figure
            img(src='@/assets/curso/67.jpg', alt='Texto que describa la imagen')
      .row.p-4(titulo="Paraderos o terminales")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Programar la limpieza y desinfección de paraderos y terminales con agua y jabón o desinfectantes.
            li 
              i.fas.fa-angle-right
              | Señalizar los puntos de distanciamiento en el piso. 
            li 
              i.fas.fa-angle-right
              | Hacer visibles piezas pedagógicas sobre distanciamiento y autocuidado.
        .col-md-4
          figure
            img(src='@/assets/curso/68.jpg', alt='Texto que describa la imagen')
      .row.p-4(titulo="Conductores")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Si presenta síntomas asociados a Covid, debe informarlo y abstenerse de laborar. 
            li 
              i.fas.fa-angle-right
              | Portar el kit de desinfección personal.  
            li 
              i.fas.fa-angle-right
              | Desinfectar la zona de trabajo después de cada viaje.
        .col-md-4
          figure
            img(src='@/assets/curso/69.jpg', alt='Texto que describa la imagen')
      .row.p-4(titulo="La empresa")
        .col-md-8.mb-4.mb-md-0
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Promover la realización del curso de bioseguridad – Covid-19 dispuesto por cada ARL. 
            li 
              i.fas.fa-angle-right
              | Evaluar diariamente la salud de los colaboradores que van a prestar el servicio. 
            li 
              i.fas.fa-angle-right
              | Promover al interior del medio de transporte las medidas de bioseguridad. 
        .col-md-4
          figure
            img(src='@/assets/curso/70.jpg', alt='Texto que describa la imagen')
    p.mb-5 Con relación a las disposiciones establecidas en cada uno de los modos de transporte, se ha determinado una serie de acciones de acuerdo con el tipo de transporte, trátese de transporte aéreo, terrestre, marítimo o fluvial. A continuación, se describirá cada una de estas:
    h3(data-aos='fade-right') Transporte aéreo
    p.mb-5 Incluye operadores de aeropuertos, aerolíneas y explotadores de aeronaves y pasajeros, los cuales deben mantener las siguientes disposiciones:
    .row.mb-5
      .col-lg-3
        .tarjeta-slide-up.mt-3.h-100(@mouseover="mostrarIndicador = false")
          .rounded-3.tarjeta-slide-up__titulo.bg--2.p-4
            .indicador--hover(v-if="mostrarIndicador")
            h2.mb-0.text-center 1
          .tarjeta-slide-up__content
            .contenido.pt-4.pb-0.px-3.mt-3
              img(src='@/assets/curso/71.png', alt='Texto que describa la imagen').m-auto.mb-3
              p Coordinar con las autoridades de policía y sanitaria el protocolo de Emergencia de Salud Pública de Importancia Internacional ESPII, especificando las actividades que permitan reducir el riesgo en el terminal.
      .col-lg-3
        .tarjeta-slide-up.mt-3.h-100
          .rounded-3.tarjeta-slide-up__titulo.bg--2.p-4
            h2.mb-0.text-center  2
          .tarjeta-slide-up__content
            .contenido.pt-4.pb-0.px-3.mt-3
              img(src='@/assets/curso/72.png', alt='Texto que describa la imagen').m-auto.mb-3
              p Coordinar que se cumpla cualquier medida que imponga la autoridad sanitaria.
      .col-lg-3
        .tarjeta-slide-up.mt-3.h-100
          .rounded-3.tarjeta-slide-up__titulo.bg--2.p-4
            h2.mb-0.text-center  3
          .tarjeta-slide-up__content
            .contenido.pt-4.pb-0.px-3.mt-3
              img(src='@/assets/curso/73.png', alt='Texto que describa la imagen').m-auto.mb-3
              p Controlar que el acceso al terminal aeroportuario por parte de los pasajeros sea máximo dos horas antes de la hora prevista para la salida del vuelo nacional o tres para vuelos internacionales.
      .col-lg-3
        .tarjeta-slide-up.mt-3.h-100
          .rounded-3.tarjeta-slide-up__titulo.bg--2.p-4
            h2.mb-0.text-center  4
          .tarjeta-slide-up__content
            .contenido.pt-4.pb-0.px-3.mt-3
              img(src='@/assets/curso/74.png', alt='Texto que describa la imagen').m-auto.mb-3
              p Acordar con la autoridad aeronáutica la cantidad de puertas de acceso habilitadas, y disponer de personal de seguridad en cada una de ellas.
    p.mb-5 Si se trata de aerolíneas y explotadores de aeronaves, se debe dar cumplimiento a las siguientes disposiciones antes del vuelo, para dar acatamiento al protocolo de bioseguridad:
    .tarjeta.bg--2-claro.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)     
        .row(titulo="1")
          .col-md-5
            figure
              img(src='@/assets/curso/75.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            p Informar a los pasajeros internacionales que deben diligenciar en su totalidad el formulario de pre check-in migratorio, dispuesto en la aplicación "Check-Mig”, ya sea para adelantar el proceso de salida o ingreso al territorio nacional.
        .row(titulo="2")
          .col-md-5
            figure
              img(src='@/assets/curso/76.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            p Informar a los viajeros nacionales e internacionales, en el momento de la compra del tiquete, en sus páginas web u otros medios de comunicación, el uso correcto y obligatorio de tapabocas quirúrgico.
        .row(titulo="3")
          .col-md-5
            figure
              img(src='@/assets/curso/77.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            p Realizar el abordaje desde atrás hacia adelante y desde las ventanillas hacia los pasillos. Si la aeronave es de fuselaje ancho, los asientos del grupo central irán embarcando desde el centro hacia los pasillos.
        .row(titulo="4")
          .col-md-5
            figure
              img(src='@/assets/curso/78.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            p Realizar anuncios en la sala de abordaje a los pasajeros indicando la necesidad de mantener el distanciamiento físico de 1 metro.
        .row(titulo="5")
          .col-md-5
            figure
              img(src='@/assets/curso/79.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            p Para aeronaves presurizadas, el sistema de ambientación de las aeronaves debe estar provisto con filtros de alta eficiencia (HEPA) y/o el sistema de control ambiental (ECS) o su equivalente de acuerdo con la denominación de cada fabricante, y debe garantizar, al menos, la recirculación total del aire en intervalos de 5 a 7 minutos. En caso de que la aeronave no cuente con estas alternativas, el distanciamiento físico dentro de la aeronave es obligatorio.
        .row(titulo="6")
          .col-md-5
            figure
              img(src='@/assets/curso/80.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            p Impedir el abordaje a pasajeros nacionales o internacionales que presenten síntomas asociados con Covid-19, que sean contacto estrecho de un caso positivo de Covid-19, o que hayan sido diagnosticados positivo para Covid-19 en los últimos 14 días.
    p.mb-5 Así como existen disposiciones antes del vuelo, también hay disposiciones que deben acatarse durante el vuelo, estas son:
    .row.mb-5.justify-content-center(data-aos='zoom-in-up')
      .col-lg-8
        img(src='@/assets/curso/81.svg', alt='Texto que describa la imagen')
    p.mb-5 En relación con los pasajeros, se requiere tener en cuenta las disposiciones y recomendaciones establecidas por las aerolíneas, y de estricto cumplimiento, las cuales son:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/82.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-secundario.p-3(x="28%" y="17%" numero="")
        p Usar en todo momento el tapabocas.
      .tarjeta.color-secundario.p-3(x="45%" y="10%" numero="")
        p Permanecer, en la medida de lo posible, en silencio en el aeropuerto y al interior de la aeronave.
      .tarjeta.color-secundario.p-3(x="60%" y="17%" numero="")
        p Notificar de manera inmediata a la tripulación de cabina si durante el vuelo algún pasajero presenta alguno de estos síntomas: tos, dificultad respiratoria, dolor de garganta, o fatiga.
      .tarjeta.color-secundario.p-3(x="50%" y="30%" numero="")
        p Permanecer sentados hasta que la tripulación de cabina les autorice el desembarque.
      .tarjeta.color-secundario.p-3(x="20%" y="48%" numero="")
        p Reportar a la aerolínea si durante los 14 días posteriores a su vuelo presenta síntomas que coincidan con Covid-19.
      .tarjeta.color-secundario.p-3(x="29%" y="70%" numero="")
        p Evitar consumir alimentos en la aeronave. En trayectos de más de dos (2) horas, en los que se preste servicio a bordo, los pasajeros deberán consumir los alimentos en el orden de entrega.
      .tarjeta.color-secundario.p-3(x="43%" y="74%" numero="")
        p Conocer y cumplir con todos los requisitos sanitarios exigidos por Colombia o por el país de destino.
      .tarjeta.color-secundario.p-3(x="60%" y="70%" numero="")
        p Los pasajeros internacionales están obligados a dar información real sobre su estado de salud, su procedencia, su contacto reciente con casos sospechosos o confirmados de Covid-19, y a cumplir con las indicaciones de las autoridades sanitarias, asimismo, a dar información exacta y precisa de su teléfono y dirección en Colombia.
    h3(data-aos='fade-right') Transporte terrestre 
    p.mb-5 Con relación al transporte por tierra, se debe dar cumplimiento a las siguientes disposiciones:
    .row
      .col-lg-6.mb-3
        .tarjetas-borde.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/83.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Implementar medidas para regular el acceso de pasajeros a los portales, taquillas y vehículos, y organizar filas con distancia entre personas de mínimo 1 metro.
      .col-lg-6.mb-3
        .tarjetas-borde.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/84.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Planificar las rutas. Para aquellos recorridos de larga distancia, se deberán identificar previamente los lugares en los cuales se podrán realizar paradas, cada tres (3) horas, durante el recorrido, para surtir combustible o hacer uso de baños, y asegurarse que estos están dotados de manera constante y suficiente de papel higiénico y agua potable, dispensador de jabón antibacterial y toallas desechables para el lavado de manos.
    .row
      .col-lg-6.mb-3
        .tarjetas-borde.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/85.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Permitir el acceso a la terminal de transporte terrestre de pasajeros exclusivamente al usuario de transporte, salvo aquella persona que por su condición requiera de acompañante.
      .col-lg-6.mb-3
        .tarjetas-borde.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/86.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Para el servicio de transporte público terrestre de pasajeros, el grupo familiar podrá movilizarse en un mismo vehículo sin guardar distanciamiento entre ellos, siempre y cuando se garantice la distancia de por lo menos un metro con el conductor del respectivo vehículo.
    .row
      .col-lg-6.mb-3
        .tarjetas-borde.d-flex.align-items-center.p-4
          img(src='@/assets/curso/87.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Mantener adecuada ventilación, dejando abiertas las ventanas de los vehículos, y en los trayectos largos, los sistemas de aire acondicionado deben tener sistemas de filtrado y con mínima recirculación, de manera que se permita que el aire se renueve cada 15 minutos.
      .col-lg-6.mb-3
        .tarjetas-borde.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/88.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Mientras el motor esté en marcha, encender el sistema de calefacción, ventilación y aire acondicionado, y mantener abiertas las ventanas, de ser posible.
    .row
      .col-lg-6.mb-3
        .tarjetas-borde.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/89.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Hacer mantenimiento preventivo y correctivo de los filtros del sistema de calefacción, ventilación y aire acondicionado del vehículo, de acuerdo con las indicaciones del fabricante.
      .col-lg-6.mb-3
        .tarjetas-borde.tarjetas-borde3.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/90.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 No consumir alimentos ni bebidas al interior de los vehículos durante los trayectos.
    .row.mb-lg-5
      .col-lg-6.mb-3
        .tarjetas-borde2.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/91.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 
            b Guardar silencio: 
            | no hablar con otras personas, por teléfono ni cantar.
      .col-lg-6.mb-3
        .tarjetas-borde2.d-flex.align-items-center.p-4.h-100
          img(src='@/assets/curso/92.svg' style='width: 20%')
          p(style='width: 80%').ms-3.mb-0 Utilizar preferiblemente medios electrónicos para realizar el pago del servicio de transporte o la recarga de su tarjeta de transporte.
    h3(data-aos='fade-right') Transporte marítimo y transporte fluvial
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        p Para estas modalidades de transporte, la Superintendencia de Transporte informó los lineamientos y acciones preventivas que deben adoptar las Sociedades Portuarias Marítimas y las Sociedades Portuarias Fluviales ante el Covid-19, donde se recomienda que estas zonas apliquen el protocolo establecido por la resolución 850 de 2017 del Ministerio de Transporte, con el fin de facilitar la aplicación del Reglamento Sanitario Internacional.
          br
          br
          |Adicionalmente a las disposiciones establecidas en la Resolución 859 de 2017, se recomienda seguir todas las medidas generales vistas a lo largo del curso, las cuales se implementan de igual manera para esta modalidad de transporte.
      .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/93.png')
    p.mb-5 Además, todos los medios de transporte, en relación con las actividades preventivas como alternativa de organización laboral, deben guardar los mismos lineamientos, los cuales son:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor(style='height: 460px')
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/96.png')})`}")
            .tarjeta-flip__contenido.d-flex.align-items-center.p-4.p-xl-5
              h5.text-center Organizar el trabajo de modo que se reduzca el número de trabajadores expuestos.
      .tarjeta.tarjeta-flip.color-secundario
          .tarjeta-flip__contenedor(style='height: 460px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/97.png')})`}")
            .tarjeta-flip__contenido.d-flex.align-items-center.p-4.p-xl-5
              h5.text-center Implementar jornadas flexibles o turnos de entrada y salida a lo largo del día y otras estrategias para evitar aglomeraciones de los trabajadores en el ingreso y la salida, en los centros de trabajo.
      .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor(style='height: 460px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/98.png')})`}")
            .tarjeta-flip__contenido.d-flex.align-items-center.p-4.p-xl-5
              h5.text-center.text-white Coordinar con las Administradoras de Riesgos Laborales - ARL la implementación de las medidas de bioseguridad y autocuidado. 
      .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor(style='height: 460px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/99.png')})`}")
            .tarjeta-flip__contenido.d-flex.align-items-center.p-4.p-xl-5
              h5.text-center Aislar a los empleados que sean sospechosos, desde el comienzo de síntomas, o desde que sean identificados como contactos estrechos, hasta tener una prueba negativa.
      .tarjeta.tarjeta-flip.color-secundario
          .tarjeta-flip__contenedor(style='height: 460px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/100.png')})`}")
            .tarjeta-flip__contenido.d-flex.align-items-center.p-4.p-xl-5
              h5.text-center El empleador debe notificar a la ARL sobre los casos sospechosos y confirmados identificados en su empresa.
      .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor.h-100(style='height: 460px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/avatar.svg')})`}")
            .tarjeta-flip__contenido.d-flex.align-items-center.p-4.p-xl-5
              h5.text-center 
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Implementación  
    .row.mb-5.align-items-center
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/94.png')
      .col-lg-6(data-aos='fade-left')
        p La educación y el entrenamiento del personal representan un importante componente de la aplicación de los protocolos de bioseguridad. Los trabajadores deben recibir información precisa y clara frente al riesgo por Covid-19 en su entorno laboral y las acciones necesarias para prevenirlo.
          br
          br
          |Es importante divulgar campañas a través de diferentes medios de comunicación que se tengan disponibles en la empresa, en las que se mantenga al día a los trabajadores sobre la información alusiva a la Covid-19 y los diferentes protocolos de bioseguridad que se han implementado.
    p.mb-5 Se requiere desarrollar un plan de comunicación que incluya:
    figure(data-aos='zoom-in-up'): img(src='@/assets/curso/95.svg')

























</template>

<script>
import BannerInterno from '../components/BannerInterno'
import Scroll from '../components/Scroll.vue'
export default {
  name: 'Tema2',
  components: {
    Scroll,
    BannerInterno,
  },
  data: () => ({
    mostrarIndicador: true,
    indicadorTarjetaFlip: true,
    indicadorScroll: true,
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

<style lang="sass">
.acordion__activo
  background-color: #FFF3C9
.color--4
  color: $color-acento-botones !important
.tarjeta-hover-imagen
  position: relative
  overflow: hidden
  &:hover
    .tarjeta-hover-imagen__img
      transform: scale(1.1)
  &__titulo
    position: absolute
    bottom: 0
    width: 100%
  &__img
    transition: transform 0.3s ease-in-out
.window-icon:before
  content: url(../assets/curso/window-icon.svg)
  width: 30px
  height: 30px
.tarjeta-slide-up
  position: relative
  &:hover
    .tarjeta-slide-up__content
      animation: height 0.3s ease-in-out both
      height: 100%
      opacity: 1
    .tarjeta-slide-up__titulo
      background-color: $color-primario !important
  .tarjeta-slide-up__titulo
    position: absolute
    top: -10%
    width: 100%
    z-index: 1
    transition: background-color 0.3s ease-in-out
  &__content
    border-radius: 0px 0px 10px 10px
    border: 1px solid $color-primario
    width: 100%
    height: 0%
    opacity: 0
    overflow: hidden
    transition: height, opacity 0.3s ease-in-out
@keyframe height
  0%
    height: 0%
  100%
    height: 100%
.tarjetas-borde
  border-top: 3px solid #AFAFAF
.tarjetas-borde2
  border-top: 3px solid #AFAFAF
  border-bottom: 3px solid #AFAFAF
  @media (max-width: $bp-max-md)
    &:last-child
      border-top: 0px solid #AFAFAF
      border-bottom: 3px solid #AFAFAF
.tarjetas-borde3
  @media (max-width: $bp-max-md)
    border-bottom: 3px solid #AFAFAF
.slyder-f__btn

  .fas.fa-chevron-right:before
    content: url(../assets/curso/flecha-derecha.svg) !important
  .fas.fa-chevron-left:before
    content: url(../assets/curso/flecha-izquierda.svg) !important
.cajon-b.abajo-derecha:before
  top: 67%
  left: 56%
  right: 0
  bottom: 0
</style>
