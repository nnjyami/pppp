<template>
  <div
    class="pattern border-solid border-2 p-0.5 rounded-sm w-24"
    :class="{
    }">
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
    }
  },
  data() {
    return {
    }
  },
}
</script>