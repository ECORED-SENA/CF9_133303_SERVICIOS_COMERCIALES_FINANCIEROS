<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Para concluir con el componente formativo se retroalimenta sobre la importancia de la información en las organizaciones y que el debido análisis de los datos aporta a la sostenibilidad de las entidades, por ello, se invita a observar el siguiente mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
    
    p Se espera que el contenido temático de esta formación sea de gran apoyo cada día en la gestión de su aprendizaje y se invita a resolver la actividad didáctica que le servirá como refuerzo de lo aprendido.
    .h4 ¡Muchos éxitos! 

</template>

<script>
export default {
  name: 'Sintesis',
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
