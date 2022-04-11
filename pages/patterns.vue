<template>
  <div :class="pageClass">
    <Canvas/>
    <nav class="patternSelect m-2 p-2">
      <pattern-unit
        v-for="pattern in patterns"
        :key="pattern"
        :is-selected="selectedPatterns.includes(pattern)"
        :patternName="pattern"
        color="000000"
        />
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PatternUnit from '../components/PatternUnit.vue'
export default {
  layout: 'app',
  components: { PatternUnit },
  name: 'IndexPage',
  computed: {
    ...mapState(["patterns", "selectedPatterns"]),
    pageClass: function(){
      return [
        "bg-slate-50",
      ];
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.patternSelect {
  align-items: flex-start;
  background-color: #FFF;
  border-radius: var(--radius-size);
  box-shadow: 0 0 40px rgba(0,0,0,.1);
  display: flex;
  min-width: 30rem;
  max-width: 600px;
}
</style>
