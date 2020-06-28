const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "One can never have enough of these.",
    image: "./assets/vmSocks-green.jpg",
    link: "https://www.google.com/",
    inStock: false,
    onSale: true,
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [{ variantId: 2234, variantColor: "green", variantImage: "./assets/vmSocks-green.jpg"}, { variantId: 2235, variantColor: "blue", variantImage: "./assets/vmSocks-blue.jpg"}],
    sizes: ["Small", "Medium", "Large"],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (variantImage) {
      this.image = variantImage;
    },
    removeFromCart: function () {
      if (this.cart === 0) return;
      this.cart -= 1;
    }
  }
});