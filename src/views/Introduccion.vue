<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p Uno de los aspectos fundamentales en la era de la tecnología corresponde al uso adecuado de la información y manejo de los datos a través de redes informáticas, es por ello que resulta relevante comprender los aspectos y principios básicos de la seguridad de la información, como una práctica necesaria en defensa y protección de los datos y dispositivos informáticos de ataques, espionaje y robo de datos. 

    
    .row.justify-content-center.align-items-end.BGR01.mb-5
      .col-md-1.col-2.order-1(data-aos="fade-right")
        img(src='@/assets/curso/temas/img01.png')
      .col-md-7.order-md-2.order-3.py-4
        p De igual forma, se establecerá a través del presente material formativo los requerimientos, normas y estándares internacionales más utilizados y recomendados en el modelamiento de la información y su ingeniera de datos a través de algoritmos, trabajando de manera articulada con los derechos de autor, las políticas de propiedad intelectual, basados en la normatividad colombiana para la administración de la misma. 
        p A continuación y para dar inicio al componente formativo “#[strong Evaluación y optimización de los datos que integran la información]”, se invita a ver el siguiente video:
        .h4 ¡Bienvenidos!
      .col-md-4.col-8.order-md-3.order-2.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/img03.png')

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/EIMV59SlNf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
