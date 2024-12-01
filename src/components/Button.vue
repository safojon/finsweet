<script setup>
import { defineProps } from "vue";
import Shapes from '@/../public/images/header/svg/shapes.svg';
import Icon from '@/../public/images/navbar/Icon.png';
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      name: "button",
    }),
  },
});
</script>

<template>
  <button>
    <span class="shapes">
      <img :src="Shapes" alt="shapes" />
    </span>
    {{ props.data.name }}
    <img :src="Icon" alt="arrow" class="arrow" />
  </button>
</template>

<style scoped>
button {
  padding: 20px 32px;
  background-color: #444cfc;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #444dfcc6;
  }

  .shapes {
    position: relative;

    img {
      position: absolute;
      top: -22px;
      left: -32px;
    }
  }

  .arrow {
    margin-left: 16px;
  }
}
</style>
