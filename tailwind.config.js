module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
          sea : '#1F1E33',

          productColor:{
            1:'#FFFFFF',
            2:'#000000',
            3:'#FF0000',
            4:'#0000FF',
            5:'#FFFF00',
            6:'#008000',
            7:'#FFA500',
            8:'#FFD700',
            9:'#C0C0C0',
            10:'#808080',
            default:'#FFFFFF'
  
          }
          
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
