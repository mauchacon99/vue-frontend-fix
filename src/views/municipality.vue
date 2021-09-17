<template>
  <div>
    <table-component :columns="columns" :data="items" >
    </table-component>
  </div>
</template>

<script>
import api from "@/api/services";

export default {
  components: {
    TableComponent: () => import("@/components/TableComponent"),
  },
  data() {
    return {
      columns: ["id", "Nombre", 'status'],
      loadingDesign: {delay:0, background: 'rgba(0,0,0, 0.5)'},
      items:[]
    };
  },
  async created() {
    this.$loading.show(this.loadingDesign) 
    let { data } = await api.get('municipalities');
    this.items = data
    this.$loading.hide()
  },
};
</script>

<style>
</style>