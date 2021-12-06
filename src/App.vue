<template>
  <v-app>

    <div class="navigator-container">
      <v-card class="navigator-bar">
        <v-navigation-drawer permanent expand-on-hover dark>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item href="/filmes">
              <v-list-item-icon>
                <v-icon>mdi-movie-open</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Filmes</v-list-item-title>
            </v-list-item>
            <v-list-item href="/cartaz">
              <v-list-item-icon>
                <v-icon>mdi-movie-filter</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Filmes em lançamento</v-list-item-title>
            </v-list-item>
            <v-list-item href="/">
              <v-list-item-icon>
                <v-icon>mdi-candy</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Bomboniere</v-list-item-title>
            </v-list-item>
            <v-list-item href="/promocao">
              <v-list-item-icon>
                <v-icon>mdi-sale</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Promoções</v-list-item-title>
            </v-list-item>
            <v-list-item href="/sobre">
              <v-list-item-icon>
                <v-icon>mdi-information</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

    <div>
      <v-system-bar
          window
          dark
          class="system-bar"
          app
      >
        <v-icon>mdi-message</v-icon>
        <span>CINESORO</span>
        <v-spacer></v-spacer>
        <v-icon>mdi-minus</v-icon>
        <v-icon>mdi-checkbox-blank-outline</v-icon>
        <v-icon>mdi-close</v-icon>
      </v-system-bar>
    </div>

    <v-card class="overflow-hidden">
      <v-app-bar
          class="app-bar"
          absolute
          color="#fcb69f"
          dark
          shrink-on-scroll
          scroll-target="#scrolling-techniques-2"
          app
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top, #1e1e1e, black"
          ></v-img>
        </template>

        <v-spacer></v-spacer>

        <v-app-bar-title class="blue--text">CINESORO</v-app-bar-title>

        <v-spacer></v-spacer>

      </v-app-bar>
      <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto background"
      >
        <v-container>
          <v-main class="main">
            <router-view/>
          </v-main>
        </v-container>
      </v-sheet>
    </v-card>

    <v-footer padless app>
      <v-card class="flex v-card-bottom" flat tile>
        <v-card-text class="py-2 blue--text text-center">
          <strong>CINESORO</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-bottom-navigation color="primary" horizontal app dark>
      <router-link to
                       ="/filmes">
        <v-btn class="footer-btn">

          <v-icon>mdi-movie-open</v-icon>
        </v-btn>
      </router-link>

      <router-link to
                       ="/">
        <v-btn class="footer-btn">

          <v-icon>mdi-candy</v-icon>
        </v-btn>

      </router-link>

      <router-link to
                       ="/promocao">
        <v-btn class="footer-btn">
        <v-icon>mdi-sale</v-icon>
      </v-btn>
      </router-link>

      <router-link to
                       ="/sobre">
        <v-btn class="footer-btn">
          <v-icon>mdi-information</v-icon>
        </v-btn>
      </router-link>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style lang="scss">

.main{
  padding-top: 4rem !important;
}

.v-toolbar__content{
  background-color: yellow !important;
}

.container{
  min-height: 100vh;
}

.v-btn__content{
  i{
    margin: 0 !important;
  }
}

.v-card-bottom{
  background: yellow !important;
}

header {
  height: auto !important;
  position: fixed !important;
}

.v-toolbar {
  &__content, &__image {
    height: 3rem !important;
  }
}

.v-app-bar-title__content{
  width: auto !important;
}

.v-navigation-drawer{
  background-color: blue !important;
}


v-footer, .header, .v-bottom-navigation {
  z-index: 999;
  background-color: blue !important;
}

.background {
  background: url("https://media.istockphoto.com/vectors/yellow-retro-vintage-style-background-with-sun-rays-vector-vector-id828488338?k=20&m=828488338&s=170667a&w=0&h=xl-W5iJfBcVVAV8z1ko14F_Pwj7oclVEJdWJ5QkAuQw=") !important;
}

template {
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

v-app-bar {
  max-height: none;
  background-color: #1e1e1e !important;
}

.selected {
  background-color: #1e1e1e !important;
  border-radius: 0 0 3rem 3rem !important;
}

router-link, a {
  text-decoration: none;
  color: white !important;
}

.footer-btn {
  height: 3.5rem !important;
}

v-img {
  border: none;
}

.navigator-bar {
  position: fixed;
  left: 0;
  z-index: 99;
  height: 50rem;
  box-shadow: none !important;
  background-color: blue !important;
}

.navigator-container {
  position: fixed;
  z-index: 99;
  top: 5rem;
}

.v-list-item-title, a {
  color: white !important;
}

.system-bar{
  background-color: blue !important;
}

</style>
