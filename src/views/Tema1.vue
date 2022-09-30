<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ingeniería de requisitos
    
    p El término #[strong IR “ingeniería de requisitos”] ha surgido para englobar los procesos de desarrollo y gestión de requisitos en el ciclo de vida del #[i software], el primer término (ingeniería) se enfoca en las actividades de obtención, análisis, especificación y validación de los requisitos que permitirá alcanzar los objetivos del negocio y el segundo (requisitos), está centrado en la administración de los mismos y tiene como propósito central la gestión de los cambios y la trazabilidad, de esta forma la IR proporciona el mecanismo apropiado para:

    
    .row.justify-content-start.BGR02.mb-5
      .col-11
        .row.align-items-center.justify-content-center
          .col-md-5.col-8.mb-md-0.mb-4.px-0(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img01.png')
          .col-md-7.p-4
            ul.lista-ul--color
              li
                <i class="fas fa-circle" style="color:#FC8116"></i>
                | Entender lo que el cliente quiere.
              li
                <i class="fas fa-circle" style="color:#FC8116"></i>
                | Analizar las necesidades.
              li
                <i class="fas fa-circle" style="color:#FC8116"></i>
                | Evaluar la factibilidad.
              li
                <i class="fas fa-circle" style="color:#FC8116"></i>
                | Negociar una solución razonable.
              li
                <i class="fas fa-circle" style="color:#FC8116"></i>
                | Especificar la solución sin ambigüedades.
              li
                <i class="fas fa-circle" style="color:#FC8116"></i>
                | Validar la especificación.
              li
                <i class="fas fa-circle" style="color:#FC8116"></i>
                p.mb-0 Administrar los requisitos y conforme a estos se transforman en un sistema operacional. 
      .col-md-1.col-2(data-aos="fade-left")
        img(src='@/assets/curso/temas/img02.png')

    p Las siguientes son definiciones de ingeniería de requisitos de algunos autores, las cuales también son válidas y se utilizan en diferentes sectores:

    .row.justify-content-center
      .col-md-6.col-10.mb-md-0.mb-4(data-aos="fade-right")
        .bloque-texto-c.BG03.p-4
          i.fas.fa-quote-right
          p Ingeniería de requisitos es la disciplina para desarrollar una especificación completa, consistente y no ambigua, la cual servirá como base para acuerdos comunes entre todas las partes involucradas y en donde se describen las funciones que realizará el sistema.
          .h4.mb-0 - (Boehm, 1979).
      .col-md-6.col-10.mb-md-0.mb-4(data-aos="fade-left")
        .bloque-texto-c.BG03.p-4
          i.fas.fa-quote-right
          p.mb-5 La ingeniería de requisitos es el proceso de estudiar las necesidades del usuario para llegar a una definición de requisitos del sistema, <em>hardware</em> o <em>software</em>. 
          .h4.mb-0 - (Durán, 2000).

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1	Etapas de la ingeniería de requisitos
    
    p Hay cuatro etapas en un proceso típico de ingeniería de requisitos utilizadas para el desarrollo de un producto único, que son: elicitación, análisis, especificación y validación de los requisitos.  
    p El siguiente gráfico conlleva a conocer las etapas mencionadas:

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img02.svg')
      div(x="20%" y="38%" tooltip="Elicitación" numero="+")
        .row.mb-4
          .col-auto.BG04.p-2
            p.mb-0.mx-4 Elicitación
        p Actividad involucrada en el descubrimiento de los requisitos del sistema. Aquí, los analistas deben trabajar junto al cliente para descubrir el problema que el sistema debe resolver, los diferentes servicios que el sistema debe prestar y las restricciones que se pueden presentar. 
        p Uno de los principales objetivos que se deben alcanzar es:
        .h4 “Descubrir necesidades reales entre clientes y usuarios, haciendo énfasis en aquellas que la mayor parte de las veces se asumen y toman por implícitas”.
      div(x="20%" y="66%" tooltip="Análisis" numero="+")
        .row.mb-4
          .col-auto.BG04.p-2
            p.mb-0.mx-4 Análisis
        p Sobre la base de la obtención realizada previamente comienza esta fase, la cual tiene como propósito descubrir problemas con los requisitos del sistema identificados hasta el momento.
        p En esta fase el analista proporciona un sistema de retroalimentación que refina el entendimiento que obtuvo el analista en la etapa de obtención.
      div(x="80%" y="38%" tooltip="Validación" numero="+")
        .row.mb-4
          .col-auto.BG04.p-2
            p.mb-0.mx-4 Validación
        p Por último, la validación garantiza que los requisitos una vez analizados y resueltos los posibles conflictos correspondan realmente a las necesidades de los clientes y los usuarios, de forma que se evite, a pesar de que el producto final sea técnicamente correcto, que no sea satisfactorio. 
        p La validación puede llevar al analista a reescribir algunas especificaciones de requisitos, en otros casos a obtener nuevos productos de la aparición de necesidades que hasta entonces estaban ocultas, para volver a evaluar el análisis inicial o para corregir y perfeccionar el conjunto de requisitos documentados.
      div(x="80%" y="66%" tooltip="Especificación" numero="+")
        .row.mb-4
          .col-auto.BG04.p-2
            p.mb-0.mx-4 Especificación
        p En esta fase se documentan los requisitos acordados con el cliente, en un nivel apropiado de detalle. En la práctica, esta etapa se va realizando conjuntamente con el análisis, se puede decir que la especificación es el "pasar en limpio" el análisis realizado previamente aplicando técnicas y/o estándares de documentación, como la notación UML (Lenguaje de modelado unificado), que es un estándar para el modelado orientado a objetos, por lo que los casos de uso y la obtención de requisitos basada en casos de uso se utiliza cada vez más para la obtención de requisitos.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2	Técnicas de modelado

    p.mb-5 Para estas técnicas se crea y desarrolla el uso de algoritmos (secuencias de instrucciones para solucionar problemas específicos).

    .row.justify-content-center.mb-4
      .col-md-10.BGR05.p-4.mb-4
        .row.justify-content-around.align-items-center
          .col-lg-2.col-sm-2.col-3(data-aos="fade-right")
            figure
              img.w-50(src="@/assets/curso/tema1/img03.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 A través del siguiente video podrá conocer qué son los algoritmos y cómo estos aprenden de nosotros.
              .col-sm-auto(data-aos="fade-left")
                a.boton.color-acento-botones(href="https://www.youtube.com/embed/RSJrBEhdZxw" target="_blank")
                  span Ver video 
                  i.fab.fa-youtube
      .col-md-10
        p Puede usar un algoritmo concreto para crear ese tipo de modelo. Hay tres clases principales de técnicas de modelado; IBM®, SPSS y Modeler que ofrece varios ejemplos de cada uno:

      .BG03.p-4.mb-4(data-aos="zoom-in")
        SlyderB.mb-5(:datos="datosSlyder")

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2  1.3	Ingeniería de #[i software]
    
    p Es una disciplina que se ocupa de todos los aspectos de la producción de #[i software], desde las primeras etapas de la especificación del sistema hasta el mantenimiento del mismo, incluyendo la parte técnica del desarrollo como, por ejemplo, la gestión del proyecto, las herramientas de desarrollo, los métodos y teorías para soportar esa producción de #[i software]. También se contiene el ciclo de vida, como cuando se habla de las primeras etapas en que el #[i software] ha entrado en uso, hasta cuando se orienta para retirarlo de funcionamiento, siendo la aplicación práctica del conocimiento científico orientado al diseño, la construcción, la remodelación y la eliminación de programas de computadora.

    .row.justify-content-center
      .col-md-10
        .bloque-texto-a.color-primario.p-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.col-8.mb-lg-0(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img07.png")
            .col-lg-8(data-aos="fade-left")
              .bloque-texto-a__texto.p-4
                p.mb-0 El proceso de ingeniería de #[i software] es la aplicación de un enfoque sistemático, disciplinado y cuantificable para el desarrollo de la operación y mantenimiento de los programas computacionales, lo importante es tratar de lidiar con la complejidad y los cambios al mismo tiempo; para desarrollar un #[i software] se tiene un presupuesto y un tiempo determinado para hacer un producto, articulando con conceptos de calidad y ayudando a la producción del #[i software] con las técnicas metodológicas para obtener resultados unificados bajo un mismo enfoque.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Modelos supervisados',
        texto:
          'Utilizan los valores de uno o varios campos de entrada para predecir el valor de uno o varios resultados o campos de destino. <br><br>Algunos ejemplos de estas técnicas son: árboles de decisiones (árbol C&R, QUEST, CHAID y algoritmos C5.0), regresión (lineal, logística, lineal generalizada y algoritmos de regresión de Cox), redes neuronales, máquinas de vectores de soporte y redes bayesianas.',
        imagen: require('@/assets/curso/tema1/img04.jpg'),
      },
      {
        titulo: 'Modelos de asociación',
        texto:
          'Encuentran patrones en los datos en los que una o más entidades (como eventos, compras o atributos) se asocian con una o más entidades. Los modelos construyen conjuntos de reglas que definen estas relaciones. Aquí los campos de los datos pueden funcionar como entradas y destinos.<br><br>Podría encontrar estas asociaciones manualmente; pero los algoritmos de reglas de asociaciones lo hacen mucho más rápido, y pueden explorar patrones más complejos.<br><br>Los modelos Apriori y Carma son ejemplos del uso de estos algoritmos. Otro tipo de modelo de asociación es el modelo de detección de secuencias, que encuentra patrones secuenciales en datos estructurados temporalmente.',
        imagen: require('@/assets/curso/tema1/img05.jpg'),
      },
      {
        titulo: 'Modelos de segmentación',
        texto:
          'Dividen los datos en segmentos o <em>clúster</em> de registros que tienen patrones similares de campos de entrada. Como solo se interesan por los campos de entrada, los modelos de segmentación no contemplan el concepto de campos de salida o destino. Ejemplos de modelos de segmentación son las redes Kohonen, la agrupación en <em>clúster</em> de K-medias, la agrupación en <em>clúster</em> en dos pasos y la detección de anomalías.',
        imagen: require('@/assets/curso/tema1/img06.jpg'),
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
