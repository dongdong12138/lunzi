<template>
  <div class="wrapper" :class="{error, success}">
    <input :readonly="readonly" :disabled="disabled" :value="value" type="text">
    <template v-if="error">
      <icon name="error"></icon>
      <span>{{ error }}</span>
    </template>
    <template v-if="success">
      <icon name="success"></icon>
      <span>{{ success }}</span>
    </template>
  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'input',
    components: {
      Icon
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      },
      success: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #f1453d;

  .wrapper { font-size: $font-size; display: inline-flex; align-items: center;
    > :not(:last-child) { margin-right: .5em; }

    > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;
              padding: 0 8px;font-size: inherit;

      &:hover {border-color: $border-color-hover;}

      &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;}

      &[disabled], &[readonly] {border-color: $border-color;color: #bbb;cursor: not-allowed;}

    }

    &.error { > input {border-color: $red;} }
  }
</style>