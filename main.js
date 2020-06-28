const app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    brand: "Vue Mastery",
    description: "One can never have enough of these.",
    selectedVariant: 0,
    // image: "./assets/vmSocks-green.jpg",
    link: "https://www.google.com/",
    // inStock: false,
    // onSale: false,
    // inventory: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [{ variantId: 2234, variantColor: "green", variantImage: "./assets/vmSocks-green.jpg", variantQuantity: 100}, { variantId: 2235, variantColor: "blue", variantImage: "./assets/vmSocks-blue.jpg", variantQuantity: 0}],
    sizes: ["Small", "Medium", "Large"],
    onSale: true,
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1;
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
    removeFromCart: function () {
      if (this.cart === 0) return;
      this.cart -= 1;
    }
  },
  computed: {
    title: function () {
      return this.brand + " " + this.product;
    },
    image: function () {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock: function () {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
});