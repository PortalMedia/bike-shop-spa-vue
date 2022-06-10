<template>
	<div class="app">
		<div class="header flex-row-between">
			<h1>PortalParts</h1>
			<h2>Cart</h2>
		</div>
		<div class="body flex-row-center">
			<cart-body />
			<cart-summary />
		</div>
	</div>
</template>

<script>
import CartBody from './components/CartBody';
import CartSummary from './components/CartSummary';
import axios from 'axios';
export default {
	name: 'App',
	components: {
		CartBody,
		CartSummary,
	},
	/**
	 * Fetch cart info from the api before mount
	 * Mutate store with response values
	 */
	beforeMount() {
		axios.get('https://62rng0wpc5.execute-api.us-east-1.amazonaws.com/cart')
			.then((resp) => {
				console.log(resp.data)
			})
			.catch((err) => {
				console.error(err)
				alert('No response from the api')
			})
	}
};
</script>
