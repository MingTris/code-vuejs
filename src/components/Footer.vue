<template>
  <div class="footer">
    <div class="company">
      <p style="font-size: 20px; font-weight: bold">CÔNG TY</p>
      <router-link to="/our-story">Câu chuyện của chúng ta</router-link>
      <a href="#">Thông tin cửa hàng</a>
      <a href="#">Sự hợp tác</a>
      <a href="#">Nhượng quyền</a>
    </div>
    <div class="service">
      <p style="font-size: 20px; font-weight: bold">DỊCH VỤ</p>
      <a href="#">Câu hỏi thường gặp</a>
      <a href="#">Chính sách đổi trả</a>
      <a href="#">Liên hệ chúng tôi</a>
      <a href="#">Quyền riêng tư & Chính sách cookie</a>
    </div>
    <div>
      <p style="font-size: 40px; font-weight: bold">Không bao giờ bỏ lỡ!</p>
      <p>
        Đăng ký nhận bản tin của chúng tôi để được giảm giá 10% cho đơn hàng đầu tiên và nhận phần thưởng sinh nhật của bạn!
      </p>
      <div class="d-flex flex-row mb-6" style="margin-top: 20px">
        <input
          type="email"
          placeholder="Nhập gmail của bạn"
          size="50"
          style="border: 1px solid grey; margin-right: 20px"
        />
        <v-btn color="black"> Đăng ký </v-btn>
      </div>

      <div class="icons">
        <a href="https://www.facebook.com/profile.php?id=100017216100846"
          ><font-awesome-icon icon="fa-brands fa-facebook" size="2x"
        /></a>
        <a href="https://www.instagram.com/ming.tris_/"
          ><font-awesome-icon icon="fa-brands fa-instagram" size="2x"
        /></a>
        <a href="https://line.me/"
          ><font-awesome-icon icon="fa-brands fa-line" size="2x"
        /></a>
        <a href="https://www.pinterest.com/"
          ><font-awesome-icon icon="fa-brands fa-pinterest" size="2x"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faLine,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faLine, faPinterest, faTwitter);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  background-color: #e5dcd2;
  font-family: "Roboto", sans-serif;
}

.company {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

.service {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
}

.icons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
