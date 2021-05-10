<template>
  <div class="fixed z-50 w-full">

    <div class="bg-black p-4">

      <router-link to="/product"     class='bar' >Product</router-link>
      <router-link to="/team"        class='bar' >Profile</router-link>
      <router-link to="/Add_Product" class='bar' >Add Product</router-link>

    </div>

  </div>

  <div class="pt-20">

    <router-view ></router-view>

  </div>

</template>

<script>

  export default {
    name: 'App',
  }

</script>