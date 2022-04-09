<template>
  <div>
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
    ...mapState(["patterns"])
  },
}
</script>
