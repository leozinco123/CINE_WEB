<template>
  <v-container class="container-recents">

    <template>

      <div class="descricao">
        TOP 3 FILMES DESTE ANO
      </div>


      <v-carousel app>
        <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </template>

    <div class="subdescricao">
      <div class="descricao-texto">
        VIDRO<br>
        Como Treinar o Seu Dragão 3<br>
        Capitã Marvel
      </div>
    </div>

  </v-container>
</template>

<style>
.descricao{
  width: 100%;
  text-align: center;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: rgba(255, 255, 255, 0.49);
}

.subdescricao{
  width: 100%;
  text-align: center;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.v-carousel, .v-carousel__item, .v-image__image--cover{
  height: 30rem !important;
  background-size: auto !important;
  background-color: black;
}

.descricao-texto{
  background-color: rgba(255, 255, 255, 0.49);
  width: 41rem;
  border-radius: 17px;
}
</style>

<script>
export default {
  data: () => ({
    show: [false, false, false],

    items: [
      {
        src: 'https://www.minhaserie.com.br/uploads/editor_pictures/000/069/107/content_pic.jpg',
      },
      {
        src: 'https://www.minhaserie.com.br/uploads/editor_pictures/000/069/100/content_pic.jpg',
      },
      {
        src: 'https://www.minhaserie.com.br/uploads/editor_pictures/000/069/109/content_pic.jpg',
      },
    ],
  }),
  methods: {
    click(){
      this.show = !this.show;
    }
  }
}
</script>
