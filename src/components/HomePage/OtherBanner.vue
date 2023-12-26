<template>
  <div class="banner">
    <div class="collection">
      <div class="collection-pearl">Sản phẩm mới</div>
      <div class="content">Hàng chính hàng.</div>
      <div class="button-container">
        <router-link :to="{
          name: 'product.category',
          params: { category: 'All Products' },
        }">
          <v-btn class="button">MUA NGAY</v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.banner {
  height: 600px;
  background-image: url("/images/banners/banner5.jpeg");
  background-size: cover;
  background-position: center;
}

.collection {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 30px;
}

.collection-pearl {
  color: white;
  font-size: 50px;
}

.content {
  color: white;
  font-size: 20px;
  font-family: "Roboto";
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
}
</style>
