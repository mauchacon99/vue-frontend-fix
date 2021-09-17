<template>
    <div id="App">
      <the-header>
        <router-view/>
      </the-header>
    </div>
</template>

<script>
export default {
  components: {
    TheHeader: () => import("@/components/TheHeader")
  },
};
</script>

<style>
</style>
