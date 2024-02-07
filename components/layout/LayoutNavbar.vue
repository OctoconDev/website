<template>
  <header
    class="absolute w-screen top-0 left-0 px-4 py-4 flex justify-center z-999"
  >
    <nav class="border-[1px] rounded-full border-gray-400 overflow-hidden">
      <ul class="flex">
        <li v-for="item in navigation" :key="item.name">
          <NuxtLink
            :to="item.href"
            class="block py-1 font-semibold font-display text-md text-gray-400"
            :class="item.class"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    href: '#',
    class: 'pl-6 pr-3'
  },
  {
    name: 'Docs',
    href: '#',
    class: 'pl-3 pr-3'
  },
  {
    name: 'Discord',
    href: '#',
    class: 'pl-3 pr-6'
  }
]
</script>
