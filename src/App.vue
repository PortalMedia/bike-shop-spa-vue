<template>
	<div class="app">
		<div class="header flex-row-between">
			<span>PortalParts Shopping Cart</span>
		</div>
		<div class="body flex-row-center">
			<cart-body />
			<cart-summary />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CartBody from "./components/CartBody.vue";
import CartSummary from "./components/CartSummary.vue";

const cart = ref<object | null>(null);

onMounted(()=> {
	cart.value = new Object();
});
</script>
