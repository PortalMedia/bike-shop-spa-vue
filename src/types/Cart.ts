export type Product = {
    portalNumber: string,
    productName: string,
    brandName: string,
    regularPrice: number,
    qty: number,
    salePrice: number,
    imageName: string,
    onSale: boolean
}

export type CartType = {
    id: number,
    deliveryMethod: string,
    shipCost: number,
    products: Product[]
}