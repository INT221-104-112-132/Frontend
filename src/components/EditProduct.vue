<template>
<div v-show="!sure" class="mt-4 ml-4">
  <p>Edit product name {{ toedit.name }}</p>
  <button @click="startEdit" class='border-2 p-2 bg-green-300 px-2'>yes</button>
  <button @click="end" class='border-2 p-2 bg-gray-300'>cancel</button>
</div>
<div class="flex">
  <div class='m-4 w-1/2 relative' v-show="sure" >
    <form @submit.prevent='checkForm' method="post">
      <div class='rounded bg-gray-100 p-5'>
        <div class='grid grid-cols-2 mb-4' >
          <label for="pname">Product name:</label>   <input placeholder="Product name" class='border-2' type="text"    id="pname"    v-model="pname">
          <label for="Price">Price:</label>          <input placeholder="Price"        class='border-2' type="number"  id="Price"    v-model="price">
          <label for="date">Manufacture date:</label>             <input placeholder="DD/MM/YYYY"   class='border-2' type="date"    id="date"    v-model="date">
       
          <label for="brand">Brand : </label>
        
            <select class='border-2  mx-4' v-model="brand" id='brand'>
              <option v-for="brands in brandList" :value="brands.brand" :key='brands'>
                {{brands.brand}}
              </option>
            </select>

          <p>Color : </p>
            <div class='grid grid-cols-2'>
              <div v-for="colors in colorList" :key='colors'>
                <input type="checkbox" id="color"  :value= 'colors' v-model="color">
                <label>{{ colors.color }}</label>
              </div>
            </div>
        
          <label for='des'>description </label>
            <textarea id="des" v-model="des" rows="4" cols="50" placeholder="Hello World" ></textarea>

            <div class="col-span-2">
              <label for="img" class="mr-2">Image</label>
              <input type="file" @change="selectFile" id='img' accept="image/*">
              <p class='text-sm'>if not change the image don't choose a file </p>
            </div>

          <div class='absolute right-0 bottom-0 mb-4 mr-4'>
            <input class='border-2 p-2 bg-green-300' type="submit" value="Submit" @click="editProduct(checkForm)">
            <button @click="end" class='border-2 p-2 bg-gray-300'>cancel</button>

          </div>
        </div> 
      </div>
    </form>
  
  </div>
<div>
    <div v-for="ms in error" :key="ms" class="text-red-400 m-4">
      * {{ ms }}
    </div>
  </div>
</div>
</template>

<script>
export default {
   props:{
    colorList: Array,
    brandList: Array,
    toedit: Array

  },  
  data() {
    return {
      sure:false,
      id: '',
      pname: '',
      price: '',
      date: '',
      des: '',
      brand: '',
      color: '',
      img: '',
      error:[]

    }
  },
  methods:{
    selectFile(event){
      this.task.img = event.target.files[0]
    },

    startEdit(){
      this.id= this.toedit.id,
      this.pname = this.toedit.name,
      this.price = this.toedit.price,
      this.date = this.toedit.date,
      this.des = this.toedit.description,
      this.brand = this.toedit.brand,
      this.color = this.toedit.color,
      this.img = this.toedit.image
      this.sure = true
    },
    checkForm(){
      let error=[]
      if(!this.pname){
          const e = 'Please enter product name'
          error.push(e)
        }
      if(!this.price){
          const e = 'Please enter product price'
          error.push(e)
        }
      if(!this.date){
          const e = 'Please enter date'
          error.push(e)
        }
      if(!this.brand){
          const e = 'Please choose brand'
          error.push(e)
        }
      if(!this.color[0]){
          const e = 'Please choose some color'
          error.push(e)
        }
      if(!this.des){
          const e = 'Please enter description'
          error.push(e)
        }
      if(!this.img){
          const e = 'Please choose image'
          error.push(e)
        }

        return error
    },


    async editProduct(cf){
      this.error = cf();
      if(!this.error[0]){
        try{
          await fetch(`http://localhost:5000/product/edit/${this.id}`,{
            method: 'PUT',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({
            image: this.img,
            name: this.pname,
            description: this.des,
            price: this.price,
            date: this.date,
            brand: this.brand,
            color: this.color
          })

        })
          
          this.sure = false
          this.$emit('end')
       
        }catch(error){
          alert(error)
        }
      }
       
    },

    end(){
      this.$emit('end')
      this.pname = ''
      this.price = ''
      this.date = ''
      this.des = ''
      this.brand = ''
      this.color = ''
      this.img = ''
      this.sure = false
      this.error = []
    }
},

}
</script>


<style>
</style>
