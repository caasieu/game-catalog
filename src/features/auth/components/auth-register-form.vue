<script setup lang="ts">
import AuthSocialLogin from '@/features/auth/components/auth-social-login.vue';
import AuthInput from './auth-input.vue';
import AuthSubmitButton from './auth-submit-button.vue';
import { useRouter } from 'vue-router';


const router = useRouter()
async function handleSubmit() {
  try {
    // await authStore.login(email, password)

    router.push('/login')
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-2 w-full">
      <div class="flex flex-col gap-2">
        <AuthInput type="email" id="email" placeholder="Introduza seu e-mail" />

        <AuthInput type="password" id="password" placeholder="Introduza sua senha" />
        <AuthInput type="password" id="confirm_password" placeholder="Confirme a sua senha" />
      </div>

      <div class="flex flex-row items-center justify-between">
        <AuthSubmitButton label="Cadastre-se" />

        <div>
          <span> Ou </span>
        </div>

        <AuthSocialLogin />
      </div>
    </div>
  </form>
</template>
