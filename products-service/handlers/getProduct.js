import { products } from "../mocks/products";

export const getProduct = async (event) => {

    const { id: requestedProductId } = event.pathParameters;

    return {
        statusCode: 200,
        body: JSON.stringify(
            products.find(product => product.id === requestedProductId),
            null,
            2
        ),
    };
}