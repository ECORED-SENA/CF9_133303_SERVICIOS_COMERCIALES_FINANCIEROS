<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Seguridad de la información 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.mb-md-0.order-md-1.order-2.mb-4(data-aos="fade-right")
        .bloque-texto-c.BG03.p-4.mb-4
          i.fas.fa-quote-right
          p Significa proteger la información y los sistemas de información de un acceso, uso, divulgación, alteración, modificación, lectura, inspección, registro o destrucción no autorizado. 
          .h4.mb-0 - (Soriano, 2014).
        p El siguiente video habla de manera integral de los conceptos de seguridad de la información, seguridad informática y seguridad en la red, los cuales están asociados entre sí; pero presentan algunas diferencias:
      .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img01.jpg')

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OC8x73OfV6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2  2.1	Principios
    
    p Como se mencionó anteriormente, la seguridad de la información se centra en garantizar lo que en el mundo de la seguridad se conoce como la triada CIA, que nada tiene que ver con una famosa agencia de Estados Unidos, se le da este nombre ya que corresponde a las iniciales de los principios que sustentan la seguridad de la información: confidencialidad, integridad y disponibilidad.
    p A continuación se describe cada concepto:

    .row.justify-content-center.mb-5
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img02.png' alt='AvatarTop')
          .BGR06.p-4
            h4.text-center.mt-5 Confidencialidad
            p.mb-0 La confidencialidad se refiere a los esfuerzos de una organización para mantener sus datos privados o secretos. En la práctica, se trata de controlar el acceso a los datos para evitar su divulgación no autorizada.
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img03.png' alt='AvatarTop')
          .BGR07.p-4
            h4.text-center.mt-5 Integralidad
            p En seguridad informática, la integridad consiste en garantizar que los datos no hayan sido manipulados y, por lo tanto, sean confiables.
            p.mb-0 Garantizar la integridad implica proteger los datos en uso, en tránsito (por ejemplo, al enviar un correo electrónico o al cargar o descargar un archivo) y al almacenarlos, ya sea en aparatos físicos o en la nube.
      .col-md-4.col-8(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img04.png' alt='AvatarTop')
          .BGR08.p-4
            h4.text-center.mt-5 Disponibilidad
            p Los sistemas, aplicaciones y datos son de poco valor para una organización y sus clientes si no son accesibles cuando los usuarios autorizados los necesitan.
            p.mb-0 En pocas palabras, la accesibilidad significa que las redes, los sistemas y las aplicaciones están en su pleno funcionamiento. Con esto se garantiza que los usuarios autorizados tengan acceso oportuno y fiable a los recursos cuando los requiere. 

    p Los anteriores conceptos hacen  parte de lo que se denomina la “Triada de la seguridad” y para conocer sobre esta integración se invita a observar el siguiente video:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LaTDcAQCFXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
  .container.BG09.p-4.p-md-5  
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2  2.2	Políticas de seguridad 
    p Para entender los términos sobre #[strong políticas de seguridad] es necesario definir el concepto más general de política, siendo esta una declaración de alto nivel que describe la posición de la entidad sobre un tema específico.
    p Ahora, si se le adiciona el concepto de seguridad, por supuesto se refiere a la declaración de alto nivel donde la organización fija una posición frente a la necesidad de contar con un sistema de gestión de seguridad de la información, que identifique el qué, de quién y cómo se deben proteger los recursos o activos tecnológicos necesarios para el cumplimiento del #[i core] de la empresa.
    
    .row.justify-content-center
      .col-md-5.col-10.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img05.png')
      .col-md-7(data-aos="fade-left")
        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            p En términos más generales,
            <br><br>
            i.fas.fa-quote-left
            p las políticas de seguridad son un conjunto de reglas, normas y protocolos de actuación que se encargan de velar por la seguridad informática de la empresa. Se trata de una especie de plan realizado para combatir todos los riesgos a los que está expuesta la empresa en el mundo digital.  De esta forma se mantendrá la organización alejada de cualquier ataque externo peligroso
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h4.mb-0 (Caurín, 2018).
    separador
  
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2  2.3 Estándares y normas de referencia
    
    p Existen varios estándares de seguridad informática, iniciando por el grupo de estándares ISO/IEC 27000 que integran un sistema de administración de seguridad de la información (#[i information security management system] ISMS), el cual está enfocado en la seguridad de la información bajo un explícito control administrativo de la misma.
    p El ISO 15408 es un estándar desarrollado en lo que se conoce como “criterio común” y permite que diferentes aplicaciones de #[i software] puedan ser integradas y probadas en una forma o manera segura. 

    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img06.jpg')})`}"
          )(data-aos="fade-right")
          .bloque-texto-g__texto.p-4
            p.mb-0 El RFC 2196 es un #[i memorándum] publicado por Internet #[i Engineering Task Force] para el desarrollo de políticas y procedimientos de seguridad para sistemas de información conectados a Internet; proporciona una amplia y general visión de la seguridad de la información incluyendo la seguridad de la red, respuesta a incidentes o las políticas de seguridad. El documento es muy práctico y centrado en el día a día de las operaciones.
      .col-md-10
        p.mb-0 Para el campo industrial se inició en el año 2007 con el grupo de trabajo de la #[i International Society for Automation] (ISA), el estándar ISA-99 denominado #[i Security for Industrial Automation and Control Systems] con la publicación del estándar ANSI/ISA-99.00.01-2007 #[i Security for Industrial Automation and Control Systems: Concepts, Terminology and Models], en conjunto con el reporte técnico ANSI/ISA-TR99.00.01-2007, #[i Security Technologies for Manufacturing and Control Systems] . A principios de 2009 fue aprobado por ANSI el estándar ANSI/ISA-99.02.01-2009, #[i Security for Industrial Automation and Control Systems: Establishing an Industrial Automation and Control Systems Security Program]. Finalmente, en el año 2010 se cambió por el estándar ISA/IEC 62443 para alinear la numeración de la documentación del estándar con los estándares correspondientes de la #[i International Electrotechnical Commission] (IEC).

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Riesgos y mecanismos de valuación
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.mb-md-0.order-md-1.order-2
        .bloque-texto-c.BG03.p-4.mb-4(data-aos="fade-right")
          i.fas.fa-quote-right
          p El riesgo es la posibilidad de que una amenaza se produzca, dando lugar a un ataque sobre un recurso o servicio tecnológico. Esto no es otra cosa que la probabilidad de que ocurra el ataque por parte de la amenaza.
          .h4.mb-0 - (Zambrano y Valencia, 2017).
        p.mb-0 En la definición anterior se menciona el concepto de amenaza, siendo esta cualquier evento que puede afectar los activos de información y se relaciona principalmente, con recursos humanos, eventos naturales o fallas técnicas.
      .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img07.png')
    
    p El riesgo se utiliza sobre todo en el análisis de riesgos de un sistema informático. Este riesgo permite tomar decisiones para proteger mejor al sistema. Se puede comparar con el riesgo límite que acepte para su activo o recurso tecnológico, de tal forma que si el riesgo calculado es inferior al de referencia, este se convierte en un riesgo residual que se puede considerar como riesgo aceptable (Zambrano y Valencia, 2017).

    .row.justify-content-start.BGR02-1.mb-5(data-aos="fade-left")
      .col-md-1.col-2
        img(src='@/assets/curso/temas/img04.png')
      .col-md-11.col-10
        .row.align-items-end
          .col-11.p-4
            p Para poder llevar a cabo un proceso correcto o adecuado de valuación de riesgos, de manera general se deben realizar las siguientes actividades:
            ul.lista-ul--color
              li
                <i class="fas fa-dot-circle" style="color:#FC8116"></i>
                | Identificar todos aquellos activos de información que tienen algún valor para la organización.
              li
                <i class="fas fa-dot-circle" style="color:#FC8116"></i>
                | Asociar las amenazas relevantes con los activos identificados.
              li
                <i class="fas fa-dot-circle" style="color:#FC8116"></i>
                | Determinar las vulnerabilidades que puedan ser aprovechadas por dichas amenazas.
              li
                <i class="fas fa-dot-circle" style="color:#FC8116"></i>
                p.mb-0 Identificar el impacto que podría suponer una pérdida de confidencialidad, integridad y disponibilidad para cada activo.
          .col-1
            img(src='@/assets/curso/temas/img05.png')

    p Para el desarrollo de este proceso se han desarrollado diferentes metodologías, dentro de las cuales se destacan las siguientes:

    figure.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/tema2/img08.svg')

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Activos de la información
    
    p Se relaciona con todos esos elementos tecnológicos o relacionados con la tecnología que la organización utiliza para el cumplimiento de sus metas o #[i core] del negocio. Según la norma ISO/IEC 27001 se entiende como activo todo aquello que es importante y que la organización valora, por lo tanto, debe de protegerse. 
    p De acuerdo con esta norma es necesario clasificar e inventariar todos los activos de la información de una empresa luego de ser identificados, esto se hace como cumplimiento al modelo de seguridad y privacidad de la información, el cual presenta la siguiente forma: 
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-3.col-8.mb-md-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.pb-5
          .tarjeta-numerada__numero
            .h2 1
          .h4 Inventario de activos: 
          p.mb-5 se deben identificar todos los activos de la compañía y a su vez crear un inventario de estos.<br><br>
      .col-md-3.col-8.mb-md-0.mb-4(data-aos="zoom-in")
        .tarjeta-numerada.color-acento-contenido.p-5.p-5.pb-5
          .tarjeta-numerada__numero
            .h2 2
          .h4 Propiedad de activos: 
          p.mb-5 cada activo identificado debe contar con un responsable o propietario.<br><br>
      .col-md-3.col-8.mb-md-0.mb-4(data-aos="zoom-in")
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 3
          .h4 Clasificación de la información: 
          p.mb-0 se debe realizar su respectiva clasificación dependiendo del requerimiento legal, valor, criticidad, divulgación y modificación.   
      .col-md-3.col-8(data-aos="fade-left")
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          .h4 Manipulación de información:
          p.mb-0 se debe contar con procedimientos que permitan etiquetar la información y que funcione con el sistema de clasificación que definió la empresa.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
