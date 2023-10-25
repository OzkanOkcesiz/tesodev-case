<template>
  <transition name="fade">
    <div class="toastContainer">
      <div class="errors">
        <div class="title">{{ props.title }}</div>
        <div class="message">{{ props.message }}</div>
      </div>
      <div class="tagContainer">
        <div class="tag" :class="props.type">{{ props.type }}</div>
      </div>
      <IconXCircle class="closeIcon" @click="emit('closeIcon')" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IconXCircle from '@/components/icons/IconXCircle.vue';

interface Props {
  type: 'error' | 'success';
  title: string;
  message: string;
}

const emit = defineEmits(['closeIcon']);

const props = withDefaults(defineProps<Props>(), {
  type: 'success',
});

onMounted(() => {
  setTimeout(() => {
    emit('closeIcon');
  }, 3000);
});
</script>

<style scoped>
.toastContainer {
  position: absolute;
  display: flex;
  background: #c4c4c4;
  border-radius: 8px;
  padding: 18px 22px;
  top: 20px;
  right: 20px;
  min-width: 280px;
}

.toastContainer.fade-enter-active,
.toastContainer.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.toastContainer.fade-enter-from,
.toastContainer.fade-leave-to {
  opacity: 0;
}

.toastContainer .errors {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 240px;
}
.toastContainer .errors .title {
  font-family: 'Inter';
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 2.25;
}
.toastContainer .errors .message {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.5rem;
}
.toastContainer .tagContainer {
  display: flex;
  flex-direction: column;
}
.toastContainer .tagContainer .tag {
  display: grid;
  place-items: center;
  border-radius: 48px;
  padding: 0.5rem 1rem;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  color: #fff;
}

.toastContainer .tagContainer .tag.error {
  background: #ff4e78;
}
.toastContainer .tagContainer .tag.success {
  background: #00c48c;
}
.toastContainer .closeIcon {
  width: 20px;
  aspect-ratio: 1;
  position: absolute;
  top: 11px;
  right: 14px;
  cursor: pointer;
}
</style>
