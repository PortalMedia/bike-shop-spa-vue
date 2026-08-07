<template>
	<div class="app">
		<div class="header flex-row-between">
			<span>PortalParts Shopping Cart</span>
		</div>
		<div class="body flex-row-center">
			<cart-body :products="cart?.products ?? []"/>
			<cart-summary :cart="cart" @submit="submitCheckout()" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CartBody from "./components/CartBody.vue";
import CartSummary from "./components/CartSummary.vue";
import { Product, CartType } from "./types/Cart.ts";

const cart = ref<CartType | null>(null);

onMounted(async ()=> {
	const response = await fetch("https://62rng0wpc5.execute-api.us-east-1.amazonaws.com/cart");
	if(response.status == 200) {
		const cartRes: CartType = await response.json() as CartType;
		cart.value = cartRes;
	}
});

function submitCheckout() {
	//TODO submit order <-- (Hint: not part of this exercise!)
}
</script>
