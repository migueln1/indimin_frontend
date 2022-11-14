<template>
    <div class="pb-4 flex justify-between">
        <h1 class="text-xl">{{headTitle}}</h1>
        <div class="flex gap-4">

            <input v-model="name" type="text" class="border rounded px-4 py-2">
            <button @click="submit" :disabled="adding" class="bg-indigo-600 text-sm text-white rounded-full py-3 px-4 uppercase">{{actionText}}</button>
        </div>
    </div>
    <div class="pb-2 flex justify-between">
        <div v-if="notification">
            <span>{{notification}}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Citizen } from '~~/utilities/types';

const { $bus } = useNuxtApp()
const adding = useState('adding', () => false)
const notification = useState('notification')
const name = useState('name')
const submit = async () => {
    adding.value = true
    try {
        const response = await $fetch('https://localhost:64489/api/citizens', {
            method: 'POST', body: JSON.stringify({ name: name.value })
        }).catch((error) => { throw new Error(error) })

    } catch (error) {
        notification.value = "Ha ocurrido un error"
        console.error(error)
    } finally {
        adding.value = false
    }

    

    adding.value = false
    // $bus.$emit('createdCitizen', { id: citizenId, name: name.value }) 
}
const props = defineProps({
    headTitle:{
        type: String,
        required: true
    },
    actionText:{
        type: String,
        required: true
    }
})
</script>