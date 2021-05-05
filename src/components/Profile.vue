<template>
 <div v-for="task in member" v-bind:key="task" class="flex pb-6 items-center">
      
      <img :src="task.image"  class="h-64 w-64 rounded-full"  />

      <div class="grid grid-cols-2 gap-1 justify-items-stretch">

        <p class="justify-self-center">ID :</p>
        <p>{{ task.Sid }}</p>
        <p class="justify-self-center">Name :</p>
        <p >{{ task.name }}</p>
        <p class="justify-self-center">Responsibility :</p>
        <p >{{ task.work }}</p>

      </div>
    </div>

<button @click="check">check</button>
</template>

<script>
export default {
  props:{
    member: Array

  },
  data() {
   return {
    }
  },
  methods:{
    check(){
      alert(this.member)
    }
  }
}
</script>


<style>
</style>
