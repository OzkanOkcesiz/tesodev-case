<script setup lang="ts">
import IconSearch from './icons/IconSearch.vue';

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
                    <input placeholder="Name Surname or Company" type="text" value="">
                </div>
                <a class="search-link" href="/listpage?q=">Search</a>
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
    color: #090A0A;
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

.search-link {
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
}

.search-link:hover {
    background: #4F75C2;
}
</style>