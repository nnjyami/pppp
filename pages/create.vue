<template>
  <div class="createCanvas m-2 p-4">
    <div
      v-for="(row, i) in createPattern"
      :key="i"
      :style="cellSize"
      class="row">
      <PatternCreateCell
        v-for="(column, j) in row"
        :key="`${i}-${j}`"
        :row="i"
        :column="j"
        :is-selected="column === 1"
        @click="cellClickHandler"
        />
    </div>
    <button @click="buttonClickHandler" class="button mt-2 aktiv">Code</button>
    <div v-if="isShowCode" class="patternCode aktiv mt-2 p-2">
      <p><code>{{ getPatternCode }}</code></p>
      <button @click="copyCode" class="button mt-2 aktiv">Copy</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
export default {
  layout: 'app',
  computed: {
    ...mapState(["configs", "patternCellSize", "patternCellSpace", "createPattern"]),
    ...mapGetters(["getPatternCode"]),
    cellSize(){
      return {
        "--pattern-cell-size": `${this.patternCellSize}px`,
        "--pattern-cell-space": `${this.patternCellSpace}px`
      }
    },
  },
  data() {
    return {
      isShowCode: false
    }
  },
  methods: {
    ...mapMutations(["INIT_CREATE_PATTERN", "SAVE_PATTERN"]),
    cellClickHandler({isSelected, row, column}){
      this.SAVE_PATTERN({
        row,
        column,
        isSelected: !isSelected
      });
    },
    buttonClickHandler(){
      this.isShowCode = !this.isShowCode;
    },
    copyCode(){
      navigator.clipboard.writeText(this.getPatternCode)
        .then(() => {
          alert("コピーしたよ！Discord に貼り付けて！")
        })
        .catch(e => {
          console.error(e)
        })
    },
  },
  created(){
    this.INIT_CREATE_PATTERN();
  }
};
</script>

<style lang="scss">
.createCanvas {
  background-color: #FFF;
  border-radius: var(--radius-size);
  box-shadow: 0 0 40px rgba(0,0,0,.1);
}
.row {
  margin: var(--pattern-cell-space);
  padding: 0;
  height: var(--pattern-cell-size);
}
.button {
  border-radius: var(--radius-size);
  border: 1px solid #CCC;
  padding: 0 2rem;
}
.patternCode {
  background-color: #333;
  color: #FFF;
  font-size: 11px;
  white-space: pre-wrap;
}
</style>