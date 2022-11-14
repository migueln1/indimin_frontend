<script setup lang="ts">
import { Citizen, DataAttr } from '~~/utilities/types';

const { $bus } = useNuxtApp()

const citizens = useState<DataAttr<Citizen>>('citizens')

$bus.$on('createdCitizen', (data: Citizen) => {
    citizens.value.data = [...citizens.value.data, data]
})
const { pending, data : citizenResponse, error }  = await useFetch('https://localhost:64487/api/citizens')
citizens.value = citizenResponse.value as DataAttr<Citizen>
console.log(error.value)
</script>

<template>
<div v-if="false">
    Loading ...
</div>
<div v-else>
    <div class="p-6 shadow-lg border border-slate-50 bg-white rounded-lg">
        <PageHeader head-title="Ciudadanos de Eastview" action-text="Añadir ciudadano"/>
        <div v-if="citizens.success">
            <div v-for="citizen in citizens.data">
                <p>{{citizen.id}} - {{citizen.name}}</p>
            </div>
        </div>
        
    </div>
</div>
</template>
