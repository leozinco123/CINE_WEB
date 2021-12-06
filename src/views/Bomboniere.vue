<template>
  <v-container style="overflow: hidden" class="container-featured">

    <!--cards-->
    <v-carousel app>
      <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <div class="cards">
      <v-card
          class="mx-auto"
          max-width="344"
          app
          v-for="bomboniere of $store.state.bomboniere" :key="bomboniere"
      >
        <v-img
            :src="bomboniere.imagem"
            height="200px"
        ></v-img>

        <v-card-title>
          {{ bomboniere.produto }}
        </v-card-title>

        <v-card-actions>

          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="cards--description">
              {{ bomboniere.preco }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>

  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      {
        src: 'https://www.cinepolis.com.br/img/_combos.jpg',
      },
      {
        src: 'https://www.cinepolis.com.br/img/_bebidas.jpg',
      },
      {
        src: 'https://www.cinepolis.com.br/img/_snacks.jpg',
      },
    ],
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
    show: [false, false],
  }),
};
</script>

<style lang="scss">
.container-featured{
  display: block !important;
}

.cards {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 1rem;

  &--description {
    white-space: pre-line
  }
}
</style>
