<script setup lang="ts">
import CartSection from './components/CartSection.vue';
import { Suspense } from 'vue';
</script>

<template>
  <div class="app">
		<header class="header">
			<h1>PortalParts</h1>
      <h2>Cart</h2>
		</header>
    <main class="body">
      <Suspense>
        <cart-section></cart-section>
      </Suspense>
    </main>
	</div>
</template>

<style>
.header {
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.body {
  max-width: 60rem;
  margin: 0 auto;
}
</style>