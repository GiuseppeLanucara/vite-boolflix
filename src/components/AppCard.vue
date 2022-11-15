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
        <h2>Series</h2>
        <div class="section">
            <div class="card" v-for="(series, index) in store.series" :key="index">
                <h2>{{ series.name }}</h2>
                <h3>{{ series.original_name }}</h3>
                <p>{{ series.original_language }}</p>
                <span>{{ series.vote_average }}</span>
            </div>
        </div>
    </div>
</template>

<style>

</style>