<template>
  <v-container class="project-section" fluid>
    <v-row class="justify-center">
      <v-col cols="12">
        <h1 class="text-left title">
          My Toolkit <v-icon color="secondary">mdi-laptop</v-icon>
        </h1>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col
        v-for="(tool, index) in toolkit"
        :key="index"
        cols="6"
        sm="4"
        md="2"
        class="justify-center"
      >
        <v-card variant="flat" width="90px">
          <v-card-text class="flex-column align-center">
            <v-img :src="tool.image" alt="tool.name"></v-img>
            <div class="text-center">
              <span class="tool-name">
                {{ tool.name }}
              </span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const toolkit = [
  {
    name: "Accessibility",
    image: "https://sharon-yi.com/assets/icons/accessibility.svg",
  },
  {
    name: "Adobe creative cloud",
    image: "https://sharon-yi.com/assets/icons/adobe.svg",
  },
  { name: "CSS3", image: "https://sharon-yi.com/assets/icons/css.svg" },
  { name: "HTML5", image: "https://sharon-yi.com/assets/icons/html.svg" },
  {
    name: "Javascript",
    image: "https://sharon-yi.com/assets/icons/javascript.svg",
  },
  {
    name: "jQuery",
    image: "https://sharon-yi.com/assets/icons/jquery.svg",
  },
  { name: "Less", image: "https://sharon-yi.com/assets/icons/less.svg" },
  { name: "React", image: "https://sharon-yi.com/assets/icons/react.svg" },
  {
    name: "React Native",
    image: "https://sharon-yi.com/assets/icons/react-native.svg",
  },
  { name: "Redux", image: "https://sharon-yi.com/assets/icons/redux.svg" },
  { name: "Sass", image: "https://sharon-yi.com/assets/icons/sass.svg" },
  {
    name: "Typescript",
    image: "https://sharon-yi.com/assets/icons/typescript.svg",
  },
];
</script>

<style scoped>
.project-section {
  max-width: 900px; /* ลดความกว้างของเว็บไซต์ */
  margin: 0 auto; /* ให้อยู่กึ่งกลางของหน้าเว็บ */
}

.title {
  color: #21615d;
  font-weight: bold;
}

.tool-name {
  font-family: "Nanum Pen Script", cursive !important;
  font-size: 20px;
}
</style>
