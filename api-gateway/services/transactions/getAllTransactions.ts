export async function getAllTransactions() {
  try {
    const response = await fetch(
      process.env.MICROSERVICE2_API_ENDPOINT + "/api/v1/transactions"
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
    throw new Error("Failed to fetch products from microservice 2");
  }
}
