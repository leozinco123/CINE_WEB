<template>
  <v-container class="container-schedule">

    <template>

      <div class="container-schedules">

        <v-carousel>

          <v-carousel-item

              v-for="(lancamento, index) in lancamentos"

              :key="index"

              v-bind:src="`https://image.tmdb.org/t/p/original${lancamento.poster_path}`"

              reverse-transition="fade-transition"

              transition="fade-transition"

          ></v-carousel-item>

        </v-carousel>

      </div>

    </template>

  </v-container>

</template>

<style lang="scss">

.container-schedules {
  padding-top: 5rem;
}

.container-schedule{
  display: block !important;
  padding: 0;
}

.v-carousel, .v-carousel__item, .v-image__image--cover{
  height: 40rem !important;
  background-size: contain !important;
  background-color: black;
}

</style>
<script>
import store from "../store/index";

export default {

  async created() {
    await store.dispatch("fetchPremieres");
    this.baseImageUrl = 'https://image.tmdb.org/t/p/original';
  },

  data: () => ({
    baseImageUrl: '',
    premiere: [],
  }),

  computed: {
    lancamentos(){ return this.$store.state.lancamento},
  },
}
</script>
