<template>
<div>

  <h1>Hello from vue with Vite 1</h1>
  <select name="" id="" v-model="selectedColor">
    <option v-for="(color,index) in options" :key="index" :value="color">{{color}}</option>
  </select>
</div>
</template>

<script>
export default {
  data:function(){
    return {
      options: ["azul","rojo","amarillo","verde","blanco"],
      selectedColor: "azul"
    }
  }
}
</script>

<style>

</style>