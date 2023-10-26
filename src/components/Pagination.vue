<script setup lang="ts">
import router from '@/router';
import { getQuerystring } from '@/utils';

import { ref, computed, watch, onMounted } from 'vue';

interface Props {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
}

const emit = defineEmits(['handleChange']);

const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  itemsPerPage: 5,
});

const currentPage = ref(getQuerystring('page') || 1);

const DOTS = ref('...');

const calculatePageCount = computed(() => {
  return Math.ceil(props.totalItems / props.itemsPerPage);
});

const displayedPages = computed(() => {
  const siblingCount = 2;

  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= calculatePageCount.value) {
    currentPage.value = 1;
    emit('handleChange', currentPage.value);
    return range(1, calculatePageCount.value);
  }

  const leftSiblingIndex = Math.max(currentPage.value - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    currentPage.value + siblingCount,
    calculatePageCount.value
  );

  const shouldShowLeftDots = leftSiblingIndex > 4;
  const shouldShowRightDots = rightSiblingIndex < calculatePageCount.value - 3;

  const firstPageIndex = 1;
  const lastPageIndex = calculatePageCount.value;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 2 + 2 * siblingCount;
    let leftRange = range(1, leftItemCount);

    return [...leftRange, DOTS.value, calculatePageCount.value];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 2 + 2 * siblingCount;
    let rightRange = range(
      calculatePageCount.value - rightItemCount + 1,
      calculatePageCount.value
    );
    return [firstPageIndex, DOTS.value, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [
      firstPageIndex,
      DOTS.value,
      ...middleRange,
      DOTS.value,
      lastPageIndex,
    ];
  }
});

watch(
  () => calculatePageCount.value,
  () => {
    if (currentPage.value > calculatePageCount.value) {
      currentPage.value = calculatePageCount.value;
      emit('handleChange', currentPage.value);
      router.replace({
        query: {
          ...getQuerystring(),
          page: currentPage.value,
        },
      });
    }
  }
);

const changePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= calculatePageCount.value) {
    currentPage.value = newPage;
    router.replace({
      query: {
        ...getQuerystring(),
        page: newPage,
      },
    });

    emit('handleChange', newPage);
  }
};

const range = (start: any, end: any) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

onMounted(() => {
  if (getQuerystring('page')) {
    currentPage.value =
      Number(getQuerystring('page')) > calculatePageCount.value
        ? calculatePageCount.value
        : Number(getQuerystring('page'));
  }
  router.replace({
    query: {
      ...getQuerystring(),
      page: currentPage.value,
    },
  });
  emit('handleChange', currentPage.value);
});
</script>

<template>
  <div class="pagination-box">
    <div class="previous-next">
      <button
        class="page-number"
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        Previous
      </button>
    </div>
    <div class="pagination-ul">
      <template v-for="(page, index) in displayedPages">
        <button
          v-if="String(page) !== DOTS"
          :key="page"
          @click="changePage(Number(page))"
          class="page-number"
          :class="{ active: currentPage == page }"
        >
          {{ page }}
        </button>
        <div v-else>
          {{ DOTS }}
        </div>
      </template>
    </div>
    <div class="previous-next">
      <button
        class="page-number"
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === calculatePageCount"
      >
        Next
      </button>
    </div>
  </div>
</template>
<style scoped>
.pagination-box {
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 20px;
}

.pagination-ul {
  display: flex;
  align-items: center;
}

.page-number {
  background: #ffffff;
  border: 1px solid #484848;
  border-radius: 4px;
  margin: 0 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #484848;
  transition: all 0.3s ease-in-out;
  font-variant: tabular-nums;
  width: 40px;
  height: 30px;
}

.page-number:hover,
.page-number.active {
  background: #204080;
  color: #ffffff;
  cursor: pointer;
}

.page-number:disabled {
  background: #e2e2e2;
  color: #484848;
  cursor: default;
}

.previous-next button {
  width: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
