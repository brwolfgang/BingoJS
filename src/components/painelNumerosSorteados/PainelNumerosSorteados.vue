<template>
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">Números sorteados</h4>
    </div>
    <div class="card-body">
      <div class="row">
        <coluna-numeros v-for="letra, indice in letras" :key="letra"
          class="col"
          :letra="letra"
          :numeros="arrayNumeros[indice]"
        ></coluna-numeros>
      </div>
    </div>
  </div>
</template>

<script>
  import ColunaNumeros from './ColunaNumeros.vue'

  export default {
    name: 'PainelNumerosSorteados',
    components: {ColunaNumeros},
    data () {
      return {
      }
    },
    computed: {
      letras () {
        return this.$store.state.letras
      },
      qtdeNumeros () {
        return this.$store.state.qtdeNumeros
      },
      arrayLetras () {
        return this.letras.toUpperCase().split('')
      },
      qtdeNumerosPorLetra () {
        return this.qtdeNumeros / this.arrayLetras.length
      },
      arrayNumeros () {
        let arrayNumeros = []

        for (let i = 0; i < this.$store.getters.arrayLetras.length; i++) {
          let arrayParcial = []

          for (let j = 0; j < this.qtdeNumerosPorLetra; j++) {
            arrayParcial.push((i * this.qtdeNumerosPorLetra) + j + 1)
          }

          arrayNumeros.push(arrayParcial)
        }

        return arrayNumeros
      }
    }
  }
</script>
