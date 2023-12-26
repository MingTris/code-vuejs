<template>
    <div class="progress">
        <v-timeline direction="horizontal" side="end" truncate-line="both">
            <v-timeline-item size="x-small">
                <div class="text-h7">Giỏ hàng</div>
            </v-timeline-item>

            <v-timeline-item size="x-small">
                <div class="text-h7">Xác nhận</div>
            </v-timeline-item>

            <v-timeline-item size="x-small">
                <div class="text-h7">Thanh toán</div>
            </v-timeline-item>

            <v-timeline-item size="x-small">
                <div class="text-h7">Xác nhận đơn</div>
            </v-timeline-item>
        </v-timeline>
    </div>

    <v-container>
        <v-row>
            <v-col class="title">Xác nhận</v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row class="flex-column info" no-gutters>
            <div class="subtitle">Liên hệ</div>
            <div class="line"></div>
            <v-col>Họ và tên: {{ shippingInfo.fullName }}</v-col>
            <v-col>Số điện thoại: {{ shippingInfo.phoneNumber }}</v-col>
            <v-col>E-mail: {{ shippingInfo.email }}</v-col>

        </v-row>
        <v-row class="flex-column info" no-gutters>
            <div class="subtitle">Shipping</div>
            <div class="line"></div>
            <v-col>Quốc gia: {{ shippingInfo.city }}</v-col>
            <v-col>Tỉnh thành: {{ shippingInfo.district }}</v-col>
            <v-col>Địa chỉ: {{ shippingInfo.address }}</v-col>
            <v-col>Vận chuyển: Freeship</v-col>
        </v-row>
        <v-row class="flex-column info" no-gutters>
            <div class="subtitle">Thanh toán khi nhận hàng</div>
            <div class="line"></div>
            <v-col>{{ paymentInfo }}</v-col>
        </v-row>

    </v-container>

    <v-container class="total">
        <div>Tổng thu</div>
        <div>${{ total }}</div>
    </v-container>

    <v-container>
        <v-row justify="center" class="place-button">
            <router-link to="/completed"><v-btn color="black" @click="removeAll()">Xác nhận thông tin</v-btn></router-link>
        </v-row>
    </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState({
            products: "items",
            shippingInfo: "shipping",
            paymentInfo: "paymentMethod",
            total: (state) => state.amount[1]
        }),
    },
    methods: {
        ...mapMutations(["removeAll"])
    }
}

</script>

<style scoped>
.progress {
    margin-bottom: 50px;
    width: 50%;
}

.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
}



.info {
    margin-bottom: 30px;
}

.subtitle {
    font-size: 20px;
    font-weight: bold;
}

.total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 20px;
    background-color: #e5dcd2;
    width: 60%;
    margin-left: 5px;
}

.line {
    border-bottom: 0.8px solid #e5dcd2;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 60%;
}

.place-button {
    margin-top: 80px;
    margin-bottom: 100px;
}
</style>