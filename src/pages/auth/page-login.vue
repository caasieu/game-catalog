<script setup lang="ts">
import AuthLoginForm from '@/features/auth/components/auth-login-form.vue';

</script>

<template>
  <div class="flex flex-col justify-between gap-20 h-full w-full sm:w-[20rem]">
    <div class="flex flex-row justify-between items-center w-full">
      <div>
        <button class="h-[2rem] w-[2rem]">

        </button>
      </div>

      <div class="text-sm">
        <span>
          Ainda não tem uma conta?
          <RouterLink to="/auth/register"><span class="underline text-red-300"> Cadastre-se </span></RouterLink>
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col">
        <h1 class="text-2xl font-semibold"> Iniciar Sessão </h1>
        <span> Acesso à um grande catálogo de jogos. </span>
      </div>

      <AuthLoginForm />
    </div>

    <div></div>
  </div>
</template>
