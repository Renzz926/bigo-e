<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive :include="keepAliveNames">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const allRoutes = router.getRoutes();
const keepAliveNames = ref(allRoutes.filter((r) => r.meta?.keepAlive && r.name).map((i) => i.name) as string[]);
</script>
