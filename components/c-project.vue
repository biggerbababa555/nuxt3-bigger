<template>
  <v-container class="project-gallery" fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-hover close-delay v-slot="{ isHovering, props }">
          <v-card class="mx-auto" v-bind="props">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
              cover
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-black text-white v-card--reveal text-h5"
                  style="height: 100%"
                >
                  Project 1 Description
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="6">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto" v-bind="props">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
              cover
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-black text-white v-card--reveal text-h5"
                  style="height: 100%"
                >
                  Project 2 Description
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="6">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto" v-bind="props">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
              cover
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-black text-white v-card--reveal text-h5"
                  style="height: 100%"
                >
                  Project 3 Description
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="12" md="6">
        <v-hover v-slot="{ isHovering, props }">
          <v-card class="mx-auto" v-bind="props">
            <v-img
              :aspect-ratio="16 / 9"
              src="https://cdn.thewirecutter.com/wp-content/media/2023/11/laptops-2048px-8826.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
              cover
            >
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="d-flex transition-fast-in-fast-out bg-black text-white v-card--reveal text-h5"
                  style="height: 100%"
                >
                  Project 4 Description
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.project-gallery {
  padding: 24px;
  max-width: 1100px; /* กำหนดความกว้างของหน้าเว็บไซต์ให้น้อยลง */
  margin: auto; /* จัดกลางหน้า */
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
