<template>   
    <cart-body 
        :cart="cart"
        @decrement-qty="decrementQty"
        @increment-qty="incrementQty"
    ></cart-body>
    <cart-summary :cart="cart"></cart-summary>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { api } from '@/api/api'
import { Cart } from '@/api/cart'
import CartBody from './CartBody.vue'
import CartSummary from './CartSummary.vue'
const response = await api.call('/cart');
const cart: Ref<Cart> = ref( new Cart(response))
const decrementQty = (portalNumber: string) => cart.value.decrementQty(portalNumber); 
const incrementQty = (portalNumber: string) => cart.value.incrementQty(portalNumber);
</script>