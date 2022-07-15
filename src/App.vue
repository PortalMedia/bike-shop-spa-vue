<script setup lang="ts">
import CartContainer from './components/CartContainer.vue';
import { Suspense } from 'vue';
</script>

<template>
  <div class="app">
		<header class="header flex-row-between">
			<h1>PortalParts</h1>
			<h2>Cart</h2>
		</header>
    <main class="body flex-row-center">
      <Suspense>
        <cart-container></cart-container>
        <template #fallback>
          <div>Loading... </div>
        </template>
      </Suspense>
    </main>
	</div>
</template>

