<template>
  <div
    :class="unitClass">
    <figure>
      <img
        :src="require(`~/assets/svg/${patternName}.svg`)"
        />
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    patternName: String,
    color: String,
  },
  computed: {
    unitClass(){
      return [
        "pattern",
        "border-solid",
        "border-2",
        "flex",
        "justify-center",
        "m-2",
        "p-2",
        "rounded-sm",
        "w-24",
      ];
    },
  },
  data() {
    return {
    }
  },
}
</script>