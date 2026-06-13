<script setup lang="ts">

</script>

<template>
  <div>
    <nav>
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/search?search="> Search </RouterLink>
      <RouterLink to="/game/1"> Game </RouterLink>
      <RouterLink to="/auth/login"> Login </RouterLink>
    </nav>
  </div>

  <div>
    <span> my grid </span>
    <div style="grid">

    </div>
  </div>

  <RouterView />
</template>

<style scoped></style>
