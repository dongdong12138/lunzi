<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
    <g-icon class="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss">
  @keyframes spin {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
  .g-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    font-size: var(--font-size);
    height: var(--button-height);
    background-color: var(--button-bg);
    padding: 0 .9em;
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
    .loading {
      animation: spin 1.5s linear infinite;
    }
    > .icon {
      order: 1; margin-right: .2em;

    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .icon {
        order: 2; margin-right: 0; margin-left: .2em;
      }
      > .content {
        order: 1;
      }
    }
  }

</style>