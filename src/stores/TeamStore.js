import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  actions: {
    async fill() {
      // let data = r.default

      // this.$patch({
      //   name: data.name,
      //   spots: data.spots,
      //   members: data.members
      // })

      let resp = await import('@/team.json')
      this.$state = resp.default
    },

    grow(spots) {
      this.spots = spots
    }
  },

  getters: {
    spotsRemaning() {
      return this.spots - this.members.length
    }
  }
})
