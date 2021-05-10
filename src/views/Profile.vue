<template>
 <div v-for="task in member" v-bind:key="task" class="flex pb-6 items-center">
      
      <img :src="require(`../assets/Team/${task.image}`)"  class="h-64 w-64 rounded-full"  />
     

      <div class="grid grid-cols-2 gap-1 justify-items-stretch">

        <p class="justify-self-center">ID :</p>
        <p>{{ task.Sid }}</p>
        <p class="justify-self-center">Name :</p>
        <p >{{ task.name }}</p>
        <p class="justify-self-center">Responsibility :</p>
        <p >{{ task.work }}</p>

      </div>
    </div>


</template>

<script>
export default {
  props:{

  },
  data() {
   return {
     member:[
    {
      image: "104.jpg",
      name: "Aunnop  Chatkhamchucharoen",
      Sid: "62130500104",
      work: "Databases , Docker"
    },
    {
      image: "112.jpg",
      name: "Thitikorn  Panyawachirayan",
      Sid: "62130500112",
      work: "Frontend"
    },
    {
      image: "132.jpg",
      name: "Athipat  Pingwong",
      Sid: "62130500132",
      work: "Backend , Dev-Ops"
    }
  ]
    }
  },
  methods:{
  //  async getProfile() {
  //       try {
  //         const res = await fetch('http://localhost:5000/Profile')
  //         const data = await res.json()
  //         return data
          
  //       } catch (error) {
  //         return error
  //       }
  //     }
  }
  // async created() {
  //       this.member = await this.getProfile()
  // }
}
</script>


<style>
</style>
