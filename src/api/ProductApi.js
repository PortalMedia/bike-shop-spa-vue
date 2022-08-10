// For pairing assessments only. Take-home versions of this test should use the provided
// AWS endpoint.

export default class ProductApi {
	async getCartData() {
		await sleep(250);
		return cartData;
	}
}

const cartData = {
	id: 123,
	deliveryMethod: "Ship",
	shipCost: 15.0,
	products: [
		{
			portalNumber: "71842",
			productName: "Electric Bike 2.0",
			brandName: "Buzz",
			regularPrice: 4000.0,
			qty: 1,
			salePrice: 3500.0,
			imageName: "electricBike.png",
			onSale: true,
		},
		{
			portalNumber: "02043",
			productName: "Helmet",
			brandName: "Noggin",
			regularPrice: 80.0,
			qty: 1,
			salePrice: 60.0,
			imageName: "helmet.png",
			onSale: false,
		},
		{
			portalNumber: "13652",
			productName: "Tire Patch Kit",
			brandName: "No Flats",
			regularPrice: 5.0,
			qty: 3,
			salePrice: 3.0,
			imageName: "patchKit.png",
			onSale: true,
		},
	],
};

function sleep(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}
