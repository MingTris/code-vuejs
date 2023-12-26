<template>
  <div>
    <div class="title">FAQ</div>

    <v-row class="faq-box" justify="center">
      <v-col md="3">
        <div class="topic-title">DUYỆT THEO CHỦ ĐỀ</div>
        <div v-for="(topic, i) in topics" :key="i">
          {{ topic }}
        </div>
      </v-col>
      <v-col cols="6" justify="start">
        <div class="answer-title">Các câu hỏi thường gặp</div>
        <v-expansion-panels class="panels">
          <v-expansion-panel v-for="(Q, i) in questions" :key="i">
            <v-expansion-panel-title>{{ Q.title }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ Q.text }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [

      questions: [
        
      ],
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-image: url("/images/banners/banner1.jpeg");
  background-size: cover;
  background-position: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.faq-box {
  margin: 100px;
}

.answer-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.topic-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
