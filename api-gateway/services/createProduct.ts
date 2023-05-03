import { ProductData } from "../interfaces/ProductInterface";

export async function createProduct(productData: ProductData) {
  try {
    const response = await fetch(
      process.env.MICROSERVICE1_API_ENDPOINT + "/api/v1/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Response is not in JSON format");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create product in microservice 1");
  }
}
