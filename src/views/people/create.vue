<template>
  <div class="flex justify-center">
    <div v-if="errors" class="bg-red-400 text-white py-2 px-4 pr-0 rounded font-bold mb-4 shadow-lg">
      <div v-for="(v, k) in errors" :key="k">
        <p v-for="error in v" :key="error" class="text-sm">
          {{ error }}
        </p>
      </div>
    </div>
    <div
      @submit.prevent="onSubmit"
      v-if="formInformation"
      class="px-8 pt-6 pb-8 mb-4 bg-white rounded"
    >
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            Nombre
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border 
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
            "
            id="grid-first-name"
            type="text"
            v-model="form.first_name"
            placeholder="Jane"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
            Apellido
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="grid-last-name"
            type="text"
            v-model="form.last_name"
            placeholder="Doe"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-first-name"
          >
            Telefono
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border  
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
            "
            id="grid-first-name"
            type="number"
            v-model.number="form.phone"
            placeholder="4247005888"
          />
          
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
            DNI
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="grid-last-name"
            type="text"
            v-model.number="form.DNI"
            placeholder="26832009"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-city"
          >
            Fecha de Nacimiento
          </label>
          <input
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="grid-city"
            type="date"
            v-model="form.birthdate"
            placeholder="Albuquerque"
          />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-state"
          >
            Sexo
          </label>
          <div class="relative">
            <select
              class="
                block
                appearance-none
                w-full
                border border-gray-200
                text-gray-700
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              id="grid-state"
              v-model.number="form.sex"
            >
              <option value="man">Hombre</option>
              <option value="woman">Mujer</option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 mt-3 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-state"
          >
            Profesiones
          </label>
          <div class="relative" v-if="!otherProfessions">
            <select
                v-model="form.professions.professions_id"
              class="
                block
                appearance-none
                w-full
                border border-gray-200
                text-gray-700
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              id="grid-state"
            >
              <option
                v-for="(item, key) in professions"
                :key="key"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <input
            v-else
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border  
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
            "
            id="grid-first-name"
            v-model="form.professions.name"
            type="text"
            placeholder="Profesion"
          />
          <div>
            <label class="inline-flex items-center mt-2">
              <input
                type="checkbox"
                v-model="otherProfessions"
                @input="toggleProfession"
                class="form-checkbox"
                checked
              />
              <span class="ml-2 text-sm"> Otras Professiones </span>
            </label>
          </div>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 mt-10 md:mb-0">
          <button
            @click="formInformation = !formInformation"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
          >
            {{ formInformation ? "Siguiente" : "Volver" }}
          </button>
          <button
            v-if="!formInformation"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
    <div v-else class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-state"
          >
            Tipo de Vehiculo
          </label>
          <div class="relative">
            <select
            v-model="form.vehicle.vehicle_types_id"
              class="
                block
                appearance-none
                w-full
                border border-gray-200
                text-gray-700
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              id="grid-state"
            >
              <option v-for="(item, key) in vehiclesType" :key="key" :value="item.id">
                  {{ item.name }}
              </option>
             
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
         <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-state"
          >
            Marca Vehiculo 
          </label>
          <div class="relative">
            <select
            v-model="form.vehicle.vehicle_brands_id"
              class="
                block
                appearance-none
                w-full
                border border-gray-200
                text-gray-700
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              id="grid-state"
            >
              <option v-for="(item, key) in brands" :key="key" :value="item.id"> 
                  {{ item.name }}
              </option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 mt-3 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-state"
          >
            Municipio
          </label>
          <div class="relative" v-if="!otherMunicp">
            <select
              v-model="form.locations.municipalities_id"
              class="
                block
                appearance-none
                w-full
                border border-gray-200
                text-gray-700
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none
                focus:bg-white
                focus:border-gray-500
              "
              id="grid-state"
            >
              <option
                v-for="(item, key) in municipalities"
                :key="key"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
            <div
              class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
              "
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
          <input
            v-else
            v-model="form.locations.otherMunicp"
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border  
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none
              focus:bg-white
            "
            id="grid-first-name"
            type="text"
            placeholder="Municipios"
          />
          <div>
            <label class="inline-flex items-center mt-2">
              <input
                type="checkbox"
                @input="toggleMunicipitily"
                v-model="otherMunicp"
                class="form-checkbox"
                checked
              />
              <span class="ml-2 text-sm"> Otros Municipios </span>
            </label>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-3  mb-6 mt-3 md:mb-0">
          <label
            class="
              block
              uppercase
              tracking-wide
              text-gray-700 text-xs
              font-bold
              mb-2
            "
            for="grid-last-name"
          >
            Direccion
          </label>
          <input
            v-model="form.locations.address"
            class="
              appearance-none
              block
              w-full
              text-gray-700
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
            "
            id="grid-last-name"
            type="text"
            placeholder="Pasaje Camejo, La Ermita..."
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 mt-10 md:mb-0">
          <button
            @click="formInformation = !formInformation"
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
          >
            {{ formInformation ? "Siguiente" : "Volver" }}
          </button>
          <button
            v-if="!formInformation"
            class="
              bg-red-500
              hover:bg-red-700
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            @click="onSubmit"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/services";

export default {
  data() {
    return {
        form:{
            first_name:'',
            last_name:'',
            DNI:'',
            birthdate:'',
            phone:'',
            sex:'',
            professions:{
                professions_id:'',
                name:''
            },
            locations:{
                address:'',
                municipalities_id:'',
                otherMunicp:''
            },
            vehicle:{
                vehicle_types_id:'',
                vehicle_brands_id:''
            }
        },
        errors:false,
        professions: [],
        otherProfessions: false,
        formInformation: true,
        vehiclesType:[],
        otherMunicp:false,
        brands:[],
        municipalities:[],
        loadingDesign: {delay:0, background: 'rgba(0,0,0, 0.5)'},
    };
  },
  methods: {
    async onSubmit() {
      try {
          this.$loading.show(this.loadingDesign);
           let  data  = await api.create('peoples', this.form);
           this.$router.push({ name: 'peoples' }) 
           this.errors = false
           this.$loading.hide();
      } catch (error) {
          this.$loading.hide();
          if (error.response.status == 422) {
              this.errors =  error.response.data.errors
          }

      }
      
    },
    toggleProfession(){
        this.form.professions = {
            id:'',
            name:'',
        }
    },
    toggleMunicipitily(){
        this.form.locations = {
            otherMunicp:'',
            municipalities_id:'',
            address:''
        }
    }
  },
  async created() {
    try {
      this.$loading.show(this.loadingDesign);
      // get professions
      let professions = await api.get("professions");
      this.professions = professions.data;
      // get vehicle-types
       let  types = await api.get("vehicle-types");
      this.vehiclesType = types.data;
      // get vehicle-brands
      let  brands = await api.get("vehicle-brands");
      this.brands = brands.data;
      
      // get municipalities -brands
      let  municipalities = await api.get("municipalities");
      this.municipalities = municipalities.data;

      this.$loading.hide();
    } catch (error) {
      this.$loading.hide();
    }
  },
};
</script>

 