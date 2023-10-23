<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const isShow = ref(false);
const formRef = ref<HTMLFormElement | null>(null);
const formDefaultValues = reactive({
    nameSurname: '',
    country: '',
    city: '',
    email: '',
    error: {
        nameSurname: false,
        country: false,
        city: false,
        email: false,
    },
});

const form = reactive(formDefaultValues);

const validateForm = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    const error = form.error;
    switch (name) {
        case 'nameSurname':
            error.nameSurname = value.length < 3;
            break;
        case 'country':
            error.country = value.length < 3;
            break;
        case 'city':
            error.city = value.length < 3;
            break;
        case 'email':
            error.email = value.length < 3 || !/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            break;
        default:
            break;
    }
};

const getDateFormat = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm: any = today.getMonth() + 1;
    let dd: any = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return `${dd}/${mm}/${yyyy}`;
};

const showAddButton = computed(() => {
    return !(
        form.error.nameSurname ||
        form.error.country ||
        form.error.city ||
        form.error.email
    ) && form.nameSurname.length > 2 && form.country.length > 2 && form.city.length > 2 && /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(form.email);
});

const addData = () => {
    if (form.nameSurname.search(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/) === -1) {
        isShow.value = true;

        setTimeout(() => {
            isShow.value = false
        }, 2000);
    } else if (!isShow.value) {
        console.log('Adding data to the console:', form.nameSurname, 'Tesodev', form.email, getDateFormat(), form.country, form.city);
        if (formRef.value) {
            formRef.value.reset();
        }
        Object.assign(form, formDefaultValues);
    }
};

const handleSubmit = () => {
    console.log(form);
    console.log(formDefaultValues);
}
</script>
<template>
    <div class="form-box">
        <form class="add-link-form" @submit.prevent="handleSubmit" ref="formRef">
            <div class="input-box">
                <label for="nameSurname">Name Surname</label>
                <input v-model="form.nameSurname" type="text" name="nameSurname" @input="validateForm"
                    @blur="validateForm" />
                <div class="message">
                    <span class="error" v-if="form.error.nameSurname">Name Surname is required</span>
                </div>
            </div>
            <div class="input-box">
                <label for="country">Country</label>
                <input v-model="form.country" type="text" name="country" @input="validateForm" @blur="validateForm" />
                <div class="message">
                    <span class="error" v-if="form.error.country">Country is required</span>
                </div>
            </div>
            <div class="input-box">
                <label for="city">City</label>
                <input v-model="form.city" type="text" name="city" @input="validateForm" @blur="validateForm" />
                <div class="message">
                    <span class="error" v-if="form.error.city">City is required</span>
                </div>
            </div>
            <div class="input-box">
                <label for="email">Email</label>
                <input v-model="form.email" type="text" name="email" @input="validateForm" @blur="validateForm" />
                <div class="message">
                    <span class="error" v-if="form.error.email">Email is required</span>
                </div>
            </div>
            <div class="btn-box" v-if="showAddButton">
                <button class="add-btn" @click="addData">Add</button>
            </div>
        </form>
        <div class="message-box">
            <div class="message-content" v-if="isShow">
                <button class="close-btn" @click="isShow = false">X</button>
                <div class="error-title">Error while adding link element</div>
                <div class="error">Error</div>
                <div class="error-message">Name and surname should contain at least 2 words</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.form-box {
    display: flex;
    justify-content: center;
}

.add-link-form {
    margin-bottom: 20px;
    width: 590px;
}

.input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.input-box label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #686868;
    margin-bottom: 10px;
    margin-left: 5px;
}

.input-box input {
    height: 44px;
    padding: 0 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    border: 1.5px solid #484848;
    border-radius: 12px;
    outline: #204080;
    transition: all 0.3s ease-in-out;
}

.input-box input::placeholder {
    color: rgba(100, 100, 100, 0.5);
}

.input-box input:hover,
.input-box input:focus {
    outline: #204080;
    border: 1.5px solid #20408090;
    box-shadow: #20408090 0 0 1.5px 2px;
}

.input-box .message {
    height: 21px;
    padding: 5px 10px;
    font-weight: 700;
    font-size: 16px;
    line-height: 21px;
    color: #FF0000;
}

.btn-box {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

.add-btn {
    width: 135px;
    height: 46px;
    background: #204080;
    border-radius: 12px;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    border: none;
    color: #fff;
    transition: all 0.3s ease-in-out;
}

.add-btn:hover {
    background: #4F75C2;
    color: #fff;
}

.message-box {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 375px;
    margin-right: 20px;
    margin-bottom: 30px;
}

.message-content {
    display: flex;
    flex-direction: column;
    background: #C4C4C4;
    border-radius: 8px;
    padding: 5px 10px;
}

.close-btn {
    display: flex;
    align-self: flex-end;
    padding: 5px;
    background: none;
    border: none;
}

.error-title {
    font-weight: 700;
    font-size: 14px;
    line-height: 36px;
    color: #090A0A;
}

.message-box .message-content .error {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    padding: 8px 16px;
    background: rgba(255, 0, 0, 0.7);
    ;
    border-radius: 48px;
    margin-right: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
}

.error-message {
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #090A0A;
    padding-right: 30%;
}
</style>