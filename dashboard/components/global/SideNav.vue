<template>
  <div
    class="w-100 flex flex-col justify-between items-center bg-white p-3 border-r border-gray-50"
  >
    <!-- sidenav -->
    <!-- top links -->
    <div class="flex my-6 flex-col items-center space-y-5">
      <Logo />
      <NuxtLink to="/">
        <div>
          <HomeIcon
            
            :class="
              $route.path == '/'
                ? 'w-5 h-5  text-pink-500'
                : 'w-5 h-5 text-gray '
            "
          />
        </div>
      </NuxtLink>
      <NuxtLink to="/stats">
        <div>
          <ChartPieIcon
            
            :class="
              $route.path == '/stats'
                ? 'w-5 h-5  text-pink-500'
                : 'w-5 h-5 text-gray '
            "
          />
        </div>
      </NuxtLink>
      <NuxtLink to="/orders">
        <div>
          <ShoppingBagIcon
            :class="
              $route.path == '/orders'
                ? 'w-5 h-5  text-pink-500'
                : 'w-5 h-5 text-gray '
            "
          />
        </div>
      </NuxtLink>
      <NuxtLink to="/catalog">
        <div>
          <FolderIcon
            :class="
              $route.path == '/catalog'
                ? 'w-5 h-5  text-pink-500'
                : 'w-5 h-5 text-gray '
            "
          />
        </div>
      </NuxtLink>
    </div>
    <div class="flex my-6 flex-col items-center space-y-5">
      <NuxtLink to="/settings">
        <div>
          <CogIcon
            :class="
              $route.path == '/settings'
                ? 'w-5 h-5  text-pink-500'
                : 'w-5 h-5 text-gray '
            "
          />
        </div>
      </NuxtLink>
      <button class="bg-pink-500 p-2 rounded-md">
        <LogoutIcon class="text-white h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  HomeIcon,
  CogIcon,
  LogoutIcon,
  ChartPieIcon,
  ShoppingBagIcon,
FolderIcon,
} from "@heroicons/vue/outline";
import Logo from "./Logo.vue";
</script>
