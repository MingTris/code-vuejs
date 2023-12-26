<template>
  <div class="products-block">
    <div v-for="product in categories" :key="product.name">
      <router-link :to="{ name: 'product.category', params: { category: product.name } }">
        <div class="product" :style="{ backgroundImage: 'url(' + product.imageUrl + ')' }">
          {{ product.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import products from "../../data/data";
export default {
  data() {
    return {
      productList: products,

      categories: [
        {
          name: "Củ, sạc",
          imageUrl: "/images/categories/cusac.jpeg",
        },

        {
          name: "Tai nghe",
          imageUrl: "/images/categories/tainghe.jpeg",
        },

        {
          name: "Sạc dự phòng",
          imageUrl: "/images/categories/sacduphong.jpeg",
        },

        {
          name: "Ốp lưng",
          imageUrl: "/images/categories/oplung.jpeg",
        },
      ],
    };
  },

  // methods: {
  //   navigateToCategory(category) {
  //     this.$router.push({ name: "allProducts", params: { category } });
  //   },
  // },
  // methods: {
  //   filteredCategory() {
  //     this.products.filter( e => { e.});
  //   },
  // },
};
</script>

<style scoped>
.products-block {
  display: flex;
  justify-content: center;
  gap: 40px;
  height: 400px;
  background-color: white;
  margin-top: 100px;
}

.product {
  display: flex;
  height: 250px;
  width: 250px;
  background-size: cover;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: x-large;
  font-weight: bold;
}
</style>
