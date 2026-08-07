<template>
	<div class="cart-body">
		<h2>You have {{ products.length }} items in your cart</h2>
		<div class="cart-body-content">
			<!-- render cart products here -->
			 <div v-for="item in products">
				<span>{{ item.imageName }}</span>
				<span>{{ item.brandName }}</span>
				<span>{{ item.productName }}</span>
				<span>Quantity: {{ item.qty }}</span>
				<span>{{item.regularPrice}}</span>
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