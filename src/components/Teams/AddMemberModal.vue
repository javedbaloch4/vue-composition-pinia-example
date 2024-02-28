<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'
import { useTeamStore } from '@/stores/TeamStore'

let showModal = ref()
let team = useTeamStore()
</script>
<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.spotsRemaning"
    @click="showModal = true"
  >
    Add Member ( {{ team.spotsRemaning }} Spots Left)
  </button>

  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <template #header>
        <p>Need to add a new member to your team?</p>
      </template>
      <template #default>
        <form class="mt-5">
          <div class="flex gap-2">
            <input type="email" placeholder="Email Address" class="flex p-1" />
            <button>Add</button>
          </div>
        </form>
      </template>
    </Modal>
  </Teleport>
</template>
