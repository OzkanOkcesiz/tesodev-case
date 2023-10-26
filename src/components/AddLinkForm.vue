<script setup lang="ts">
import Toast from '@/components/Toast.vue';
import Loading from '@/components/Loading.vue';
import { ref, reactive, computed } from 'vue';
import axios from 'axios';
let inputFields = reactive([
  {
    label: 'Name Surname',
    required: true,
    maskRegex: /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/,
    inputProps: { name: 'nameSurname', placeholder: 'Name Surname', value: '' },
  },
  {
    label: 'Country',
    required: true,
    maskRegex: /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/,

    inputProps: { name: 'country', placeholder: 'Country', value: '' },
  },
  {
    label: 'City',
    required: true,
    maskRegex: /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/,

    inputProps: { name: 'city', placeholder: 'City', value: '' },
  },
  {
    label: 'Email',
    required: true,
    inputProps: { name: 'email', placeholder: 'Email', value: '' },
  },
  {
    label: 'WebSite',
    required: true,
    inputProps: { name: 'url', placeholder: 'WebSite', value: '' },
  },
]);

let inputErrors: any = reactive({
  nameSurname: {
    error: false,
    message: '',
  },
  country: {
    error: false,
    message: '',
  },
  city: {
    error: false,
    message: '',
  },
  email: {
    error: false,
    message: '',
  },
  url: {
    error: false,
    message: '',
  },
});

const toast = ref({
  title: '',
  message: '',
  type: '',
});

const loading = ref(false);

const handleSubmit = () => {
  loading.value = true;
  const getData = localStorage.getItem('data');
  const data = getData ? JSON.parse(getData) : [];
  const values = inputFields.reduce((acc: any, field: any) => {
    acc[field.inputProps.name] = field.inputProps.value;
    return acc;
  }, {});
  try {
    axios
      .get(`https://tinyurl.com/api-create.php?url=${values['url']}`)
      .then((res) => {
        console.log(res);

        localStorage.setItem(
          'data',
          JSON.stringify([
            ...data,
            { ...values, id: new Date().getTime, url: res.data },
          ])
        );

        toast.value = {
          title: 'Success',
          message: 'Link added successfully',
          type: 'success',
        };
        resetInputValues();
      });
  } catch (error: any) {
    toast.value = {
      title: 'Error',
      message: error.message || 'Something went wrong',
      type: 'error',
    };
  } finally {
    loading.value = false;
  }
};

const handleCloseToast = () => {
  toast.value = {
    title: '',
    message: '',
    type: '',
  };
};

const handleChangeInput = (e: any, field: any) => {
  const { name, value } = e.target;
  inputValidations(name, value, field);
};

const preventSpace = (e: any, mask?: any) => {
  if (
    (e.keyCode === 32 && e.target.value.trim() === '') ||
    (mask && !mask.test(e.key))
  ) {
    e.preventDefault();
  }
};
const inputValidations = (name: string, value: string, field: any) => {
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  if (name === 'nameSurname') {
    if (field?.required && value.length === 0) {
      inputErrors.nameSurname.error = true;
      inputErrors.nameSurname.message = 'Name and surname is required';
    } else if (value.split(' ').filter((word) => word !== '').length < 2) {
      inputErrors.nameSurname.error = true;
      inputErrors.nameSurname.message =
        'Name and surname should contain at least 2 words';
    } else if (!(value.length >= 4 && value.length <= 60)) {
      inputErrors.nameSurname.error = true;
      inputErrors.nameSurname.message =
        'Name and surname must be between 4 and 60 characters';
    } else {
      inputErrors.nameSurname.error = false;
      inputErrors.nameSurname.message = '';
    }
  } else if (name === 'country') {
    if (field?.required && value.length === 0) {
      inputErrors.country.error = true;
      inputErrors.country.message = 'Country is required';
    } else if (!(value.length >= 2 && value.length <= 40)) {
      inputErrors.country.error = true;
      inputErrors.country.message =
        'Country must be between 4 and 60 characters';
    } else {
      inputErrors.country.error = false;
      inputErrors.country.message = '';
    }
  } else if (name === 'city') {
    if (field?.required && value.length === 0) {
      inputErrors.city.error = true;
      inputErrors.city.message = 'City is required';
    } else if (!(value.length >= 2 && value.length <= 40)) {
      inputErrors.city.error = true;
      inputErrors.city.message = 'City must be between 4 and 60 characters';
    } else {
      inputErrors.city.error = false;
      inputErrors.city.message = '';
    }
  } else if (name === 'email') {
    if (field?.required && value.length === 0) {
      inputErrors.email.error = true;
      inputErrors.email.message = 'Email is required';
    } else if (!emailRegex.test(value)) {
      inputErrors.email.error = true;
      inputErrors.email.message = 'Email is not valid';
    } else {
      inputErrors.email.error = false;
      inputErrors.email.message = '';
    }
  } else if (name === 'url') {
    if (field?.required && value.length === 0) {
      inputErrors.url.error = true;
      inputErrors.url.message = 'WebSite is required';
    } else if (!urlRegex.test(value)) {
      inputErrors.url.error = true;
      inputErrors.url.message = 'WebSite is not valid';
    } else {
      inputErrors.url.error = false;
      inputErrors.url.message = '';
    }
  }
};
const resetInputValues = () => {
  inputFields.forEach((field: any) => {
    field.inputProps.value = '';
  });
};

const submitButtonDisabled = computed(() => {
  if (inputFields.some((field: any) => field.inputProps.value.length === 0)) {
    return true;
  }
  return Object.values(inputErrors).some((field: any) => field.error);
});
</script>

<template>
  <div class="form-box">
    <form class="add-link-form" @submit.prevent="handleSubmit" ref="formRef">
      <div
        v-for="(field, index) in inputFields"
        :key="index"
        class="input-box"
        :class="{ error: inputErrors[field.inputProps.name].error }"
      >
        <label>
          <div>
            <span v-if="field.required" style="color: red">*</span
            >{{ field.label }}
          </div>

          <input
            v-model="field.inputProps.value"
            :name="field.inputProps.name"
            :placeholder="field.inputProps.placeholder"
            @input="(e:any) => handleChangeInput(e,field)"
            @keydown="(e:any) => preventSpace(e, field?.maskRegex)"
          />
        </label>
        <div class="message">
          <span class="error" v-if="inputErrors[field.inputProps.name].error">{{
            inputErrors[field.inputProps.name].message
          }}</span>
        </div>
      </div>
      <div class="btn-box">
        <button
          :disabled="submitButtonDisabled || loading"
          class="add-btn"
          type="submit"
        >
          <Loading v-if="loading" />
          <span v-else> Add</span>
        </button>
      </div>
    </form>

    <Toast
      v-if="Object.values(toast).some((value) => value)"
      :title="toast.title"
      :message="toast.message"
      :type="toast.type"
      @closeIcon="handleCloseToast"
    />
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
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
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

.input-box.error input {
  border: 1.5px solid #ff0000;
  outline: #ff0000;
  box-shadow: #ff0000 0 0 1.5px 2px;
}

.input-box .message {
  height: 21px;
  padding: 5px 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #ff0000;
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
  background: #4f75c2;
  color: #fff;
}

.add-btn:disabled {
  background: #e2e2e2;
  color: #484848;
  cursor: default;
}
</style>
