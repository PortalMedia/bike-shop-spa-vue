<template>
	<div class="cart-body">
		<h2 class="m-20">You have {{ products.length }} items in your cart</h2>
		<div class="cart-body-content">
			<!-- render cart products here -->
			 <div v-for="item in products" class="line-item flex-row-between gap-20 w-100">
				<div class="flex-column-start gap-10 ">
					<div class="flex-row-start gap-20">
						<img :src="imagePath(item.imageName)" class="cart-image" alt="" />
						<div class="flex-column-start gap-10 ">
							<span>{{ item.brandName }}</span>
							<span>{{ item.productName }}</span>
						</div>
					</div>
				</div>
				<div class="flex-column-end gap-10 ">
					<span>Quantity: {{ item.qty }}</span>
					<span>{{getPrice(item)}}</span>
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

function getPrice(item: Product) {
	return (item.qty * (item.onSale ? item.salePrice : item.regularPrice)).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});;
}
</script>

<style lang="css">
.cart-image {
	height: 50px;
}

.gap-10 {
	gap: 10px
}

.gap-20 {
	gap: 20px
}

.w-100 {
	width: 100%;
}

.m-20 {
	margin-bottom: 20px;
	font-weight: bold;
}
</style>