<script setup>
defineProps({
  show: Boolean
})
</script>
<template>
  <Transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-100"
    leave-to-class="transition duration-200 opacity-0"
  >
    <div class="model-mask" v-if="show">
      <div class="model-container">
        <header>
          <slot name="header">default header</slot>
        </header>
        <div>
          <slot>default body</slot>
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </Transition>
</template>

<style>
.model-mask {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.model-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal-footer button {
  background-color: #ddd;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #8c8c8c;
}
</style>
