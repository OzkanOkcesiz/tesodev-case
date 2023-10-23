<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
</script>

<template>
  <div class="add-link-page">
    <div class="header">
      <a class="home-link" href="/"><img src="images/tesodev.jpg" alt="tesodev"></a>
      <a class="list-page-link" href="/listpage?q=">
        <IconArrow />
        Return to List Page
      </a>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  margin: 30px 50px 35px 50px;
}

.home-link {
  margin-right: 75px;
}

.home-link img {
  width: 149px;
  height: 63px;
}

.list-page-link {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #484848;
}

.list-page-link svg {
  margin-right: 20px;
}
</style>
