<script>
import axios from "axios"
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import AppMain from "./components/AppMain.vue";
import AppCard from "./components/AppSearch.vue";
import { store } from "./store";
export default {
  components: {
    AppHeader,
    AppSearch,
    AppMain,
    AppCard
  },
  data() {
    return {
      store
    }
  },
  created() {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=2e302d29775f4de190d7658d34f4d6d2")
      .then((resp) => console.log(resp))
  }
}
</script>


<template>
  <AppHeader />
  <AppSearch />
  <AppMain />
  <AppCard />
</template>


<style>

</style>