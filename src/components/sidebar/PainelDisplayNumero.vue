<template>
  <div class="container-fluid" style="text-align: center">
    <h1>{{ letra }}</h1>
    <h1>{{ numero }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'PainelDisplayNumero',
    data () {
      return {
        letra: 'A',
        numero: '10'
      }
    }
  }
</script>
