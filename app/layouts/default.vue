<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col">
    <ul>
      <li>
        <NuxtLink to="/">
          首页
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          关于
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>
