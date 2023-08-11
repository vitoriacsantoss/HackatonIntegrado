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
    background-color:  #a0522d;
    color: aliceblue;
    font-size: 1.1rem;
    border: 1px solid#ccc;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-family: 'Times New Roman', Times, serif;
}

button:hover{
    background-color: black ;
}

</style>