<script setup lang="ts">
import AuthRegisterForm from '@/features/auth/components/auth-register-form.vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const handleGoBack = () => router.back();
</script>

<template>
  <div class="flex flex-col justify-between gap-20 h-full w-full sm:w-[20rem] text-xs">
    <div class="flex flex-row justify-between items-center w-full">
      <div class="">
        <button @click="handleGoBack" class="bg-surface border-border border-1 rounded-sm h-[2rem] w-[2rem]">
          <i class="pi pi-chevron-left" style="font-size: 10pt;"></i>
        </button>
      </div>

      <div class="">
        <span>
          Já tem uma conta?
          <RouterLink to="/auth/login"><span class="underline text-primary"> Iniciar Sessão </span></RouterLink>
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
