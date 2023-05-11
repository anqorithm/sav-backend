import { TransactionData } from "../../interfaces/TransactionInterface";

export async function createTransaction(transactionData: TransactionData) {
  try {
    const response = await fetch(
      process.env.MICROSERVICE2_API_ENDPOINT + "/api/v1/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
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
    throw new Error("Failed to create Transaction in microservice 1");
  }
}
