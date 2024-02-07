<template>
  <div
    class="relative bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen py-24 sm:py-32 md:py-40 flex justify-center"
  >
    <!--    <div class="inset-0 absolute w-screen pointer-events-none">
      <img
        src="/img/noise.svg"
        class="w-full h-full object-cover opacity-[2%]"
      />
    </div>-->
    <div class="container flex flex-col z-99 items-center px-8">
      <NuxtPicture
        src="/img/octocon-logo.png"
        format="avif,webp"
        width="128"
        height="128"
        sizes="256"
        quality="90"
      />
      <h1
        class="font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl pt-4 pb-8 text-gray-200"
      >
        Octocon
      </h1>
      <div
        class="bg-gray-950/50 border border-gray-500 px-8 py-8 rounded-xl max-w-2xl flex flex-col gap-8"
      >
        <p class="lg:text-lg text-gray-400 text-center">
          Octocon is the modern, all-in-one toolkit for people with DID and OSDD
          to manage their disorder and express themselves.
        </p>
        <div class="flex flex-col lg:flex-row justify-center gap-4">
          <NuxtLink
            to="#"
            class="block p-0.5 rounded-lg bg-gradient-to-br from-sky-400 to-violet-400"
          >
            <div
              class="bg-gradient-to-br from-sky-600 text-center to-violet-600 transition-all hover:brightness-110 block text-gray-100 font-semibold font-display text-lg px-4 py-2 rounded-lg"
            >
              Learn more
            </div>
          </NuxtLink>
          <NuxtLink
            to="#"
            class="block p-0.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900"
          >
            <div
              class="border-sky-600 bg-gradient-to-br from-gray-900 text-center to-gray-800 transition-all hover:brightness-110 flex items-center gap-2 text-gray-200 font-medium font-display text-lg px-4 py-2 rounded-lg"
            >
              <UnoIcon class="i-logos-discord-icon?mask text-sky-600" />
              Get involved
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
