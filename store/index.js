export const state = () => ({
  configs: {
    rows: 32,
    columns: 32,
  },
  createPattern: [],
  patternCellSize: 16,
  patternCellSpace: 1,
  colors: [],
  patterns: ["a1", "a2"],
  selectedPatterns: [],
  selectedColors: [],
});

export const getters = {
  getPatternCode(state) {
    return state.createPattern.map((v) => v.join(",")).join("\n");
  },
};

export const mutations = {
  ADD_PATTERN(state, pattern) {
    if (state.selectedPatterns.includes(pattern)) return false;
    state.selectedPatterns.push(pattern);
    console.log(state.selectedPatterns);
  },
  REMOVE_PATTERN(state, pattern) {
    const index = state.selectedPatterns.indexOf(pattern);
    if (index === -1) return false;
    state.selectedPatterns.splice(index, 1);
    console.log(state.selectedPatterns);
  },
  INIT_CREATE_PATTERN(state) {
    state.createPattern = [...Array(state.configs.rows)].map((_, i) => {
      return [...Array(state.configs.columns)].map((_, j) => {
        return 0;
      });
    });
  },
  SAVE_PATTERN(state, { row, column, isSelected }) {
    state.createPattern[row].splice(column, 1, isSelected ? 1 : 0);
  },
};

export const actions = {};
