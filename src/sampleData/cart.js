let cart = {
	id: 123,
	deliveryMethod: "Ship",
	shipCost: 15.00,
	products: [
		{
			portalNumber: "71842",
			productName: "Electric Bike 2.0",
			brandName: "Buzz",
			regularPrice: 4000.00,
			qty: 1,
			salePrice: 3500.00,
			imageName: "electricBike.png",
			onSale: true
		},
		{
			portalNumber: "02043",
			productName: "Helmet",
			brandName: "Noggin",
			regularPrice: 80.00,
			qty: 1,
			salePrice: 60.00,
			imageName: "helmet.png",
			onSale: false
		},
		{
			portalNumber: "13652",
			productName: "Tire Patch Kit",
			brandName: "No Flats",
			regularPrice: 5.00,
			qty: 3,
			salePrice: 3.00,
			imageName: "patchKit.png",
			onSale: true
		}
	]
}

export default cart;