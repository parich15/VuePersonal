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
                  <div class="mt-5 mb-5">
                  <p class="textoPresentacion">
                    En la actualidad, si no apareces en Google, <strong>no existes</strong>. Y eso es una realidad.
                    Tanto empresas, comercios y autonomos necesitan tener una web corporativa a la altura que les 
                    permita <strong>generar ingresos y aumentar el reconocimiento de marca</strong>. <br><br>
                    En mi web, te enseñaré mis trabajos realizados y te asesoraré sobre cual es la web que mejor
                    se adapta a tus necesidades. 
                </p>
                  </div>    
                  </div>
                  
              </b-col>
          </b-row>
        </b-container>
        <b-container class="MainSecond" fluid>
          <b-row class="secundaria">
            <b-col class="col-xs-3 colDatos">
                <div class="mt-4 datos">
                  <div data-aos="fade-up">
                  <h3>
                    Sobre Mi
                  </h3>
                  <hr class="separador2">
                  <p><strong>Nombre:</strong> Oscar Paricio </p>
                  <p><strong>Edad:</strong> 23 años </p>
                  <p><strong>Trabajo en:</strong> Hortec Sccl </p>
                  <p><strong>Especialidades</strong></p>
                  <p>Wordpress <br>
                    VueJs <br>
                    NuxtJs  <br>
                    SemRush <br>
                    Google Ads</p>
                  </div>
                </div>
              </b-col>
              <b-col class="col-9 mr-auto ml-auto mt-4">
                <div data-aos="fade-down">
                <div class="presentacion">
                  <h3>Web Design & Marketing Digital</h3>
                  <p class="txtPre">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, hic. Non, quas dicta veritatis consequatur, 
                    sunt nulla dolor commodi ipsum, quod facere vitae. Perferendis iste ipsam molestias at autem sed! Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Eligendi, hic. Non, quas dicta veritatis consequatur.</p>
                </div>
                <div class="columnaInterna">
                
                <div class="interna1 m-auto">
                  <b-img thumbnail fluid src="/img/icono1.png" alt="Image 1"></b-img>
                  <h4 class="titIco">Creación Nativa</h4>
                  <p class="txtIco"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident praesentium sapiente iste perspiciatis hic sit!
                     Voluptates odio veniam eum earum molestiae beatae suscipit cupiditate cum, voluptatum illum quos eligendi.</p>
                </div>
                <div class="interna2 m-auto">
                  <b-img thumbnail fluid src="/img/icono2.png" alt="Image 1"></b-img>
                  <h4 class="titIco">Una plataforma para todo</h4>
                  <p class="txtIco"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident praesentium sapiente iste perspiciatis hic sit!
                     Voluptates odio veniam eum earum molestiae beatae suscipit cupiditate cum, voluptatum illum quos eligendi.</p>
                </div>
                <div class="interna3 m-auto">
                  <b-img thumbnail fluid src="/img/icono3.png" alt="Image 1"></b-img>
                  <h4 class="titIco">Engage multidispositivo</h4>
                  <p class="txtIco"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa provident praesentium sapiente iste perspiciatis hic sit!
                     Voluptates odio veniam eum earum molestiae beatae suscipit cupiditate cum, voluptatum illum quos eligendi.</p>
                </div>
                </div>
                </div>
              </b-col>
              
          </b-row>
        </b-container>
        <b-container class="servicios" fluid> 
          <b-row class="titSer">
            <b-col class="col-md-12 mt-5">
              <div>
                  <h2>¿Cómo funciona?</h2>
                  <hr class="separador3">
              </div>
            </b-col>
          </b-row>
          <div data-aos="fade-up">
            <servicios></servicios>
          </div>
        </b-container>
        <b-container class="terciario" fluid>
          <b-row>
            <b-col class="titServ">
                <h2>Mis Servicios</h2>
            </b-col>
          </b-row>
          <captacion></captacion>
        </b-container>
    </div>
</template>

<script>
    import Parallax from '@/components/Parallax';
    import Servicios from '@/components/Servicios';
    import Captacion from '@/components/Captacion';

    export default {
        name: 'Inicio',
        bodyClass: 'Inicio-Web',
        components:{
            Parallax,
            Servicios,
            Captacion
        },
    }
</script>

<style lang="scss" scoped>
    .Inicio {
      overflow: hidden;
    }
</style>