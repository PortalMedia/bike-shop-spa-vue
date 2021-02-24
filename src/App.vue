<template>
	<div className="app">
		<div className="header flexRowBetween">
			<h2>PortalParts</h2>
			<h2>Cart</h2>
		</div>
		<div className="body flexRowCenter">
			<cart-body />
			<cart-summary />
		</div>
	</div>
</template>

<script>
import CartBody from './components/CartBody';
import CartSummary from './components/CartSummary';
export default {
	name: 'App',
	components: {
		CartBody,
		CartSummary,
	},
};
</script>
