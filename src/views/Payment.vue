<template>
    <v-container class="page">
        <v-row>
            <v-col cols="8">
                <PaymentInfo />
            </v-col>
            <v-col cols="4">
                <Summary />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PaymentInfo from "../components/Payment/PaymentInfo.vue";
import Summary from "../components/Payment/Summary.vue";


export default {
    components: { PaymentInfo, Summary },
}

</script>

<style scoped>
.page {
    margin-top: 100px;
}
</style>