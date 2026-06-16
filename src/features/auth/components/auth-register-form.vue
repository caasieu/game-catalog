<script setup lang="ts">
import AuthSocialLogin from '@/features/auth/components/auth-social-login.vue';

</script>

<template>
  <form>
    <div class="flex flex-col gap-2 w-full">
      <div class="flex flex-col gap-2">
        <div class="border-1">
          <input type="text" id="email" placeholder="E-mail" class="p-2" />
        </div>

        <div class="border-1">
          <input type="password" id="password" placeholder="Senha" class="p-2" />
        </div>

        <div class="border-1">
          <input type="password" id="confirm_password" placeholder="Confirmar senha" class="p-2" />
        </div>
      </div>

      <div class="flex flex-row items-center justify-between">
        <div>
          <button class="border-1 h-[2rem] px-2"> Cadastrar-se </button>
        </div>

        <div>
          <span> Ou </span>
        </div>

        <AuthSocialLogin />
      </div>
    </div>
  </form>
</template>
