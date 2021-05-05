<template>
 <div class='m-4 w-1/2'>
      <form @submit.prevent='checkForm' method="post">
        <div class='rounded bg-gray-100 p-5'>
            <div class='grid grid-cols-2 mb-4' >
                <label for="fname">Product code:</label>   <input placeholder="Product code" class='border-2' type="text"    id=""    >
                <label for="lname">Product name:</label>   <input placeholder="Product name" class='border-2' type="text"    id=""    >
                <label for="Email">Price:</label>          <input placeholder="Price"        class='border-2' type="number"  id=""    >
                <label for="age">Date:</label>             <input placeholder="DD/MM/YYYY"   class='border-2' type="date"    id=""    >
            </div>
          
        </div>

       
        <p>brand : </p>
        <input type="hidden" id=""  value="" >
            <select class='border-2  mx-4'>
            <option v-for="brands in brand_list" v-bind:key="brands">
                {{brands.brand}}
            </option>
            </select>
      <p>color : </p>
      <div v-for="colors in color_list" v-bind:key="colors" class='flex flex-row'>
            <div>
               <label> <input type="checkbox" id="color"  value="colors.color_id"> {{ colors.color }}</label>
            </div>
      </div>
        <p>description </p>
          


     

        <input class='border-2 p-2 bg-green-300' type="submit" value="Submit">
      </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      color_list: [
        { color_id: 1, color: "red" },
        { color_id: 2, color: "blue" },
        { color_id: 3, color: "white" },
      ],

      brand_list: [
        { brand_id: 1, brand: "samsung" },
        { brand_id: 2, brand: "vivo" },
        { brand_id: 3, brand: "xiaomi" },
      ],
    };
  },
};
</script>


<style>
</style>
