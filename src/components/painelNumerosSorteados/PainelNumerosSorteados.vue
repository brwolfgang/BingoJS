<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Números sorteados</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <coluna-numeros
          class="col"
          :letra="letra"
          :numeros="coluna"
        ></coluna-numeros>
        <coluna-numeros
          class="col"
          :letra="letra"
          :numeros="coluna"
        ></coluna-numeros>
        <coluna-numeros
          class="col"
          :letra="letra"
          :numeros="coluna"
        ></coluna-numeros>
      </div>
    </div>
  </div>
</template>

<script>
  import ColunaNumeros from './ColunaNumeros.vue'

  export default {
    name: 'PainelNumerosSorteados',
    data () {
      return {
        letra: 'A',
        coluna: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
      }
    },
    components: {ColunaNumeros}
  }
</script>
