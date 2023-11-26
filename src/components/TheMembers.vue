<script setup lang="ts">
import MemberList from '../assets/MembersList'
import MemberItem from '../components/MemberItem.vue'

const members = MemberList()
  .sort((a, b) => {
    if (a.last < b.last) {
      return -1
    } else if (a.last > b.last) {
      return 1
    } else if (a.first < b.first) {
      return -1
    } else if (a.first > b.first) {
      return 1
    } else {
      return 0
    }
  })
  .map((member, index) => {
    return {
      key: index,
      first: member.first,
      last: member.last,
      callsign: member.call.toUpperCase()
    }
  })
</script>

<template>
  <div class="info">
    <div v-for="member in members" :key="member.key">
      <MemberItem>
        <template #first>{{ member.first }}</template>
        <template #last>{{ member.last }}</template>
        <template #callsign>{{ member.callsign }}</template>
      </MemberItem>
    </div>
  </div>
</template>

<style scoped>
.info {
  padding: 1rem;
  text-align: center;
  width: fit-content;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
}
</style>
