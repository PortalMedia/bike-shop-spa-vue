<template>
	<div class="cart-body">
		<h3>You have {{ products.length }} items in your cart</h3>
		<div class="cart-body-content">
			<!-- render cart products here -->
			 <div v-for="item in products" class="wrapper">
				<img :src="item.imageName" alt="" />
				<div>
					<div>{{ item.brandName }}</div>
					<div>{{ item.productName }}</div>
					<div>Quantity: {{ item.qty }}</div>
					<div>Price: Real Price</div>
				</div>
			 </div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Product } from '../types/Cart';

const props = defineProps<{
	products: Product[]
}>();
</script>

<style lang="css">
.wrapper {
	display: flex;
	flex-direction: column;
	gap: 10px;
	border: 2px solid black;
	border-radius: 8px;
}
</style>