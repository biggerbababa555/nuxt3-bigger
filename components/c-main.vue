<template>
  <v-app>
    <v-container class="full-height d-flex align-center justify-center">
      <v-row class="justify-center align-center">
        <v-col cols="12" md="10">
          <v-row class="align-center">
            <!-- Image Section -->
            <v-col cols="12" md="4" class="d-flex justify-center">
              <v-avatar
                size="300"
                @mouseenter="changeImage"
                @mouseleave="resetImage"
                class="hover-image cursor-pointer"
              >
                <v-img :src="currentImage" alt="avatar" />
              </v-avatar>
            </v-col>

            <!-- Text Section -->
            <v-col
              cols="12"
              md="8"
              class="text-left d-flex flex-column justify-center"
            >
              <h1 class="font-weight-bold custom-title">
                Hello! I'm Bigger. 👋
              </h1>
              <p class="font-weight-medium custom-subtitle mt-4">
                A multidisciplinary <span class="highlight">developer</span> and
                <span class="highlight">designer</span>
                <span class="sometimes">( sometimes )</span> with a passion for
                creating engaging, entertaining user experiences.
                <span class="sparkles">✨</span>
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const images = [
  "https://i.ibb.co/dGZBzpp/profile2.png",
  "https://i.ibb.co/9qBcKcG/profile4.png",
];
const currentImage = ref(images[0]);
const defaultImage = images[0];

const changeImage = () => {
  currentImage.value = images[1];
};

const resetImage = () => {
  currentImage.value = defaultImage;
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nanum+Pen+Script&family=Playwrite+BE+VLG:wght@100..400&family=Playwrite+CU:wght@100..400&family=Quicksand:wght@300..700&display=swap");

/* Ensure the container takes up the full height of the viewport */
.full-height {
  height: 100vh;
}

.custom-title {
  font-size: 3.5rem;
  color: #21615d;
}

.custom-subtitle {
  font-size: 1.2rem;
  color: #757575;
}

.highlight {
  color: #21615d;
  font-weight: bold;
}

.sometimes {
  font-family: "Nanum Pen Script", cursive !important;
  color: #9e9e9e;
}

.hover-image {
  transition: transform 0.3s ease;
}

.hover-image:hover {
  transform: scale(1.05);
}
</style>
