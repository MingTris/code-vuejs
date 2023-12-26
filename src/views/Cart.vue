<template>
  <div class="title">Giỏ hàng của tôi</div>
  <div v-if="products.length > 0">
    <v-container class="item-container">
      <v-row class="list-title">
        <v-col class="title-left"> Sản phẩm</v-col>
        <v-col cols="1"> Giá </v-col>
        <v-col cols="2"> Số lượng </v-col>
        <v-col cols="1"> Tổng cộng </v-col>
      </v-row>
      <v-row class="item-list" v-for="item in products" :key="item.name">
        <v-col>
          <v-row class="item">
            <img class="image" :src="item.imageUrl" />
            <div>{{ item.name }}</div>
          </v-row>
        </v-col>
        <v-col cols="1">{{ item.price }}</v-col>
        <v-col cols="2" class="quantity-control">
          <div class="counter" @click="decrementItemQuantity(item)">-</div>
          <div class="quantity">{{ item.quantity }}</div>
          <div class="counter" @click="incrementItemQuantity(item)">+</div>
        </v-col>
        <v-col cols="1">{{ item.price * item.quantity }}</v-col>
        <font-awesome-icon icon="fa-solid fa-trash" class="trash" @click="deleteItem(item.id)" />
      </v-row>
    </v-container>

    <v-container class="pay-container">
      <v-row justify="end">
        <v-col cols="4" class="pay">Tổng phụ thu :</v-col>
        <v-col cols="2" class="pay-amount">${{ subtotal }}</v-col>
      </v-row>

      <v-row justify="end">
        <v-col cols="4" class="pay">Shipping :</v-col>
        <v-col cols="2" class="pay-amount">Miễn phí</v-col>
      </v-row>

      <v-row justify="end">
        <v-col cols="4" class="total">Tổng giá tiền :</v-col>
        <v-col cols="2" class="total-amount">${{ total }}</v-col>
      </v-row>

      <v-row justify="end" class="checkout-button">
        <router-link to="/shipping">
          <v-btn color="black" :disabled="products.length === 0" @click="setCheckOutAmount([subtotal,total])">Thanh toán</v-btn>
        </router-link>
      </v-row>
    </v-container>
  </div>
  <div v-else class="empty">
    Giỏ hàng của bạn hiện đang trống.
    <div class="button-container">
      <router-link :to="{
        name: 'product.category',
        params: { category: 'All Products' },
      }">
        <v-btn class="shopnow-button">SHOP NOW</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash);

import { mapState, mapMutations } from "vuex";

export default {

  components: {
    FontAwesomeIcon,
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
    ...mapMutations([
      "deleteItem",
      "incrementItemQuantity",
      "decrementItemQuantity",
      "setCheckOutAmount"
    ]),
  },

  computed: {
    ...mapState({
      products: "items",
    }),

    subtotal() {
      return this.products.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
    total() {
      return this.subtotal;
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 50px;
  margin-top: 130px;
}

.list-title {
  font-weight: bold;
  border-bottom: 0.8px solid;
  border-color: #e5dcd2;
  text-align: center;
}

.title-left {
  text-align: left;
}

.item {
  align-items: center;
  gap: 20px;
}

.image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.item-list {
  position: relative;
  align-items: center;
  margin-top: 20px;
  text-align: center;
}

.item-container {
  width: 60%;
  border-bottom: 0.8px solid;
  border-color: #e5dcd2;
}

.pay-container {
  width: 60%;
  margin-top: 50px;
  margin-bottom: 100px;
}

.pay {
  border-bottom: 0.8px solid;
  border-color: #e5dcd2;
  font-weight: bold;
}

.pay-amount {
  text-align: end;
  border-bottom: 0.8px solid;
  border-color: #e5dcd2;
}

.total {
  font-weight: bold;
}

.total-amount {
  text-align: end;
  font-size: x-large;
  font-weight: bold;
}

.checkout-button {
  margin-top: 100px;
}

.trash {
  position: absolute;
  right: -50px;
  cursor: pointer;
  color: lightgray;
}

.trash:hover {
  color: black;
}

.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.quantity {
  display: flex;
  align-items: center;
  justify-content: center;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: grey;
}

.empty {
  text-align: center;
  margin-bottom: 200px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.shopnow-button {
  height: 48px;
  width: 150px;
  background-color: #444444;
  color: white;
  letter-spacing: 1.5px;
  margin-top: 50px;
}
</style>
