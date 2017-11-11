<template>
  <div>
    <div class="row">
      <div class="col-12" style="text-align: center">
        <h1>{{ letra }}</h1>
      </div>
    </div>
    <div class="row" v-for="linha in listaConjuntosNumeros">
      <div class="col border rounded-circle" v-for="item in linha" style="text-align: center">
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

        for (let linha = 0; linha < this.tamanhoColuna; linha++) {
          let linhaAtual = []
          for (let coluna = 0; coluna < this.qtdeColunas; coluna++) {
            let valorAtual = this.numerosUnicos[(coluna * this.tamanhoColuna) + linha]
            linhaAtual.push(valorAtual)
          }
          listaConjuntosNumeros.push(linhaAtual)
        }

        return listaConjuntosNumeros
      },
      numerosUnicos () {
        return this.numeros.filter(function (valor, indice, array) {
          return array.indexOf(valor) === indice
        })
      },
      qtdeColunas () {
        return this.numerosUnicos.length / this.tamanhoColuna
      }
    },
    data () {
      return {
        tamanhoColuna: 15
      }
    }
  }
</script>
