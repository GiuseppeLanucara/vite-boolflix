<script>
import { store } from "../store";
export default {
    name: "AppCard",
    data() {
        return {
            store,
            avaibleFlags: ["en", "it"]
        }
    },
    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
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
            <div>
                <img v-if="avaibleFlags.includes(movie.original_language)" :src="getImgUrl(movie.original_language)">
                <p v-else>{{ movie.original_language }}</p>
            </div>
            <span>{{ movie.vote_average }}</span>
        </div>
        <h2>Series</h2>
        <div class="section">
            <div class="card" v-for="(series, index) in store.series" :key="index">
                <img :src="`${this.store.imgDownload}`">
                <h2>{{ series.name }}</h2>
                <h3>{{ series.original_name }}</h3>
                <div>
                    <img v-if="avaibleFlags.includes(series.original_language)"
                        :src="getImgUrl(series.original_language)">
                    <p v-else>{{ series.original_language }}</p>
                </div>
                <span>{{ series.vote_average }}</span>
            </div>
        </div>
    </div>
</template>

<style>

</style>