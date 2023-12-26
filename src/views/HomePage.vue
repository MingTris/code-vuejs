<script>
import TopBanner from "../components/HomePage/TopBanner.vue";
import ProductsBlock from "../components/HomePage/ProductsBlock.vue";
import BestSeller from "../components/HomePage/BestSeller.vue";
import OtherBanner from "../components/HomePage/OtherBanner.vue";
import Series from "../components/HomePage/Series.vue";
import Slogan from "../components/HomePage/Slogan.vue";

export default {
  components: {
    TopBanner,
    ProductsBlock,
    BestSeller,
    OtherBanner,
    Series,
    Slogan,
  },
};
</script>

<template>
  <div>
    <TopBanner />
    <ProductsBlock />
    <BestSeller />
    <OtherBanner />
    <Series />
    <Slogan />
  </div>
</template>
