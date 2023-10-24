<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import IconLocation from './icons/IconLocation.vue';
import Pagination from './Pagination.vue';
import SortButton from '@/components/SortButton.vue';
import router from '@/router';
import { getQuerystring } from '@/utils';

const paginationProps = reactive<any>({
  data: [],
  currentPage: 1,
  itemsPerPage: 5,
});

const searchedData = computed(() => {
  return paginationProps.data
    .filter((item: any) => {
      return (
        item.nameSurname
          .toLowerCase()
          .includes(searchQuery.value.search?.toLowerCase() || '') ||
        item.company
          .toLowerCase()
          .includes(searchQuery.value.search?.toLowerCase() || '')
      );
    })
    .sort((a: any, b: any) => {
      if (searchQuery.value.sortBy === 'nameAsc') {
        return a.nameSurname.localeCompare(b.nameSurname);
      } else if (searchQuery.value.sortBy === 'nameDesc') {
        return b.nameSurname.localeCompare(a.nameSurname);
      } else if (searchQuery.value.sortBy === 'companyAsc') {
        return a.company.localeCompare(b.company);
      } else if (searchQuery.value.sortBy === 'companyDesc') {
        return b.company.localeCompare(a.company);
      }
      return 0;
    });
});

const paginatedData = computed(() => {
  const firstPageIndex =
    (paginationProps.currentPage - 1) * paginationProps.itemsPerPage;
  const lastPageIndex =
    paginationProps.currentPage * paginationProps.itemsPerPage;
  return searchedData.value.slice(firstPageIndex, lastPageIndex);
});

const changePage = (newPage: number) => {
  console.log(newPage);
  paginationProps.currentPage = newPage;
};

const searchQuery = computed(() => {
  return getQuerystring();
});

onMounted(() => {
  const dataFromLocalStorage = localStorage.getItem('data');
  if (dataFromLocalStorage) {
    paginationProps.data = JSON.parse(dataFromLocalStorage);
  }
});
</script>
<template>
  <div class="main-left">
    <div class="list-container">
      <a
        :href="item.website"
        target="_blank"
        class="person-box"
        v-for="item in paginatedData"
        :key="item.id"
      >
        <div class="person-content">
          <div class="person-content-left">
            <IconLocation class="location-icon" />
            <div class="person-text-content">
              <div class="person-text">{{ item.nameSurname }}</div>
              <div class="person-sub-text">{{ item.company }}</div>
            </div>
          </div>
          <div class="person-content-right">
            <div class="name-surname">{{ item.country }}</div>
            <div class="date">28/06/2022</div>
          </div>
        </div>
      </a>
    </div>
    <Pagination
      v-if="paginationProps.data.length > 0"
      :currentPage="paginationProps.currentPage"
      :totalItems="searchedData.length"
      :itemsPerPage="paginationProps.itemsPerPage"
      @handleChange="changePage"
    />
  </div>
  <div class="main-right">
    <SortButton />
  </div>
</template>
<style scoped>
.main-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 55px;
  height: calc(100vh - 135px);
}

.list-container {
  margin-bottom: 20px;
  width: 600px;
  overflow-y: auto;
}

.person-box {
  padding: 10px 0;
  border-bottom: 1px solid #7e7e7e;
}

.person-box:not(:last-child)::after {
  background-color: #000;
  content: '';
  display: block;
  height: 1px;
  margin: 10px auto;
  padding: 0 5px;
  width: calc(100% - 50px);
}

.person-box:last-child {
  border-bottom: none;
}

.person-content {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  background-color: #fcfcfc;
}

.person-content:hover {
  background: rgba(79, 117, 194, 0.21);
  cursor: pointer;
}

.person-content-left {
  display: flex;
  align-items: center;
}

.location-icon {
  margin-right: 20px;
}

.person-text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.person-text-content .person-text {
  color: #090a0a;
  font-size: 1rem;
  line-height: 1.25rem;
}
.person-text-content .person-sub-text {
  color: #72777a;
  font-size: 0.875rem;
}

.name-surname {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #484848;
}

.date {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #484848;
}

.main-right {
  width: 160px;
}
</style>
