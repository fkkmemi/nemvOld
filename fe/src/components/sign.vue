<template>
  <div class="sign">
    <h1>{{ xxx }}</h1>
    <h2>sign</h2>

  </div>

</template>

<script>
export default {
  name: 'sign',
  data () {
    return {
      xxx: 'signsign'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
