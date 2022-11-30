export interface Product {
	portalNumber: string,
	productName: string,
	brandName: string,
	regularPrice: number,
	qty: number,
	salePrice: number,
	imageName: string,
	onSale: boolean
}
export interface CartData {
	id: number,
	deliveryMethod: string,
	shipCost: number,
	products: Product[]
}
export class Cart {
	_subtotal: number;
	_tax: number;
	_total: number;
	saved: string;

    totalWithoutSale(): number { 
        return this.cartData.products
		.map(product => product.regularPrice * product.qty)
		.reduce((a,b) => a + b);    
    }

    computeSubtotal(): number {
        return this.cartData.products
        .map(product => product.onSale ? 
                        product.salePrice * product.qty : 
                        product.regularPrice * product.qty
        )
        .reduce((a,b) => a + b)
    }

	constructor(public cartData: CartData) {
		this._subtotal = this.computeSubtotal();
		this._tax = this._subtotal * .055;
		this._total = this._subtotal + this._tax + this.cartData.shipCost
		this.saved = ((this.totalWithoutSale() - this._subtotal) * 1.055).toFixed(2)
	}

    //getters return price as formatted string
	get subtotal() { return this._subtotal.toFixed(2) }
	get tax() { return this._tax.toFixed(2) }
	get total() { return this._total.toFixed(2) }
	get ship() { return this.cartData.shipCost.toFixed(2) }

    updateTotals() {
        this._subtotal = this.computeSubtotal();
		this._tax = this._subtotal * .055;
		this._total = this._subtotal + this._tax + this.cartData.shipCost
		this.saved = ((this.totalWithoutSale() - this._subtotal) * 1.055).toFixed(2)
    }

    incrementQty(portalNumber: string) { 
        this.cartData.products.filter((prod, index, arr) => {
            if (prod.portalNumber === portalNumber) {
                arr[index].qty++
            }
            return prod;
        });
        this.updateTotals();
    }

    decrementQty(portalNumber: string) { 
        this.cartData.products.filter((prod, index, arr) => {
            if (prod.portalNumber === portalNumber) {
                arr[index].qty--
            }
            return prod;
        });
        this.updateTotals();
    }
}