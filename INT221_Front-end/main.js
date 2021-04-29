const app = Vue.createApp( {
    data() {
        return {


            showProfile : false,
            showGallery : true

 
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
        }
    },



    computed: {


    }

}
)