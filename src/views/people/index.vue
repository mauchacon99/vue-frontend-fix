<template>
  <div>
    <div class="flex justify-between content-center mb-6">
      <h5 class="text-2xl font-semibold text-gray-600">Profesionales</h5>
      <router-link to="/peoples/create">
        <button
          class="
            bg-purple-500
            hover:bg-purple-900
            text-white
            font-medium
            py-2
            px-3
            rounded-lg
          "
        >
          Agregar Persona
        </button>
      </router-link>
    </div>
    <table-component :columns="columns" :data="items" actionsButton>
      <template #button="{ item }">
        <a  class="mx-1 text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
        <button @click="removedPeople(item)"  class="mx-1 text-red-600 hover:text-red-900"> Eliminar </button>
        <router-link :to="`/peoples/show/${item.id}`">
          <a href="#" class="mx-1 text-green-600 hover:text-green-900"   >
            Ver Mas
          </a>
        </router-link>
      </template>
      <template #sex="{ item }">
        <span
          :class="
            item.sex === 'man'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          "
          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
        >
          {{ item.sex == "man" ? "Hombre" : "Mujer" }}
        </span>
      </template>
      <font-awesome-icon icon="phone" />
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
      columns: [
        "Id",
        "Nombres Apellido",
        "Cedula",
        "Sexo",
        "Profesion",
        "Localidad",
        "Municipio",
        "Actions",
      ],
      items: [],
      loadingDesign: { delay: 0, background: "rgba(0,0,0, 0.5)" },
    };
  },
  methods:{
    async removedPeople({ id }){
      try {
      this.$loading.show(this.loadingDesign);
        const { data } = await api.delete("peoples", id);
        this.items =  this.items.filter(item => item.id != id)
      this.$loading.hide();
    } catch (error) {
      this.$loading.hide();
    }
      
    }
  },
  async created() {
    try {
      this.$loading.show(this.loadingDesign);
      let response = await api.get("peoples");
      this.items = response.data.data;
      this.$loading.hide();
    } catch (error) {
      this.$loading.hide();
    }
  },
};
</script>

<style>
</style>