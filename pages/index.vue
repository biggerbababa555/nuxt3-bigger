<template>
  <div>
    <v-app>
      <c-main />
    </v-app>
  </div>
</template>

<script setup>
</script>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px); /* Adjust the value for the vertical movement */
}
</style>
