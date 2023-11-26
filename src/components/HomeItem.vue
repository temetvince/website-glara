<template>
  <div class="info">
    <img alt="Glara logo" class="logo" src="/logo.jpg" width="125" height="280" />
    <div class="outer">
      <h1 class="greeting">Come chat with us!</h1>
      <div class="inner">
        <h2>Monthly Meeting & Testing</h2>
        <h3>Grove American Legion Post 178</h3>
        <h3>Every first Monday at 7pm</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.greeting {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.outer {
  background-color: var(--global-grey);
  border: 5px solid var(--primary-color);
  border-radius: var(--box-rounding);
}

.inner {
  background-color: var(--secondary-color);
  padding: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
  width: auto;
  border: 5px solid var(--primary-color);
  border-radius: var(--box-rounding);
}

.info {
  background-color: var(--secondary-color);
  padding: 1rem;
  text-align: center;
  width: fit-content;
  margin: auto;
  border: 8px solid var(--primary-color);
}
</style>
