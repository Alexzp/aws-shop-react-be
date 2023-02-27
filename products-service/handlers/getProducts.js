import { products } from "../mocks/products";

export const getProducts = async () => {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(
            products,
            null,
            2
        ),
    };
}