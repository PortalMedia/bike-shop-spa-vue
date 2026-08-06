<template>
	<div class="app">
		<div class="header flex-row-between">
			<h1>PortalParts</h1>
			<h2>Cart</h2>
		</div>
		<div class="body flex-row-center">
			<cart-body />
			<cart-summary @submit="submitCheckout()" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import CartBody from "./components/CartBody.vue";
import CartSummary from "./components/CartSummary.vue";

onMounted(async ()=> {
	const cart =  new Object();
});

function submitCheckout() {
	//TODO submit order <-- (Hint: not part of this exercise!)
}
</script>
