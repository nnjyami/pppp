<template>
  <div class="whitepaper">
    <p class="whitepaper_mediumText">
      人もブランドやプロダクトも、<br />必ず背景を持っています。<br /><br />
      Backgounds NFT は<br />
      オリジナルの色とパターンで<br />
      さまざまな環境において、<br />
      その人、そのブランドを象徴するような<br />
      「背景」を提供します。
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  layout: 'app',
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.whitepaper {
  font-feature-settings: "palt";
  font-weight: normal;
  letter-spacing: 0.04em;
  padding: 2rem;
  &_mediumText {
    font-size: 1.6rem;
    margin-bottom: 3.2rem;
  }
  &_text {
    font-size: 1rem;
  }
}
</style>
