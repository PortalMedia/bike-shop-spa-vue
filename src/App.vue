<template>
	<div class="app">
		<div class="header flex-row-between">
			<h1>PortalParts</h1>
			<h2>Cart</h2>
		</div>
		<div class="body flex-row-center">
			<cart-body />
			<cart-summary />
		</div>
	</div>
</template>

<script setup>
import CartBody from "./components/CartBody.vue";
import CartSummary from "./components/CartSummary.vue";
</script>
