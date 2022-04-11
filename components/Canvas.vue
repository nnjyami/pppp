<template>
  <div :class="unitClass">
    <figure class="patternWrap">
      <img
        v-for="pattern in selectedPatterns"
        :key="pattern"
        :src="require(`~/assets/svg/${pattern}.svg`)"
        class="patternImg"
        />
    </figure>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(["selectedPatterns"]),
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
        "w-5/6",
      ];
    },
  },
  data() {
    return {
    }
  },
};
</script>

<style lang="sass" scoped>
.pattern
  border-radius: var(--radius-size)
  box-shadow: 0 0 40px rgba(0,0,0,.1)
.patternWrap
  position: relative
  min-width: 30rem
  min-height: 30rem
.patternImg
  position: absolute
  left: 0
  top: 0
  width: 100%
</style>
