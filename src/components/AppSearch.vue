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
    <div class="title">
        <h1>BOOLFLIX</h1>
        <div class="search">
            <input type="text" v-model="store.searchKey">
            <button @click="$emit('research')">Search</button>
        </div>

    </div>

</template>


<style lang="scss" scoped>
.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(20, 20, 20);
    height: 80px;

    h1 {
        color: red;
        margin-left: 5%;
        padding: 1rem;
    }

    .search {
        margin-right: 5%;
        padding: 1rem;
    }

    input {
        border-radius: 10px;
        padding: .2rem;
        background-color: rgb(34, 32, 32);
        color: grey;
    }

    button {
        margin-left: 5px;
        padding: .2rem;
        color: grey;
        background-color: rgb(34, 32, 32);
        border-radius: 5px;
    }
}
</style>