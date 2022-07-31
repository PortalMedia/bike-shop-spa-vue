<template>
	<div class="cart-summary">
		<h2>Cart Summary</h2>
		<div :style="{ margin: '15px 15px 60px 15px' }">
			<div class="flex-row-between line-item">
				<span>Subtotal</span>
				<span>?</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Shipping</span>
				<span>?</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Tax</span>
				<span>?</span>
			</div>
			<div class="divider"></div>
			<div class="flex-row-between line-item">
				<span>Total</span>
				<span>?</span>
			</div>
			<div
				class="flex-row-between line-item"
				:style="{ color: '#b51414' }"
			>
				<span>You Saved</span>
				<span>?</span>
			</div>
		</div>
		<button class="checkout-button">Checkout Now</button>
	</div>
</template>
