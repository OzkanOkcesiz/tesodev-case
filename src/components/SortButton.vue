<script setup lang="ts">
import { ref } from 'vue';
import IconSort from '@/components/icons/IconSort.vue';
import router from '@/router';
import { getQuerystring } from '@/utils';

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectSort = (type: string) => {
  router.replace({
    query: {
      ...getQuerystring(),
      sortBy: type,
    },
  });
};
</script>
<template>
  <div class="dropdown">
    <button class="dropdown-btn" @click="toggleDropdown">
      <IconSort /> Order By
    </button>
    <div v-if="isOpen" class="dropdown-content">
      <button class="dropdown-content-item" @click="selectSort('nameAsc')">
        Name ascending
      </button>
      <button class="dropdown-content-item" @click="selectSort('nameDesc')">
        Name descending
      </button>
      <button class="dropdown-content-item" @click="selectSort('companyAsc')">
        Company ascending
      </button>
      <button class="dropdown-content-item" @click="selectSort('companyDesc')">
        Company descending
      </button>
    </div>
  </div>
</template>

<style scoped>
.sort-button {
  width: 160px;
}

.dropdown-btn {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
  height: 29px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #484848;
  background: #f3f2f2;
  border: 1px solid #414141;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
}

.dropdown-btn:hover,
.dropdown-btn:focus {
  background: #dedede;
}

.dropdown-content {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #8f8f8f;
  box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
}

.dropdown-content-item {
  width: 100%;
  padding: 5px 10px;
  border-radius: 8px;
  border: none;
  background: none;
  transition: all 0.3s ease-in-out;
  margin-bottom: 5px;
  text-align: start;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  line-break: anywhere;
}

.dropdown-content-item:hover {
  background: #b3b3b3;
  color: #fff;
}

.dropdown-content-item:last-child {
  margin-bottom: 0;
}
</style>
