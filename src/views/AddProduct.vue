<template>
<div class=""></div>
  <div class='m-4 w-1/2 relative'>
    <form @submit.prevent='checkForm' method="post">
      <div class='rounded bg-gray-100 p-5'>
        <div class='grid grid-cols-2 mb-4' >
          <label for="lname">Product name:</label>   <input placeholder="Product name" class='border-2' type="text"    id=""    v-model="pname">
          <label for="Email">Price:</label>          <input placeholder="Price"        class='border-2' type="number"  id=""    v-model="price">
          <label for="age">Date:</label>             <input placeholder="DD/MM/YYYY"   class='border-2' type="date"    id=""    v-model="date">
       
          <label>Brand : </label>
        
            <select class='border-2  mx-4' v-model="brand">
              <option v-for="brands in brandList" :value="brands.brand" :key='brands'>
                {{brands.brand}}
              </option>
            </select>

          <p>Color : </p>
            <div class="grid grid-cols-2">
              <div v-for="colors in colorList" :key='colors' >
                <input type="checkbox" id="color"  :value= 'colors' v-model="color">
                <label>{{ colors.color }}</label>
              </div>
            </div>
           
        
          <p>description </p>
            <textarea id="des" v-model="des" rows="4" cols="50" placeholder="Hello World" ></textarea>
         
          <input type="file" @change="selectFile" id='test'>


          <div class='absolute right-0 bottom-0 mb-4 mr-4'>
            <input class='border-2 p-2 bg-green-300' type="submit" value="Submit" @click="addProduct">
          </div>
        </div> 
      </div>
    </form>
  </div>


<button @click="check(checkForm)">check</button>
     
</template>

<script>
// const constraints = {
//     pname: {
//         presence: true,
//     },
//     price: {
//         presence: true,
//     },
//     age: {
//         presence: true,
//     },
//     date: {
//         presence: true,
//     },
//     des: {
//         presence: true,
//     },
//     brand: {
//         presence: true,
//     },
//     color: {
//         presence: true,
//     },
//     img: {
//         presence: true,
//     },
   
// }


export default {
   props:{   
    edit: Array
  },  
  data() {
    return {
      colorList: [],
      brandList: [],
      pname: '',
      price: '',
      date: '',
      des: '',
      brand: '',
      color:[],
      img: '',
      error:[]
    }
  },
  methods:{
   check(cf){
     
        alert(cf())
      
    },
    //document.forms[0][8].files[0]
// .document.forms[0].input
    selectFile(event){
      console.log(event)
      this.img = event.target.files[0]
    },

    checkForm(){
      let error=[]
      if(!this.pname){
          const e = 'Please enter product name'
          error = [...this.error,e]
        }
      if(!this.price){
          const e = 'Please enter product price'
          error = [...this.error,e]
        }
      if(!this.date){
          const e = 'Please enter date'
          error = [...this.error,e]
        }
      if(!this.brand){
          const e = 'Please choose brand'
          error = [...this.error,e]
        }
      if(!this.color[0]){
          const e = 'Please choose some color'
          error = [...this.error,e]
        }
      if(!this.des){
          const e = 'Please enter description'
          error = [...this.error,e]
        }
      if(!this.img){
          const e = 'Please choose image'
          error = [...this.error,e]
        }

        return error
    },



     async getColorList() {
        try {
          const res = await fetch('http://localhost:5000/colorList')
          const data = await res.json()
          return data
        } catch (error) {
            console.log(error)
        }
      },
       async getBrandList() {
        try {
          const res = await fetch('http://localhost:5000/brand_list')
          const data = await res.json()
          return data
        } catch (error) {
            console.log(error)
        }
      },

    async addProduct(){
        try{ 
        await fetch('http://localhost:5000/Product',{
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stringify({
            image: this.img,
            name: this.pname,
            description:this.des,
            price:this.price,
            date:this.date,
            brand:this.brand,
            color:this.color
          })

        })

        
        alert("success")
        this.pname = ''
        this.price = ''
        this.date = ''
        this.des = ''
        this.brand = ''
        this.color = []
        this.img = null
        // document.forms[0][8].files[0] = null

        }

        catch(error){
          alert(error);
        }
      }
  },
  async created() {
        this.colorList = await this.getColorList()
        this.brandList = await this.getBrandList()
  }
};
</script>


<style>
</style>
