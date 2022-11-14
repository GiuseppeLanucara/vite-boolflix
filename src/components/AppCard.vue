<script>
import { store } from "../store";
export default {
    name: "AppCard",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h3>Movies</h3>
    <div class="container">
        <div class="card" v-for="(movie, index) in store.movies" :key="index">
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.original_title }}</h3>
            <p>{{ movie.original_language }}</p>
            <span>{{ movie.vote_average }}</span>
        </div>
    </div>
</template>

<style>

</style>