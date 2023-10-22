<script setup lang="ts">
import { ref, computed } from 'vue';
import IconLeftArrow from '@/components/icons/IconRightArrow.vue'
import IconRightArrow from '@/components/icons/IconRightArrow.vue'

const carouselItems = ref([
  {
    img: '/images/carouselImg.jpg',
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    subTitle: '1h ago · by Troy Corlson',
  },
  {
    img: '/images/carouselImg.jpg',
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    subTitle: '1h ago · by Troy Corlson',
  },
  {
    img: '/images/carouselImg.jpg',
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    subTitle: '1h ago · by Troy Corlson',
  },
  {
    img: '/images/carouselImg.jpg',
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    subTitle: '1h ago · by Troy Corlson',
  },
]);

const carouselWidth = ref(0);

const stylecarousel = computed(() => ({
  transform: `translateX(${carouselWidth.value}px)`,
}));

const prevSlide = () => {
  carouselWidth.value = 0;
};

const nextSlide = () => {
  carouselWidth.value = -347;
};
</script>

<template>
  <div class="top-news-box">
    <div class="top-news-container-box">
      <p class="carousel-title"> Top News</p>
      <div class="carousel-box">
        <button @click="prevSlide">
          <IconLeftArrow class="left-arrow"/>
        </button>
        <div class="carousel-items">
          <div class="carousel-item" v-for="(carouselItem, index) in carouselItems" :key="index" :style="stylecarousel">
            <img :src="carouselItem.img" alt="tesodev" />
            <div class="carousel-item-content">{{ carouselItem.title }}</div>
            <div class="carousel-item-content-sub">{{ carouselItem.subTitle }}</div>
          </div>
        </div>
        <button @click="nextSlide">
          <IconRightArrow />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.top-news-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
}

.top-news-container-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
}

.carousel-title {
  margin-left: 3.5rem;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 50px;
}

.carousel-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-box button {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  transition: all 0.3s ease-in-out;
  margin: 10px;
}

.carousel-box button:hover {
  background: #dedede;
}

.carousel-items {
  display: flex;
  width: 1044px;
  overflow: hidden;
}

.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  transition: all ease-in-out 0.5s;
}

.carousel-item img {
  height: 195px
}

.carousel-item-content {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #090A0A;
  align-self: stretch;
}

.carousel-item-content-sub {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6C7072;
  align-self: stretch;
}

.left-arrow {
  transform: rotate(180deg);
}
</style>
