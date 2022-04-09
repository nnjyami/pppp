<template>
  <div :class="unitClass">
    <figure>
      <img
        v-for="pattern in selectedPatterns"
        :key="pattern.name"
        :src="require(`~/assets/svg/${pattern.name}.svg`)"
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