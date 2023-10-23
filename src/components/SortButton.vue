<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import IconSort from '@/components/icons/IconSort.vue'

// const props = defineProps({
//   // Define your props here if needed
// });

// const emits = defineEmits();

const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

// const filter = (type: any, order: any) => {
//     // Emit the 'filter' event to communicate with the parent component
//     const payload = { type, order };
//     emits('filter', payload);
// };
</script>
<template>
    <div class="dropdown">
        <button class="dropdown-btn" @click="toggleDropdown">
            <IconSort /> Order By
        </button>
        <!-- <div v-if="isOpen" class="dropdown-content">
            <button class="dropdown-content-item" @click="filter('name', 'asc')">Name ascending</button>
            <button class="dropdown-content-item" @click="filter('name', 'desc')">Name descending</button>
            <button class="dropdown-content-item" @click="filter('date', 'asc')">Date ascending</button>
            <button class="dropdown-content-item" @click="filter('date', 'desc')">Date descending</button>
        </div> -->
        <div v-if="isOpen" class="dropdown-content">
            <button class="dropdown-content-item">Name ascending</button>
            <button class="dropdown-content-item">Name descending</button>
            <button class="dropdown-content-item">Date ascending</button>
            <button class="dropdown-content-item">Date descending</button>
        </div>
    </div>
</template>

<style scoped>
/* Add your component-specific styles here */

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
    background: #F3F2F2;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #8F8F8F;
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
}

.dropdown-content-item:hover {
    background: #B3B3B3;
    color: #fff;
}

.dropdown-content-item:last-child {
    margin-bottom: 0;
}
</style>
