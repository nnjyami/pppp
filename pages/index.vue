<template>
  <div :class="pageClass">
    <Canvas/>
    <pattern-unit
      v-for="pattern in patterns"
      :key="pattern"
      :patternName="pattern"
      color="000000"
      />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PatternUnit from '../components/PatternUnit.vue'
export default {
  components: { PatternUnit },
  name: 'IndexPage',
  computed: {
    ...mapState(["patterns"]),
    pageClass: function(){
      return [
        "bg-slate-50",
      ];
    }
  },
}
</script>
