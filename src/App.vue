<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row justify-content-center mh-100">
        <div class="col-md-3 col-sm-12 align-items-center" >
          <configuracoes-sidebar></configuracoes-sidebar>
        </div>
        <div class="col-md-9 col-sm-12" >
          <painel-numeros-sorteados/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ConfiguracoesSidebar from './components/sidebar/ConfiguracoesSidebar.vue'
  import PainelNumerosSorteados from './components/painelNumerosSorteados/PainelNumerosSorteados.vue'

  export default {
    components: {ConfiguracoesSidebar, PainelNumerosSorteados},
    name: 'app'
  }
</script>

<style>
</style>
