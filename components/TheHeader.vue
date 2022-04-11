<template>
  <header>
    <p class="appName aktiv">Backgrounds</p>
    <ul class="appNav aktiv">
    <li><nuxt-link to="/">White Paper</nuxt-link></li>
    <li><nuxt-link to="/patterns">Patterns</nuxt-link></li>
    <li><nuxt-link to="/create">Create Pattern</nuxt-link></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 0 1rem;
}
.appName {
  font-size: 3rem;
}
.appNav {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}
</style>