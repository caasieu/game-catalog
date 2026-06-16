<script setup lang="ts">
import AuthSocialLogin from '@/features/auth/components/auth-social-login.vue';

</script>

<template>
  <form>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex flex-col gap-2">
        <div class="border-1">
          <input type="text" id="email" placeholder="e-mail" class="p-2" />
        </div>

        <div class="border-1">
          <input type="password" id="password" placeholder="senha" class="p-2" />
        </div>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div>
          <button class="border-1 p-2"> Iniciar sessão </button>
        </div>

        <div>
          <span> Ou </span>
        </div>

        <AuthSocialLogin />
      </div>
    </div>
  </form>
</template>
