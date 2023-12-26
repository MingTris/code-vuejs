<template>
  <div class="title">
    {{ categoryTitle }}
  </div>

  <v-container>
    <v-row class="product-row">
      <v-col cols="3" v-for="product in productDetail" :key="product.id">
        <router-link :to="{ name: 'product.info', params: { id: product.id } }">
          <v-img class="ml-auto mr-auto mt-auto mb-custom" :width="250" :height="250" cover :src="product.imageUrl"
            :alt="product.name"></v-img>
        </router-link>
        <router-link :to="{ name: 'product.info', params: { id: product.id } }">
          <div class="ml-auto mr-auto mt-auto mb-auto">
            {{ product.name }}
          </div>
        </router-link>

        <div class="ml-auto mr-auto mt-auto mb-auto">
          {{ formatPrice(product.price) }}
        </div>
      </v-col>
    </v-row>
  </v-container>
  <div class="text-center"></div>
</template>

<script>
import products from "../../data/data";

export default {
  data() {
    return {
      productList: products,
    };
  },

  methods: {
    formatPrice(value) {
      return "$" + value.toLocaleString();
    },
  },

  computed: {
    productDetail() {
      const category = this.$route.params.category;
      if (category && category !== "All Products") {
        return this.productList.filter(
          (product) => product.category === category
        );
      } else {
        return this.productList;
      }
    },
    categoryTitle() {
      const category = this.$route.params.category;
      const title = this.productList.find(
        (product) => product.category === category
      );
      return title ? title.category : "All Products";
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-image: url("/images/banners/banner2.jpeg");
  background-size: cover;
  background-position: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-top: 80px;
}

.mb-custom {
  margin-bottom: 20px;
}

.product-row {
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
