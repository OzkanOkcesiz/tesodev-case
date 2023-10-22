<script setup lang="ts">
import AddNewRecord from '@/components/AddNewRecord.vue'
import Search from '@/components/Search.vue'
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <div class="home">
    <header class="header">
      <AddNewRecord />
    </header>
    <div class="logo-box">
      <img src="/images/tesodev.jpg" alt="logo" />
      <p class="logo-box-text">Search App</p>
    </div>
    <Search />
    <Carousel />
    <Footer />
  </div>
</template>
<style scoped>
.home {
  margin-top: 50px;
}

.header {
  margin: 0 50px 70px;
}

.logo-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.logo-box-text {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin-left: 17rem;
  color: #484848;
  margin-top: 15px;
}
</style>
