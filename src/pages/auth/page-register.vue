<script setup lang="ts">
import AuthRegisterForm from '@/features/auth/components/auth-register-form.vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const handleGoBack = () => router.back();
</script>

<template>
  <div class="flex flex-col justify-between gap-20 h-full w-full sm:w-[20rem]">
    <div class="flex flex-row justify-between items-center w-full">
      <div class="border-1 ">
        <button @click="handleGoBack" class="h-[2rem] w-[2rem]">
          <i class="pi pi-chevron-left"></i>
        </button>
      </div>

      <div class="text-sm">
        <span>
          Já tem uma conta?
          <RouterLink to="/auth/login"><span class="underline text-red-300"> Iniciar Sessão </span></RouterLink>
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col">
        <h1 class="text-2xl font-semibold"> Cadastre-se </h1>
        <span> Acesso à um grande catálogo de jogos. </span>
      </div>

      <AuthRegisterForm />
    </div>

    <div></div>
  </div>
</template>
