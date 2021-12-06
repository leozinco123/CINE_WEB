<template>
  <v-container class="container-schedule">
    <template>

      <v-carousel>
        <v-carousel-item
            v-for="(promo, index) in promocao"
            :key="index"
            :src="promo.imagem"
            reverse-transition="fade-transition"
            transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>

    </template>
  </v-container>
</template>

<style>

.container-schedule{
  display: block !important;
}

.v-carousel, .v-carousel__item, .v-image__image--cover{
  height: 40rem !important;
  background-size: auto !important;
  background-color: black;
}

</style>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    promocao:[{
      imagem: 'https://www.jornaldebarueri.com.br/wp-content/uploads/2019/11/unnamed-11.jpg'
    },
      {
        imagem: 'https://www.cinepolis.com.br/fotos/promocao/9.jpg'
      },
      {
        imagem: 'https://www.cinepolis.com.br/fotos/promocao/70.png'
      }
    ]
  }),
  }
</script>
