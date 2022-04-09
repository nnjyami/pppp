<template>
  <div class="canvas">
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
    ...mapState(["selectedPatterns"])
  },
  data() {
    return {
    }
  },
};
</script>