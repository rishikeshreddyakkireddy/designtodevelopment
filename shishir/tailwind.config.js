module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors:{
            yellow:{
              light:'#f2eae3'
            },
            black:{
              dark:'#000000'
            },
            white:'#FFFFFF'
      },
      extend: {
        width:{
          '1/7': '14.2857143%',
           '2/7': '28.5714286%',
           '3/7': '42.8571429%',
           '4/7': '57.1428571%',
           '5/7': '71.4285714%',
           '6/7': '85.7142857%',
        }
      },
      
      //     primary:'#f2eae3'
      
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  
  