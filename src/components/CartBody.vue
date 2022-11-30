<template>
	<div class="cart-body">
		<h3>You have {{ cart.cartData.products.length }} items in your cart</h3>

		<div class="cart-body-content">
			<div v-for="item of cart.cartData.products" :key="item.portalNumber" class="cart-item">
				<img :src="'src/assets/' + item.imageName" class="cart-image"/>
				<div class="cart-item-body">
					<div class="cart-item-title">
						<h4>
							{{item.brandName}}
						</h4>
						<h2>{{item.productName}}</h2>
						
						<div v-if="item.onSale" class="cart-item-price">
							<span class="on-sale">SALE</span>
							<div>
								<p class="sale-price">{{'$' + item.salePrice.toFixed(2) }}</p>
							</div>
							<s>{{'$' + item.regularPrice.toFixed(2) }}</s>
						</div>
						<div v-else class="cart-item-price">
							<div class="regular-divider"></div>
							<p>{{'$' + item.regularPrice.toFixed(2) }}</p>
						</div>
					</div>

				</div>

				<div class="cart-item-quantity">
					<button @click="emit('decrementQty', item.portalNumber)"> - </button>
					<input type="number" :value="item.qty" disabled>
					<button @click="emit('incrementQty', item.portalNumber)"> + </button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps(['cart']);
	const emit = defineEmits(['incrementQty', 'decrementQty']);
</script>		

<style>
.cart-body h3 {
	margin-left: 1rem;
}
.cart-body-content {
	--auto-grid-min-size: 18rem;
    display: grid;
	justify-content: space-between;
    grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
    grid-gap: 1rem;
}
.cart-item {
	background-color: #eee;
	border-radius: 0.75rem;
    display: block;
	margin: 0 1rem;
	padding: 1rem;
	position: relative;
}
.cart-image {
	border-radius: 0.25rem;
    width: 100%;
}
.cart-item-body {
    width: 100%;
    padding: 1rem 0 2rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.cart-item-title h4 {
	font-size: 0.9rem;
	margin: 0.25rem 0;
}
.cart-item-title h2 {
	font-size: 1.25rem;
	margin: 0.25rem 0;
}
.cart-item-price {
	margin: 0.5rem 0;
}
.on-sale, .sale-price {
	color: var(--green);
	margin: 0;
}
.cart-item-quantity {
	position: absolute;
	bottom: 1rem;
}
.cart-item-quantity input {
	padding-left: 1rem;
	width: 2rem;
    text-align: center;
}
.cart-item-quantity button {
	color: white;
	background-color: grey;
}
</style>