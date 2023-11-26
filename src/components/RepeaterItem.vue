<template>
  <div class="main">
    <h1 class="item">
      <slot name="name"></slot>
    </h1>
    <div class="container">
      <div class="info">
        <h2 class="header">
          <slot name="callsign"></slot>
        </h2>
        <div>
          <slot name="frequency"></slot>
        </div>
        <div>
          <slot name="offset"></slot>
        </div>
        <div>
          <slot name="tone"></slot>
        </div>
      </div>
      <div class="details">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: var(--secondary-color);
  padding: 8px !important;
  min-width: 400px;
  max-width: 640px;
}

.item {
  display: flex;
  flex-direction: column;
  color: var(--secondary-color);
  border-radius: var(--box-rounding);
  background-color: var(--primary-color);
}

.header {
  color: var(--secondary-color);
}

.info {
  color: var(--secondary-color);
  display: flex;
  flex-direction: column;
  border: 5px solid var(--primary-color);
  border-radius: var(--box-rounding);
  background-color: var(--primary-color);
  width: 8rem;
  height: 8rem;
  justify-content: center;
}

.container {
  display: flex;
  color: var(--primary-color);
  margin-top: 8px;
  align-items: center;
  justify-content: center;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
