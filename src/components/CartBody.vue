<template>
	<div class="cart-body">
		<h3>You have ? items in your cart</h3>
		<div class="cart-body-content">
			<!-- render cart products here -->
			 <div v-for="item in products">
				
			 </div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	products: {
		type: Object,
		required: true
	}
});
</script>