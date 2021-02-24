<template>
	<div class="cartSummary">
		<h2>Cart Summary</h2>
		<div :style="{ margin: '15px 15px 60px 15px' }">
			<div class="flexRowBetween lineItem">
				<span>Subtotal</span>
				<span>?</span>
			</div>
			<div class="flexRowBetween lineItem">
				<span>Shipping</span>
				<span>?</span>
			</div>
			<div class="flexRowBetween lineItem">
				<span>Tax</span>
				<span>?</span>
			</div>
			<div class="divider"></div>
			<div class="flexRowBetween lineItem">
				<span>Total</span>
				<span>?</span>
			</div>
			<div class="flexRowBetween lineItem" :style="{ color: '#b51414' }">
				<span>You Saved</span>
				<span>?</span>
			</div>
		</div>
		<div class="checkoutButton">
			<span>Checkout Now</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CartSummary'
}
</script>

<style>
</style>