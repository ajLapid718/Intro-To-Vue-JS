Vue.component("reviews", {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },

  template: `
    <ul>
      <li v-for="review in reviews">
        <p>{{ review.name }}</p>
        <p>{{ review.review }}</p>
        <p>{{ review.rating }}</p>
      </li>
    </ul>
  `
})

Vue.component("product-review", {
  template: `
    <form v-on:submit.prevent="onSubmit">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" placeholder="Name"></input>

      <label for="review">Review:</label>
      <textarea id="review" v-model="review" placeholder="Review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>

      <p>

      <button>Submit</button>
    </form>
  `,
  data: function () {
    return {
      name: null,
      review: null,
      rating: null
    }
  },
  methods: {
    onSubmit: function () {
      const productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }

      this.$emit("add-product-review", productReview);

      this.name = null;
      this.review = null;
      this.rating = null;
    }
  }
})

Vue.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details" v-bind:key="detail">{{ detail }}</li>
    </ul>
  `
})

Vue.component("product", {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `<div class="product">
    <div class="product-image">
        <img v-bind:src="image">
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <p>{{ sale }}</p>
        <p>Shipping: {{ shipping }}</p>
        <p v-show="inStock">In Stock</p>
        <!-- <span v-if="onSale">On Sale!</span> -->
        <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p> -->
        <p v-show="!inStock" v-bind:class="{ 'out-of-stock': !inStock }">Out of Stock</p>

        <product-details v-bind:details="details"></product-details>

        <div v-for="(variant, index) in variants" 
            v-bind:key="variant.variantId"
            class="color-box"
            v-bind:style="{ backgroundColor: variant.variantColor }"
            v-on:mouseover="updateProduct(index)">
        </div>

        <ul>
          <li v-for="size in sizes" v-bind:key="size">{{ size }}</li>
        </ul>

        <!-- wherever you place the v-for directive, that will be the element that will be the element the loop will re-create -->

        <div class="buttons-container">
          <button class="product-button"
                  v-on:click="addToCart"
                  v-bind:disabled="!inStock"
                  v-bind:class="{ disabledButton: !inStock }">
                  Add To cart
          </button>
          <button class="product-button" v-on:click="removeFromCart">Remove From Cart</button>
        </div>

        <reviews v-bind:reviews="reviews"></reviews>

        <p>

        <product-review v-on:add-product-review="addProductReview"></product-review>

        <p>

        <a v-bind:href="link">Click Here For More Information</a>
      </div>
  </div>`,
  data: function () {
    return {
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
      reviews: []
    }
  },
  methods: {
    addToCart: function () {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    updateProduct: function (index) {
      this.selectedVariant = index;
    },
    removeFromCart: function () {
      this.$emit("purge-from-cart", this.variants[this.selectedVariant].variantId);
    },
    addProductReview: function (productReview) {
      this.reviews.push(productReview);
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
    },
    sale: function() {
      if (this.onSale) {
        return this.title + " " + "are on sale!";
      }
      else {
        return this.title + " " + "are not on sale!"
      }
    },
    shipping: function () {
      if (this.premium) {
        return "Free"
      }
      else {
        return "$2.99";
      }
    }
  }
})

const app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart: function (id) {
      this.cart.push(id);
    },
    purgeFromCart: function (id) {
      this.cart.splice(this.cart.lastIndexOf(id), 1);
    }
  }
});