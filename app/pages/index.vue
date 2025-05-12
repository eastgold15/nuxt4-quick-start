<script lang="ts" setup>
const color = useColorMode()

console.warn(color.preference)
</script>

<template>
  <div class="bg-primary text-white">
    首页

    <h1>Color mode: {{ $colorMode.value }}</h1>
    <select v-model="$colorMode.preference">
      <option value="system">
        System
      </option>
      <option value="light">
        Light
      </option>
      <option value="dark">
        Dark
      </option>
      <option value="sepia">
        Sepia
      </option>
    </select>

    <div class="text-primary">
      text-primary
    </div>

    <div class="text-secondary bg-secondary h-100px w-100px">
      text-secondary
    </div>

    <div class="text-very-cool text-primary bg-primary">
      111
    </div>
  </div>
</template>
