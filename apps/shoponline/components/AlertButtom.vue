<template>
  <div class="text-center ma-2 fontsPro">
    <v-snackbar v-model="snackbar" :color="colorAlart">
      <div class="d-flex align-center">
        <span :class="icon" class="text-h6"></span> &nbsp; {{ text }}
      </div>
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "Error",
    colorAlart: "primary",
    snackbar: false,
    icon: "mdi mdi-alert-circle",
  }),
};
</script>
<style>
.fontsPro {
  font-family: "Prompt", sans-serif;
  font-weight: 300;
}
</style>
