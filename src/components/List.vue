<script setup lang="ts">
import IconLocation from './icons/IconLocation.vue';
import Pagination from './Pagination.vue';
import SortButton from '@/components/SortButton.vue'
</script>
<template>
    <div class="main-left">
        <div class="list-container">
            <div class="person-box" v-for="index in 5" :key="index">
                <div class="person-content">
                    <div class="person-content-left">
                        <IconLocation class="location-icon" />
                        <div class="person-text-content">
                            <div class="person-text">Duis Corporation</div>
                            <div class="person-sub-text">Lyubertsy, Eritrea</div>
                        </div>
                    </div>
                    <div class="person-content-right">
                        <div class="name-surname">Hyacinth Vincent</div>
                        <div class="date">28/06/2022</div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination />
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
    border-bottom: 1px solid #7E7E7E;
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