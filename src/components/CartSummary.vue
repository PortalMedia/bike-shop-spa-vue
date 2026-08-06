<template>
	<div v-if="cart !== null" class="cart-summary">
		<h2>Cart Summary</h2>
		<div :style="{ margin: '15px 15px 60px 15px' }">
			<div class="flex-row-between line-item">
				<span>Subtotal</span>
				<span>{{ toMoney(subtotal) }}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Shipping</span>
				<span>{{ toMoney(cart.shipCost) }}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Tax</span>
				<span>{{ toMoney(tax) }}</span>
			</div>
			<div class="divider"></div>
			<div class="flex-row-between line-item">
				<span>Total</span>
				<span>{{ toMoney(total) }}</span>
			</div>
			<div
				class="flex-row-between line-item"
				:style="{ color: '#b51414' }"
			>
				<span>You Saved</span>
				<span>{{ toMoney(savings) }}</span>
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
	if(props.cart == null){ return 0; }
	var sum = 0;
	props.cart.products.forEach(x => {
		if(x.onSale){
			sum += (x.qty) * x.salePrice;
		} else {
			sum += (x.qty) * x.regularPrice;
		}
	});

	return sum;
});

const savings = computed(()=> {
	if(props.cart == null){ return 0; }
	var sum = 0;
	props.cart.products.forEach(x => {
		if(x.onSale){
			sum += x.qty * (x.regularPrice - x.salePrice);
		}
	});

	return sum;
});


const tax = computed(()=> {
	return (subtotal.value * 0.055)
});

const total = computed(()=> {
	return (subtotal.value + tax.value + (props.cart?.shipCost ?? 0))
});

function toMoney(amount: number): string {
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
}
</script>