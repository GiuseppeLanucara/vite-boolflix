import { reactive } from "vue";
export const store = reactive({
    searchStatus: "",
    searchKey: "",
    loading: false,
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
    apiUrlSeries: "https://api.themoviedb.org/3/search/tv",
    apiUrlKey: "2e302d29775f4de190d7658d34f4d6d2",
    movies: [],
    series: [],
    imgDownload: "https://image.tmdb.org/t/p/w342"
})