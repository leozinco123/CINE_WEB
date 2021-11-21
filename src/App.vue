<template>
  <v-app>
    <v-system-bar app height="20"
     style="display: flex; justify-content: center">
      v-system-bar 
      </v-system-bar>

      <v-app-bar app elevation="5" style="display: flex; justify-content: center">
     v-app-bar
    </v-app-bar>

    <v-main>
        <v-row style="height: 100%; margin: 0">
            <v-navigation-drawer permanent style="display: flex; align-items: center; justify-content: center"
            >
              <div style="height: 100%; display: flex; align-items: center;">v-navigation-drawer</div>
            </v-navigation-drawer>
            <v-content style="padding: 0">
              <div style="height: 100%; display: flex; align-items: center; justify-content: center"
              >v-content</div>
            </v-content>
        
        </v-row>
    </v-main>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',



  data: () => ({
    //
  }),
};
</script>
