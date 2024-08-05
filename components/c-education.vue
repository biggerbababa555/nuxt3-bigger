<template>
  <v-container class="about-me-section" fluid>
    <v-row class="justify-center align-center">
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" md="8">
            <div class="about-me-text">
              <h2 class="about-me-title py-3 pt-6">
                Education
                <v-icon size="24" class="title-icon">mdi-book-outline</v-icon>
              </h2>
              <p>
                <span class="highlighted-text"> Computer Engineering </span>
                Srinakharinwirot University.
              </p>
              <p>GPAX : 3.4x</p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/th/thumb/a/ac/Srinakharinwirot_University_Logo.svg/1200px-Srinakharinwirot_University_Logo.svg.png"
              alt="Profile Picture"
              max-width="150"
              class="about-me-image"
              rounded="lg"
              @mouseover="rotateImage"
              @mouseleave="resetImage"
              @click="goToUrl"
              :style="imageStyle"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const imageStyle = ref({
  transition: "transform 0.5s ease",
  transform: "rotate(0deg)",
});

const rotateImage = () => {
  imageStyle.value.transform = "rotate(90deg)";
};

const resetImage = () => {
  imageStyle.value.transform = "rotate(0deg)";
};

const goToUrl = () => {
  window.location.href = "https://biggerbababa555.github.io/port-bigger/";
};
</script>

<style scoped>
.about-me-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-me-title {
  font-size: 2rem;
  font-weight: bold;
  color: #21615d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.title-icon {
  color: #22d731;
}

.about-me-text p {
  font-size: 1.125rem;
  color: #555;
}

.highlighted-text {
  color: #4bb367;
  font-weight: bold;
}

.about-me-image {
  margin-top: 1rem;
  cursor: pointer;
}
</style>
