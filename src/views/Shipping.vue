<template>
    <v-container class="page">
        <v-row>
            <v-col cols="8">
                <Shipping />
            </v-col>
            <v-col cols="4">
                <Summary />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Shipping from "../components/Payment/ShippingInfo.vue";
import Summary from "../components/Payment/Summary.vue";


export default {
    components: { Shipping, Summary },
}

</script>

<style scoped>
.page {
    margin-top: 100px;
}
</style>