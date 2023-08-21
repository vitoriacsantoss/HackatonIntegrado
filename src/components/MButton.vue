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
    background-color: white;
    color: #4A4747;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-family: "Open Sans" sans-serif;
}

button:hover {
    background-color: #F28A31;
}
</style>