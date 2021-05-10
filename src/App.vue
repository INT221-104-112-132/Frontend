<template>
  <div class="fixed z-50 w-full">

  <div class="bg-black p-4">

       <router-link to="/product"     class='bar' >Product</router-link>
       <router-link to="/team"        class='bar ' >Profile</router-link>
       <router-link to="/Add_Product" class='bar ' >Add Product</router-link>

  </div>
</div>
<div class="pt-20">
<router-view ></router-view>
</div>

 
 
<!-- <button @click="check">check</button> -->

<!-- <span>For test <span class="bg-productColor-2 border-1 py-1 px-4"></span> </span> -->


</template>

<script>


export default {
  name: 'App',

  data(){
    return{
      url:'http://localhost:5000',
      showGallery: true,
      showProfile: false,
      showEdit:false,
      toEdit:[],
      newData:[],
      member:[],
      product:[],
      colorList:[],
      brandList:[],
    }
  },

  methods: {
    check(){
        alert(this.colorList)
    },

  }

}
</script>

<style>

</style>
