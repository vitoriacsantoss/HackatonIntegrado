<script setup>
const props = defineProps({
    texto: String
})
</script>

<template>
    <button>{{ props.texto }}</button>
</template>

<style scoped>
button {
    background-color: #ffffff;
    color: black;
    padding: 20px;
    border: 2px solid #ffffff;
    transition: background-color 1s ease, color 1s ease;
}

button:hover {
    font-family: "Open Sans" sans-serif;
    background-color:  #f28a3180;
    color: black;
}

</style>