<script setup lang="ts">
import RepeaterItem from './RepeaterItem.vue'
</script>

<template>
  <div class="info">
    <RepeaterItem>
      <template #name>Fairland</template>
      <template #callsign>WOGMM</template>
      <template #frequency>147.285 MHz</template>
      <template #offset>+600 kHz</template>
      <template #tone>110.9 Hz CTCSS</template>

      Our busiest local repeater. The Pelican Net is held at 7 PM every Monday night except the
      first Monday of the month. Fusion/C4FM capable.
    </RepeaterItem>

    <RepeaterItem>
      <template #name>Grove</template>
      <template #callsign>W5BIV</template>
      <template #frequency>442.625 MHz</template>
      <template #offset>+5 kHz</template>
      <template #tone>DCS Tone 25</template>

      Our Wires-X repeater, connected to America's Kansas City Wide.
    </RepeaterItem>

    <RepeaterItem>
      <template #name>American Legion</template>
      <template #callsign>KG5RVL</template>
      <template #frequency>224.880 MHz</template>
      <template #offset>-1.6 MHz Offset</template>
      <template #tone>100 Hz CTCSS</template>

      Our 1.25m machine. Installation is in progress.
    </RepeaterItem>

    <RepeaterItem>
      <template #name>Elk River Basin</template>
      <template #callsign>WN5J</template>
      <template #frequency>443.100 MHz</template>
      <template #offset>5 MHz Offset</template>
      <template #tone>100 Hz CTCSS</template>

      Located near Cowskin Bridge on HWY 10.
    </RepeaterItem>

    <RepeaterItem>
      <template #name>GLARA Simplex</template>
      <template #frequency>146.550 MHz</template>

      Monitored by Grand Lake Amateur Radio Association members.
    </RepeaterItem>
  </div>
</template>

<style scoped>
.info {
  text-align: center;
  width: fit-content;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.8rem;
}
</style>
