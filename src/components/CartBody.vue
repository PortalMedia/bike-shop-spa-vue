<template>
	<div class="cart-body">
		<h3>You have {{products.length}} items in your cart</h3>
		<div class="cart-body-content">
			<!-- render cart products here -->

			<!-- Product template -->
			<div v-for="(item, index) in products" :key="index">
				<div class="image flex-row-start">
					<img :src="require(`@/assets/${item.imageName}`)" :alt="item.productName" />
					<ul>
						<li>
							<h2>{{item.brandName}} - {{item.productName}}</h2>
						</li>
						<li>
							<button :disabled="item.qty == 0" v-on:click="decrease(index)">-</button>
							<input disabled type="text" :value="item.qty"/>
							<button v-on:click="increase(index)">+</button>
						</li>
						<li v-if="item.onSale && item.qty > 0">
							regular price: <span style="text-decoration: line-through; color: red">${{item.qty * item.regularPrice}}</span>
							<p>sale price: &nbsp;${{item.qty * item.salePrice}}</p>
						</li>
						<li v-else-if="item.qty > 0">
							<span>price: ${{item.qty * item.regularPrice}}</span>
						</li>
					</ul>
				</div>
				<hr v-if="index !== products.length - 1">
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'CartBody',
	computed: {
		...mapState({
			products: state => state.products,
		}),
	},
	methods: {
		increase(index) {
			this.$store.dispatch('increaseQty', index)
		},
		decrease(index) {
			this.$store.dispatch('decreaseQty', index)
		},
	}
}
</script>

<style scoped>
.image img{
	width: 20%;
	padding-right: 2%;
}
</style>