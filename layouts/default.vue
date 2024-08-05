<template>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      @click="rail = false"
      color="#F4F4F6"
      elevation="0"
    >
      <v-list-item>
        <template v-slot:prepend>
          <v-icon @click.stop="rail = !rail" style="cursor: pointer">
            {{ rail ? "mdi-set-left" : "mdi-set-right" }}
          </v-icon>
        </template>
        <v-list-item-content v-if="!rail">
          <v-list-item-title>
            <span class="custom-header-nav"> Bigger </span></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
      <v-spacer class="py-3" />
      <v-list-item class="pb-5">
        <template v-slot:prepend>
          <v-avatar size="25">
            <img
              src="https://scontent-bkk1-2.xx.fbcdn.net/v/t1.15752-9/452795058_1163173534947144_5396199189185238355_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGBsZU0X7QPoSnnXbZVlSDdHGfd4Lq0b9IcZ93gurRv0gk8GJhVQbZGlrDMgKMOOc3P-fFiZVPlr1Mize3Hl_bE&_nc_ohc=IcAav3Ri25MQ7kNvgFZm2JY&_nc_ht=scontent-bkk1-2.xx&gid=AEjkQRynprQDMILNbh7sKxX&oh=03_Q7cD1QHhUocxskskuXROjzsZ7RPwzJ6OcBMhGxyNQ_bk6r7z4A&oe=66D2AB15"
              class="avatar-img"
            />
          </v-avatar>
        </template>
        <v-list-item-content v-if="!rail">
          <v-list-item-title>Kritsada Prasertsin</v-list-item-title>
          <v-list-item-subtitle
            >kritsadaprasertsin@gmail.com</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list nav>
        <v-list-item-subtitle v-if="!rail" class="py-2 px-2"
          >Account</v-list-item-subtitle
        >
        <v-list-item
          prepend-icon="mdi-account-outline"
          title="Personal Profile"
          value="profile"
          @click.stop="navigateTo('/')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-search-outline"
          title="About Me"
          value="about-me"
          @click.stop="navigateTo('/about-me')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-school-outline"
          title="Education"
          value="edu"
          @click.stop="navigateTo('/education')"
        ></v-list-item>
        <v-list-item-subtitle v-if="!rail" class="pt-5 py-2 px-2"
          >Experience</v-list-item-subtitle
        >
        <v-list-item
          prepend-icon="mdi-monitor"
          title="Website"
          value="Website"
          @click.stop="navigateTo('/Website')"
        ></v-list-item>

        <v-list-item
          prepend-icon="mdi-palette"
          title="Design"
          value="Design"
          @click.stop="navigateTo('/Design')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-robot-outline"
          title="AI"
          value="AI"
          @click.stop="navigateTo('/AI')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const drawer = ref(true);
const rail = ref(true);
const router = useRouter();
const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalnia+Glaze:wght@100..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Karla:ital,wght@0,200..800;1,200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nanum+Pen+Script&family=Playwrite+BE+VLG:wght@100..400&family=Playwrite+CU:wght@100..400&family=Quicksand:wght@300..700&display=swap");

.custom-header-nav {
  font-family: "Nanum Pen Script", cursive !important;
  font-size: 22px;
}

.avatar-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
