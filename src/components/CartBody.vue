<template>
	<div class="cart-body">
		<span>You have {{ products.length }} items in your cart</span>
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