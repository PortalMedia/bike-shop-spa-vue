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
export default {
	name: 'App',
	components: {
		CartBody,
		CartSummary,
	}
};
</script>
