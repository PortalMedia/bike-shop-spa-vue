<template>
	<div class="cart-summary">
		<h2>Cart Summary</h2>
		<div :style="{ margin: '15px 15px 60px 15px' }">
			<div class="flex-row-between line-item">
				<span>Subtotal</span>
				<span>{{'$' + cart.subtotal}}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Shipping</span>
				<span>{{'$' + cart.ship}}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Tax</span>
				<span>{{'$' + cart.tax}}</span>
			</div>
			<div class="divider"></div>
			<div class="flex-row-between line-item">
				<span>Total</span>
				<span>{{'$' + cart.total}}</span>
			</div>
			<div class="flex-row-between line-item" :style="{ color: '#b51414' }">
				<span>You Saved</span>
				<span>{{ cart.saved }}</span>
			</div>
		</div>
		<button class="checkout-button">
			Checkout Now
		</button>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps(['cart'])
</script>