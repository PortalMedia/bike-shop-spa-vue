<template>
	<div class="cart-body">
		<h3>You have {{ cart.cartData.products.length }} items in your cart</h3>

		<div class="cart-body-content">

			<div v-for="item of cart.cartData.products" :key="item.portalNumber" class="cart-item">
				<img :src="'src/assets/' + item.imageName" class="cart-image"/>

				<div class="cart-item-body">
					
					<div class="cart-item-title">
						<h2>
							{{item.brandName}}
						</h2>
						<h1>{{item.productName}}</h1>
					</div>

					<div v-if="item.onSale" class="cart-item-price">
						<span class="on-sale">On Sale!</span> 	
						<div>
							<p class="sale-price">{{'$' + item.salePrice.toFixed(2) }}</p>
							<s>{{'$' + item.regularPrice.toFixed(2) }}</s>
						</div>
					</div>

					<p v-else class="cart-item-price">{{'$' + item.regularPrice.toFixed(2) }}</p>
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
.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
}

.cart-image {
    width: 5rem;
    height: 5rem;
}

.cart-item-body {
    width: 100%;
    padding: 1rem 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.on-sale {
	color: var(--green);

	padding: 1rem;
}

.sale-price {
	color: var(--green);
}

.cart-item-price {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.cart-item-quantity {
    display: flex;
}

.cart-item-quantity input {
    width: 3em;
    height: 2em;
    text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>