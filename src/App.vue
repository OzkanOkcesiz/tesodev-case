<script setup lang="ts">
import { RouterView } from 'vue-router'
import type { RootObject } from '@/types/data';
import db from '@/db/db.json'

const data = localStorage.getItem('data');

if (!data) {
  const { cols, data } = db;
  const result = data.map((item) => {
    const obj:any = {};
    cols.forEach((key, index) => {
      obj[key] = item[index];
    });
    return obj;
  });

  localStorage.setItem('data', JSON.stringify(result))
}
else {
  const parseData: RootObject = JSON.parse(data)

  console.log(parseData);
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
