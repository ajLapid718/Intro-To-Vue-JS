const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "One can never have enough of these.",
    image: "./assets/vmSocks-green.jpg",
    link: "https://www.google.com/",
    inStock: false,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [{ variantId: 2234, variantColor: "green"}, { variantId: 2235, variantColor: "blue"}]
  }
});