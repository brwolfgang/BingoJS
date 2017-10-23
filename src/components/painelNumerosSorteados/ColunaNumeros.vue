<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>{{ letra }}</h1>
      </div>
    </div>
    <div class="row" v-for="linha in listaConjuntosNumeros">
      <div class="col" v-for="item in linha">
        <h3>{{ item }}</h3>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ColunaNumeros',
    props: {
      letra: String,
      numeros: Array
    },
    computed: {
      listaConjuntosNumeros () {
        let listaConjuntosNumeros = []

        let qtdeColunas = Math.floor(this.numerosUnicos.length / this.tamanhoColuna)

        for (let linha = 0; linha < this.tamanhoColuna; linha++) {
          let linhaAtual = []
          for (let coluna = 0; coluna <= qtdeColunas; coluna++) {
            linhaAtual.push(this.numerosUnicos[(coluna * this.tamanhoColuna) + linha])
          }
          listaConjuntosNumeros.push(linhaAtual)
        }

        return listaConjuntosNumeros
      },
      numerosUnicos () {
        return this.numeros.filter(function (valor, indice, array) {
          return array.indexOf(valor) === indice
        })
      }
    },
    data () {
      return {
        tamanhoColuna: 13
      }
    }
  }
</script>
