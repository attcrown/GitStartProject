<template>
    <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
</template>
  
<script>
export default {
    inject: {
        theme: {
            default: { isDark: false },
        },
    },
}
</script>