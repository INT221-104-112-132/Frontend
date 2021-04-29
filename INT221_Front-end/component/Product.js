app.component('product', {
  props: {},

  template:
    /*html*/
    `

    <div class='relative  pb-4 border-b-2 border-black text-xl'>
      <button class='static left-0  border-4 p-2 rounded-lg bg-green-400 ml-4 '>Add product</button>

      <div class='inline-block absolute right-0   mr-20'>
        <input v-model="text"  placeholder="Please enter text for searching product"class='p-2 border-2 w-96'/>
        <button class='mx-4 border-4 p-2 rounded-lg'>Search<button>
      </div>

    </div>

    <div class='my-2 relative'>
      <p class='text-3xl inline-block'>Product List</p>
       
      <div class='inline-block absolute right-0 mr-8'>
        <p class='inline-block mx-4'> filter</p>

        <select class='border-2  mx-4'>
          <option v-for="colors in color_list">
            {{colors.color}}
          </option>
        </select>

        <select class='border-2  mx-4'>
          <option v-for="brands in brand_list">
            {{brands.brand}}
          </option>
        </select>
      </div>
  

    </div>

  <div v-for="task in product" class="grid grid-cols-1 gap-1 mt-4">
    <div class='border-2 relative'>
      <img :src="task.image"  class="float-left h-64 w-64 m-4"  />
      <div class='grid grid-cols-3 text-2xl'>
        <p>code : {{ task.code }}</p>
        <p>name : {{ task.name }}</p>
        <p>price : {{ task.price }}</p>
        <p>date : {{ task.date }}</p>
        <p>brand : {{ task.brand }}</p>
        <p>color : {{ task.color }}</p>
        <p>description : {{ task.description }}</p>
      </div>  
      <div class='absolute right-0 bottom-0 m-4'>
        <button class='inline-block border-2 py-2 px-4 bg-green-400'>Edit</button>
        <button class='inline-block mx-4 border-2 p-2 bg-red-400'>Delete</button>
      </div>
    </div>

  </div>


  `,
  // 
  data() {
    return {

      color_list: [{color_id: 1, color:'red'},
      {color_id: 2, color: 'blue'},
      {color_id: 3, color: 'white'}],

      brand_list: [{brand_id: 1, brand:'samsung'},
      {brand_id: 2, brand: 'vivo'},
      {brand_id: 3, brand: 'xiaomi'}],



    
      product: [{
        image: './images/y.jpg',
        code:'1',
        name:'phone',
        price:'10000 $',
        date:'28-4-2021',
        color:'red',
        brand:'samsung',
        description:''
        
      },
      {
        image: './images/b.jpg',
        code:'',
        name:'',
        description:'',
        price:'',
        date:'',
        brand:'',
        color:''
      },
      {
        image: './images/w.jpg',
        code:'',
        name:'',
        description:'',
        price:'',
        date:'',
        brand:'',
        color:''
      },
      {
        image: './images/r.jpg',
        code:'',
        name:'',
        description:'',
        price:'',
        date:'',
        brand:'',
        color:''
      }
    ]

    }
  },
  methods: {
    

  }
})