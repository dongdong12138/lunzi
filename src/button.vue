<template>
<div>
  <button class="g-button">按钮</button>
</div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    background-color: var(--button-bg);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    &:active {
      background-color: var(--button-active-bg);
    }
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:focus {
      outline: none;
    }
  }

</style>