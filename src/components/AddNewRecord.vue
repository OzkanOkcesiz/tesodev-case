<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="add-new-record">
    <RouterLink to="/addlinkpage">Add new record</RouterLink>
  </div>
</template>

<style scoped>
.add-new-record {
  display: flex;
  justify-content: flex-end;
}
.add-new-record a {

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  background: #204080;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  width: 216px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-new-record a:hover {
  background: #4F75C2;
}
</style>
