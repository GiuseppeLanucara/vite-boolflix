<script>
import axios from "axios"
export default {
  created() {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=2e302d29775f4de190d7658d34f4d6d2&query=hello")
      .then((resp) => console.log(resp))
  }
}
</script>


<template>


</template>


<style>

</style>