/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // dark shades of primary color:
      "primary-1": "hsl(22, 28%, 21%)",
      "primary-2": "hsl(22, 28%, 29%)",
      "primary-3": "hsl(22, 28%, 37%)",
      "primary-4": "hsl(22, 28%, 45%)",
      // primary/main color:
      "primary-5": "hsl(22, 31%, 52%)",
      // lighter shades of primary color:
      "primary-6": "hsl(22, 31%, 60%)",
      "primary-7": "hsl(22, 31%, 67%)",
      "primary-8": "hsl(20, 31%, 74%)",
      "primary-9": "hsl(22, 31%, 81%)",
      "primary-10": "hsl(22, 31%, 88%)",
      /* darkest grey - used for headings */
      "grey-1": "hsl(209, 61%, 16%)",
      "grey-2": "hsl(211, 39%, 23%)",
      "grey-3": "hsl(209, 34%, 30%)",
      "grey-4": "hsl(209, 28%, 39%)",
      /* grey used for paragraphs */
      "grey-5": "hsl(210, 22%, 49%)",
      "grey-6": "hsl(209, 23%, 60%)",
      "grey-7": "hsl(211, 27%, 70%)",
      "grey-8": "hsl(210, 31%, 80%)",
      "grey-9": "hsl(212, 33%, 89%)",
      "grey-10": "hsl(210, 36%, 96%)",
      white: "#fff",
      "red-dark": "hsl(360, 67%, 44%)",
      "red-light": "hsl(360, 71%, 66%)",
      "green-dark": "hsl(125, 67%, 44%)",
      "green-light": "hsl(125, 71%, 66%)",
      black: "#222",
    },
    extend: {
      gridTemplateColumns: {
        "for-product": "200px 1fr",
        "for-sort": "auto auto 1fr auto",
        "for-list": "auto 1fr",
        "for-info": "125px 1fr",
        "for-nav": "auto 1fr auto",
        "for-cart-color": "125px 1fr",
      },
      boxShadow: {
        "single-product-image-gallary": "0px 0px 0px 2px hsl(22, 31%, 52%)",
      },
    },
  },
  plugins: [],
};
