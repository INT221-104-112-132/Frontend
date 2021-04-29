app.component('profile', {
  
  props: {
  
  },

  template:
    /*html*/

    `
    <div v-for="task in member" class="flex pb-6 items-center">
      
      <img :src="task.image"  class="h-64 w-64 rounded-full"  />

      <div class="grid grid-cols-2 gap-1 justify-items-stretch">

        <p class="justify-self-center">ID :</p>
        <p>{{ task.id }}</p>
        <p class="justify-self-center">Name :</p>
        <p >{{ task.name }}</p>
        <p class="justify-self-center">Responsibility :</p>
        <p >{{ task.work }}</p>

      </div>
    </div>

    `,
  data() {
    return {

      member: [{
        image: './images/y.jpg',
        name: 'Aunnop  Chatkhamchucharoen',
        id: '62130500104',
        work: 'work 1'
      },
      {
        image: './images/b.jpg',
        name: 'Thitikorn  Panyawachirayan',
        id: '62130500112',
        work: 'work 2'
      },
      {
        image: './images/w.jpg',
        name: 'Athipat  Pingwong',
        id: '62130500132',
        work: 'work 3'
      }

    ]
      

    }
  },
  methods: {


  }

})
