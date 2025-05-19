import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {
      screens: {
        'mobile': '320px',
        'tablet': '660px',
        'laptop': '1024px',
        'desktop': '1280px',
        'mobile-max': { max: '319px' },
        'tablet-max': { max: '659px' },
        'laptop-max': { max: '1023px' },
        'desktop-max': { max: '1279px' },
      }
     },
   },
   plugins: [],
 });
 