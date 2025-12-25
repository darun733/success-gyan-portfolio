export default {
    // darkMode: 'media',
    darkMode: 'class',
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
              colors: {
                brand: { primary:"#2F6FED" },
              },
              fontFamily: {
                poppins: ['Poppins'],
              },
               boxShadow: {
                soft: "0px 0px 22.2px 0px rgba(0, 0, 0, 0.11)",
              },
        },
    },
    plugins: [],
};
