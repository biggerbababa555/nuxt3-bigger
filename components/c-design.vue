<template>
  <v-container class="about-me-section" fluid>
    <v-row class="justify-center align-center text-center">
      <v-col cols="12">
        <h2 class="about-me-title">
          Ux/Ui <span class="Project">( Design )</span>
        </h2>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <v-icon @click="prevCard" class="pt-10 mt-10">mdi-chevron-left</v-icon>

        <v-card width="1100px" style="height: 190px" variant="flat">
          <v-row class="justify-center align-center">
            <v-col cols="12" md="8">
              <v-row class="align-center">
                <v-col cols="12" md="8">
                  <div class="about-me-text">
                    <span class="highlighted-text">
                      {{ cards[currentCard].title }}
                    </span>
                    <p>{{ cards[currentCard].description }}</p>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="text-center">
                  <v-img
                    :src="cards[currentCard].image"
                    alt="Project Image"
                    max-width="700px"
                    class="about-me-image"
                    rounded="lg"
                    @click="openDialog(cards[currentCard].image)"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
        <v-icon @click="nextCard" class="pt-10 mt-10">mdi-chevron-right</v-icon>
      </v-col>
    </v-row>

    <!-- Image Preview Dialog -->
    <v-dialog v-model="showDialog" max-width="80%">
      <v-card>
        <v-img :src="dialogImage" class="white--text" height="auto"></v-img>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<script setup>
import { ref } from "vue";

// Cards data
const cards = ref([
  {
    title: "My SOS Application Design",
    description:
      "Designed the UX/UI for the My SOS app using Figma, focusing on ease of access to emergency contact numbers.",
    image: "https://i.ibb.co/2WDXnV9/Screenshot-2024-08-05-085502.jpg",
  },
  {
    title: "Build ChoDelivery Website Design",
    description:
      "Designed the UX/UI for the ChoDelivery application on Figma, creating user and store owner interfaces for an online shopping platform tailored to small businesses.",
    image: "https://i.ibb.co/M66Hkfj/Screenshot-2024-08-05-085813.jpg",
  },
  {
    title: "Meeting Room Booking Website Design",
    description:
      "Designed the UX/UI for a Meeting Room Booking website using Figma, focusing on intuitive reservation management and user-friendly interfaces.",
    image: "https://i.ibb.co/v4hy4Js/Screenshot-2024-08-05-090255.jpg",
  },
  // Add more cards as needed
]);

const currentCard = ref(0);
const showDialog = ref(false);
const dialogImage = ref("");

// Function to go to the previous card
const prevCard = () => {
  currentCard.value =
    currentCard.value > 0 ? currentCard.value - 1 : cards.value.length - 1;
};

// Function to go to the next card
const nextCard = () => {
  currentCard.value =
    currentCard.value < cards.value.length - 1 ? currentCard.value + 1 : 0;
};

// Function to open the dialog with the selected image
const openDialog = (image) => {
  dialogImage.value = image;
  showDialog.value = true;
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nanum+Pen+Script&family=Playwrite+BE+VLG:wght@100..400&family=Playwrite+CU:wght@100..400&family=Quicksand:wght@300..700&display=swap");

.Project {
  font-family: "Nanum Pen Script", cursive !important;
  color: #4bb367;
}

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
  padding-right: 540px;
  margin-bottom: -10px;
}

.about-me-text {
  text-align: left; /* Align text to the left */
}

.about-me-text p {
  font-size: 1.125rem;
  color: #555;
  text-align: left; /* Align paragraph text to the left */
}

.highlighted-text {
  color: #4bb367;
  font-weight: bold;
  font-size: 20px;
}

.about-me-image {
  margin-top: 1rem;
  cursor: pointer;
}

v-btn {
  color: #4bb367;
}
</style>
