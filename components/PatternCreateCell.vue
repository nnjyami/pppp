<template functional>
  <p
    class="cell"
    @click="listeners.click({ isSelected: props.isSelected, row: props.row, column: props.column})"
    :class="{ isSelected: props.isSelected }" />
</template>

<script>
export default {
  props: ['isSelected', 'row', 'column']
}
</script>

<style lang="scss">
.cell {
  background-color: rgb(219, 219, 219);
  cursor: pointer;
  display: inline-block;
  margin: var(--pattern-cell-space);
  height: var(--pattern-cell-size);
  width: var(--pattern-cell-size);
  transition: all 70ms ease-in;
  &:hover {
    background-color: rgb(223, 77, 138);
    transform: scale(1.2);
    transition: all 350ms ease-in;
  }
  &.isSelected {
    background-color: rgb(233, 5, 146);
  }
}
</style>