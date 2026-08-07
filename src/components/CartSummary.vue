<template>
	<div v-if="cart !== null" class="cart-summary">
		<span>Cart Summary</span>
		<div :style="{ margin: '15px 15px 60px 15px' }">
			<div class="flex-row-between line-item">
				<span>Subtotal</span>
				<span>{{ subtotal }}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Shipping</span>
				<span>{{ cart.shipCost }}</span>
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
		<button @click="$emit('submit')" class="checkout-button">Checkout Now</button>
	</div>
</template>

<script setup lang="ts">
import { CartType } from '../types/Cart';
import { computed } from 'vue';

const props = defineProps<{
	cart: CartType | null
}>();

const subtotal = computed(()=> {
	//TODO
	return 0;
});

const savings = computed(()=> {
	//TODO
	return 0;
});


const tax = computed(()=> {
	return (subtotal.value * 0.055)
});

const total = computed(()=> {
	return (subtotal.value + tax.value + (props.cart?.shipCost ?? 0))
});
</script>