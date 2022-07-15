# PortalParts

> author: Laurence Okite

## IDE Changes

Converted project to TypeScript.
Switched to a vite based setup to take full advantage of Vue types.

## Cart Container

The Cart Container stores the response from our API endpoint as mutable state.
It is stored as an instance of the class Cart, which exposes methods to get and update the state of items in the cart.
Our class instance is saved as a variable 'cart', which serves as a single source of truth for Cart Body and Cart Summary components.
The 'cart' object is sent to these components as props, and is updated by emitting an action from the component. 

## CSS 

Improved Responsivity was achieved by adding a breakpoint at 778px, below which the flex-direction of  the 
'flex-row-*' utility classes switches to the value 'column'.

All other css changes are visible in their respective single-file component.


