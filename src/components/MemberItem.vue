<template>
  <div class="main">
    <div class="callsign">
      <slot name="callsign"></slot>
    </div>
    <div class="member">
      <div class="first">
        <slot name="first"></slot>
      </div>
      <div class="last">
        <slot name="last"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: transparent;
  width: 13rem;
}

.member {
  background-color: var(--secondary-color);
  border: 5px solid var(--primary-color);
  border-radius: 0 0 var(--box-rounding) var(--box-rounding);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
}

.callsign {
  margin-bottom: -0.4rem;
  margin-top: 0.3rem;
  color: var(--secondary-color);
  background-color: var(--primary-color);
  border-radius: var(--box-rounding) var(--box-rounding) 0 0;
}
</style>
