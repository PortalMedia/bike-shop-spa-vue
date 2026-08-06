<template>
	<div class="cart-body">
		<h3>You have {{ products.length }} items in your cart</h3>
		<div class="cart-body-content">
			<!-- render cart products here -->
			 <div v-for="item in products" class="line-item">
				<img :src="imagePath(item.imageName)" class="cart-image" alt="" />
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

function imagePath(imageName: string) {
	return `src/assets/${ imageName }`
}
</script>

<style lang="css">
.cart-image {
	height: 50px;
}
</style>