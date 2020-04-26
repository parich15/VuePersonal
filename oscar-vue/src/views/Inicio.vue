<template>
    <div class="Inicio">
        <div class="cabecera clear-filter" filter-color="black">
        <parallax
          class="imagen-cabecera"
          style="background-image:url('img/header.jpg')"
        >
        </parallax>
        <div class="b-container-cabecera">
          <div class="content-center">
            <h1 class="titulo1 focus-in-expand-fwd">Oscar Paricio</h1>
            <h3 class="subtitulo focus-in-expand">Diseño Web Profesional</h3>
          </div>
        </div>
      </div>

      <b-container class="main">
          <b-row class="principal" align-h="center">
              <b-col class="col-9">
                  <div data-aos="fade-up">
                  <h2 class="titulo2">Bienvenido a mi Web</h2>
                  <hr class="separadorG">
                  <h4 class="subtitulo2">Soy Oscar y soy desarrollador Front-End
                      y especialista en Marketing Digital y 
                      SEO
                  </h4>
                  </div>
                  <div>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque blanditiis est sapiente velit corporis ullam? Totam asperiores recusandae cumque consequatur neque, iure beatae iste doloremque natus! Impedit, incidunt repellat.
                      </p>
                  </div>
              </b-col>
          </b-row>
      </b-container>
    </div>
</template>

<script>
    import Parallax from '@/components/Parallax';
    export default {
        name: 'Inicio',
        bodyClass: 'Inicio-Web',
        components:{
            Parallax
        },
    }
</script>

<style lang="scss" scoped>
    
</style>