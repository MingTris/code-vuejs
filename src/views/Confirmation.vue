<template>
    <v-container class="page">
        <v-row>
            <v-col cols="8">
                <Confirmation />
            </v-col>
            <v-col cols="4">
                <Summary />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Confirmation from "../components/Payment/ConfirmationInfo.vue"
import Summary from "../components/Payment/Summary.vue";


export default {
    components: { Confirmation, Summary },
}

</script>

<style scoped>
.page {
    margin-top: 100px;
}
</style>