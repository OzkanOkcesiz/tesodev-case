<script setup lang="ts">
import router from '@/router';
import IconSearch from './icons/IconSearch.vue';
import IconLocation from './icons/IconLocation.vue';
import { computed, onMounted, ref } from 'vue';

const searchValue = ref('');
const data = ref([]);

const handleSearch = () => {
  if (!searchValue.value) return router.push({ name: 'ListPage' });
  router.push({ name: 'ListPage', query: { search: searchValue.value } });
};

const searchedData: any = computed(() => {
  if (searchValue.value.length < 2) return [];
  return data.value.filter((item: any) => {
    return (
      item.nameSurname
        .toLowerCase()
        .includes(searchValue.value.toLowerCase()) ||
      item.company.toLowerCase().includes(searchValue.value.toLowerCase())
    );
  });
});

onMounted(() => {
  const dataFromLocalStorage = localStorage.getItem('data');
  if (dataFromLocalStorage) {
    data.value = JSON.parse(dataFromLocalStorage);
  }
});
</script>
<template>
  <div class="find-box">
    <div class="find-container">
      <div class="find-title">Find in record</div>
      <div class="search-box">
        <div class="search-content">
          <span class="search-icon">
            <IconSearch class="search" />
          </span>
          <input
            v-model="searchValue"
            placeholder="Name Surname or Company"
            type="text"
          />
        </div>
        <button class="search-button" @click="handleSearch">Search</button>
      </div>

      <div v-if="searchedData.length" class="search-results">
        <ul>
          <li v-for="item in searchedData.slice(0, 3)">
            <IconLocation class="location-icon" />
            <div class="infos">
              <span class="company"> {{ item.company }}</span>
              <span class="location">
                {{ `${item.city}, ${item.country}` }}
              </span>
            </div>
          </li>
        </ul>

        <router-link
        v-if="searchedData.length > 3"
          class="show-more"
          :to="{ name: 'ListPage', query: { search: searchValue } }"
          >Show more..</router-link
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.find-box {
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
}

.find-title {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  color: #090a0a;
  margin-bottom: 10px;
  margin-left: 50px;
}

.search-box {
  display: flex;
  margin-bottom: 20px;
  margin-left: 50px;
}

.search-content {
  display: flex;
  border: 2px solid #204080;
  border-radius: 8px;
  overflow: hidden;
  width: 600px;
  height: 46px;
  transition: all 0.3s ease-in-out;
}

.search-content:hover,
:focus {
  box-shadow: #20408090 0 0 0 1.5px;
}

.search-content input {
  width: 100%;
  height: 100%;
  font-family: inherit;
  border: none !important;
  font-size: 16px;
  line-height: 16px;
  box-shadow: none;
  outline: none;
}

.search-icon {
  display: flex;
  align-items: center;
  padding: 10px;
}

.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 46px;
  background: #204080;
  border-radius: 12px;
  border: transparent;
  margin-left: 10px;
  color: #fff;
  font-size: 18px;
  line-height: 21px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.search-button:hover {
  background: #4f75c2;
}

.search-results {
  background: #fff;
  border: 1px solid #484848;
  border-radius: 24px;
  margin-top: 16px;
  max-width: 717px;
  padding: 24px 38px;
}

.search-results .show-more {
  color: #090a0a;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin: 10px auto 0;
  text-align: center;
}
.search-results ul {
  display: flex;
  flex-direction: column;
  gap: 25px;
  list-style-type: none;
}

.search-results ul li {
  align-items: center;
  display: flex;
  gap: 12px;
}

.search-results ul li .infos {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.search-results ul li .infos .company {
  color: #090a0a;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
}
.search-results ul li .infos .location {
  color: #72777a;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
}
</style>
