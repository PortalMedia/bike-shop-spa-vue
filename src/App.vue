<template>
	<div class="app">
		<div class="header flex-row-between">
			<h1>PortalParts Shopping Cart</h1>
		</div>
		<div class="body flex-row-center">
			<cart-body :products="cart.products" />
			<cart-summary />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CartBody from "./components/CartBody.vue";
import CartSummary from "./components/CartSummary.vue";

const cart = ref<any | null>(null);

onMounted(()=> {
	cart.value = new Object(); //TODO
});
</script>
