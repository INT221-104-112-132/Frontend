<template>
<div class="fixed top-0 z-50 bg-white w-full mt-14">
  <div class='relative pb-8 border-b-2 border-black text-xl mt-2 ' >
    <div class='inline-block '>
      <p class='inline-block mx-4'> filter</p>
      <select class='border-2  mx-4' v-model="fbrand">
        <option disabled value="">Brand</option>
        <option v-for="brands in  brandList" v-bind:key="brands">
          {{brands.brand}}
        </option>
      </select>
      <button class='text-sm mx-4 border-4 p-1 rounded-lg' @click="clearf">clear filter</button>
    </div>

    <div class='inline-block absolute right-0   mr-20'>
        <input  v-model="inputTask" @keyup.enter="search"  placeholder="Enter the product name for searching " class='p-2 border-2 w-96'/>
        <button class='mx-4 border-4 p-2 rounded-lg' @click="clear">cancel</button>
    </div>

    <div id='ed' v-show="hasedit"  class='mt-6 border-t-2 border-black'>
      <EditProduct :toedit="toedit" :colorList="colorList" :brandList="brandList" @end = "finishEdit"></EditProduct>
    </div>
  </div>
</div>

<div class='my-2 relative'>
  <p class='text-3xl inline-block'>Product List</p>
</div>

<div v-for="task in search" v-bind:key="task"  class="grid grid-cols-1 gap-1 mt-4">
  <div class='border-2 relative'>
    <img :src="task.image"  class="float-left h-64 w-64 m-4"  />
    <div class='grid grid-cols-3 text-2xl'>
      <p>Product name : {{ task.name }}</p>
      <p>Price : {{ task.price }}</p>
      <p>Manufacture date : {{ task.date }}</p>
      <p>Brand : {{ task.brand }}</p>
      <div  class="col-span-2">
        <p>Color :  
          <span v-for="c in task.color" :key='c'>
            {{ c.color }} &nbsp;
          </span>
        </p>
      </div>
    </div>  

    <div class='text-2xl'>
      <p >Description  </p>
      <p>{{ task.description }}</p>
    </div>

    <div class='absolute right-0 bottom-0 m-4'>
      <button class='inline-block border-2 py-2 px-4 bg-green-400' @click="edit(task)">  Edit</button>
      <button class='inline-block mx-4 border-2 p-2 bg-red-400' @click="deleteProduct(task.id,task.name)">Delete</button>
    </div>

  </div>

</div>
  
</template>

<script>
import EditProduct from '../components/EditProduct.vue'

export default {
  components:{
    EditProduct
  }, 

  data() {
    return {
      hasedit: false,
      toedit:[],
      inputTask:'',
      fbrand:'',
      product:[],
      colorList:[],
      brandList:[]
    }
  },

  methods: {

    clear(){
      this.inputTask = ''
    },

    clearf(){
      this.fcolor = ''
      this.fbrand = ''
    },

    edit(task){
      this.toedit = task
      this.hasedit = true
    },

   async finishEdit(){
      this.hasedit = false
      this.product = await this.getProduct()
    },

    async deleteProduct(id,name){
      if(this.hasedit){
        alert('please finish editing')
      }
      else{
        if(confirm(`Are you srue to delete product name ${name}`)){
          try{
            await fetch(`http://localhost:5000/product/delete/${id}`,{
              method: 'DELETE'
            })
            this.product = this.product.filter(product => product.id !== id)

          }catch(error){
            alert(error)
          }
         }
      }
    },

    async getProduct() {
      try {
        const res = await fetch('http://104.215.187.12:3000/product' )
        const data = await res.json()
        return data
      } catch (error) {
          console.log(error)
        }
    },

    async getColorList() {
      try {
        const res = await fetch('http://104.215.187.12:3000/color')
        const data = await res.json()
        return data
      } catch (error) {
          console.log(error)
      }
    },

    async getBrandList() {
      try {
        const res = await fetch('http://104.215.187.12:3000/brand')
        const data = await res.json()
        return data
      } catch (error) {
          console.log(error)
      }
    }
    
  },
   
  computed: {
    search() {
      let g = this.product
      if (this.inputTask == '' && this.fbrand == '') {
        return g
      } else {
          if(this.inputTask !== ''){
            g = g.filter(n => n.name.toLowerCase().includes(this.inputTask.toLowerCase()))
          }
          if(this.fbrand !== ''){
            g = g.filter(n => n.brand.toLowerCase().includes(this.fbrand.toLowerCase()))
          }
          return g
        }
    }
  },

  async created() {
    this.product = await this.getProduct()
    this.colorList = await this.getColorList()
    this.brandList = await this.getBrandList()
  }
}

</script>