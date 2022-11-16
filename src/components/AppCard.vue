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
        },

    }
}
</script>

<template>
    <h3>Movies</h3>
    <div class="container">
        <div class="card" v-for="(movie, index) in store.movies" :key="index">
            <img v-if="movie.poster_path" :src="`${store.imgDownload}${movie.poster_path}`">
            <img v-else src="../assets/img/no-img.jpg" alt="">
            <h2>{{ movie.title }}</h2>
            <h3>{{ movie.original_title }}</h3>

            <div>
                <img v-if="avaibleFlags.includes(movie.original_language)" :src="getImgUrl(movie.original_language)">
                <p v-else>{{ movie.original_language }}</p>
            </div>
            <span><i v-for="number in Math.ceil(movie.vote_average / 2)" class="fa-solid fa-star yell"></i></span>
        </div>


        <h2>Series</h2>
        <div class="section">
            <div class="card" v-for="(series, index) in store.series" :key="index">
                <img v-if="series.poster_path" :src="`${store.imgDownload}${series.poster_path}`">
                <img v-else src="../assets/img/no-img.jpg" alt="">
                <h2>{{ series.name }}</h2>
                <h3>{{ series.original_name }}</h3>

                <div>
                    <img v-if="avaibleFlags.includes(series.original_language)"
                        :src="getImgUrl(series.original_language)">
                    <p v-else>{{ series.original_language }}</p>
                </div>
                <span><i v-for="number in Math.ceil(series.vote_average / 2)" class="fa-solid fa-star yell"></i></span>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.yell {
    color: yellow;
}
</style>