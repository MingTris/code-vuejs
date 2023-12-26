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

            <v-timeline-item size="x-small" dot-color="grey">
                <div class="text-h7 text-color-grey">Xác nhận đơn</div>
            </v-timeline-item>
        </v-timeline>
    </div>
    <v-container>
        <v-row>
            <v-col class="title">Thanh toán</v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-radio-group v-model="selectedPaymentMethod" inline>
            <v-radio class="radio" label="Thẻ tín dụng" value="Credit Card"></v-radio>
            <v-radio class="radio" label="thanh toán khi nhận hàng" value="PayPal"></v-radio>
        </v-radio-group>
    </v-container>
    <v-form @submit.prevent class="credit-card" v-if="selectedPaymentMethod === 'Credit Card'">
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field v-model="name" :rules="nameRules" label="Họ và tên" variant="underlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="formattedCardNumber" :rules="cardRules" label="Số thẻ" variant="underlined"
                        @input="formatCardNumber" @keypress="allowOnlyNumbers">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field v-model="expiration" :rules="expirationRules" label="Hết hạn (mm/yy)"
                        variant="underlined" @input="formatExpiration" @keypress="allowOnlyNumbers"></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field v-model="securityCode" :rules="securityCodeRules" label="Mã bảo mật"
                        variant="underlined" @input="formatSecurityCode" @keypress="allowOnlyNumbers"></v-text-field>
                </v-col>
            </v-row>
            <v-row></v-row>
        </v-container>
    </v-form>
    <div class="paypal" v-if="selectedPaymentMethod === 'PayPal'">Sau khi nhấp vào "Đặt hàng" ở trang tiếp theo, bạn sẽ được
        chuyển hướng đến hoàn tất đơn hàng.
    </div>
    <v-container>
        <v-row justify="center" class="next-button">
            <router-link :to="isPaymentSelected ? '' : '/confirmation'">
                <v-btn color="black" @click="setPaymentMethod(selectedPaymentMethod)" :disabled="isPaymentSelected">
                    Tiếp tục
                </v-btn>
            </router-link>
        </v-row>
    </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            name: '',
            nameRules: [
                value => {
                    if (value) return true;
                    return 'Name is required';
                },
            ],
            cardNumber: '',
            formattedCardNumber: '',
            cardRules: [
                (value) => {
                    if (value) return true;
                    return 'Card number is required.';
                },
            ],
            expiration: '',
            expirationRules: [
                (value) => {
                    if (value) {
                        if (value) return true;
                        return 'Enter a valid mm/yy format (e.g., 12/23).';
                    }
                    return 'Expiration is required.';
                },
            ],
            securityCode: '',
            securityCodeRules: [
                value => {
                    if (value) {
                        if (/^\d+$/.test(value)) return true;
                        return 'Security code must contain only numbers.';
                    }
                    return 'Security code is required.';
                },
            ],
            selectedPaymentMethod: '',
        }
    },

    computed: {
        isPaymentSelected() {
            if (this.selectedPaymentMethod === '') {
                return true;
            }
            return false;
        }
    },

    methods: {
        ...mapMutations(["setPaymentMethod"]),

        formatCardNumber() {
            // Remove any non-numeric characters (non-digits)
            this.formattedCardNumber = this.formattedCardNumber.replace(/\D/g, '');

            // Limit the card number to exactly 16 digits
            if (this.formattedCardNumber.length > 16) {
                this.formattedCardNumber = this.formattedCardNumber.slice(0, 16);
            }

            // Format the card number with spaces every 4 digits
            const formatted = this.formattedCardNumber.match(/.{1,4}/g);
            if (formatted) {
                this.formattedCardNumber = formatted.join(' ');
            }
        },
        allowOnlyNumbers(event) {
            // Prevent non-numeric characters from being input
            const charCode = event.charCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
        },
        formatExpiration() {
            // Remove any non-numeric characters (non-digits)
            this.expiration = this.expiration.replace(/\D/g, '');

            // Limit the input to exactly 4 digits
            if (this.expiration.length > 4) {
                this.expiration = this.expiration.slice(0, 4);
            }

            // Format the input as mm/yy (add a slash between month and year)
            if (this.expiration.length > 2) {
                this.expiration = this.expiration.slice(0, 2) + '/' + this.expiration.slice(2);
            }
        },
        formatSecurityCode() {
            this.securityCode = this.securityCode.replace(/\D/g, '');

            // Limit the input to exactly 4 digits
            if (this.securityCode.length > 4) {
                this.securityCode = this.securityCode.slice(0, 4);
            }
        }
    },

}


</script>

<style scoped>
.progress {
    margin-bottom: 50px;
    width: 50%;
}

.text-color-grey {
    color: lightgrey;
}

.title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 50px;
}

.radio {
    margin-right: 50px;
}

.credit-card {
    width: 50%;
}

.paypal {
    width: 80%;
    color: grey;
}

.next-button {
    margin-top: 80px;
    margin-bottom: 100px;
}
</style>