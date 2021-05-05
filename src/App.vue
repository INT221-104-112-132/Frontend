<template>
  <div class="sticky z-50 top-0 mb-2">

  <div class="bg-black ">
       <button class='text-white  p-4 transition duration-500 ease-in-out  hover:bg-white hover:text-black ' v-on:click='displayGallery'>Gallery</button>
       <button class='text-white  p-4 transition duration-500 ease-in-out  hover:bg-white hover:text-black ' v-on:click='displayProfile'>Profile</button>

  </div>
</div>

  <div v-show ='showProfile'><profile :member="member"></profile></div>
  <div v-show ='showGallery'><product @delete="deleteProduct" :product="product" :colorList="color_list" :brandList="brandList"></product></div>
 
  <button @click="check">check</button>
</template>

<script>
import product from './components/Product.vue'
import profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    product,
    profile
  },
  data(){
    return{
      url:'http://localhost:5000',
      showGallery: true,
      showProfile: false,
      newData:[],
      member:[],
      product:[],
      colorList:[],
      brandList:[]
    }
  },

  methods: {
    displayProfile(){
      this.showGallery = false;
      this.showProfile = true;

      },
    displayGallery(){
      this.showGallery = true;
      this.showProfile = false;
    },
    check(){
    
      alert(this.product)
     
    },

    async deleteProduct(id){
      try{
        alert(id)
        await fetch(`http://localhost:5000/Product/${id}`,{
          method: 'DELETE'
        })
        this.product = this.product.filter(product => product.id !== id)

      }catch(error){
        alert(error)
      }


    },
  

      async addProduct(){
        try{
        const res = await fetch(this.url,{
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          body: JSON.stingify({
            image: 'src/components/w.jpg',
            code:'',
            name:'',
            description:'',
            price:'',
            date:'',
            brand:'',
            color:''
          })

        })

        const data = await res.JSON()
        this.newData=[...this.newData , data]
        }

        catch(error){
          alert(error);
        }
      },


      async getProduct() {
        try {
          const res = await fetch('http://localhost:5000/Product' )
          const data = await res.json()
          return data
        } catch (error) {
            console.log(error)
        }
      },
       async getProfile() {
        try {
          const res = await fetch('http://localhost:5000/Profile')
          const data = await res.json()
          return data
          
        } catch (error) {
          return error
        }
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
      }


  },

  async created() {
        this.member = await this.getProfile()
        this.product = await this.getProduct()
        this.colorList = await this.getColorList()
        this.brandList = await this.getBrandList()
  }
}
</script>

<style>
#app {
 
}
</style>
