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
    <div class="container">
        <h3>Movies</h3>
        <div class="row">

            <div class="card" v-for="(movie, index) in store.movies" :key="index">
                <div class="col">
                    <div class="card-front">
                        <img v-if="movie.poster_path" :src="`${store.imgDownload}${movie.poster_path}`">
                        <img v-else src="../assets/img/no-img.jpg" alt="">
                    </div>
                    <div class="card-back">
                        <h2>{{ movie.title }}</h2>
                        <h3>{{ movie.original_title }}</h3>

                        <div>
                            <img v-if="avaibleFlags.includes(movie.original_language)"
                                :src="getImgUrl(movie.original_language)">
                            <p v-else>{{ movie.original_language }}</p>
                        </div>
                        <span><i v-for="number in Math.ceil(movie.vote_average / 2)"
                                class="fa-solid fa-star yell"></i></span>
                    </div>

                </div>
            </div>



        </div>


        <h2>Series</h2>
        <div class="section">
            <div class="row">

                <div class="card" v-for="(series, index) in store.series" :key="index">
                    <div class="col">
                        <card-front>
                            <img v-if="series.poster_path" :src="`${store.imgDownload}${series.poster_path}`">
                            <img v-else src="../assets/img/no-img.jpg" alt="">
                        </card-front>
                        <div class="card-back">
                            <h2>{{ series.name }}</h2>
                            <h3>{{ series.original_name }}</h3>

                            <div>
                                <img v-if="avaibleFlags.includes(series.original_language)"
                                    :src="getImgUrl(series.original_language)">
                                <p v-else>{{ series.original_language }}</p>
                            </div>
                            <span><i v-for="number in Math.ceil(series.vote_average / 2)"
                                    class="fa-solid fa-star yell"></i></span>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    display: flex;
    flex-wrap: wrap;

    .col {
        width: calc(100% / 4 - 10px);
        margin-bottom: 1rem;
        margin-left: 5px;
        margin-right: 5px;
    }
}

.yell {
    color: yellow;
}

.container {

    width: 100%;
    height: calc(100vh - 80px);
    background-color: grey;
    overflow-y: auto;


}

.row {
    margin: 0 auto;
}

.card {
    position: relative;
    height: 100%;
}

.card-back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}

.card-front {
    height: 100%;
}

img {
    height: 100%;
}
</style>