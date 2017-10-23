<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Sorteio</h4>
    </div>
    <div class="card-body">
      <painel-numeros-sorteados></painel-numeros-sorteados>
      <div class="row mb-1">
        <input type="button" class="btn btn-primary btn-block" value="Sortear Número">
      </div>
      <div class="row mb-1">
        <input type="button" class="btn btn-primary btn-block" value="Misturar Pedras">
      </div>
      <div class="row mb-1">
        <input type="button" class="btn btn-primary btn-block" value="Iniciar Novo Sorteio">
      </div>
      <div class="row mb-1">
        <input type="button" class="btn btn-primary btn-block" value="Opções">
      </div>
    </div>
  </div>
</template>

<script>
  import PainelNumerosSorteados from './PainelDisplayNumero.vue'

  export default {
    name: 'ConfiguracoesSidebar',
    data () {
      return {

      }
    },
    components: {PainelNumerosSorteados}
  }
</script>
