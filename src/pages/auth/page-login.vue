<script setup lang="ts">
import AuthLoginForm from '@/features/auth/components/auth-login-form.vue';

</script>

<template>
  <div class="flex flex-col justify-between gap-20 h-full w-full sm:w-[20rem] text-xs">
    <div class="flex flex-row justify-between items-center w-full">
      <div>
        <button class="h-[2rem] w-[2rem]">

        </button>
      </div>

      <div class="text-xs">
        <span>
          Ainda não tem uma conta?
          <RouterLink to="/auth/register"><span class="underline text-primary"> Cadastre-se </span></RouterLink>
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col text-xs">
        <h1 class="text-2xl font-semibold"> Iniciar Sessão </h1>
        <span> Acesso à um grande catálogo de jogos. </span>
      </div>

      <AuthLoginForm />
    </div>

    <div></div>
  </div>
</template>
