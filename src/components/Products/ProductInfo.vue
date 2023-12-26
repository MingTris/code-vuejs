<template>
  <div class="product-info">
    <div>
      <v-img
        class="ml-auto mr-auto mt-auto mb-auto"
        :width="400"
        :height="400"
        cover
        :src="productDetail.imageUrl"
      ></v-img>
    </div>
    <div>
      <v-card class="card" width="400" height="400" variant="outlined">
        <v-card-item>
          <v-card-title class="card-title">
            {{ productDetail.name }}
          </v-card-title>
        </v-card-item>

        <v-card-text class="card-text">${{ productDetail.price }}</v-card-text>

        <v-card-actions class="card-actions">
          <div class="quantity-control">
            <div class="minus" @click="decrementQuantity">-</div>
            <div class="quantity">{{ quantity }}</div>
            <div class="plus" @click="incrementQuantity">+</div>
          </div>
          <v-btn class="button" @click="addToCart(newItem)">Thêm giỏ hàng</v-btn>
        </v-card-actions>

        <v-card-text class="card-text">
          {{ productDetail.description }}
        </v-card-text>
      </v-card>
    </div>
  </div>
 
</template>

<script>
import products from "../../data/data";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    ...mapMutations(["addToCart"]),
  },
  computed: {
    productId() {
      return parseInt(this.$route.params.id);
    },
    productDetail() {
      return products.find((product) => product.id === this.productId);
    },
    newItem() {
      return { ...this.productDetail, quantity: this.quantity };
    },
  },
};
</script>

<style scoped>
.product-info {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 100px;
  margin-top: 180px;
}

.details {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 100px;
}

.detail-title {
  font-size: 20px;
  font-weight: bold;
}

.button {
  color: white;
  background-color: #444444;
}

.card {
  border: none;
}
.card-title {
  font-weight: bold;
}
.card-text {
  margin-top: 20px;
}
.card-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  width: 120px;
}

.minus {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.plus {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity {
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
