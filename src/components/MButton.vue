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
    background-color:  #f28a31;
    color: black;
}

</style>