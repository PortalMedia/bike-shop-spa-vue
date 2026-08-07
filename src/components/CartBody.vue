<template>
	<div class="cart-body">
		<h2>You have {{ products.length }} items in your cart</h2>
		<div class="cart-body-content">
			<!-- render cart products here -->
			 <div v-for="item in products">
				<img :src="imagePath(item.imageName)" class="cart-image" alt="" />
				<span>{{ item.brandName }}</span>
				<span>{{ item.productName }}</span>
				<span>Quantity: {{ item.qty }}</span>
				<span>{{getPrice(item)}}</span>
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

function getPrice(item: Product) {
	return (item.qty * (item.onSale ? item.salePrice : item.regularPrice)).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});;
}
</script>