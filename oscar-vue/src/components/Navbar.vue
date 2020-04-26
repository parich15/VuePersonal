<template>
    
  <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
   
    <b-navbar-brand tag="h1" class="mb-0 ml-5 titulo" id="popover1" to="/">
    Oscar Paricio
    <b-popover
        target="popover1"
        placement="bottom"
        title="Contacto"
        triggers="hover"
        >
        <div class="popover-body">
          <b-icon icon="phone"></b-icon><a class="contactoPop" href="tel:+34606903310"> Teléfono </a><br>
          <b-icon icon="envelope"></b-icon><a class="contactoPop" href="mailto:oscarparicio8@gmail.com?Subject=Contacto%20Web"> Mail</a>
        </div></b-popover>   
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse">
        <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="three-dots-vertical"></b-icon>
        <b-icon v-else icon="three-dots"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        

        <b-nav-item-dropdown text="Proyectos" class="linkProyectos" right>
          <b-dropdown-item to="/vue" class="Proyectos">Captotal</b-dropdown-item>
          <b-dropdown-item href="#" class="Proyectos">Carland</b-dropdown-item>
          <b-dropdown-item href="#" class="Proyectos">Cemar</b-dropdown-item>
          <b-dropdown-item href="#" class="Proyectos">ViuRe</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-navbar-nav class="mr-3 linksMenu">
        <b-nav-item to="#">Sobre Mi</b-nav-item>
        <b-nav-item to="#">Contacto</b-nav-item>
      </b-navbar-nav>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
    export default {
        name: 'navbar',
    }
</script>

<style lang="scss" scoped>
    
</style>