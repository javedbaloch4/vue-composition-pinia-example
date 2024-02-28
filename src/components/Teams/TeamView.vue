<script setup>
import TeamHeader from './TeamHeader.vue'
import TeamMembers from './TeamMembers.vue'
import TeamFooter from './TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore'
import { ref } from 'vue'
import Modal from './Modal.vue'

let team = useTeamStore()

team.fill()
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMembers />
  </div>

  <TeamFooter />

  <Modal />
</template>
