<template>
	<div class="cart-summary">
		<h2>Cart Summary</h2>
		<div :style="{ margin: '15px 15px 60px 15px' }">
			<div class="flex-row-between line-item">
				<span>Subtotal</span>
				<span>${{subtotal}}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Shipping</span>
				<span>${{shipCost}}</span>
			</div>
			<div class="flex-row-between line-item">
				<span>Tax (5.5%)</span>
				<span>${{Math.round((subtotal * 0.055) * 100) / 100}}</span>
			</div>
			<div class="divider"></div>
			<div class="flex-row-between line-item">
				<span>Total</span>
				<span>${{total()}}</span>
			</div>
			<div class="flex-row-between line-item" :style="{ color: '#b51414' }">
				<span>You Saved</span>
				<span>${{totalRegular - subtotal}}</span>
			</div>
		</div>
		<button class="checkout-button">
			Checkout Now
		</button>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'CartSummary',
	data: () => ({
		saveTotal: 0,
	}),
	/**
	 * map state
	 * calculate cart
	 */
	computed: {
		...mapState({
			shipCost: state => state.shipCost,
			subtotal: state => state.products.reduce((sum, product) => {
				if(product.onSale) {
					return sum + (product.qty * product.salePrice)
				} else {
					return sum + (product.qty * product.regularPrice)
				}
			}, 0),
			totalRegular: state => state.products.reduce((sum, product) => {
					return sum + (product.qty * product.regularPrice)
			}, 0),
		}),
		
	},
	methods: {
		total() {
			return Math.round(((this.subtotal * 1.055) + this.shipCost) * 100) / 100
		}
	}
}
</script>