export async function getProductById(id: string) {
  try {
    const response = await fetch(
      process.env.MICROSERVICE1_API_ENDPOINT + "/api/v1/products/" + id
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
    throw new Error("Failed to fetch products from microservice 1");
  }
}
