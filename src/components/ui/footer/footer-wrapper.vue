<script setup lang="ts">
import AppLogo from '../app-logo.vue';

</script>

<template>
  <footer class="w-full min-h-[10rem] mt-10 pb-5 px-3 sm:px-6 ">
    <div class="flex flex-col gap-3 w-full border-t-1">


      <div class="flex flex-col items-center sm:flex-row sm:justify-between py-5 gap-3">
        <div class="flex flex-col items-center sm:items-start gap-3 w-full sm:w-[50%]">
          <AppLogo />

          <div class="flex flex-row items-center justify-center sm:justify-start text-center sm:text-start">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
              assumenda dolores qui sunt animi vel illum expedita ab consequatur sint cum.
            </span>
          </div>

          <div class="flex flex-row items-center gap-2">
            <RouterLink to="https://x.com/caasieu">
              <div>
                <i class="pi pi-twitter"></i>
              </div>
            </RouterLink>

            <RouterLink to="https://instagram.com/caasieu">
              <div>
                <i class="pi pi-instagram"></i>
              </div>
            </RouterLink>

            <RouterLink to="https://linkedin.com/in/caasieu">
              <div>
                <i class="pi pi-linkedin"></i>
              </div>
            </RouterLink>

            <RouterLink to="https://github.com/caasieu">
              <div>
                <i class="pi pi-github"></i>
              </div>
            </RouterLink>
          </div>
        </div>

        <div class="flex flex-col items-center sm:items-end w-full sm:w-[50%] gap-3">
          <span> Inscreva-se na nossa Newsletter </span>
          <div class="flex flex-row items-center gap-1.5">
            <input type="text" placeholder="E-mail" class="h-[2rem] border-1 p-2" />
            <button class="bg-red-300 h-[2rem] w-[2rem]">
              <i class="pi pi-send"></i>
            </button>
          </div>
        </div>
      </div>



      <div
        class="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 py-5 w-full border-t-1">
        <div>
          <span> @ 2026 Gameya, Todos os direitos reservados. </span>
        </div>

        <div class="flex flex-col sm:flex-row items-center gap-3">
          <span> Políticas de privacidade </span>
          <span> Termos de serviço </span>
          <span> Definições de Cookies </span>
        </div>
      </div>
    </div>
  </footer>
</template>
