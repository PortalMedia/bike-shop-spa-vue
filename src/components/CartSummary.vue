<template>
	<div class="cart-summary">
		<h2>Cart Summary</h2>
		<div class="cart-container">
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
			<div class="flex-row-between line-item">
				<span>You Saved</span>
				<span>{{'$' + cart.saved }}</span>
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

<style>
.cart-summary {
	margin: 2rem 1rem;
	max-width: 17rem;
}
.cart-container {
	margin: 1rem 0 0 0;
}
.flex-row-between {
	display: flex;
	justify-content: space-between;
}
.divider {
	margin: 0.5rem 0;
	border-top: solid 2px #eee;
}
.line-item:nth-last-of-type(2) {
	color: red;
}
</style>