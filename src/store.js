import { reactive } from "vue";
export const store = reactive({
    searchStatus: "",
    searchKey: "",
    loading: false,
    urlMovie: "https://api.themoviedb.org/3/search/movie?",
    urlSeries: "https://api.themoviedb.org/3/search/tv?",
    urlKey: "2e302d29775f4de190d7658d34f4d6d2"
})