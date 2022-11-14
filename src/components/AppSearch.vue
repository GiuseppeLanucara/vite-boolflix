<script>
import { store } from "../store";
export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}
</script>


<template>
    <input type="text" v-model="store.searchKey">
    <button @click="$emit('research')">Search</button>
</template>


<style>

</style>