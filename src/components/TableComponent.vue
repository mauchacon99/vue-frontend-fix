<template>
 <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th v-for="label in columns" :key="label" scope="col" class="px-4 py-3   text-xs font-medium text-gray-500 uppercase tracking-wider">
                {{ label }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 text-center">
            <tr v-for="(item, index) in data" :key="index"   >
              <td v-for="(label, key) in item" :key="key"  class="px-6 py-4 whitespace-nowrap" >
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900" >
                      <slot :name="key" :item="item">
                        {{ label }}
                      </slot>
                    </div>
                  </div>
                </div>
              </td>  
              <td v-show="actionsButton"  class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                 <slot name="button" :item="item">
                 </slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:{
        data:{
            type:Array,
            required:false,
            default: ()=>[]
        },
        columns:{
            type:Array,
            required:false,
            default: ()=>[]
        },
        actionsButton:{
            type:Boolean,
            required:false,
            default:false
        }
    },
    
}
</script>

<style>

</style>
 