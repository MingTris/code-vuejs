<template>
  <div class="navbar">
    <div class="left-part">
      <router-link to="/">Trang chủ</router-link>

      <div class="text-center">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <router-link :to="{
              name: 'product.category',
              params: { category: 'All Products' },
            }" v-bind="props">
              Danh Mục Sản Phẩm
            </router-link>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <router-link :to="{
                name: 'product.category',
                params: { category: item.title },
              }">{{ item.title }}</router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    
    <router-link to="/" class="title">Phụ kiện Minh Trí</router-link>
    
    <div class="right-part">
      <router-link to="/login">Đăng nhập</router-link>
      <router-link to="/cart">
        <v-badge v-if="cartQuantity" :content="cartQuantity" floating color="#d16f02">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </v-badge>
        <font-awesome-icon v-else icon="fa-solid fa-cart-shopping" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import products from "../data/data";
import { mapGetters } from "vuex";

library.add(faCartShopping);

export default {
  data() {
    return {
      productList: products,
      items: [
        { title: "Tất cả sản phẩm" },
        { title: "Củ, sạc" },
        { title: "Tai nghe" },
        { title: "Sạc dự phòng" },
        { title: "Ốp lưng" },
      ],
    };
  },

  components: {
    FontAwesomeIcon,
  },

  computed: {
    ...mapGetters(["cartQuantity"]),
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 80px;
  width: 100%;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-color: #e5dcd2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: white;
}

.left-part {
  display: flex;
  flex: 1;
  gap: 10px;
}

.title {
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
}

.right-part {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  display: flex;
  gap: 10px;
}
</style>
