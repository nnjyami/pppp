<template>
  <div
    :class="unitClass"
    @click="clickHandler">
    <figure>
      <img
        :src="require(`~/assets/svg/${patternName}.svg`)"
        />
    </figure>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    color: String,
    isSelected: Boolean,
    patternName: String,
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
  methods: {
    ...mapMutations(["ADD_PATTERN", "REMOVE_PATTERN"]),
    clickHandler(){
      const pattern = this.patternName;
      if(this.isSelected){
        this.REMOVE_PATTERN(pattern);
      } else {
        this.ADD_PATTERN(pattern);
      }
    },
  },
  data() {
    return {
    }
  },
}
</script>