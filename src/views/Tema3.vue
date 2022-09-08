<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Derechos de autor
    
    p Es la rama de la propiedad intelectual que reconoce en cabeza de los autores ciertas prerrogativas morales y patrimoniales sobre sus obras artísticas y literarias, que sean originales y susceptibles de ser divulgadas o reproducidas por cualquier medio. 
    p.mb-5 Los derechos conexos, por otro lado, son aquellos derechos reconocidos a los artistas, intérpretes o ejecutantes por los productores de fonogramas y los organismos de radiodifusión sobre sus interpretaciones, fonogramas o emisiones de radiodifusión. 
      span.etiqueta #[strong La regulación del derecho de autor y los derechos conexos se encuentra principalmente en la Ley 23 de 1982 y la Decisión Andina 351 de 1993].

    p.text-center Colombia se rige por la normatividad establecida en la Ley 23 de 1982,sobre los derechos de autor, en la cual se indica: 

    .row.justify-content-center.mb-4
      .col-md-10.BGR03.p-4(data-aos="zoom-in")
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-5.col-10.mb-md-0.mb-4
              img(src='@/assets/curso/tema3/img01.png')
            .col-md-5
              .h4 Art. 1º.
              p Los autores de obras literarias, científicas y artísticas gozarán de protección para sus obras.
          .row.justify-content-center.align-items-center
            .col-md-5.col-10.mb-md-0.mb-4
              img(src='@/assets/curso/tema3/img02.png')
            .col-md-5
              .h4 Art. 2º.
              p Los derechos del autor recaen sobre las obras científicas, literarias y artísticas, las cuales comprenden todas las creaciones del espíritu en el campo científico, literario y artístico, cualquiera que sea el modo o forma de expresión y cualquiera que sea su destinación.  
          .row.justify-content-center.align-items-center
            .col-md-5.col-10.mb-md-0.mb-4
              img(src='@/assets/curso/tema3/img03.png')
            .col-md-5
              p Al hilo de lo anterior, el término derecho de autor, tal y como se contempla hoy en la legislación y en las normas internacionales sobre la materia, comprendería fundamentalmente dos aspectos:
              ul.lista-ul--color
                li
                  <i class="fas fa-dot-circle" style="color:#FC8116"></i>
                  | El aspecto patrimonial.
                li
                  <i class="fas fa-dot-circle" style="color:#FC8116"></i>
                  | El aspecto moral.
          .row.justify-content-center.align-items-center
            .col-md-5.col-10.mb-md-0.mb-4
              img(src='@/assets/curso/tema3/img04.png')
            .col-md-5
              p Combinando estos dos aspectos, se puede decir que el derecho de autor es aquella facultad que tiene una persona para el disfrute y explotación económica de una obra literaria, artística o científica, creada por el mismo, así como el derecho a decidir sobre su divulgación, sobre el respeto a su integridad y sobre las demás consecuencias inherentes a la paternidad de esta.
          .row.justify-content-center.align-items-center
            .col-md-5.col-10.mb-md-0.mb-4
              img(src='@/assets/curso/tema3/img05.png')
            .col-md-5
              p Aunque el derecho de autor es inescindible (no se puede dividir), tiene un contenido plural de facultades:
              ul.lista-ul--color
                li
                  <i class="fas fa-dot-circle" style="color:#FC8116"></i>
                  | Las patrimoniales y las personales. 
                
    p En el derecho de autor la ley protege al autor de la obra, declarando a favor de este el derecho que posee. En cambio, en el sistema de #[i copyright], la ley va a proteger al autor una vez que este cumpla con una serie de formalidades establecidas por esta para tal fin.

    .row.justify-content-start.BGR02-1.mb-5(data-aos="fade-left")
      .col-md-1.col-2
        img(src='@/assets/curso/temas/img04.png')
      .col-md-11.col-10
        .row.align-items-end
          .col-11.p-4
            .row.justify-content-center
              .col-md-8.order-md-1.order-2
                p En este orden de ideas, como segundo momento se encuentra el #[i copyright] principalmente. No obstante, es una mezcla de ambos, debido a que protege los derechos morales, que son los que le confieren al autor la paternidad y la integridad de la obra como suya, mientras que en el sistema de #[i copyright] se ha delegado a los tribunales que intervienen en el derecho moral.
                p.mb-0 El derecho de autor es esencialmente individualista, sosteniendo a este como un derecho personal e inalienable del autor, persona física para controlar el uso de las obras de creación.
              .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4
                img(src='@/assets/curso/tema3/img06.png')
          .col-1
            img(src='@/assets/curso/temas/img05.png')

    p Para la comprensión de los derechos de autor es necesario tener en cuenta:

    TabsB.color-acento-contenido.mb-5
      .row.BG01.justify-content-center.py-4.py-md-5(titulo="Características derechos de autor" :icono="require('@/assets/curso/tema3/img07.png')")
        .col-md-6.order-md-1.order-2
          h4 Características derechos de autor
          ul.lista-ul--color.c--4
            li 
              i.vineta
              | El derecho de autor no es un derecho primordial, como sí lo es el derecho a la protección de datos de carácter personal.
            li 
              i.vineta
              | Es un derecho de propiedad y de exclusividad, ya que configura una distinción sobre una obra concreta.
        .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img09.png')
      .row.BG01.justify-content-center.py-4.py-md-5(titulo="Independientes y compatibles" :icono="require('@/assets/curso/tema3/img07.png')")
        .col-md-6.order-md-1.order-2
          h4 Independientes y compatibles
          ul.lista-ul--color.c--4
            li 
              i.vineta
              | La propiedad y otros derechos que tengan por objeto la cosa material a la que está incorporada la creación intelectual. 
            li 
              i.vineta
              | Los derechos de propiedad industrial que puedan existir sobre la obra.
        .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img10.png')
      .row.BG01.justify-content-center.py-4.py-md-5(titulo="¿Qué tipo de obras protege el Derecho de Autor?" :icono="require('@/assets/curso/tema3/img07.png')")
        .col-md-6.order-md-1.order-2
          .row.justify-content-center
            .col-md-6.mb-md-0
              ul.lista-ul--color.c--4
                li 
                  i.vineta
                  | Literarias
                li 
                  i.vineta
                  | Musicales, con o sin letra
                li 
                  i.vineta
                  | Dramáticas
                li 
                  i.vineta
                  | Danza
                li 
                  i.vineta
                  | Pictóricas o de dibujo
                li 
                  i.vineta
                  | Escultóricas y de carácter plástico
                li 
                  i.vineta
                  | Caricatura e historieta
                li 
                  i.vineta
                  p.mb-0 Arquitectónicas
            .col-md-6.mb-md-0.mb-4
              ul.lista-ul--color.c--4
                li 
                  i.vineta
                  | Cinematográficas y audiovisuales
                li 
                  i.vineta
                  | Programas de radio y TV
                li 
                  i.vineta
                  | Programas de cómputo
                li 
                  i.vineta
                  | Fotográficas
                li 
                  i.vineta
                  |  Obras de compilación. 
                li 
                  i.vineta
                  | Obras de arte aplicado 
                li 
                  i.vineta
                  p.mb-0 (incluyen diseño gráfico o textil)
          p.mb-0 Todas aquellas que por su analogía se logren incluir en la rama afín a su naturaleza.
        .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4
          img(src='@/assets/curso/tema3/img11.png')

    p Con el ánimo de que pueda comprender de manera integral los principios y el concepto de los derechos de autor se sugiere revisar el siguiente video:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uKZZxlT4F5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-4
      .col-md-10.BGR05.p-4.mb-4
        .row.justify-content-around.align-items-center
          .col-lg-2.col-sm-2.col-3(data-aos="fade-right")
            img.w-75(src="@/assets/curso/tema3/img12.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Para ampliar el tema sobre derechos de autor se invita a leer el documento de la Organización Mundial de la Propiedad Intelectual OMPI, denominado “#[strong Principios básicos del derecho de autor y los derechos conexos]”.
              .col-sm-auto(data-aos="fade-left")
                a.boton.color-acento-botones(href="https://www.wipo.int/edocs/pubdocs/es/wipo_pub_909_2016.pdf" target="_blank")
                  span Descargar  
                  i.fas.fa-file-download
    separador
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Protección de la propiedad intelectual

    .row.justify-content-center.mb-4
      .col-md-8.order-md-1.order-2
        p Refiere a la protección de las creaciones del intelecto, partiendo de las obras de arte hasta las invenciones, los programas informáticos, las marcas y otros signos comerciales de acuerdo con la definición de la Organización Mundial de la Propiedad Intelectual OMPI (2021), apoyándose su conceptualización con el Artículo 27 de la Declaración Universal de los Derechos Humanos; en el mundo actualmente se cuenta con 25 tratados internacionales de protección de la propiedad intelectual.
        .row.justify-content-around.align-items-center.BGR05.p-4
          .col-lg-2.col-sm-2.col-3(data-aos="fade-right")
            img(src="@/assets/curso/tema3/img13.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-0 Conozca el folleto de asesoría jurídica elaborado por la Organización Mundial de la Propiedad Intelectual OMPI.
              .col-sm-auto(data-aos="fade-left")
                a.boton.color-acento-botones(href="https://www.wipo.int/edocs/pubdocs/es/wipo_pub_450_2020.pdf" target="_blank")
                  span Descargar  
                  i.fas.fa-file-download
      .col-md-4.col-8.order-md-2.order-1.mb-md-2.mb-4(data-aos="fade-left")
        img(src="@/assets/curso/tema3/img14.png")
    
    separador
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Políticas de confidencialidad
    
    p La administración de la información y el tratamiento de datos personales son prioridades organizacionales, las cuales deben estar enfocadas a la protección de la información; por ello, se debe validar las políticas de confidencialidad en la estandarización de cualquier manejo de información, priorizando la protección de información confidencial.

    .row.justify-content-center.mb-4
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img06.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 Ahora bien, los criterios a partir de los cuales se ha legislado en Colombia procuran la protección integral de la información de la persona natural o jurídica contratada y tiene un respaldo establecido para la protección de sus datos, tomando como referencia la compilación de argumentos jurídicos evidenciados por la Superintendencia de Industria y Comercio de Colombia (2022), la información y el acceso a la misma, pueden ser establecidos de manera restringida, teniendo en cuenta que se puede determinar así o se puede solicitar de manera personal a la organización.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Criterios éticos del tratamiento de los datos 
    
    p El acceso y administración de la información éticamente debe partir del cuidado de esta, lo cual aplica al desarrollo computacional para el manejo de datos y los soportes documentales que se generan o que requieren las organizaciones o las personas (naturales o jurídicas), por esto es importante validar los parámetros que establece la gestión documental y las políticas de tratamiento de la información y de los datos personales gestionados de manera física y digital; este último mecanismo que día a día se va desarrollando con una constante innovación, ligada a la cuarta revolución industrial, aunado a una aceleración motivada por la pandemia del SARS-CoV-2 COVID-19.

    figure.mb-4(data-aos="zoom-in")
      img(src="@/assets/curso/tema3/img15.jpg")
    
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Políticas legales  
    
    p Las plataformas tienen dentro de los términos y condiciones de uso un apartado que bien podría entenderse como un contrato de adhesión, que es aceptado desde el momento en que se abre una cuenta como nuevo usuario. En este sentido, es importante identificar la normatividad colombiana que regula las identidades en la Web y la propiedad intelectual. Adelante: 

    .row.justify-content-center.mb-4
      .col-md-10.BGIMG01(data-aos="zoom-in")
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Ley 23 de 1982',
        texto:
          'Ley de derechos de autor. Es la rama del derecho y concretamente de la propiedad intelectual, que se ocupa de establecer la protección y reglamento sobre las obras creadas por el ser humano, las cuales pueden ser literarias y artísticas.',
        icono: require('@/assets/curso/tema3/img16.png'),
      },
      {
        titulo: 'Decisión Andina 351 de 1993',
        texto:
          'Reconoce una adecuada y efectiva protección a los autores y demás titulares de derechos, sobre las obras del ingenio, en el campo literario, artístico o científico.',
        icono: require('@/assets/curso/tema3/img17.png'),
      },
      {
        titulo: 'Ley 241 de 2011',
        texto:
          'Regula la responsabilidad por las infracciones de derechos de autor y derechos conexos en Internet.',
        icono: require('@/assets/curso/tema3/img18.png'),
      },
      {
        titulo: 'Ley 1834 de 2017',
        texto: 'Por la cual se fomenta la economía creativa (Ley naranja).',
        icono: require('@/assets/curso/tema3/img19.png'),
      },
      {
        titulo: 'Ley 1915 de 2018',
        texto:
          'Por la cual se modifica la Ley 23 de 1982 y se establecen otras disposiciones en materia de derechos de autor y derechos conexos.',
        icono: require('@/assets/curso/tema3/img20.png'),
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
