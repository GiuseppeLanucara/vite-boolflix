<script>
import axios from "axios"
import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import AppMain from "./components/AppMain.vue";
import AppCard from "./components/AppCard.vue";
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

  },
  methods: {
    getProducts() {
      let apiUrl = `${store.apiUrlMovie}?api_key=${store.apiUrlKey}`
      let apiUrlSeries = `${store.apiUrlSeries}?api_key=${store.apiUrlKey}`
      if (this.store.searchKey !== "") {
        apiUrl += `&query=${this.store.searchKey}`
        apiUrlSeries += `&query=${this.store.searchKey}`
      }
      axios.get(apiUrl).then((resp) => {
        this.store.movies = resp.data.results
        console.log(this.store.movies);
      })
      axios.get(apiUrlSeries).then((resp) => {
        this.store.series = resp.data.results
        console.log(this.store.series);
      })

    }

  }
}
</script>


<template>
  <AppHeader />
  <AppSearch @research="getProducts" />
  <AppMain />
  <AppCard />
</template>


<style lang="scss">
@use "../src/components/styles/general.scss";
</style>