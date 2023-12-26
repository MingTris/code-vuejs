<template>
  <div class="best-sellers-block">
    <div class="title">Best Sellers Của Shop</div>
    <div class="product">
      <div v-for="product in products" :key="product.name">
        <router-link :to="{ name: 'product.info', params: { id: product.id } }">
          <v-img
            class="image"
            :width="250"
            :height="250"
            cover
            :src="product.imageUrl"
          >
          </v-img>
        </router-link>
        <router-link :to="{ name: 'product.info', params: { id: product.id } }">
          {{ product.name }}
        </router-link>
        <p>{{ formatPrice(product.price) }}</p>
      </div>
    </div>
    <div class="button-container">
      <router-link
        :to="{
          name: 'product.category',
          params: { category: 'All Products' },
        }"
      >
        <v-btn class="button">SHOP NOW</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 7,
          category: "Sạc dự phòng",
          name: "Pin sạc dự phòng Samsung EB P530",
          imageUrl: "/images/products/sacduphong1.jpeg",
          price: 600,
        },

        {
          id: 2,
          category: "Củ, sạc",
          name: "Củ sạc Samsung Type-C 45W",
          imageUrl: "/images/products/cusacsamsung.jpeg",
          price: 41,
        },

        {
          id: 3,
          category: "Củ, sạc",
          name: "Sạc nhanh 20W Apple MHJE3ZA",
          imageUrl: "/images/products/sacnhanhip.jpeg",
          price: 21,
        },
      ],
    };
  },

  methods: {
    formatPrice(value) {
      return "$" + value.toLocaleString();
    },
  },
};
</script>

<style scoped>
.best-sellers-block {
  height: 650px;
  background-color: white;
}

.title {
  text-align: center;
  font-size: 50px;
  margin-bottom: 50px;
}

.product {
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 80px;
}

.image {
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.button {
  height: 48px;
  width: 150px;
  background-color: #444444;
  color: white;
  letter-spacing: 1.5px;
}
</style>
