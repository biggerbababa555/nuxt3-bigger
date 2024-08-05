<template>
  <v-container class="about-me-section" fluid>
    <v-row class="justify-center align-center">
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" md="8">
            <div class="about-me-text">
              <h2 class="about-me-title">
                About Me
                <v-icon size="24" class="title-icon">mdi-flower</v-icon>
              </h2>
              <p>
                I am a Computer Engineering student and I want to gain
                experience working in web design. I am looking for a
                <span class="highlighted-text">front-end developer</span>
                and web design . I have creative skills and am always ready to
                learn new skills and tools.
              </p>
              <p>
                Besides coding, I spend most of my free time playing games or
                watching House of the Dragons. Of course, I cheer in the Black
                House 🐉 Rhaenyra Targaryen.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-img
              src="https://files.vogue.co.th/uploads/af99c4736883218f7e31257171e434b5.jpg"
              alt="Profile Picture"
              max-width="250"
              class="about-me-image"
              rounded="lg"
            ></v-img>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No specific script setup needed for this simple component
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
  color: #4bb367;
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
}
</style>
