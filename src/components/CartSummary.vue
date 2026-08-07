<template>
	<div class="cart-summary">
		<h2>Cart Summary</h2>
		<div :style="{ margin: '15px 15px 60px 15px' }">
			<div class="flex-row-between line-item">
				<span>Subtotal</span>
				<span>{{ subtotal }}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Shipping</span>
				<span>{{ shipCost }}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Tax</span>
				<span>{{ tax }}</span>
			</div>
			<div class="divider"></div>
			<div class="flex-row-between line-item">
				<span>Total</span>
				<span>{{ total }}</span>
			</div>
			<div
				class="flex-row-between line-item"
				:style="{ color: '#b51414' }"
			>
				<span>You Saved</span>
				<span>{{ savings }}</span>
			</div>
		</div>
		<button class="checkout-button">Checkout Now</button>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const subtotal = computed(()=> {
	//TODO
	return 0;
});

const shipCost = computed(()=> {
	//TODO
	return 0;
});

const savings = computed(()=> {
	//TODO
	return 0;
});

const tax = computed(()=> {
	return (subtotal.value * 0.055) //assuming Wisconsin tax rate
});

const total = computed(()=> {
	return subtotal.value + tax.value + shipCost.value;
});
</script>