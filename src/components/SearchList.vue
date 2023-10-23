<template>
    <div class="search-box">
        <div class="search-input-box">
            <input placeholder="Name Surname or Company" type="text" value="">
        </div>
        <button class="search-btn">Search</button>
    </div>
</template>
<style scoped>
.search-box {
    display: flex;
    margin-right: 6rem;
}

.search-input-box {
    display: flex;
    border: 2px solid #204080;
    border-radius: 8px;
    overflow: hidden;
    width: 500px;
    height: 46px;
    transition: all 0.3s ease-in-out;
}

.search-input-box:hover,
.search-input-box:focus {
    box-shadow: #20408090 0 0 0 1.5px;
}

.search-input-box input {
    width: 100%;
    height: 100%;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    padding: 0 15px;
    outline: none;
}

.search-btn {
    width: 115px;
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

.search-btn {
    width: 115px;
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

.search-btn:hover {
    background: #4F75C2;
}
</style>