<template>
    <div class="pagination-box">
        <ul class="pagination-ul">
            <li class="page-number previous-next disabled"><button class="page-link">Previous</button></li><span>
                <li class="page-number active"><button class="page-link">1</button></li>
            </span><span>
                <li class="page-number"><button class="page-link">2</button></li>
            </span><span>
                <li class="page-number"><button class="page-link">3</button></li>
            </span><span>
                <li class="page-number"><button class="page-link">...</button></li>
            </span><span>
                <li class="page-number"><button class="page-link">15</button></li>
            </span><span>
                <li class="page-number"><button class="page-link">16</button></li>
            </span><span>
                <li class="page-number"><button class="page-link">17</button></li>
            </span>
            <li class="page-number previous-next"><button class="page-link">Next</button></li>
        </ul>
    </div>
</template>
<style scoped>
.pagination-box {
    margin-bottom: 20px;
    margin-top: auto;
}

.pagination-ul {
    display: flex;
    align-items: center;

}

/* .page-number:active {
    background: #204080;
    color: #FFFFFF;
} */

.page-number:disabled button {
    background: #e2e2e2;
    color: #484848;
    cursor: default;
}

.page-number button {
    padding: 4px 8px;
    background: #FFFFFF;
    border: 1px solid #484848;
    border-radius: 4px;
    margin: 0 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #484848;
    transition: all 0.3s ease-in-out;
}

.page-number button:hover,
.page-number button:active {
    background: #204080;
    color: #FFFFFF;
    cursor: pointer;
}

.previous-next button {
    width: 85px;
    display: flex;
    justify-content: center;
}
</style>