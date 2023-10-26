<script setup lang="ts">
import SearchList from '@/components/SearchList.vue'
import AddNewRecord from '@/components/AddNewRecord.vue'
import List from '@/components/List.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="list-page">
    <header class="header">
      <div class="logo-box">
        <RouterLink class="home-link" to="/"><img src="/images/tesodev.jpg" alt="tesodev"></RouterLink>
      </div>
      <SearchList />
      <AddNewRecord />
    </header>
    <main class="main">
      <List />
    </main>
  </div>
</template>

<style scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 50px 30px 50px;
}

.logo-box {
  display: flex;
  align-items: center;
}

.logo-box img {
  width: 149px;
  height: 63px;
}

.main {
  display: flex;
  justify-content: center;
}
</style>
